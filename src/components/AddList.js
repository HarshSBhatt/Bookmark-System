
import React, { useState } from 'react'
import { Modal, Tooltip, Input, Icon } from 'antd'
import Text from 'antd/lib/typography/Text';
// import AddMembers from './AddMembers';

export const AddList = (props) => {
    const [state, setState] = useState(false)
    return (
        <React.Fragment>
            <Tooltip title="Add List">
                <button className={props.classIs} onClick={() => setState(true)} >
                    {
                        props.text ? <Text className='Text'>Add</Text> : <Icon type='plus-circle' />
                    }
                </button>
            </Tooltip>
            <Modal
                title={props.listName}
                centered
                visible={state}
                onOk={() => setState(false)}
                onCancel={() => setState(false)}
            >
                <label className='LabelText'>List Name</label>
                <br /><br />
                <Input placeholder='List Title' size='large' allowClear />
            </Modal>
        </React.Fragment>
    );
}
