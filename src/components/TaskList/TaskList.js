import React from 'react';
import Task from './Task/Task';

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
        <>
            <div>
                <h3>Tasks to do:</h3>
                {activeTasks.length > 0 ? activeTasks : 'No added tasks'}
            </div>
            <div>
                <h4>Done ({doneTasks.length})</h4>
                {done.length > 5 && (
                    <span>Your last 5 tasks:</span>
                )}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
};

export default TaskList;