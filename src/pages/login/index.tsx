import React,{useEffect, useState} from 'react';
import styles from './index.less';
import login_img_bg1 from '@/common/img/login_img_bg1.png'
import login_img_bg2 from '@/common/img/login_img_bg2.png'
import login_icon_tlgb from '@/common/img/login_icon_tlgb.png'
import img_jbt from '@/common/img/img_jbt.png'
import { Form , Button , Input,Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import jsSHA from 'jssha'
import api from '../../http/api'


const Login  = (props:any) =>{
  const [userInfo,setUserInfo]  = useState({
    loginName:'',
    loginPwd:''

  })
  const onFinish = async(v:any)=>{
      const loginParent = props.loginParent
      let shaObj = new jsSHA('SHA-256', 'TEXT')
      shaObj.update(v.password)
      let hash = shaObj.getHash('HEX')
      const loginResult  = await api.login({
        loginName:v.username,
        loginPwd:hash
      })
      if(loginResult){
        sessionStorage.userInfo = JSON.stringify({
          loginName:v.username,
          token:loginResult.data.access_token
        })
        loginParent.history.push('/')
      }
  }
  useEffect(() => {
    
  })
  return (
    <div className={styles.login}>
      <div className={styles.loginTitle}>欢迎登录</div>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        style={{marginBottom:30}}
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="输入用户名" />
      </Form.Item>
      <Form.Item
        style={{marginBottom:55}}
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="输入密码"
        />
      </Form.Item>
      <Form.Item style={{marginBottom:16}}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住信息</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default (props:any) => {
  return (
    <div className={styles.loginWrap} style={{backgroundImage:`url(${login_img_bg2}) `}}>
        <img className={styles.login_img_bg1} src={login_img_bg1} alt=""/>
        <div className={styles.logo}>
            <img src={img_jbt} alt=""/>
            <div></div>
            <img src={login_icon_tlgb} alt=""/>
        </div>
        <div className={styles.welcome}>Welcome to login！</div>
        <Login loginParent={props}/>
    </div>
  );
}
