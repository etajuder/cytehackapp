import React from 'react';

const Signup = () => (
<div className="content-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="form-content-box">
                    <div className="details">
                        <div className="main-title">
                            <h1><span>Signup</span></h1>
                        </div>
                        <form action="http://template.themevessel.com/the-nest/index.html" method="GET">
                            <div className="form-group">
                                <input type="text" name="fullname" className="input-text" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="input-text" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="input-text" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="confirm_Password" className="input-text" placeholder="Confirm Password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="button-md button-theme btn-block">Signup</button>
                            </div>
                        </form>
                    </div>
                    <div className="footer">
                        <span>
                            I want to <a href="/login">return to login</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
export default Signup;