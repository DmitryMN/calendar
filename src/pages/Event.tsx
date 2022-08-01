import React, { useState, useEffect } from 'react';
import EventCalendar from '../components/EventCalendar';
import { Button, Modal, Row } from 'antd';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';



export const Event: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const {fetchUsers} = useActions();
  const {guests} = useTypedSelector(state => state.event);

  useEffect(() => {
    fetchUsers();
  }, []);

  const openCloseModal = (value: boolean) => {
    setIsModalVisible(value);
  }

  return (
    <div>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => {setIsModalVisible(true)}}>Добавить событие</Button>
      </Row>
      <Modal title="Добавить событие" visible={isModalVisible} footer={null} onCancel={() => {setIsModalVisible(false)}}>
        <EventForm guests={guests} submit={() => {}}/>
      </Modal>
    </div>
  )
}
