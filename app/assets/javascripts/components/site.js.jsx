var Email = React.createClass({
  render: function() {
    return (
      <div>
        <label>Email</label>
        <input type="email"></input> 
      </div>
    );
  }
});

var Contact = React.createClass({
  render: function() {
    return (
      <Email />
    );
  }
});