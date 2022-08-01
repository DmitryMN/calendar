import React, { useState, useEffect } from 'react';
import EventCalendar from '../components/EventCalendar';
import { Button, Layout, Modal, Row } from 'antd';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';



export const Event: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { fetchUsers, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(state => state.event);

  useEffect(() => {
    fetchUsers();
  }, []);

  const openCloseModal = (value: boolean) => {
    setIsModalVisible(value);
  }

  const callBackSubmit = (event: IEvent) => {
    setIsModalVisible(false);
    createEvent(event);
  }

  return (
    <Layout>
      {JSON.stringify(events)}
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => { setIsModalVisible(true) }}>Добавить событие</Button>
      </Row>
      <Modal title="Добавить событие" visible={isModalVisible} footer={null} onCancel={() => { setIsModalVisible(false) }}>
        <EventForm guests={guests} submit={callBackSubmit} />
      </Modal>
    </Layout>
  )
}
