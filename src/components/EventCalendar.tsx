import React from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';

type EventCalendarProps = {
  events: Array<IEvent>
}

const EventCalendar: React.FC<EventCalendarProps> = () => {
  return (
    <Calendar/>
  )
}

export default EventCalendar;

