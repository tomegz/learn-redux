import React from "react";

class Comments extends React.Component {
  renderComment(comment, i) {
    const { postId } = this.props.params;
    const index = i;
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, postId, index)}>&times;</button>
        </p>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.postComment(postId, author, comment);
    this.refs.commentForm.reset();
  }
  render() {
    return (
      /*loop through comments and display them if there are any!*/
      <div className="comments">
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;