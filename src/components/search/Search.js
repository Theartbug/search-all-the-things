import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './search.css';

export default class Search extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  state = {
    search: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    if(!search.trim()) return; //if empty do nothing

    this.props.onSearch(search);
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {
    const { search } = this.state;

    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <label>
          Search Title:&nbsp;
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}