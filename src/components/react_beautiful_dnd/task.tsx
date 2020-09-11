import React, { Component } from "react";
import "./task.scss";
import { Draggable } from "react-beautiful-dnd";

class Task extends Component<any> {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <div
            className="task task_container"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Task;
