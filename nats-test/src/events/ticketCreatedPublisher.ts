import { Publisher } from "./basePublisher";
import { TicketCreatedEvent } from "./ticketCreatedEvent";
import { Subjects } from "./subjects";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
