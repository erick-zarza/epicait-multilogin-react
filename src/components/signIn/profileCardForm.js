import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Layout,
  Row,
  Col,
  Modal,
  Button,
  Card,
  Input,
  Form,
  Upload,
  Icon,
  Alert,
  message
} from "antd";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
class profileCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      fileList: 0
    };
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };
  handleSubmit = e => {
    let _this = this;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  handleChange = ({ fileList }) => this.setState({ fileList });
  onChange(info) {
    let _this = this;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    //console.log(info.file);
    function getBase64(i) {
      var reader = new FileReader();
      reader.readAsDataURL(i);
      reader.onload = function() {
        console.log(reader.result);
        let base64Img = reader.result;
        _this.setState({
          picUpload: base64Img,
          profPicURL: base64Img
        });
        console.log(_this.state.profPicURL);
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
      };
    }
    if (!allowedExtensions.exec(info.file.originFileObj.name)) {
      //   _this.setState({
      //     imageError: true
      //   });
      console.log(
        "Please upload file having extensions .jpeg/.jpg/.png/.gif only."
      );
    } else {
      //Image preview
      console.log(info.file);
      //   _this.setState({
      //     imageError: false
      //   });
      let imageFile = info.file.originFileObj;
      getBase64(imageFile); // prints the base64 string
    }
  }
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      getFieldValue,
      isFieldTouched
    } = this.props.form;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload your profile image</div>
      </div>
    );
    // Only show error after a field is touched.
    const nameError = isFieldTouched("name") && getFieldError("name");
    const lastNameError =
      isFieldTouched("lastName") && getFieldError("lastName");
    const headlineError =
      isFieldTouched("headline") && getFieldError("headline");
    const companyError = isFieldTouched("company") && getFieldError("company");
    const helpWithError =
      isFieldTouched("helpWith") && getFieldError("helpWith");
    return (
      <Form id="profileCardForm" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={nameError ? "error" : ""}
          help={nameError || ""}
        >
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your name!"
              }
            ]
          })(
            <Input
              className="ek-form-input default-form-input"
              placeholder="Name"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={lastNameError ? "error" : ""}
          help={lastNameError || ""}
        >
          {getFieldDecorator("lastName", {
            rules: [
              {
                required: true,
                message: "Please input your last name!"
              }
            ]
          })(
            <Input
              className="ek-form-input default-form-input"
              placeholder="Last Name"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={headlineError ? "error" : ""}
          help={headlineError || ""}
        >
          {getFieldDecorator("headline", {
            rules: [{ required: true, message: "Please input your headline!" }]
          })(
            <Input
              className="ek-form-input default-form-input"
              placeholder="Professional Headline (Your Title)"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={companyError ? "error" : ""}
          help={companyError || ""}
        >
          {getFieldDecorator("company", {
            rules: [
              { required: true, message: "Please input your company name!" }
            ]
          })(
            <Input
              className="ek-form-input default-form-input"
              placeholder="Company Name"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={helpWithError ? "error" : ""}
          help={helpWithError || ""}
        >
          {getFieldDecorator("helpWith", {
            rules: [{ required: true, message: "Please complete this field!" }]
          })(
            <Input
              className="ek-form-input default-form-input"
              placeholder="I can help others with..."
            />
          )}
        </FormItem>
        <Row
          type={"flex"}
          justify={"space-between"}
          gutter={12}
          style={{
            margin: "20px 0"
          }}
        >
          <div className="clearfix" style={{ margin: "auto" }}>
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </div>
        </Row>
        {this.state.imageError && (
          <Alert
            message="Please upload file having extensions .jpeg/.jpg/.png/.gif only."
            type="error"
            style={{ padding: "8px 16px", marginBottom: 8 }}
          />
        )}
        <p
          style={{
            textAlign: "center"
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ padding: "0px 40px" }}
            disabled={hasErrors(getFieldsError())}
          >
            Sing Up
          </Button>
        </p>
      </Form>
    );
  }
}

export default profileCardForm;
