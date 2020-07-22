import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMovieList, getMovieListFilter} from '../actions/MovieListAction';

class MovieList extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectMovieId:'',
            selectYear:'',
            movieListArray:[]
        }
    }

    onChangeHanlde = (e) => {
        this.setState({ 
            selectYear: e.target.value,
            selectMovieId: e.target.value 
        });
    }

    componentDidMount(){
        this.props.getMovieList();
    }

    static getDerivedStateFromProps(props, state){
        if(props.movielistJson !== state.movieListArray){
            return {
                movieListArray:props.movielistJson
            }
        }
        return null;
    }

    MovieListFilter = () => {
        alert(this.state.selectYear)
        //return false;
        this.props.getMovieListFilter(this.state.selectYear);
    }

    MovieListView = () => {
        alert(this.state.selectMovieId)
        return false;
    }

    MovieListEdit = () => {
        alert(this.state.selectMovieId)
        return false;
    }

    MovieListDelete = () => {
        alert(this.state.selectMovieId)
        return false;
    }

    render(){
        const {movieListArray} = this.state;
        console.log('MovieList Search:', this.state.movieListArray);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-center">Movie List</h1>
                        <div className="col-sm-4">
                            <label htmlFor="year">Select Year: </label>
                            <select onChange={this.onChangeHanlde}>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                            </select>
                            <button onClick={this.MovieListFilter}>Search</button>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Poster</th>
                                <th scope="col">Title</th>
                                <th scope="col">Type</th>
                                <th scope="col">Year</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { movieListArray.map((item,i) => (
                                    <tr key={i}>
                                        <td><input type="checkbox" value={item.imdbID} onChange={this.onChangeHanlde} /></td>
                                        <td><img src={item.Poster} height="50px" width="50px"/></td>
                                        <td>{item.Title}</td>
                                        <td>{item.Type}</td>
                                        <td>{item.Year}</td>
                                        <td>
                                            <button onClick={this.MovieListView}>View</button>
                                            <button onClick={this.MovieListEdit}>Edit</button>
                                            <button onClick={this.MovieListDelete}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movielistJson:state.MovieListReducer.movielist
})

const mapDispatchToProps = {
    getMovieList, 
    getMovieListFilter
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);