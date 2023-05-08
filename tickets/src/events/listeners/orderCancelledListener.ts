import { Listener, OrderCancelledEvent, Subjects } from "@bishal69/common";
import { queueGroupName } from "./queueGroupName";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticketUpdatedPublisher";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    const ticket = await Ticket.findById(data.ticket.id);

    if (!ticket) {
      throw new Error("Ticker not found");
    }

    ticket.set({ orderId: undefined });
    await ticket.save();

    new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      orderId: ticket.orderId,
      userId: ticket.userId,
      price: ticket.price,
      title: ticket.title,
      version: ticket.version,
    });

    msg.ack();
  }
}
