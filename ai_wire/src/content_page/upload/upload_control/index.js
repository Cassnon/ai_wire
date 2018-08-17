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
      item1: false,
      item2: false,
      item3: false,
      item4: false,
    }
  }

  all_onclick = (e) => {
    if (e.target.checked) {
      this.setState({
        item1: true,
        item2: true,
        item3: true,
        item4: true,
      });
    } else {
      this.setState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
      });
    }
  }

  normal_onclick = (e) => {
    if (e.target.checked) {
      this.setState({
        item1: true,
        item2: false,
        item3: true,
        item4: false,
      });
    }
  }

  week_onclick = (e) => {
    if (e.target.checked) {
      this.setState({
        item1: false,
        item2: true,
        item3: false,
        item4: true,
      });
    }
  }

  item1_onclick = (e) => {
    this.setState({
      item1: e.target.checked,
    });
  }

  item2_onclick = (e) => {
    this.setState({
      item2: e.target.checked,
    });
  }

  item3_onclick = (e) => {
    this.setState({
      item3: e.target.checked,
    });
  }

  item4_onclick = (e) => {
    this.setState({
      item4: e.target.checked,
    });
  }

  menu = () => {
    return (
      <Menu onClick={this.handle_menu} multiple>
        <Menu.Item key="全选">
          <Checkbox 
            checked={this.state.item1 && this.state.item2 && this.state.item3 && this.state.item4 }
            onChange={this.all_onclick}
          >全选</Checkbox>
        </Menu.Item>
        <Menu.Item key="正常">
          <Checkbox
            checked={this.state.item1 && !this.state.item2 && this.state.item3 && !this.state.item4 }
            onChange={this.normal_onclick}
          >正常</Checkbox>
        </Menu.Item>
        <Menu.Item key="缺陷">
          <Checkbox
            checked={!this.state.item1 && this.state.item2 && !this.state.item3 && this.state.item4 }
            onChange={this.week_onclick}
          >缺陷</Checkbox>
        </Menu.Item>
        <Menu.Item key="1">
          <Checkbox
            checked={this.state.item1}
            onChange={this.item1_onclick}
          >绝缘子</Checkbox>
        </Menu.Item>
        <Menu.Item key="2">
          <Checkbox
            checked={this.state.item2}
            onChange={this.item2_onclick}
          >绝缘子缺失</Checkbox>
        </Menu.Item>
        <Menu.Item key="3">
          <Checkbox
            checked={this.state.item3}
            onChange={this.item3_onclick}
          >销钉</Checkbox>
        </Menu.Item>
        <Menu.Item key="4">
          <Checkbox
            checked={this.state.item4}
            onChange={this.item4_onclick}
          >销钉缺失</Checkbox>
        </Menu.Item>
      </Menu>
    )
  };

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
            <Dropdown overlay={this.menu()}>
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