import React, { useState } from "react";

export default function Registrasi() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const posts = [
    {
      id: "1",
      username: "baskara",
      email: "baskara@gmail.com",
      password: "hindia",
    },
  ];
  const id = posts[posts.length - 1].id + 1;

  const post = {
    id,
    username,
    email,
    password,
  };

  const submit = (e) => {
    posts.push(post);
  };

  console.log(posts);
  return (
    <div className="container d-flex justify-content-center">
      <div class="row">
        <div class="col-sm">
          <form onClick={submit()} action="/">
            <h4>Form Register</h4>
            <div>
              <div className="form-group mt-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
