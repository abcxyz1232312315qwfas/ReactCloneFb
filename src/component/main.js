import React from 'react';
import _ from 'lodash';

function Article() {
  return (
    <>
      <div id="intro1" class="content"><strong>Facebook giúp bạn kết nối và chia sẻ với mọi</strong><br />
        <strong>người trong cuộc sống của bạn.</strong></div>
      <div id="intro2" class="content"><strong>Đăng ký</strong></div>
      <div id="img2" class="content" ><img src="world.png" /></div>
      <div id="intro3" class="content">Nhanh chóng và dễ dàng.</div>
    </>
  );
}

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
    `);
    } else {
      console.error("ERROR");
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    console.log("Name: ", name)
    console.log("Value: ", value)


    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Ít nhất 3 kí tự" : "";
        break;

      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "Ít nhất 3 kí tự" : "";
        break;

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Email không hợp lệ";
        break;

      case "password":
        formErrors.password =
          value.length < 6 ? "Phải có ít 6 kí tự" : "";
        break;

      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }
  render() {
    const { formErrors } = this.state;
    return (
      <>
        <div id="form3" class="content">
          <div className="username">
            <div className="container">
              <input className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="Họ"
                type="text"
                id="namebox"
                name="firstName"
                onChange={this.handleChange}
                noValidate
              />
              <div id='message1'>
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
            </div>
          </div>
          <div className="email">
            <div className="container">
              <div>
                <input className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Tên"
                  type="text" id="namebox"
                  name="lastName"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div id='message1'>
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
            </div>
          </div>
          <div className="email">
            <div className="container">
              <div>
                <input className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Số điện thoại hoặc email"
                  type="text"
                  id="mailbox"
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div id='message1'>
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
            </div>
          </div>
          <div className="password">
            <div className="container">
              <div>
                <input className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Mật khẩu mới"
                  id="mailbox2"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  noValidate
                />
              </div>
              <div id='message1'>
                {formErrors.password.length > 0 && (
                  <div className="errorMessage">{formErrors.password}</div>
                )}
              </div>
            </div>
          </div>
          <br /><br />
                    Ngày sinh<br />
          <select name="day" id="selectday">
            {_.range(1, 30 + 1).map(value => <option key={value} value={value}>{value}</option>)}
          </select>
          <select name="month" id="selectmonth">
            {_.range(1, 12 + 1).map(value => <option key={value} value={value}>{'Thang ' + value}</option>)}
          </select>
          <select name="year" id="selectday">
            {_.range(1970, 2020 + 1).map(value => <option key={value} value={value}>{value}</option>)}
          </select>
          <br />
          <br />
                    Giới tính<br />
          <input type="radio" name="sex" value="male" /> Nam  <input type="radio" name="sex" value="female" /> Nữ <input type="radio" name="sex" value="female" /> Tùy Chỉnh<br /><br />
          <div id="form4">
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#">Điều khoản</a>, <a href="#">Chính sách dữ liệu</a> và <a href="#">Chính sách cookie của chúng tôi</a>. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                    </div>
          <br /><br />
          <br />
          <div id="form5">
            <a href="#">Tạo Trang</a> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
                    </div>
        </div>
        <input type="submit" id="button2" value="Đăng Ký" ></input>
      </>
    );
  }
}
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class Main extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} noValidate>
          <div class="content">
            <Article></Article>
            <Section></Section>
          </div>
        </form>

      </>
    );
  }
}
export default Main;
