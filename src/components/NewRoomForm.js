import React from 'react';

class NewRoomForm extends React.Component {
  constructor() {
    super();
    this.state = {
      roomName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      roomName: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.setState({ roomName: '' });
  }

  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Create new room.."
            value={this.state.roomName}
            required
          />
          <button id="create-room-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default NewRoomForm;
