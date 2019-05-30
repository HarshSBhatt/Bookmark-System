import React, { useState } from 'react'
import { Modal, Button, Input } from 'antd'
import AddMembers from './AddMembers';

export const CreateTeam = (props) => {
    const [state, setState] = useState(false)

    const type = props.type === 'link' ? 'link' : 'primary'
    return (
        <div className='TeamModal'>
            <Button type={type} onClick={() => setState(true)} className='CreateTeam'>
                Create Team
            </Button>
            <Modal
                title="Create Team"
                centered
                visible={state}
                onOk={() => setState(false)}
                onCancel={() => setState(false)}
            >
                <label className='LabelText'>Team Name</label>
                <br /><br />
                <Input placeholder='Enter Name' size='large' allowClear />
                <br /><br />
                <label className='LabelText'>Add Members</label>
                <br /><br />
                <AddMembers />
            </Modal>
        </div>
    );
}
