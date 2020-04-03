import React from 'react';

const Task = props => {
    const style = {
        color: '#'
    };
    const { text, id, active, important } = props.task;
    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong>
                    <button onClick={() => props.change(id)}>
                        Done
                    </button>
                    <button onClick={() => props.delete(id)}>
                        x
                    </button>
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <p>
                    <strong>{text}</strong>
                    <button onClick={() => props.delete(id)}>
                        x
                    </button>
                </p>
            </div>
        );
    }
};

export default Task;
