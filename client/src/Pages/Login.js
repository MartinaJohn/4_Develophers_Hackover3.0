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
          <h1>Sign in</h1>
          <h2>
            Don't have an account? <a href="/register">Sign Up</a>
          </h2>
          <br />
          <Form
            name="register-form"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
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
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
              // loading={loading}
              // disabled={loading}
            >
              Sign Up
            </Button>
            <br />
          </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}