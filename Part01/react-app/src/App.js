import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from './components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
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

  getReadContent() {
    return this.state.contents.find((content) => content.id === this.state.contentId);
  }

  getContent() {
    let _article = null;

    if (this.state.mode === 'welcome') {
      _article = <ReadContent title={this.state.welcome.title} desc={this.state.welcome.desc} />;
    } else if (this.state.mode === 'read') {
      let content = this.getReadContent();
      _article = <ReadContent title={content.title} desc={content.desc} />;
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
              mode: 'read',
              contentId: this.max_content_id,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === 'update') {
      _article = (
        <UpdateContent
          data={this.getReadContent()}
          onSubmit={function (_id, _title, _desc) {
            const nextContents = this.state.contents.map((c) => {
              if (c.id === _id) {
                return { id: _id, title: _title, desc: _desc };
              }
              return c;
            });
            console.log('nextContents: ', nextContents);

            this.setState({ contents: nextContents, mode: 'read' });
          }.bind(this)}
        />
      );
    }
    return _article;
  }

  render() {
    console.log('App render');

    console.log('render', this);
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome', contentId: 0 });
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
            if (_mode !== 'create' && this.state.contentId === 0) {
              alert('Please select a subject first.');
              this.setState({ mode: 'welcome' });
            } else if (_mode === 'delete') {
              if (window.confirm('really?')) {
                /*
                const afterDeletedContents = Array.from(this.state.contents);
                for (let i = 0; i < afterDeletedContents.length; i++) {
                  if (afterDeletedContents[i].id === this.state.contentId) {
                    afterDeletedContents.splice(i, 1);
                    break;
                  }
                }
                */
                // 필터로도 사용해봤음.
                const afterDeletedContents = this.state.contents.filter(
                  (c) => c.id !== this.state.contentId,
                );

                this.setState({ contents: afterDeletedContents, mode: 'welcome', contentId: 0 });
              }
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
