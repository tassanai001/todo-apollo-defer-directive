import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: '50px' }}>
        <div class="container">
          <label for="new-task">Name</label><input id="new-task" type="text" />
          <button>Add</button>

          <div style={{ marginTop: '20px' }}>
            <label for="new-task">Name</label><input id="new-task" type="text" />
            <button>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;