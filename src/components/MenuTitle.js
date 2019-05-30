import React from 'react'
import { Avatar } from 'antd';
import { AddList } from './AddList';
import { ListSetting } from './ListSetting'
const MenuTitle = (props) => {
    return (
        <React.Fragment>
            <hr />
            <div className='MenuListName'>
                <div className='LeftMenuItem'>
                    <span><Avatar icon='user' size={35} /></span>
                    <span>{props.title}</span>
                </div>
                <div className='RightMenuItem'>
                    <span className='AddButtonSpan'><AddList listName={props.title} classIs='Add' /></span>
                    <span className='Setting'>
                        {
                            props.title !== 'My List' ? <ListSetting listName={props.title} /> : null
                        }
                    </span>
                </div>
            </div>
            <hr />
        </React.Fragment>
    )
}

export default MenuTitle

