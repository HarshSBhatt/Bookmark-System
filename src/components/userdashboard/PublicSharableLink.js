import React, { useState } from 'react'
import { Input, Button, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function PublicSharableLink() {
    const [state, setState] = useState({ value: null, copied: false, visible: false })
    const hide = () => {
        setState({
            visible: false,
        });
    };
    function confirm() {
        message.success('Link Copied');
    }
    return (
        <div className='flex-vertical'>
            <span>
                <Input readOnly />
            </span>
            <span>
                <CopyToClipboard text={state.value} onCopy={() => { confirm(); setState({ copied: true }) }}>
                    <Button type='primary' onClick={hide}>Copy Link</Button>
                </CopyToClipboard>
            </span>
        </div >

    )
}

export default PublicSharableLink