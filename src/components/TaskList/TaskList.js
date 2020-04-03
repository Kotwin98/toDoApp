import React from 'react';

const TaskList = props => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    const activeTasks = active.map(task => (
        <Task
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change} 
        />
    ));

    const doneTasks = done.map(task => (
        <Task 
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change} 
        />
    ));
    return (

    );
};

export default TaskList;