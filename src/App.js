import React, { useState } from 'react'
import CustomSider from './components/CustomSider';
import { Layout } from 'antd';
import './App.css'
import Dashboard from './components/userdashboard/Dashboard'
// import Dashboard from './components/dashboard/Dashboard';
// import DashHeader from './components/DashHeader';
import { BrowserRouter, Route } from 'react-router-dom'
import Measure from 'react-measure';
import { DrawerC } from './components/DrawerC';
import PageNotFound from './components/PageNotFound';

export function App() {
    const [size, setSize] = useState({ dimensions: { width: -1, height: -1 } })
    const { width } = size.dimensions
    const classIs = width >= 900 ? 'Db' : null
    return (
        <BrowserRouter>
            <Measure
                bounds
                onResize={(contentRect) => {
                    setSize({ dimensions: contentRect.bounds })
                }}
            >
                {({ measureRef }) =>
                    <div ref={measureRef}>
                        {
                            (width < 900) ?
                                <DrawerC width={width} />
                                :
                                <CustomSider />
                        }
                        <Layout className={classIs} >
                            <Route exact path='/list/:id' render={props => <Dashboard {...props} />} />
                            <Route exact path='/404' component={PageNotFound} />
                        </Layout>
                    </div>
                }
            </Measure>
        </BrowserRouter>
    )
}

export default App
