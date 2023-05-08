import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import { useRouter } from "next/router";

const NewTicket = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title,
      price,
    },
    onSuccess: () => router.push("/"),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onBlur={onBlur}
          />
        </div>
        <button className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  );
};

export default NewTicket;
