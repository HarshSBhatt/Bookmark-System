import React from 'react'
import { Layout } from 'antd'
import Heading from './Heading';
// import './Dashboard.css'
import { Redirect } from 'react-router-dom'
import { MenuItemData } from '../pages'
import ListTitle from './ListTitle';
// import ListContent from './ListContent';
const datas = MenuItemData


const { Header, Content } = Layout;

export function Dashboard({ match: { params: { id } } }) {
    console.log(id)
    const pid = parseInt(id)
    if (pid !== 0 && !pid) {
        return <Redirect to={{ pathname: '/404' }} />
    }
    return (
        <>
            {
                datas.routes.map((data, index) => (
                    <section className='TopHeader' key={index}>
                        <Header className='Header'>
                            <Heading title={data.title} />
                        </Header>
                        <Content>
                            <ListTitle {...data} title={data.title} />
                        </Content>
                    </section>
                ))
            }
        </>
    )
}

export default Dashboard
