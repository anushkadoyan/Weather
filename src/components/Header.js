import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {search:""};
  }


  handleSubmit(event) {
    event.preventDefault();
    if(this.state.search.length>0 && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.search)) {
      this.props.onSearchChange(this.state.search)
    }
  }

  handleChange(value) {
    this.setState({search: value});
  }

  render() {
    return (
      <div className="header">
        <span className="header-title">
          Weather
        </span>
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.value} onChange={event=>this.handleChange(event.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Header;
