var React = require('react');
var Comment = require('./components/comment');
var CommentList = require('./components/commentlist');
var CommentForm = require('./components/commentform');
var CommentBox = require('./components/commentbox');

var App = React.createClass({
  render: function() {
    return (
      <CommentBox url="comments.json" pollInterval={2000} />
    )
  }
});

React.render(<App />, document.getElementById('content'))

/*React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);*/






