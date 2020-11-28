import React from 'react';

import { Link } from 'react-router-dom';


const CardList = ({ username, categoryName, title, slug, content, created_at,  }) => {
    console.log(slug)
    const detailUrl = '/posts/' + slug
    return <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6">
                        <Link to={detailUrl}><img className="img-fluid rounded" src="http://placehold.it/750x300" alt="" /></Link>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text">{content}</p>
                        <p className="card-text"><strong>Category: </strong>{categoryName}</p>
                        <Link to={detailUrl} className="btn btn-primary">Read More →</Link>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">Posted on {created_at} by
                <Link to="#">{username}</Link>
            </div>
        </div>
}

export default CardList