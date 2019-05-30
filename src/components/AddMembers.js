import React from 'react'
import { Select } from 'antd';

const Option = Select.Option;
const suggestions = [];
for (let i = 10; i < 36; i++) {
    suggestions.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function AddMembers() {
    return (
        <Select
            mode="tags"
            className='SelectInput'
            placeholder="Add Members"
            size='large'
        >
            {suggestions}
        </Select>
    )
}

export default AddMembers
