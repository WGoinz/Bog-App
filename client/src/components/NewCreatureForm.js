import React, { Component } from 'react';

class NewCreatureForm extends Component {
    render() {
        return (
            <div>
                <h1>New Creature Form</h1>
                <form onSubmit={this.props.createNewCreature}>
                        <input placeholder="Name" name="name" onChange={this.props.handleChange}></input> <br />
                        <input placeholder="Description" name="description" onChange={this.props.handleChange}></input> <br />
                        <button type="submit">Submit</button>
                        <button onClick={this.props.addNewCreature}>Exit</button>
                    </form>
            </div>
        );
    }
}

export default NewCreatureForm;