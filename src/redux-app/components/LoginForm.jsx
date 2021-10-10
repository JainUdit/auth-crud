import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "antd";
import { loginValidate as validate } from "../utils/validate";
import {
  renderInput,
  renderPassword,
} from "../utils/formUtils";

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 14,
      offset: 6
    }
  }
};

const LoginForm = (props) => {
  const { handleSubmit, pristine, submitting, requestLogin } = props;

  const handleLogin = (values) => {
    const { email, password } = values;
    requestLogin({ username: email, password });
  }

  return (
    <form onSubmit={handleSubmit((formData) => handleLogin(formData))}>
      <Field
        label="Email"
        name="email"
        component={renderInput}
        type="email"
        placeholder="Email"
        hasFeedback
      />
      <Field
        label="Password"
        name="password"
        component={renderPassword}
        type="password"
        placeholder="Password"
      />
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          disabled={pristine || submitting}
          htmlType="submit"
        >
          Login
        </Button>
      </Form.Item>
    </form>
  );
};

export default reduxForm({
  form: "login",
  validate,
})(LoginForm);
