import React, { Component } from "react";

export default class Edit extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex justify-content-center">
          <form action="/">
            <h4>Edit Players</h4>
            <div className="form-group mt-3">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" id="email" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="experience">password</label>
              <input type="password" className="form-control" id="experience" />
            </div>
            <button className="btn btn-danger mt-3">Delete</button>
            <button type="submit" className="btn btn-info mt-3">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
