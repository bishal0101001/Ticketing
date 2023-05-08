import { Publisher, Subjects, TicketUpdatedEvent } from "@bishal69/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
