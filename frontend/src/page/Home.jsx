import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getblogList } from '../api';
import { CardList } from '../components';

class Home extends Component {
    state = {
        list: [],
        loading: true
    }

    async componentDidMount() {
        let data = await getblogList()
        if(!data.hasOwnProperty('error')){
            this.setState({list: data, loading: false})
        }
        // this.setState{list: data, loading: false}
    }

    render() {
        const {loading, list} = this.state

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
                    {!loading ? list.map(({ user_id, id, title, body }, index) => {
                        return <CardList key={id} user_id={user_id} id={id} title={title} body={body} />
                    } ) :  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>}
                </div>
            </section>
        );
    }
}

export default Home;