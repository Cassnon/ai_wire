import * as React from 'react';
import './style.css';
import { Router, Route, Link, Switch, hashHistory } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Upload from './upload';
import Detect from './detect';
import Report from './report';

const { Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      path: window.location.pathname == '/' ? '/upload': window.location.pathname.split('/')[1],
    };
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <Menu 
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[this.state.path]}
          >
            <MenuItemGroup title="检测">
              <Menu.Item key="upload">
                <Icon type="pie-chart" />
                <span>上传检测</span>
                <Link to="/upload/image_manage">上传检测</Link>
              </Menu.Item>
              <Menu.Item key="detect">
                <Icon type="desktop" />
                <span>人工检测</span>
                <Link to="/detect">人工检测</Link>
              </Menu.Item>
              <Menu.Item key="report">
                <Icon type="desktop" />
                <span>检测报告</span>
                <Link to="/report">检测报告</Link>
              </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="用户">
              <Menu.Item key="4">
                <Icon type="pie-chart" />
                <span>登出</span>
              </Menu.Item>
            </MenuItemGroup>
          </Menu>
        </Sider>
        <Layout>
          <Route exact path="/" component={Upload}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/detect" component={Detect}/>
          <Route path="/report" component={Report}/>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;