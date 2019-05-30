import React, { useState } from 'react'
import { Icon, Drawer, Affix } from 'antd';
import 'F:/project/node_modules/font-awesome/css/font-awesome.min.css';
import DashHeader from './DashHeader';
import { MyMenu } from './MyMenu';

export function DrawerC(props) {
    const [state, setState] = useState({ visible: false })
    const onClose = () => {
        setState({
            visible: false
        })

    }
    const showDrawer = () => {
        setState({
            visible: true
        })
    }
    return (
        <div>
            <Affix offsetTop={100}>
                <div onClick={showDrawer} className='DrawerDiv'>
                    <Icon type="menu" />
                </div>
            </Affix>
            <Drawer
                title={<DashHeader />}
                placement='left'
                visible={state.visible}
                closable={false}
                onClose={onClose}
                width={props.width * 0.8}
            >
                {/* <DashHeader /> */}
                <MyMenu classIs='MyDrawer' />
            </Drawer >
        </div>
    )
}
