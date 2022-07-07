import React from 'react';
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';


const LoginForm: React.FC = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 10, }}>   
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста введите имя пользователя!')]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста введите пароль!')]}>
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 14, }}>
                <Button type="primary" htmlType="submit">Войти</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;