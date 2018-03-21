import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class EmailLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = e => {
    let _this = this;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        _this.props.goRedirect();
      }
    });
  };
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched("email") && getFieldError("email");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          style={{ marginBottom: -8 }}
          validateStatus={emailError ? "error" : ""}
          help={emailError || ""}
        >
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your email!" }]
          })(
            <Input
              style={{ borderRadius: "4px 4px 0px 0px" }}
              type="email"
              placeholder="Email address"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
        >
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              style={{ borderRadius: "0px 0px 4px 4px" }}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ padding: "0px 40px" }}
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default EmailLoginForm;
