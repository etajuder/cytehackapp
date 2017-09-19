import React from 'react';

const Login = () => (
  <div className="content-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="form-content-box">
                    <div className="details">
                        <div className="main-title">
                            <h1><span>Login</span></h1>
                        </div>
                        <form action="http://template.themevessel.com/the-nest/index.html" method="GET">
                            <div className="form-group">
                                <input type="email" name="email" className="input-text" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="Password" className="input-text" placeholder="Password" />
                            </div>
                            <div className="checkbox">
                                <div className="ez-checkbox pull-left">
                                    <label>
                                        <input type="checkbox" className="ez-hide" />
                                        Remember me
                                    </label>
                                </div>
                                <a href="forgot-password.html" className="link-not-important pull-right">Forgot Password</a>
                                <div className="clearfix"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="button-md button-theme btn-block">login</button>
                            </div>
                        </form>
                    </div>
                    <div className="footer">
                        <span>
                            New to Cythack? <a href="/signup">Sign up now</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default Login;