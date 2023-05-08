import { Subjects, Publisher, OrderCancelledEvent } from "@bishal69/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
