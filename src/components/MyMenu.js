import React from 'react'
import { Menu, Icon } from 'antd';

import 'F:/project/node_modules/font-awesome/css/font-awesome.min.css';
import { MenuItemData } from './pages'
import SideMenuTitle from './SideMenuTitle';
import { Link } from 'react-router-dom'
import { CreateTeam } from './CreateTeam';
import DeleteList from './DeleteList';
const datas = MenuItemData
const SubMenu = Menu.SubMenu;

export const MyMenu = (props) => {
    return (
        <>
            <Menu className={props.classIs} theme="light" mode="inline">
                {
                    datas.routes.map((data, index) => (
                        <SubMenu key={index} title={<SideMenuTitle {...data} />}>
                            {
                                data.submenu ?
                                    data.submenu.map((content) => (
                                        <Menu.Item className='flex-container' key={content.key}>
                                            <div>
                                                <Icon type="star" />
                                                <Link to={content.path}>
                                                    {
                                                        content.name.length < 30 ?
                                                            content.name
                                                            :
                                                            `${content.name.slice(0, 30)}....`
                                                    }
                                                </Link>
                                            </div>
                                            <div className='isVisible'>
                                                <DeleteList name={content.name} />
                                            </div>
                                        </Menu.Item>
                                    )) : null
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
            <div className='flex'>
                <CreateTeam />
            </div>
        </>
    )
}