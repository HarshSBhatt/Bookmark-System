import React, { useState } from 'react'
import { ManageTeam } from "./ManageTeam";
import { Popover, Icon, Button } from "antd";
import { NavLink } from 'react-router-dom'
export const ListSetting = (props) => {

    const [state, setState] = useState({ visible: false })

    const hide = () => {
        setState({
            visible: false,
        });
    };
    const currentPath = window.location.pathname
    const settingContent = (
        <div>
            <NavLink to={currentPath} onClick={hide}><ManageTeam TeamName={props.listName} /></NavLink>
            <Button type='link'>Delete List</Button>
        </div >
    )
    const handleVisibleChange = visible => {
        setState({ visible });
    };
    // console.log(props.listName + ' Harsh')
    return (
        <Popover
            placement='bottomRight'
            content={settingContent}
            trigger='click'
            visible={state.visible}
            onVisibleChange={handleVisibleChange}
        >
            <Icon type="setting" className='Setting' />
        </Popover>
    )
}