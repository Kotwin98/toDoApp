import React from 'react';
import './Task.scss';

const Task = props => {
    const style = {
        color: '#e2a69e'
    };
    const { text, id, active, important } = props.task;
    if (active) {
        return (
            <div className="taskActive">
                <p>
                    <strong style={important ? style : null}>{text}</strong>
                    <button className="done" onClick={() => props.change(id)}>
                        Done
                    </button>
                    <button className="delete" onClick={() => props.delete(id)}>
                        x
                    </button>
                </p>
            </div>
        );
    } else {
        return (
            <div className="taskDone">
                <p>
                    <strong>{text}</strong>
                    <button className="delete" onClick={() => props.delete(id)}>
                        x
                    </button>
                </p>
            </div>
        );
    }
};

export default Task;
