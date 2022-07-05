import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import { Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const handler = () => {
        navigate(RouteNames.EVENT, {replace: true});
    }

    return (
        <Header>
            <Row justify="end">
                <Menu mode="vertical" theme="dark" selectable={false}>
                    <Menu.Item key="login" onClick={handler}>login</Menu.Item>
                </Menu>
            </Row>
        </Header>
    )
}

export default Navbar;