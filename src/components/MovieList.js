import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMovieList, getMovieListFilter} from '../actions/MovieListAction';
import MoviLists from './MoviLists';
import MyList from './MyList';
import MyWatchList from './MyWatchList';

class MovieList extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectMovieId:'',
            selectYear:'',
            movieListArray:[],
            myMovielist:[],
            myWatchMovieList:[]
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
        this.props.getMovieListFilter(this.state.selectYear);
    }

    addWatchlist = movies => {
        //console.log(movies)        
        const existingWatchmovie = this.state.myWatchMovieList.filter(w => w.imdbID === movies.imdbID);
        const withoutexistingWatchmovie = this.state.myWatchMovieList.filter(w => w.imdbID !== movies.imdbID);
        if(existingWatchmovie > 0){ 
            const updateWatchmovies = {
                ...existingWatchmovie[0]
            }     
            this.setState({
                myWatchMovieList:[...withoutexistingWatchmovie, updateWatchmovies]
            })      
        }else{
            this.setState({
                myWatchMovieList:[...withoutexistingWatchmovie, movies]
            })
        }       
    }

    addMyMovieList = movies => {
        console.log(movies)        
        const existingmovie = this.state.myMovielist.filter(m => m.imdbID === movies.imdbID);
        const withoutexistingmovie = this.state.myMovielist.filter(m => m.imdbID !== movies.imdbID);
        if(existingmovie > 0){ 
            const updatemovies = {
                ...existingmovie[0]
            }     
            this.setState({
                myMovielist:[...withoutexistingmovie, updatemovies]
            })      
        }else{
            this.setState({
                myMovielist:[...withoutexistingmovie, movies]
            })
        }                
    }

    removeMylist = (id) => {        
        const removeaddmovie = this.state.myMovielist.filter(m => m.imdbID === id);        
        this.state.myMovielist.splice(removeaddmovie, 1);        
        this.setState({
            myMovielist:[...this.state.myMovielist]
        })        
    }

    removeMyWatchlist = (id) => {        
        const removeaddwatchmovie = this.state.myWatchMovieList.filter(m => m.imdbID === id);        
        this.state.myWatchMovieList.splice(removeaddwatchmovie, 1);        
        this.setState({
            myWatchMovieList:[...this.state.myWatchMovieList]
        })        
    }

    render(){
        const {movieListArray} = this.state;
        console.log('addMyMovieList', this.state.myMovielist)
        console.log('addWatchlist', this.state.myWatchMovieList)
        return (
            <main className="pa3 pa5-na flex flex-wrap">
                <ul className="list pl0 mt0 measure center">
                { this.state.myMovielist.map((items) => (
                        <MyList {...items} removeMylist={this.removeMylist} />
                    ))
                }
                </ul>
                <ul className="list pl0 mt0 measure center">
                { this.state.myWatchMovieList.map((items) => (
                        <MyWatchList {...items} removeMyWatchlist={this.removeMyWatchlist} />
                    ))
                }
                </ul>
                <main className="pa3 pa5-na flex flex-wrap">
                    <div className="cover bg-left bg-center-l">
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
                </main>
                <main className="pa3 pa5-na flex flex-wrap">
                { movieListArray.map((movie) => (
                    <MoviLists {...movie} key={movie.imdbID} addMylist={this.addMyMovieList} addWatchlist={this.addWatchlist}/>
                ))}
                </main> 
            </main>                          
        )
    }
}

const mapStateToProps = (state) => ({
    movielistJson:state.MovieListReducer.movielist,
    addmylist:state.AddMovieListReducer
})

const mapDispatchToProps = {
    getMovieList, 
    getMovieListFilter
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);