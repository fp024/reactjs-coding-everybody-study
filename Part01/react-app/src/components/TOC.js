import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('===> TOC render shouldComponentUpdate');
    if (this.props.data === nextProps.data) {
      return false;
    }
    return true;
  }

  render() {
    console.log('===> TOC render');
    const lists = this.props.data.map((content) => {
      return (
        <li key={content.id}>
          <a
            href={'/content/' + content.id}
            data-id={content.id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {content.title}
          </a>
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
