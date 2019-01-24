import React, { Component } from 'react';
import { Redirect } from 'react-router'
import axios from "axios"


class EditCreatureForm extends Component {
    state = {
        creature: {
            name: "",
            description: ""
        }
    }
    deleteCreature = () => {
        axios.delete(`/api/creatures/${this.props.params}`)
            .then((res) => {
                console.log(res)
                window.location = res.data.redirect
            })
    }
    clearForm = () => {
        this.setState({
            creature: {
                name: "",
                description: ""
            }
        })
    }
    handleChange = (event) => {
        let newCreature = { ...this.state.creature }
        newCreature[event.target.name] = event.target.value
        console.log("NEW Creature", newCreature)
        this.setState({ creature: newCreature })
    }
    createNewCreature = (e) => {
        e.preventDefault()
        let currentCreature = this.state.creature
        console.log(currentCreature)
        const newCreature = {
            name: currentCreature.name,
            description: currentCreature.description
        }
        console.log(newCreature)
        axios.put(`/api/creatures/${this.props.params}`, newCreature)
            .then((res) => {
                console.log(res)
                this.props.getCreature()
                this.clearForm()
            })
    }
    componentDidMount = () => {
        this.props.getCreature()
    }
    render() {
        return (

            <div>
                <button onClick={this.deleteCreature}>Delete</button>
                <h1>Edit Current Creature </h1>
                <form onSubmit={this.createNewCreature}>
                    <input placeholder="Name" name="name" onChange={this.handleChange}></input> <br />
                    <input placeholder="Description" name="description" onChange={this.handleChange}></input> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}

export default EditCreatureForm;