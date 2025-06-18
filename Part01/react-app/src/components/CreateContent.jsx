import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    console.log('CreateContent render');
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            // Vitest에서 JDOM 환경 테스트시 아래 접근 방식은 문제가 될 수 있음.
            // this.props.onSubmit(e.target.title.value, e.target.desc.value);
            const formData = new FormData(e.target);
            const title = formData.get('title');
            const desc = formData.get('desc');
            this.props.onSubmit(title, desc);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
