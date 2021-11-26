import React, {useState} from 'react';
import './App.css';
import {Avatar, Breadcrumb, Comment, Layout, Menu, Tooltip} from "antd";

const {Footer, Sider} = Layout
const {SubMenu} = Menu

const {Content} = Layout

function App() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2">
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Comment
                            author={<a>Han Solo</a>}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
                            content={
                                <p style={{direction: "ltr", maxWidth: '700px'}}>
                                    We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes
                                    beautifully
                                    and efficiently.
                                </p>
                            }
                            datetime={
                                <Tooltip title={'datestring'}>
                                    <span>datestringspan</span>
                                </Tooltip>
                            }
                        />
                        <Comment
                            style={{
                                direction: "rtl"
                            }}
                            author={<a>Han Solo</a>}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
                            content={
                                <p style={{direction: "ltr", maxWidth: '700px'}}>
                                    We supply a series of design principles, practical patterns and high quality design
                                    resources (Sketch and Axure), to help people create their product prototypes
                                    beautifully
                                    and efficiently.
                                </p>
                            }
                            datetime={
                                <Tooltip title={'datestring'}>
                                    <span>datestringspan</span>
                                </Tooltip>
                            }
                        />
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
