import React from 'react'
import { Avatar } from 'antd';

const Heading = (props) => {
    return (
        <div className='Heading'>
            <span><Avatar icon='user' size={35} /></span>
            <span>{props.title}</span>
        </div>
    )
}

export default Heading
