import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      subject: { title: 'WEB', sub: 'World Wid Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contentId: 0,
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    };
  }

  render() {
    console.log('App render');
    let _title,
      _desc,
      _article = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      let content = this.state.contents.find((content) => content.id === this.state.contentId);
      _title = content.title;
      _desc = content.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            console.log(_title, _desc);
            this.max_content_id++;

            this.setState({
              contents: this.state.contents.concat({
                id: this.max_content_id,
                title: _title,
                desc: _desc,
              }),
            });
          }.bind(this)}
        />
      );
    }

    console.log('render', this);
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        />
        <TOC
          onChangePage={function (id) {
            this.setState({ mode: 'read', contentId: Number(id) });
          }.bind(this)}
          data={this.state.contents}
        />
        <Control
          onChangeMode={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        />
        {_article}
      </div>
    );
  }
}

export default App;
