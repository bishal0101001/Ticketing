import { Publisher, Subjects, TicketCreatedEvent } from "@bishal69/common";

export class TickerCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
