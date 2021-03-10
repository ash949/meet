// src/EventList.js

import React, { Component } from 'react';
import Event from './Event'; // in src/EventList.js

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map(event =>
          <li key={event.id} style={{ border: "1px solid blue", margin: "5px", listStyle: "none" }}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;
