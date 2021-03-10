// src/Event.js

import React, { Component } from "react";

class Event extends Component {
  render() {
    const { event } = this.props;

    return (
      <div>
        <div>{event.summary}</div>
        <div>{event.location}</div>
      </div>
    );
  }
}
export default Event;
