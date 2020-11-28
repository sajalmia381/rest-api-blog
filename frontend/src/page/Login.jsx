import React, { useState } from 'react';

import { useHistory} from 'react-router-dom';
import {connect} from 'react-redux';


import { userLogin } from '../actions/userActions';


let styles = {
    minHeight: '80vh'
}

const Login = ({userLogin, loading, error, userInfo}) => {
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (username != null && password != null) {
            const isLogin = userLogin(username, password)
            if(isLogin) {
                history.push('/')
            }
        }
    }

    return (
        <div className="container" style={styles}>
        <h1 className="mt-4 mb-3">Login
        <small>Form</small>
        </h1>
        <ol className="breadcrumb">
        <li className="breadcrumb-item active">Login</li>
        </ol>
        <div className="row">
        <div className="col-lg-4 mb-4">
            <form onSubmit={handleSubmit}>
                <div className="control-group form-group">
                    <div className="controls">
                    <label htmlFor="id_username">Username</label>
                    <input onChange={handleInput} name="username" type="text" className="form-control" id="id_username" required />
                        <p className="help-block"></p>
                    </div>
                </div>
                <div className="control-group form-group">
                    <div className="controls">
                    <label htmlFor="id_password">Password</label>
                    <input onChange={handleInput} name="password" type="password" className="form-control" id="id_password" required />
                    </div>
                </div>
                {
                    error ? <div  className="alert alert-success py-2 h6" role="alert">{error}</div>: ''
                }
                <button type="submit" className="btn btn-primary" id="login-btn">Login</button>
            </form>
        </div>
        </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    userInfo: state.userLogin.userInfo,
    error: state.userLogin.error,
    loading: state.userLogin.loading
})

export default connect(mapStateToProps, {userLogin}) (Login);