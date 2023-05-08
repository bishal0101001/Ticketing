import { Message } from "node-nats-streaming";
import { Listener } from "./baseListener";
import { Subjects } from "./subjects";
import { TicketCreatedEvent } from "./ticketCreatedEvent";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data!", data);

    msg.ack();
  }
}
