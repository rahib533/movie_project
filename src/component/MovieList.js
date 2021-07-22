import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const MovieList = (props) => {
    
        return (
            <div className="row">
                {props.movies.map((movie,i) => (

                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageUrl} alt="Interstellar" className="card-img-top" width="50" height="540"></img>
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie.overView}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" onClick={(event)=>props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                    <Link to={"/edit/"+movie.id} type="button" className="btn btn-md btn-outline-primary">
                                    Edit
                                    </Link>
                                    <h2><span className="btn btn-info">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}




            </div>
        )
    
}

export default MovieList;