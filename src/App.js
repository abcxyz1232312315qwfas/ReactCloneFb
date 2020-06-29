import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import Full from './component/full';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends React.Component {
  constructor(props){
      super(props);
      this.state= {
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          formErrors:{
            firstName: "",
            lastName:"",
            email:"",
            password: ""
          }
      }
  }

  handleSubmit=e =>{
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

  handleChange= e =>{
    e.preventDefault();
    const{name,value} =e.target;
    let formErrors=this.state.formErrors;

    console.log("Name: ",name)
    console.log("Value: ",value)


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

    this.setState({formErrors, [name]:value}, ()=> console.log(this.state));
  }
  render(){
    const { formErrors } = this.state;
  return (

    <div className="wapper">
         <div className="headerx"></div>
          <form>
            <div className="header">
                <div id="img1" className= "header" >
                    <img src="facebook.png"/>
                </div>
                <div id="form1" className= "header" >Email hoặc điện thoại
                        <input id="headerbox" type="mail"/><br />
                </div>
                <div id="form2" className="header">
                        Password<br />
                        <input id="headerbox" type="password"/><br />
                        Quên tài khoản?
                </div>
                <input type="submit" className="submit1" value="login"/>
              </div>
            </form>

          <form onSubmit={this.handleSubmit} noValidate>
          <div class="content">
                <div id="intro1" class="content"><strong>Facebook giúp bạn kết nối và chia sẻ với mọi</strong><br/>
                <strong>người trong cuộc sống của bạn.</strong></div>
                <div id="intro2" class="content"><strong>Đăng ký</strong></div>
                <div id="img2" class= "content" ><img src="world.png"/></div>
                <div id="intro3" class="content">Nhanh chóng và dễ dàng.</div>
                <div id="form3" class="content">
                  <div className="firstName">
                      <input  className={formErrors.firstName.length > 0 ? "error" : null}
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
                  <div className="lastName">
                      <input  className={formErrors.lastName.length > 0 ? "error" : null}
                              placeholder="Tên" 
                              type="text" id="namebox" 
                              name="lastName" 
                              onChange={this.handleChange} 
                              noValidate
                      />
                      <div id='message1'>
                      {formErrors.lastName.length > 0 && (
                        <span className="errorMessage">{formErrors.lastName}</span>
                      )}
                      </div>
                  </div>
                  <div className="email">
                      <input  className={formErrors.email.length > 0 ? "error" : null}
                              placeholder="Số điện thoại hoặc email" 
                              type="text" 
                              id="mailbox" 
                              name="email" 
                              onChange={this.handleChange} 
                              noValidate
                      />
                      <div id='message1'>
                      {formErrors.email.length > 0 && (
                          <span className="errorMessage">{formErrors.email}</span>
                        )}
                        </div>
                  </div>
                  <div className="password">
                      <input  className={formErrors.password.length > 0 ? "error" : null}
                              placeholder="Mật khẩu mới" 
                              id="mailbox2" 
                              type="password" 
                              name="password" 
                              onChange={this.handleChange} 
                              noValidate
                      />
                      <div id='message1'>
                      {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                      )}
                      </div>
                  </div>
                    <br/><br/>
                    Ngày sinh<br/>
                        <select name="day" id="selectday">
                            {/* <script type="text/javascript">
                                for (var index = 0; index < 30; index++) {
                                    document.write('<option value="#">'+i+'</option>')
                                }
                            </script> */}
                            <option value="#">1</option>
                            <option value="#">2</option>
                            <option value="#">3</option>
                            <option value="#">4</option>
                            <option value="#">5</option>
                            <option value="#">6</option>
                            <option value="#">...</option>
                        </select>
                        <select name="month" id="selectmonth">
                            <option value="#">Tháng 1</option>
                            <option value="#">Tháng 2</option>
                            <option value="#">Tháng 3</option>
                            <option value="#">Tháng 4</option>
                            <option value="#">Tháng 5</option>
                            <option value="#">Tháng 6</option>
                            <option value="#">...</option>
                        </select>
                        <select name="year" id="selectday">
                            <option value="#">1995</option>
                            <option value="#">1996</option>
                            <option value="#">1997</option>
                            <option value="#">1998</option>
                            <option value="#">1999</option>
                            <option value="#">2000</option>
                            <option value="#">...</option>
                        </select>
                    <br/>
                    <br/>
                    Giới tính<br/>
                    <input type="radio" name="sex" value="male"/> Nam  <input type="radio" name="sex" value="female"/> Nữ <input type="radio" name="sex" value="female"/> Tùy Chỉnh<br/><br/>
                    <div id="form4">
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#">Điều khoản</a>, <a href="#">Chính sách dữ liệu</a> và <a href="#">Chính sách cookie của chúng tôi</a>. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                    </div>
            <br/><br/>
                    <br/>
                    <div id="form5">
                        <a href="#">Tạo Trang</a> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
                    </div>
                </div>
                <input type="submit" id="button2" value="Đăng Ký" ></input>
            </div>
          </form>
          <Footer></Footer>
        {/* <Header/>,
       <Main/>,
       <Footer/>  */}
    </div>
  );
  }

}

export default App;
