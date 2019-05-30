import React, { useState } from 'react'
import { Empty, Icon, Popover, Avatar } from 'antd';
import { AddList } from '../AddList';
import CopyLink from './CopyLink';

function LinkIt(props) {
    const [state, setState] = useState({ visible: false })
    const { link } = props


    const handleVisibleChange = visible => {
        setState({ visible })
    }

    return (
        <React.Fragment>
            <div className='LinkDiv'>
                <div className='LeftDiv'>
                    <span><Avatar icon='user' /></span>
                    <Popover
                        placement='bottom'
                        content={<CopyLink link={link} />}
                        trigger='click'
                        visible={state.visible}
                        onVisibleChange={handleVisibleChange}
                    >
                        <span>
                            {
                                link.length < 30 ?
                                    <a rel='noopener noreferrer' href={link} target='_blank'>{link}</a>
                                    :
                                    <a rel='noopener noreferrer' href={link} target='_blank'>{`${link.slice(0, 30)}....`}</a>
                            }
                        </span>
                    </Popover>
                </div>
                <div className='RightDiv'>
                    <span><Icon type='delete' /></span>
                    <span><Icon type='star' /></span>
                </div>
            </div>
        </React.Fragment>
    )
}

const ListContent = (props) => {
    const links = props.links
    const listName = props.name

    return (
        (links && links.length) ?
            <div className='flex-block'>
                {
                    links.map((link, index) => (
                        <span key={index}>
                            <LinkIt link={link} />
                        </span>
                    ))
                }
            </div>
            :
            <div className='flex'>
                <Empty
                    // image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    imageStyle={{ height: 120 }}
                    description={<span>{`List not available for '${listName}'`}</span>}
                >
                    <div className='flex'>
                        <AddList listName={listName} classIs='primary' text='true' />
                    </div>
                </Empty>
            </div>

    )
}

export default ListContent