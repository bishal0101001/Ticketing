import { Listener, OrderCreatedEvent } from "@bishal69/common";
import { Subjects } from "@bishal69/common/build/events/subjects";
import { queueGroupName } from "./queueGroupName";
import { Message } from "node-nats-streaming";
import { expirationQueue } from "../../queues/expirationQueue";

export class orderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
    console.log(`Waiting ${delay} milliseconds to process the job`);
    await expirationQueue.add(
      {
        orderId: data.id,
      },
      {
        delay,
      }
    );

    msg.ack();
  }
}
