import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { authActionCreators } from '../store/reducers/auth/action-creators';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { isAuth } = useTypedSelector(state => state.isAuth);

    const dispatch = useDispatch<AppDispatch>();

    const handlerLogin = () => {
        navigate(RouteNames.EVENT, { replace: true });
    }

    const handlerLogOut = () => {
        dispatch(authActionCreators.logout());
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