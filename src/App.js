import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./component/SearchBar";
import MovieList from "./component/MovieList";
import AddMovie from "./component/AddMovie";
import EditMovie from "./component/EditMovie";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {

  editMovie = async (movie,id) =>{
    const obj = movie;
    obj.id = id;
    //console.log(obj);
    const url = "https://bsite.net/rahibjafar7/api/movies/";
    await axios.put(url,obj);
    await this.getInfo();
  }

  AddMovieF = async (movie) =>{
    //console.log(movie);
    const url = "https://bsite.net/rahibjafar7/api/movies/";
    await axios.post(url,movie);

    this.setState(state =>({movies : state.movies.concat(movie)}));
  }

  DeleteMovie = async (movie) => {
    const url = "https://bsite.net/rahibjafar7/api/movies?id=" + movie.id;
    await axios.delete(url);

    const newState = this.state.movies.filter(m => m.id !== movie.id);
    //this.setState({movies:newState});
    this.setState(state => ({ movies: newState }));
  }
  state = {
    movies:
      [],

    searchQuerry: ""
  }

  async componentDidMount() {
    await this.getInfo();
  }

  async getInfo(){
    const url = "https://bsite.net/rahibjafar7/api/movies";
    var response = await axios.get(url);
    //console.log(response.data);
    this.setState({ movies: response.data });
  }


  searchFunc = (event) => {
    //console.log(event.target.value);
    this.setState({ searchQuerry: event.target.value });
  }


  render() {

    let filteredMovies = this.state.movies.filter(
      (movie) => { return movie.name.toUpperCase().indexOf(this.state.searchQuerry.toUpperCase()) !== -1 }
    )

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact render={() => (
              <React.Fragment>
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchProp={this.searchFunc}
                      valProp={this.state.searchQuerry}
                    />
                  </div>
                </div>
                <MovieList movies={filteredMovies}
                  deleteMovieProp={this.DeleteMovie}
                />
              </React.Fragment>
            )}>
            </Route>
            <Route path="/add" exact render={({history})=>(
              <AddMovie AddMovieProp = {(movie) => {
                this.AddMovieF(movie);
                history.push("/");
              }} />
            )}/>
            <Route path="/edit/:id" render={(props) =>(
                <EditMovie {...props} 
                editMovieProp={(movie,id) =>{
                  this.editMovie(movie,id);
                }}/>
            )}/>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
