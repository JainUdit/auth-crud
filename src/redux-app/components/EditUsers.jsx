import { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "antd";
import { renderInput } from "../utils/formUtils";
import { editValidate as validate } from "../utils/validate";

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

const EditUsers = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    initialize,
    location,
    singleUserDataRequest,
    usersData,
    addUserRequest,
    editUserRequest,
    isEditRoute,
  } = props;

  const { singleUserData } = usersData;
  const id = location?.pathname?.split("/")?.[3];

  useEffect(() => {
    isEditRoute && singleUserDataRequest(id);
  }, []);

  useEffect(() => {
    isEditRoute &&
      initialize({
        name: singleUserData?.name,
        email: singleUserData?.email,
        phone: singleUserData?.phone,
        website: singleUserData?.website,
      });
  }, [singleUserData]);

  const handleLogin = (values) => {
    // const { name, email } = values;
    isEditRoute ? editUserRequest(id, values) : addUserRequest(values);
  };

  return (
    <form onSubmit={handleSubmit((formData) => handleLogin(formData))}>
      <Field
        label="Name"
        name="name"
        component={renderInput}
        type="text"
        placeholder="Name"
        hasFeedback
      />
      <Field
        label="Email"
        name="email"
        component={renderInput}
        type="email"
        placeholder="Email"
        hasFeedback
      />
      <Field
        label="Phone"
        name="phone"
        component={renderInput}
        type="text"
        placeholder="Phone"
        hasFeedback
      />
      <Field
        label="Website"
        name="website"
        component={renderInput}
        type="text"
        placeholder="Website"
        hasFeedback
      />
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          disabled={pristine || submitting}
          htmlType="submit"
        >
          Save
        </Button>
      </Form.Item>
    </form>
  );
};

export default reduxForm({
  form: "edit",
  validate,
})(EditUsers);
