import React, { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/useRequest";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className="form-group my-1">
        <label>Email Address</label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group my-1">
        <label>Password</label>
        <input
          type="password"
          className="form-control test"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors}
      <button className="btn btn-primary my-1" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default signup;
