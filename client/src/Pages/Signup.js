import { Button, Card, Form, Input} from "antd";
import React from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/Register.module.scss";


export default function Login() {

  return (
    <div className={styles.regContainer}>
<Navbar/>
      <div className={styles.containerController}>
        <Card className={styles.card}>
        <div className={styles.cardBody}>
          <h1>Sign up</h1>
          
          <br />
          <Form
            name="register-form"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
                <Input placeholder="Name" />
            </Form.Item>
              <br />
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email Id" />
            </Form.Item>
            <br />

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <br />
            <Form.Item
              name="location"
              rules={[
                {
                  required: true,
                  message: "Please input your location!",
                },
              ]}
            >
              <Input placeholder="Location" />
            </Form.Item>
            <br />
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
              // loading={loading}
              // disabled={loading}
            >
              Sign In
            </Button>
            <br />
          </Form>
          <h2>
            Already have an account? <a href="/login">Sign in</a>
          </h2>
          </div>
        </Card>
      </div>
    </div>
  );
}