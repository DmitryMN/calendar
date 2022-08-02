import React from 'react';
import { Badge, BadgeProps, Calendar, Divider } from 'antd';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/formatDate';

type EventCalendarProps = {
  events: Array<IEvent>
}

const EventCalendar: React.FC<EventCalendarProps> = (props) => {

  const dateCellRender = (value: Moment) => {
    const formatedDay = formatDate(value.toDate());
    const currentDayEvents = props.events.filter((date => date.date === formatedDay));
    return (
      <div>
        { currentDayEvents.map((event, index) => <div key={index} style={{color: 'blue'}}>{event.description}</div>)}
      </div>
    );
  };


  return (
    <Calendar dateCellRender={dateCellRender} />
  )
}

export default EventCalendar;

