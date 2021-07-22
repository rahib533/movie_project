import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Serilaize from "form-serialize";

class AddMovie extends React.Component {

    onSub = (e)=>{
        e.preventDefault();
        const movie = Serilaize(e.target,{ hash: true });
        this.props.AddMovieProp(movie);
        //console.log(movie);
        //history.push("/");
    }
    render() {

        return  (
            <div className="container">
            <form onSubmit={this.onSub} className="mt-5">
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
                <div className="form-row" style={{display:'flex'}}>
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"/>
                    </div>
                    <div className="form-group col-md-2" >
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5"></textarea>
                    </div>
                </div>
                <br></br>
                <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
            </form>
        </div>
        )

    }
}


export default AddMovie;