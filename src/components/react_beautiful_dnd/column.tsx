import React, { Component } from "react";
import styled from 'styled-components'
import "./column.scss";
import Task from "./task";

import { Droppable } from "react-beautiful-dnd";


const TaskList = styled.div`
    padding:8px;
`;
class Column extends Component<any> {
  render() {
    return (
      <div className="column column_container">
        <h3>{this.props.column.title}</h3>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            < div className="column_task_list"
            ref={provided.innerRef}
            {...provided.droppableProps}
            
            >
              {this.props.tasks.map((task: any, index: any) => (
                <Task key={task.id} task={task} index={index}/>
              ))}
              {provided.placeholder}
            </div >
          )}
        </Droppable>

    </div>
    
    );
  }
}

export default Column;
