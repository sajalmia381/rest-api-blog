import React, { Component } from 'react';

import axios from 'axios';


let styles = {
    minHeight: '80vh'
}

class Login extends Component {
    state = {
        login: null,
        password: null,
        isError: false,
        errors: {},
        isLogin: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let thisForm = e.target
        console.dir(thisForm)
        const {username, password } = this.state
        if (username != null && password != null) {
            let protocol = 'http:';
            let loc = window.location;
            if (loc.protocol === 'https:'){
                protocol = 'https:'
            }
            try{
                let response = await axios.post(`${protocol}//127.0.0.1:8000/api/auth/token`, {
                    username, password
                });
                if (response.data.access) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    this.setState({isLogin: true})
                }
            } catch({response}) {
                console.log(response)
                const {data} = response
                this.setState({isError: true, errors: data})
            }
        }
    }

    handleInput = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {isError, errors, isLogin} = this.state
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
                <form onSubmit={this.handleSubmit}>
                    <div className="control-group form-group">
                        <div className="controls">
                        <label htmlFor="id_username">Username</label>
                        <input onChange={this.handleInput} name="username" type="text" className="form-control" id="id_username" required />
                            <p className="help-block"></p>
                        </div>
                    </div>
                    <div className="control-group form-group">
                        <div className="controls">
                        <label htmlFor="id_password">Password</label>
                        <input onChange={this.handleInput} name="password" type="password" className="form-control" id="id_password" required />
                        </div>
                    </div>
                    {isError ? (<div id="success" className="list-group messages mt-2">
                        {Object.keys(errors).map(function(key) {
                            return <div key={key} className="alert alert-danger py-2 h6" role="alert">
                            {errors[key]}
                        </div>
                        })}
                    </div>) : ''
                    }
                    {isLogin ? <div  className="alert alert-success py-2 h6" role="alert">
                            Successfully Logged In, access token saved in local storage
                        </div>: ''}
                    <button type="submit" className="btn btn-primary" id="login-btn">Login</button>
                </form>
            </div>
            </div>

            </div>
        );
    }
}

export default Login;