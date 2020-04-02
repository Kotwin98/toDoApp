import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        text: '',
        checked: false
    };

    handleClick = () => {
        const { text, checked } = this.state;
        if (text.length > 2) {
            const add = this.props.add(text, checked);
            if (add) {
                this.setState({
                    text: '',
                    checked: false
                });
            }
        }
    };

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
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTask;