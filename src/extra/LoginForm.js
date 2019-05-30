import React from 'react'
import { Form, Icon, Button, Input, Checkbox } from 'antd'
import './App.css'

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(`Received value : ${values}`)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form onSubmit={this.handleSubmit} className='login-form'>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }]
                    })(
                        <Input
                            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type='password'
                            placeholder='Password'
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(
                        <Checkbox>
                            Remember Me
                        </Checkbox>
                    )}
                    <a className="login-form-forgot" href="/">
                        Forgot Password
                    </a>
                    <Button type="primary" htmlType='submit' className='login-form-button'>
                        Log in
                    </Button>
                    or <a href="/">Register now!</a>
                </Form.Item>
            </Form>
        )
    }
}
const Login = Form.create({ name: 'horizontal_login' })(LoginForm)
export default Login