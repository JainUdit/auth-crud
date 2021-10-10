import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "antd";
import { signupValidate as validate } from "../utils/validate";
import {
  renderDatePicker,
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

const RegistrationForm = (props) => {
  const { handleSubmit, pristine, submitting, requestRegistration } = props;

  const handleRegistration = (values) => {
    const { email, password, birthdate } = values;
    requestRegistration({ username: email, password, birthdate });
  }

  return (
    <form onSubmit={handleSubmit((formData) => handleRegistration(formData))}>
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
      <Field
        label="Confirm Password"
        name="confirmpassword"
        component={renderPassword}
        type="password"
        placeholder="Confirm Password"
      />
      <Field
        label="Filter dates"
        name="birthdate"
        component={renderDatePicker}
        placeholder="BirthDate"
        hasFeedback
        onFocus={(e) => e.preventDefault()}
        onBlur={(e) => e.preventDefault()}
      />
<Form.Item {...tailFormItemLayout}>
      <Button
        type="primary"
        disabled={pristine || submitting}
        htmlType="submit"
      >
        SignUp
      </Button>
      </Form.Item>
    </form>
  );
};

export default reduxForm({
  form: "registration",
  validate,
})(RegistrationForm);
