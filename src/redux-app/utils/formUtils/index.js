import { Form, Input, DatePicker } from "antd";

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const makeField =
    (Component) =>
        ({ input, meta, children, hasFeedback, label, ...rest }) => {
            const hasError = meta.touched && meta.invalid;
            return (
                <FormItem
                    {...formItemLayout}
                    label={label}
                    validateStatus={hasError ? "error" : "success"}
                    hasFeedback={hasFeedback && hasError}
                    help={hasError && meta.error}
                >
                    <Component {...input} {...rest} children={children} />
                </FormItem>
            );
        };

export const renderInput = makeField(Input);
export const renderPassword = makeField(Input.Password);
export const renderDatePicker = makeField(DatePicker);
