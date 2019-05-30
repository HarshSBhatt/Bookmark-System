import React from 'react'
import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom'
import DeleteList from './DeleteList';

function MenuItem({ data: { path, name } }) {
    return (
        <Link className='MenuLink' to={path}>
            <Icon type="star" />
            <span>{name}</span>
            <span className='Delete'><DeleteList name={name} /></span>
        </Link>
    )
}

export function MenuContent({ submenu, ...props }) {
    const menuContent = submenu.map((data, index) => <Menu.Item key={index}><MenuItem data={data} /></Menu.Item>)
    return (
        <div className='MyMenu' >
            <Menu mode='inline' theme='light' >
                {menuContent}
            </Menu>
        </div >
    )
}
