import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { isAuth } = useTypedSelector(state => state.isAuth);

    const handler = () => {
        navigate(RouteNames.EVENT, { replace: true });
    }

    return (
        <Header>
            <Row justify="end">
                {
                    isAuth
                        ?
                        <>
                            <div style={{ color: "white" }}>M DM</div>
                            <Menu mode="horizontal" theme="dark" selectable={false}>
                                <Menu.Item key="login" onClick={() => { console.log("out") }}>Выйти</Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu mode="vertical" theme="dark" selectable={false}>
                            <Menu.Item key="login" onClick={handler}>Логин</Menu.Item>
                        </Menu>
                }
            </Row>
        </Header>
    )
}

export default Navbar;