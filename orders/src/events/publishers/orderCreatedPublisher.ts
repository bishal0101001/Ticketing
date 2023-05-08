import { Publisher, OrderCreatedEvent, Subjects } from "@bishal69/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
