import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="write task"
                />
                <label htmlFor="important">
                    Important
                    <input
                        type="checkbox"
                        id="important"
                    />
                </label>
                <button>Add</button>
            </div>
        );
    }
}

export default AddTask;