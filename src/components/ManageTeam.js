import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import AddMembers from './AddMembers';

export const ManageTeam = (props) => {
    const [state, setState] = useState(false)
    return (
        <div className='TeamModal'>
            <Button type='link' onClick={() => setState(true)} className='ManageTeam'>
                Manage Team
            </Button>
            <Modal
                title={props.TeamName}
                centered
                visible={state}
                onOk={() => setState(false)}
                onCancel={() => setState(false)}
            >
                <label className='LabelText'>Add Members</label>
                <br /><br />
                <AddMembers />
            </Modal>

        </div>
    )
}
