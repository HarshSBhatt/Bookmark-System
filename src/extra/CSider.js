import React from 'react'
import { Icon, Menu, Layout } from 'antd'
import './App.css'
// import Login from './LoginForm'
import { Link } from 'react-router-dom';
// import CSider from './CSider';
const SubMenu = Menu.SubMenu
const { Sider } = Layout
class Csider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: false
        }
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed: !this.state.collapsed
        })
        console.log(collapsed)

    }
    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            //! To make sider to be fixed and behaviour set to scroll
            // style={{
            //     overflow: 'auto',
            //     height: '100vh',
            //     position: 'fixed',
            //     left: 0,
            // }}
            >
                <div className="logo">

                </div>
                <Menu
                    theme='dark'
                    defaultSelectedKeys={['1']}
                    mode='inline'
                >
                    <Menu.Item key='1'>
                        <Link to='/'>
                            <Icon type="home" theme="filled" />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Link to='/device'>
                            <Icon type="android" theme="filled" />
                            <span>Device</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key='sub1'
                        title={
                            <span>
                                <Icon type="pie-chart" theme="filled" />
                                <span>Graph</span>
                            </span>
                        }
                    >
                        <Menu.Item key='3'>Option-1</Menu.Item>
                        <Menu.Item key='4'>Option-2</Menu.Item>
                        <Menu.Item key='5'>Option-3</Menu.Item>
                    </SubMenu>
                    <Menu.Item key='6'>
                        <Icon type="wallet" theme="filled" />
                        <span>Wallet</span>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon type="file" theme='filled' />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
export default Csider