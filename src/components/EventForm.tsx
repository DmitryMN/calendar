import { Form, Input, DatePicker, Button, Row, Select } from 'antd'
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
            <Form.Item
                label="Дата"
                name="date"
                rules={[rules.required("выберите дату")]}>
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Select style={{width: 120}}>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="disabled">Disabled</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
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