import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        text: '',
        checked: false
    };

    handleText = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked
        });
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
                    value={this.state.text}
                    onChange={this.handleText}
                />
                <label htmlFor="important">
                    Important
                    <input
                        type="checkbox"
                        id="important"
                        checked={this.state.checked}
                        onChange={this.handleCheckbox}
                    />
                </label>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTask;