import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { isAuth, user } = useTypedSelector(state => state.isAuth);
    const {logout} = useActions();

    const handlerLogin = () => {
        navigate(RouteNames.EVENT, { replace: true });
    }

    const handlerLogOut = () => {
        logout();
    }

    return (
        <Header>
            <Row justify="end">
                {
                    isAuth
                        ?
                        <>
                            <div style={{ color: "white" }}>{user.username}</div>
                            <Menu mode="horizontal" theme="dark" selectable={false}>
                                <Menu.Item key="login" onClick={handlerLogOut}>Выйти</Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu mode="vertical" theme="dark" selectable={false}>
                            <Menu.Item key="login" onClick={handlerLogin}>Логин</Menu.Item>
                        </Menu>
                }
            </Row>
        </Header>
    )
}

export default Navbar;