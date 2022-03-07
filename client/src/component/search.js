import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row">
          <h4> Search Players </h4>
          <div className="form">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="search by username or email"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="list-group"></ul>
            <button className="m-3 btn btn-sm btn-danger">Remove All</button>
          </div>
        </div>
      </div>
    );
  }
}
