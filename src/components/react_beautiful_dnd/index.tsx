import React, { Component } from 'react';
import initialData from './initial-data';
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
class ReactDragAndDrop extends Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = initialData;
    }
    onDragEnd = (result: any) => {
        const { destination, source, draggableId} = result;
        if(!destination){
            return;
        }
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            }
        };
        this.setState(newState);
    }
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
            <div>
                {this.state.columnOrder.map((columnId:any) => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map( (taskId: any) => this.state.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks}/>

                })}
            </div>
            </DragDropContext>
        );
    }
}

export default ReactDragAndDrop;