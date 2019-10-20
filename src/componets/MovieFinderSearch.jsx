import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import {fetchMovieDetails} from '../actions/movieFinderAction.jsx';

class MovieFinderSearch extends Component{
  constructor(){
    super()
    this.state = {
      searchText : '',
      fetchingData : false
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    event.preventDefault();
    this.setState({searchText : value});
  }

  handleSubmit = (event) => {
    const {searchText} = this.state;
    event.preventDefault();
    this.props.fetchMovieDetailsFromAPI(searchText, this.togglefetch);
    this.togglefetch(true);
  }

  togglefetch = bool =>{
    this.setState({fetchingData : bool});
  }

  render(){
    return(
      <div className="d-flex justify-content-center search-box">
          <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <div className="input-group">
              <input 
                value = {this.state.searchText}
                onChange = {this.handleChange}
                type="text" 
                className="form-control" 
                placeholder="Search" />
              <div className="input-group-btn">
                <button className="btn btn-outline-white sm-2 search-button" type="submit">Search</button>
              </div>
            </div>
            {(this.state.fetchingData) && 
            <div 
              className = "d-flex justify-content-center search-box"
              style={{marginTop: '1em'}}>
              Fetching Data Please Wait...
            </div>
          }
          </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const fetchMovieDetailsFromAPI = (data, callback) => {
      dispatch(fetchMovieDetails(data, callback));
    }
  return {
    fetchMovieDetailsFromAPI,
  };
}

export default connect(
  null,
  mapDispatchToProps,
  null,
)(MovieFinderSearch);