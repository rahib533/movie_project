import React, { Component } from 'react';
import axios from "axios";
import Serilaize from "form-serialize";

class EditMovie extends React.Component {

onSub = (e) =>{
    e.preventDefault();
    const movie = Serilaize(e.target,{ hash: true });
    const id = this.props.match.params.id;
    this.props.editMovieProp(movie,id);
    this.props.history.push("/");
}

state = {
    name:"",
    rating:"",
    imageUrl:"",
    overView:""
}

myOnChange =(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    });
}

async componentDidMount() {
    const id = this.props.match.params.id;
    const url = "https://localhost:5001/api/movies/"+id;
    var response = await axios.get(url);
    const movie = response.data;
    this.setState({
        name:movie.name,
        rating:movie.rating,
        imageUrl:movie.imageUrl,
        overView:movie.overView
    });
}


    render() {
        return (
            <div className="container">
            <form onSubmit={this.onSub} className="mt-5">
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Edit A Movie.." disabled/>
                <div className="form-row" style={{display:'flex'}}>
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.myOnChange}/>
                    </div>
                    <div className="form-group col-md-2" >
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"
                                value={this.state.rating}
                                onChange={this.myOnChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageUrl"
                                value={this.state.imageUrl}
                                onChange={this.myOnChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overView" rows="5"
                                value={this.state.overView}
                                onChange={this.myOnChange}></textarea>
                    </div>
                </div>
                <br></br>
                <input type="submit" className="btn btn-danger btn-block" value="Edit Movie" />
            </form>
        </div>
        )
    }
}

export default EditMovie;