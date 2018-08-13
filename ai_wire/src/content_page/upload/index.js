import * as React from 'react';
import './style.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import DetectState from './detect_state';
import ImageManage from './image_manage';
import UploadControl from './upload_control';
import { Router, Route, Link, hashHistory } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      path: window.location.pathname == '/' ? 'upload/image_manage': window.location.pathname,
    };
  }

  render() {
    return (
      <div className="Upload">
        <Layout className="layout">
          <Header style={{ padding:'0px'}}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[this.state.path]}
              style={{ lineHeight: '64px'}}
            >
              <Menu.Item key="/upload/image_manage">
                <Link to="/upload/image_manage">图片管理</Link>
              </Menu.Item>
              <Menu.Item key="/upload/upload_control">
                <Link to="/upload/upload_control">上传状态</Link>
              </Menu.Item>
              <Menu.Item key="/upload/detect_state">
                <Link to="/upload/detect_state">检测状态</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Route exact path="/" component={ImageManage}/>
            <Route path="upload/image_manage" component={ImageManage}/>
            <Route path="/upload/detect_state" component={DetectState}/>
            <Route path="/upload/upload_control" component={UploadControl}/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Upload;
