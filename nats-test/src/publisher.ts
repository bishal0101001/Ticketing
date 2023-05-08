import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticketCreatedPublisher";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "nats://nats:4222",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: "123",
      title: "concert",
      price: 20,
    });
  } catch (error) {
    console.log(error);
  }

  // const data = JSON.stringify({
  //   id: "22",
  //   title: "concert",
  //   price: 20,
  // });

  // stan.publish("ticket:created", data, () => {
  //   console.log("Event published");
  // });
});
