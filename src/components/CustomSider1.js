import React from 'react'
import { Layout } from 'antd';
import 'F:/project/node_modules/font-awesome/css/font-awesome.min.css';
import { MenuItemData } from './pages'
import { CreateTeam } from './CreateTeam';
import MenuTitle from './MenuTitle';
import { MenuContent } from './MenuContent';
import DashHeader from './DashHeader';
const { Sider } = Layout;
const datas = MenuItemData

export default function CustomSider() {
    return (
        <React.Fragment>

            <div className='SideBar'>
                {/* <DashHeader /> */}
                <Sider
                    // breakpoint='lg'
                    collapsedwidth='0'
                    className='AutoHide'
                    theme='light'
                    width={320}
                >
                    <DashHeader />
                    {
                        datas.routes.map((data) => (
                            <React.Fragment key={data.id}>
                                <MenuTitle title={data.title} />
                                <MenuContent {...data} />
                            </React.Fragment>
                        ))
                    }
                    <hr />
                    <CreateTeam />
                </Sider>
            </div>
        </React.Fragment>
    )
}

