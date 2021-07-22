import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SearchBar extends Component {

    myFormfunc = (event) =>{
        event.preventDefault();
    }

    

    render() {
        return (
            <form onSubmit={this.myFormfunc} style={{marginTop:17}}>
                <div className="form-row mb-5" style={{display:'flex'}}>
                    <div className="col-10">
                        <input onChange={this.props.searchProp} type="text" className="form-control" placeholder="Search a movie"></input>
                    </div>
                    <div className="col-2">
                        <Link to="/add"  type="button" className="btn btn-md btn-danger" style={{float:'right'}}>
                            Add Movie
                        </Link>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;