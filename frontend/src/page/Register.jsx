import React, { Component } from 'react';

let styles = {
    minHeight: '80vh'
}

class Register extends Component {
    render() {
        return (
            <section>
                <div className="container" style={styles}>


                    <h1 className="mt-4 mb-3">Register
    <small>Form</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Register</li>
                    </ol>
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <form method="post" action="">
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label htmlFor="id_first_name">First name*</label>
                                        <input name="first_name" type="text" className="form-control" id="id_first_name" required />
                                        <p className="help-block"></p>
                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label htmlFor="id_last_name">Last name*</label>
                                        <input name="last_name" type="text" className="form-control" id="id_last_name" required />

                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label htmlFor="id_username">Username*</label>
                                        <input name="username" type="text" className="form-control" id="id_username" required />

                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label htmlFor="id_email">Email address*</label>
                                        <input name="email" type="email" className="form-control" id="id_email" required />

                                    </div>
                                </div>
                                <div className="control-group form-group">
                                    <div className="controls">
                                        <label htmlFor="id_password1">Password*</label>
                                        <input name="password1" type="password" className="form-control" id="id_password1" required />


                    
                </div>
                                    </div>
                                    <div className="control-group form-group">
                                        <div className="controls">
                                            <label htmlFor="id_password2">Password confirmation*</label>
                                            <input name="password2" type="password" className="form-control" id="id_password2" required />

                                                <p className="help-block"></p>
                </div>
                                        </div>
                                        <div id="success"></div>
                                        <button type="submit" className="btn btn-primary" id="login-btn">Register</button>
        </form>
                                </div>
</div>

                        </div>
</section>
        );
    }
}

export default Register;