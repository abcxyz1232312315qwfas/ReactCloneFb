import React from 'react';

function Header() {
  return (
      <>
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
                <input type="submit" className="submit1" value="Đăng Nhập"/>
              </div>
            </form>
        </>
  );
}

export default Header;
