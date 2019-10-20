import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../style/MovieFinder.css';
import MovieFinderHeader from './MovieFinderHeader.jsx';
import MovieFinderSearch from './MovieFinderSearch.jsx';
import MovieDetails from './MovieDetails.jsx';

class MovieFinder extends Component {
  
  render(){
    return(
      <React.Fragment>
        <MovieFinderHeader/>
        <MovieFinderSearch/>
        {
          (!_.isEmpty(this.props.movieList)) && 
          <MovieDetails movieList={this.props.movieList}/>
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    movieList: state.movieList || [],
  };
}

export default connect(
  mapStateToProps,
  null,
  null,
)(MovieFinder);