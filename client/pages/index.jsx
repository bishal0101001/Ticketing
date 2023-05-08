import Link from "next/link";

const LandingPage = ({ currentUser, data }) => {
  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.tickets.map((ticket) => {
              return (
                <tr key={ticket.id}>
                  <td>{ticket.title}</td>
                  <td>{ticket.price}</td>
                  <td>
                    <Link
                      href="/tickets/[ticketId]"
                      as={`/tickets/${ticket.id}`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");
  return {
    data,
  };
};

//http://ingress-nginx-controller.ingress-nginx.svc.cluster.local

export default LandingPage;
