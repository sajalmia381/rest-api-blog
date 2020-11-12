import React from 'react';

import { Link } from 'react-router-dom';


const CardList = ({ user_id, id, title, body }) => {
    const detailUrl = '/posts/' + id
    return <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6">
                        <Link to={detailUrl}><img className="img-fluid rounded" src="http://placehold.it/750x300" alt="" /></Link>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text">{body}</p>
                        <Link to={detailUrl} className="btn btn-primary">Read More →</Link>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">Posted on January 1, 2017 by
                <Link to="#">Start Bootstrap</Link>
            </div>
        </div>
}

export default CardList