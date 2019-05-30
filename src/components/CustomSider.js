import React from 'react'
import { Layout } from 'antd';
import 'F:/project/node_modules/font-awesome/css/font-awesome.min.css';
import DashHeader from './DashHeader';
import { MyMenu } from './MyMenu';

const { Sider } = Layout;

export default function CustomSider1() {
    return (
        <Sider
            className='AutoHide'
            theme='light'
            width={350}
        >
            <DashHeader />
            <MyMenu />
        </Sider>
    )
}