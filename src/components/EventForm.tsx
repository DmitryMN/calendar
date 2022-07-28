import { Form, Input } from 'antd'
import React from 'react'
import { rules } from '../utils/rules'

const EventForm: React.FC = () => {
    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="discription"
                rules={[rules.required()]}>
                <Input />
            </Form.Item>
        </Form>
    )
}

export default EventForm;