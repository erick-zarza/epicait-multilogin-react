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
  message, 
  Select,
  Radio
} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
class BankAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      fileList: 0,
      accountHolder: 2
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
  onChangeAccountHolder = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
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
      <Form id="BankAccountForm" onSubmit={this.handleSubmit}>
        <Row>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem>
            <b>CURRENCY</b>
            <Select defaultValue="usd" style={{ width: "100%" }}>
              <Option value="argentine">Argentine Peso $</Option>
              <Option value="australian">Australian Dollars A$</Option>
              <Option value="brazilian">Brazilian Real R$</Option>
              <Option value="nz">New Zealand Dollar NZ$</Option>
              <Option value="canadian">Canadian Dollars CA$</Option>
              <Option value="usd">U.S. Dollars $</Option>
              <Option value="eur">Euros €</Option>
            </Select>
          </FormItem>
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <FormItem>
              <b>IN WHICH COUNTRY WILL YOU BE PAID?</b>
              <Select defaultValue="usa" style={{ width: "100%" }}>
                <Option value="canada">Canada</Option>
                <Option value="usa">United States</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <FormItem>
              
              <b>ACCOUNT HOLDER INFORMATION</b>
              <RadioGroup onChange={this.onChangeAccountHolder} value={this.state.accountHolder}>
                <Radio value={1}>Individual</Radio>
                <Radio value={2}>Company</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <FormItem>
              
              <b>NAME ON ACCOUNT *</b>
              <Input placeholder="First Name"/>
            </FormItem>          
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <FormItem>
              
              <b>&nbsp;</b>
              <Input placeholder="Last Name"/>
            </FormItem>  
          </Col>
        </Row>
        <Row>
          <Col className="formColumn" xs={24} sm={24} md={24} lg={24} xl={24}>
            <FormItem>
              
              <b>ADDRESS *</b>
              <Input placeholder="Address"/>
            </FormItem>          
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={24} lg={24} xl={24}>
            <FormItem>
              <Input placeholder="Address 2"/>
            </FormItem>          
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={24} lg={24} xl={24}>
            <FormItem>
              <Input placeholder="City"/>
            </FormItem>          
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <FormItem>
              <Input placeholder="Postal Code"/>
            </FormItem>          
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <FormItem>
              <Input placeholder="State"/>
            </FormItem>  
          </Col>
        </Row>
        <Row>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <FormItem>
              
              <b>BANK ACCOUNT INFORMATION</b>
              <RadioGroup onChange={this.onChangeAccountHolder} value={this.state.accountHolder}>
                <Radio value={1}>Checking</Radio>
                <Radio value={2}>Savings</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={24} lg={24} xl={24}>
            <FormItem>
              <b>BANK NAME *</b>
              <Input placeholder="eg. Wells Fargo, Chase, Bank of America"/>
            </FormItem>          
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={24} lg={24} xl={24}>
            <FormItem>
              <b>ROUTING NUMBER *</b>
              <Input placeholder="XXXXXXXXX"/>
            </FormItem>          
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <p><b>ACCOUNT NUMBER *</b></p>
            <FormItem>
              <Input placeholder="Account number"/>
            </FormItem>
            <img src={require("../../img/us_check.jpg")} role="presentation" width={"100%"} />
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={12} lg={12} xl={12}>
            <p><b>&nbsp;</b></p>
            <FormItem>
              <Input placeholder="Re-enter account number"/>
            </FormItem>
          </Col>
          <Col className="formColumn" xs={24} sm={24} md={24} lg={24} xl={24}>
            <FormItem>
              <br/>
              <b>ACCOUNT NICKNAME</b>
              <Input placeholder="e.g. My primary account"/>
            </FormItem>          
          </Col>
        </Row>
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
            CREATE
          </Button>
        </p>
      </Form>
    );
  }
}

export default BankAccountForm;
