// import { Button, Card, Form, Input} from "antd";
// import React from "react";
// import Navbar from "../Components/Navbar";
// import styles from "../styles/Register.module.scss";

// // class Newlogin{
// //   constructor(props) 
// //   {
// //     super(props);

// //     // this.onChangeUsername = this.onChangeUsername.bind(this);
// //     this.onSubmit = this.onSubmit.bind(this);

// //     this.state = {
// //       username: ''
// //     }
// //   }
// //   onSubmit(e) 
// //   {
// //     e.preventDefault();

// //     const user = {
// //       username: this.state.username
// //     }

// //     console.log(user);
// //     axios.post('http://localhost:5000/users/add',user)
// //       .then(res=>console.log(res.data));
// //     // axios.post('http://localhost:5000/users/add', user)
// //     //   .then(res => console.log(res.data));

// //     this.setState({
// //       username: ''
// //     })
// //   };

// // }
// export default function Login() {
  
//   return (
//     <div className={styles.regContainer}>
// <Navbar/>
//       <div className={styles.containerController}>
//         <Card className={styles.card}>
//           <h1>Sign in to get back to learning!</h1>
//           <h2>
//             Don't have an account? <a href="/register">Sign Up</a>
//           </h2>
//           <Form
//             name="register-form"
//             initialValues={{ remember: true }}
//             // onFinish={onFinish}
//           >
//             <Form.Item
//               name="email"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your email!",
//                 },
//               ]}
//             >
//               <Input placeholder="Email Id" />
//             </Form.Item>

//             <Form.Item
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your password!",
//                 },
//               ]}
//             >
//               <Input type="password" placeholder="Password" />
//             </Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className={styles.loginButton}
//               // loading={loading}
//               // disabled={loading}
//             >
//               Sign In
//             </Button>
//           </Form>
//         </Card>
//       </div>
//     </div>
//   );
// }
import { Button, Card, Form, Input} from "antd";
import React from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../services/auth.services";
// import { login } from "../store/user.slice";
import Navbar from "../Components/Navbar";
import styles from "../styles/Register.module.scss";

export default function Login() {
  const info = useSelector((state) => state.user);
  console.log(info, "info");
  let navigate = useNavigate();
  //const dispatch = useDispatch();

  const finishMutation = useMutation(SignIn, {
    onSuccess: (data) => {
      console.log(data);
      // dispatch(login(data));
      // if (info?.user?.pre_assessment_score === -1) {
      //   navigate("/pre-assessment", { replace: true });
      // } else {
      //   navigate("/course", { replace: true });
      // }
      // queryClient.invalidateQueries("kyc-profile");
    },
    onError: (e) => {
      alert('Login failed');
      //message.error("Login Failed");
      // message.error(e.response.data.message);
    },
  });

  const onFinish = async (values) => {
    console.log(values);
    const data = {
      email: values.email,
      password: values.password,
    };
    await finishMutation.mutateAsync(data);
  };
  return (
        <div className={styles.regContainer}>
    <Navbar/>
          <div className={styles.containerController}>
            <Card className={styles.card}>
              <h1>Sign in to get back to learning!</h1>
              <h2>
                Don't have an account? <a href="/register">Sign Up</a>
              </h2>
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
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.loginButton}
                  // loading={loading}
                  // disabled={loading}
                >
                  Sign In
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      );
}