import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {getSingleBlog} from '../api'

class BlogDetails extends Component {
    state = {
        loading: true,
        object: {}
    }
    async componentDidMount() {
        let post_id = this.props.match.params.id
        try{
            let obj = await getSingleBlog(post_id)
            this.setState({loading: false, object: obj})
        } catch(err) {
            console.error(err)
        }
    }
    render() {
        const { loading, object} = this.state
        return (
            <div className="container">
                <h1 className="mt-4 mb-3">Post Title
                <small>by
                    <Link to="">Start Bootstrap</Link>
                </small>
                </h1>
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active"></li>
                </ol>
                {!loading ? 
                <div className="row">

                <div className="col-lg-8">

                    <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />

                    <hr />

                    <p>Posted on January 1, 2017 at 12:00 PM</p>

                    <hr />

                <p className="lead">{object.title}</p>

                <p>{object.body}</p>
                    <hr />

                    <div className="card my-4">
                    <h5 className="card-header">Leave a Comment:</h5>
                    <div className="card-body">
                        <form>
                        <div className="form-group">
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    </div>

                    
                    <div className="media mb-4">
                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">et aut qui eaque porro quo quis velit rerum</h5>
                        iste maxime et molestiae
            qui aliquam doloremque earum beatae repellat
            in aut eum libero eos itaque pariatur exercitationem
            vel quam non
                    </div>
                    </div>
                    
                    <div className="media mb-4">
                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">sunt omnis aliquam labore eveniet</h5>
                        sint delectus nesciunt ipsum et aliquid et libero
            aut suscipit et molestiae nemo pariatur sequi
            repudiandae ea placeat neque quas eveniet
            mollitia quae laboriosam
                    </div>
                    </div>
                    
                    <div className="media mb-4">
                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">quo neque dolorem dolorum non incidunt</h5>
                        aut sunt recusandae laboriosam omnis asperiores et
            nulla ipsum rerum quis doloremque rerum optio mollitia provident
            sed iste aut id
            numquam repudiandae veritatis
                    </div>
                    </div>
                    
                    <div className="media mb-4">
                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">aut quia et corporis voluptas quisquam voluptatem</h5>
                        et dolorem sit
            reprehenderit sapiente occaecati iusto sit impedit nobis ut quia
            maiores debitis pariatur nostrum et aut
            assumenda error qui deserunt laborum quaerat et
                    </div>
                    </div>
                    
                    <div className="media mb-4">
                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">et eum provident maxime beatae minus et doloremque perspiciatis</h5>
                        minus nihil sunt dolor
            ipsum a illum quis
            quasi officiis cupiditate architecto sit consequatur ut
            et sed quasi quam doloremque
                    </div>
                    </div>
                    
                </div>

                <div className="col-md-4">

                    <div className="card mb-4">
                    <h5 className="card-header">Search</h5>
                    <div className="card-body">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="inpug-group-append">
                            <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                        </div>
                    </div>
                    </div>

                    <div className="card my-4">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="#">Web Design</Link>
                            </li>
                            <li>
                                <Link to="#">HTML</Link>
                            </li>
                            <li>
                                <Link to="#">Freebies</Link>
                            </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="#">JavaScript</Link>
                            </li>
                            <li>
                                <Link to="#">CSS</Link>
                            </li>
                            <li>
                                <Link to="#">Tutorials</Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="card my-4">
                    <h5 className="card-header">Side Widget</h5>
                    <div className="card-body">
                        You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </div>
                    </div>

                </div>

                </div>
                : <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
            </div>
        );
    }
}

export default BlogDetails;