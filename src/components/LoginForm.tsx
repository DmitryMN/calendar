import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { rules } from '../utils/rules';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { authActionCreators } from '../store/reducers/auth/action-creators';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: React.FC = () => {

    const { error, isLoading } = useTypedSelector(state => state.isAuth);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch<AppDispatch>();

    const submit = () => {
        dispatch(authActionCreators.login(username, password));
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 10, }}
            onFinish={submit}>
            {error && <div style={{ color: 'red' }}>
                {error}
            </div>
            }
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста введите имя пользователя!')]}>
                <Input value={username} onChange={(e) => {setUserName(e.target.value)}}/>
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста введите пароль!')]}>
                <Input.Password value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 14, }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>Войти</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;