import React from 'react';
function Full() {
    return (
        <>
        <div className="headerx">  </div>
        {/* header */}
        <div id="error">
        <form id="form" action="/" method="GET">
            <div className="header">
                <div id="img1" className= "header" >
                    <img src="facebook.png"/>
                </div>
                    <div id="form1" className= "header" >Email hoặc điện thoại
                        <input id="headerbox" type="mail" name="username" required/><br />
                    </div>
                    <div id="form2" className="header">
                        Password<br />
                        <input id="headerbox" type="password" name="password" required /><br />
                        Quên tài khoản?
                    </div>
                    <input type="submit" className="submit1" value="Đăng nhập"/>
            </div>
        </form>
        </div>
        {/* header */}
        {/* body */}
            <div class="content">
                <div id="intro1" class="content"><strong>Facebook giúp bạn kết nối và chia sẻ với mọi</strong><br/>
                <strong>người trong cuộc sống của bạn.</strong></div>
                <div id="intro2" class="content"><strong>Đăng ký</strong></div>
                <div id="img2" class= "content" ><img src="world.png"/></div>
                <div id="intro3" class="content">Nhanh chóng và dễ dàng.</div>
                <div id="form3" class="content">
                    <input placeholder="Họ" type="text" id="namebox" name="firstname" />  <input placeholder="Tên" type="text" id="namebox" name="lastname" />
                    <input placeholder="Số điện thoại hoặc email" type="text" id="mailbox" name="email" />
                    <input placeholder="Mật khẩu mới" id="mailbox" type="password" cname="password" />
                    <br/><br/>
                    Ngày sinh<br/>
                        <select name="day" id="selectday">
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
            {/* body */}
            {/* footer */}
            <div class="bodyfooter">
                <div id="footer" class="bodyfooter">
                Tiếng Việt
                <a href="#"> English (UK)</a>
                <a href="#">中文(台灣)</a>
                <a href="#">日本語</a>
                <a href="#">한국어</a>
                <a href="#">ภาษาไทย</a>
                <a href="#">Français (France)</a>
                <a href="#">Español</a>
                <a href="#">Português (Brasil)</a>
                <a href="#">Deutsch</a>
                <a href="#">Italiano</a>
                    <br/><hr/>Leran more......
                </div>
            </div>
        {/* footer */}
        </>
    );
}
 export default Full;