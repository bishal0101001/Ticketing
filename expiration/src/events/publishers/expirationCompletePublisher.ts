import { ExpirationCompleteEvent, Publisher, Subjects } from "@bishal69/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
