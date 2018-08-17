import * as React from 'react';
import { Button, Menu, Dropdown, Icon, Checkbox } from 'antd';
import './style.css';

class UploadControl extends React.Component {
  constructor() {
    super();
    this.state = {
      upload_number: 0,
      detect_number: 0,
      label: '显示标签',
      multiply: '2倍',
      size: '普通',
    }
  }

  handle_menu = () => {
    
  }
  menu = (
    <Menu onClick={this.handle_menu}>
      <Menu.Item key="全选">
        全选
      </Menu.Item>
      <Menu.Item key="正常">
        正常
      </Menu.Item>
      <Menu.Item key="缺陷">
        缺陷
      </Menu.Item>
    </Menu>
  );

  handle_label_menu = (e) => {
    this.setState({
      label: e.key,
    });
  }
  
  label_menu = (
    <Menu onClick={this.handle_label_menu}>
      <Menu.Item key="隐藏标签">
        隐藏标签
      </Menu.Item>
      <Menu.Item key="显示标签">
        显示标签
      </Menu.Item>
    </Menu>
  );

  handle_multiply_menu = (e) => {
    this.setState({
      multiply: e.key,
    });
  }
  
  multiply_menu = (
    <Menu onClick={this.handle_multiply_menu}>
      <Menu.Item key="2倍">
        2倍
      </Menu.Item>
      <Menu.Item key="4倍">
        4倍
      </Menu.Item>
    </Menu>
  );

  handle_size_menu = (e) => {
    this.setState({
      size: e.key,
    });
  }
  
  size_menu = (
    <Menu onClick={this.handle_size_menu}>
      <Menu.Item key="大图">
        大图
      </Menu.Item>
      <Menu.Item key="普通">
        普通
      </Menu.Item>
      <Menu.Item key="小图">
        小图
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <div className="UploadControl">
        <div className="upload-header">
          <div>
            <Button type="primary" icon="plus" size="large">添加图片</Button>
            <Button size="large">清空</Button>
          </div>
          <div>
            <Checkbox>自动开始检测</Checkbox>
            <Button type="primary" icon="upload" size="large">{`上传(${this.state.upload_number}`}</Button>
            <Button type="primary" icon="search" size="large">{`检测(${this.state.detect_number}`}</Button>
          </div>
        </div>
        <div className="upload-options">
          <div>
            <Dropdown overlay={this.menu}>
              <div>
                标注筛选
                <Icon type="down" />
              </div>
            </Dropdown>
            <Dropdown overlay={this.label_menu}>
              <div>
                <span>标签显示&nbsp;&nbsp;&nbsp;</span>
                {this.state.label}
                <Icon type="down" />
              </div>
            </Dropdown>
          </div>
          <div>
            <Dropdown overlay={this.multiply_menu}>
              <div>
                <span>放大镜&nbsp;&nbsp;&nbsp;</span>
                {this.state.multiply}
                <Icon type="down" />
              </div>
            </Dropdown>
            <Dropdown overlay={this.size_menu}>
              <div>
                <span>图片大小&nbsp;&nbsp;&nbsp;</span>
                {this.state.size}
                <Icon type="down" />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="upload-contain">
        </div>
      </div>
    );
  }
}

export default UploadControl;