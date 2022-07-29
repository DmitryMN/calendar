import { Form, Input, DatePicker, Button, Row, Select } from 'antd';
import React, { useState, ChangeEvent } from 'react';
import { IUser } from '../models/IUser';
import { rules } from '../utils/rules';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/formatDate';

type EventFormPropsType = {
    guests: IUser[]
}

const EventForm: React.FC<EventFormPropsType> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: '',
    });

    const selectHandler = (guest: string) => {
        setEvent({ ...event, guest });
    }

    const descriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEvent({...event, description: e.target.value});
    }

    const selectDate = (date: Moment | null) => {
        if(date) {
            console.log(formatDate(date?.toDate()));
        }
    }

    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="discription"
                rules={[rules.required()]}>
                <Input value={event.description} onChange={descriptionHandler}/>
            </Form.Item>
            <Form.Item
                label="Дата"
                name="date"
                rules={[rules.required("выберите дату")]}>
                <DatePicker onChange={selectDate}/>
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}>
                <Select style={{ width: 120 }} onChange={selectHandler}>
                    {props.guests.map(guest => <Select.Option key={guest.username} value={guest.username}>{guest.username}</Select.Option>)}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">создать</Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm;   