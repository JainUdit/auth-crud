export const commonValidation = (expression, values, errors) => {
    switch (expression) {
        case 'email':
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(values.email)) {
                errors.email = 'Please provide valid email';
            }
            break;
        case 'phone':
            if (values.phone && values.phone.length < 10) {
                errors.phone = 'Phone number should be of 10 digits';
            }

            if (values.phone && Number.isNaN(Number(values.phone))) {
                errors.phone = 'Please provide valid number';
            }
            break;
        default:
        // code block
    }
}

export const loginValidate = (values) => {
    const errors = {};
    commonValidation('email', values, errors);
    return errors;
};

export const signupValidate = (values) => {
    const errors = {};
    commonValidation('email', values, errors);

    if(!values.password) {
        errors.password = 'Required';
    }
    if(values.password !== values.confirmpassword) {
        errors.confirmpassword = 'Does not match with password'
    }

    return errors;
};

export const editValidate = (values) => {
    const errors = {};

    if(!values.name) {
        errors.name = 'Required';
    }
    commonValidation('email', values, errors);
    if(!values.phone) {
        errors.phone = 'Required';
    }
    if(!values.website) {
        errors.website = 'Required';
    }
    return errors;
}