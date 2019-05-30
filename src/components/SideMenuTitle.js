import React from 'react'
import { AddList } from './AddList';
import { ListSetting } from './ListSetting';

function SideMenuTitle(props) {
    return (
        <div className='flex-container'>
            <div>{props.title}</div>
            <div>
                <AddList listName={props.title} classIs='Add' />
                {props.title !== 'My List' ? <ListSetting listName={props.title} /> : null}
            </div>
        </div>
    )
}
export default SideMenuTitle