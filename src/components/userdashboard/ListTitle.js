import React, { useState } from 'react'
import ListContent from './ListContent';
import { Icon, Checkbox, Dropdown, Button, Menu, Empty } from 'antd';
import { MenuItemData } from '../pages'
import MenuItem from 'antd/lib/menu/MenuItem';
import ShareButton from './ShareButton';
const datas = MenuItemData

const listName = (props) => (
    // <React.Fragment>
    <Menu className='MoveList'>
        {
            datas.routes.map((data, index) => (
                props.title !== data.title
                    ?
                    <MenuItem key={index}>{data.title}</MenuItem>
                    :
                    null
            ))
        }

        <Checkbox className='AllowPermission'>Allow Team to modify list</Checkbox>
    </Menu >

)

function CustomDropdown(props) {
    return (
        <Dropdown size={80} overlay={() => listName(props)} trigger={['click']}>
            <Button>
                Move to <Icon type="down" />
            </Button>
        </Dropdown >
    )
}

function ListName(props) {
    const [state, setState] = useState({ checked: false })
    const onChange = (e) => {
        setState({ checked: e.target.checked })

    }
    return (
        <div className='ListName'>
            <div className='LeftItem'>
                <span><Icon className='Star' type='star' /></span>
                <span>{props.name}</span>
            </div>
            <div className='RightItem'>
                {state.checked === true ? <ShareButton title={props.title} name={props.name} /> : null}
                <span>
                    <Checkbox
                        checked={state.checked}
                        onChange={onChange}
                    />
                </span>
                Public
                <span><CustomDropdown title={props.title} /></span>
            </div>
        </div>
    )
}
const ListTitle = ({ submenu, ...props }) => {
    return (
        <div>
            {
                submenu ?
                    submenu.map((data, index) => (
                        <div key={index}>
                            <ListName className='ListName' title={props.title} name={data.name} />
                            <ListContent  {...data} />
                        </div>
                    )) :
                    <Empty></Empty>
            }
        </div>
    )
}

export default ListTitle
