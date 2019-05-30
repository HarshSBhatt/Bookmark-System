import React, { useState } from 'react'
import { Popover, Icon } from 'antd'
import PublicSharableLink from './PublicSharableLink';
function ShareButton(props) {
    const [state, setState] = useState({ visible: false })
    console.log(props.name)
    const handleVisibleChange = visible => {
        setState({ visible })
    }
    const name = props.name.length > 30 ? `${props.name.slice(0, 30)}....` : props.name
    return (
        <Popover
            title={`${props.title} > ${name}`}
            placement='bottom'
            content={<PublicSharableLink />}
            trigger='click'
            visible={state.visible}
            onVisibleChange={handleVisibleChange}
        >
            <Icon type="link" />
        </Popover>
    )
}

export default ShareButton
