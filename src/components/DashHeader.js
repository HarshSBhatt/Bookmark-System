import React, { useState } from 'react'
import { Avatar, Popover, Button } from 'antd'
import 'F:/project/node_modules/font-awesome/css/font-awesome.min.css';
import { CreateTeam } from './CreateTeam';
import { NavLink } from 'react-router-dom'

function DashHeader() {
    const [state, setState] = useState({ visible: false })

    const hide = () => {
        setState({
            visible: false,
        });
    };
    const currentPath = window.location.pathname
    const content = (
        <div>
            <Button type='link'>My Profile</Button>
            <NavLink to={currentPath} onClick={hide}><CreateTeam type='link' /></NavLink>
            <Button type='link'>Sign Out</Button>
        </div >
    )
    const handleVisibleChange = visible => {
        setState({ visible });
    };

    return (
        <div className='Title'>
            <div className='Left'>
                <span>Linked List</span>
            </div>
            <div className='Right'>
                <span><Avatar icon='user' size={40} /></span>
                <span>
                    <Popover
                        // overlayStyle={{ width: "12vw" }}
                        placement='bottomRight'
                        content={content}
                        trigger='click'
                        visible={state.visible}
                        onVisibleChange={handleVisibleChange}
                    >
                        <i className="fa fa-angle-down hb"></i>
                    </Popover>
                </span>
            </div>
        </div>
    )
}

export default DashHeader
