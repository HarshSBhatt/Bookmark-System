import React from 'react'
import { Popconfirm, message, Icon } from 'antd';

function confirm(name) {
    message.success(`${name} is deleted`);
}

function cancel() {
    message.error(`Action revoked`);
}

export function DeleteList(props) {
    const { name } = props
    return (
        <Popconfirm
            title={`Are you sure delete '${name}' list`}
            onConfirm={() => confirm(name)}
            onCancel={() => cancel(name)}
            okText="Delete"
            cancelText="Cancel"
        >
            <Icon type="delete" />
        </Popconfirm>
    )
}

export default DeleteList
