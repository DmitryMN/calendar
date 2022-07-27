import React, { useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import { Button, Modal, Row } from 'antd';


export const Event: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
