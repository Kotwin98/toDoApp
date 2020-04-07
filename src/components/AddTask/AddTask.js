import React, { Component } from 'react';
import './AddTask.scss';

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
            <div className="form">
                <input
                    className="inputText"
                    type="text"
                    placeholder="write task"
                    value={this.state.text}
                    onChange={this.handleText}
                />
                <label htmlFor="important" className="container">
                    Important
                    <input
                        className="checkbox"
                        type="checkbox"
                        id="important"
                        checked={this.state.checked}
                        onChange={this.handleCheckbox}
                    />
                    <span className="checkmark"></span>
                </label>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTask;