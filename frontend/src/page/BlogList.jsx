import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import API from '../api';
import { CardList } from '../components';

class BlogList extends Component {
    state = {
        list: [],
        loading: true,
        errors: ''
    }

    async componentDidMount() {
        try{
            const {data} = await API.get('/blogs');
            if(!data.hasOwnProperty('error')){
                this.setState({list: data, loading: false, errors: ''})
            }
        } catch (err) {
            this.setState({loading: false, errors: err.response.data})
        }
        
        // this.setState{list: data, loading: false}
    }

    render() {
        const {loading, errors, list} = this.state
        return (
            <section>
                <div className="container">
                <h1 className="mt-4 mb-3">Blog Home Two
                <small>Subheading</small>
                </h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Blog List</li>
                </ol>
                    {!loading
                    ? errors
                    ? <div className="text-center my-5 alert alert-danger">{errors['detail']}</div>   
                    : list.map(({ user: {username}, category: {name}, id, title, slug, content, created_at}, index) => {
                        return <CardList key={slug} categoryName={name} created_at={created_at} username={username} slug={slug} title={title} content={content}/>
                    }) 
                    : <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>}
                </div>
            </section>
        );
    }
}

export default BlogList;