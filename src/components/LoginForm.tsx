import React from 'react';
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { authActionCreators } from '../store/reducers/auth/action-creators';

const LoginForm: React.FC = () => {
    
    const dispatch = useDispatch<AppDispatch>();

    const submit = () => {
        dispatch(authActionCreators.login("s", "s"));
        console.log("ss");
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 10, }}
            onFinish={submit}>   
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