import React, {Component} from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component{
  render(){
    return(
    <div className="container">
    {
      (this.props.movieList.resultCount === 0) ? 
      <h2 className="page-header text-center">No Movie Found</h2> :
      <h2 className="page-header text-center">List of Movie</h2>
    }
    {
      this.props.movieList.results.map((list, key) => 
      <div className="details-column" key={key}>
      <div className="details-record">
        <div style={{display:"inline-block"}}>
          <img src={list.artworkUrl100} alt={list.collectionName} style={{maxHeight: '86px'}}/>
        </div>
        <div className="details-container">
          <div className="details-title" title={list.collectionName}>{list.collectionName}</div>
          <p>More</p>
        </div>
      </div>
    </div>
     )
  }
  </div>
  )};
}

export default MovieDetails;
