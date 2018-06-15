import React, {Component} from 'react';
import Icon from '../img/zoom-split.svg';
class Searchbar extends Component {

  handleSubmit (e) {
    e.preventDefault();
    // what to do here
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} id="searchbar">
        <input ref="srch" type="search" id="search" placeholder="Søk etter..." />
        <button type="submit" aria-labelledby="Søk"><i class="icon-search lp"></i><span>Søk</span></button>

      </form>
    );
  }
}

export default Searchbar;
