import React from 'react'
import { Popover, Icon } from 'antd';

const content = (
    <div className='popOnClick'>
        <p>Manage Team</p>
        <p>Delete List</p>
    </div>
)
export default function PopOnClick() {
    return (
        <React.Fragment>
            <Popover placement='bottomRight' content={content} trigger='click'>
                <Icon className='More' type="more" />
            </Popover>
        </React.Fragment>
    )
}

// export default PopOnClick