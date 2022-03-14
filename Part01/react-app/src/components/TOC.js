import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC render');
    const lists = this.props.data.map((content) => {
      return (
        <li key={content.id}>
          <a href={'/content/' + content.id}>{content.title}</a>
        </li>
      );
    });

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
