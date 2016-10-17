import React from 'react';

class ToDew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
      <label>New Task:</label>
      <input required></input>
      <button>Submit</button>
      {/* <br/>
      <br/>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div> */}
      </div>
    );
  }

}

export default ToDew;
