import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  ProfileOutlined,
  CustomerServiceOutlined, 
  FolderOpenOutlined,
  TeamOutlined,
  
  
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Profile.css'


const { Header, Sider, Content } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

const App = () => {
  const [size, setSize] = useState('large');
  const [collapsed, setCollapsed] = useState(false);
  return (
    
    <Layout className>
      
      <Sider trigger={null} collapsible collapsed={collapsed} className="side-nav">
        
        <div className="logo1" /> 
        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: '2',
              icon: <ProfileOutlined />,
              label: 'Library',
            },
            {
              key: '3',
              icon: <CustomerServiceOutlined />,
              label: 'Creators on Prometheus',
            },
            {
              key: '4',
              icon: <FolderOpenOutlined />,
              label: 'All Files',
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'Upload',
            },
            {
              key: '6',
              icon: <TeamOutlined />,
              label: 'Community',
            },
          ]}
        />
      </Sider>
   
      <Layout className="site-layout"> 
      
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          
        </Header>
        <Content className="search-bar"
        >
         <Search
      placeholder="Whar are you looking for..."
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
          </Content>
        
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 700,
          }}
          
          
        >
               
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;