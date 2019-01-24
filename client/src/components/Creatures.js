import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import NewCreatureForm from './NewCreatureForm';


class Creatures extends Component {
    state = {
        creatures: [],
        toggleNewCreature: true,
        creature: {
            name: "",
            description: ""
        }
    }
    handleChange = (event) => {
        let newCreature = { ...this.state.creature }
        newCreature[event.target.name] = event.target.value
        console.log("NEW Creature", newCreature)
        this.setState({ creature: newCreature })
    }
    componentDidMount() {
        this.getAllCreatures()
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
        axios.post("/api/creatures", newCreature)
        .then((res) => {
            console.log(res)
            this.getAllCreatures()
        })
    }

    getAllCreatures = () => {
        axios.get("/api/creatures").then((res) => {
            console.log(res.data)
            this.setState({ creatures: res.data })
        })
    }

    addNewCreature = () => {
        let toggleNewCreature = this.state.toggleNewCreature
        console.log(toggleNewCreature)
        this.setState({ toggleNewCreature: !toggleNewCreature })
    }

    render() {
        let creatureArray = this.state.creatures.map((creature, i) => {
            return (
                <div className={i}>
                    <Link to={`/creatures/${creature._id}`}><h1>{creature.name}</h1></Link>
                </div>
            )
        })
        return (
            <div>
                {creatureArray}
                {this.state.toggleNewCreature
                    ? <button onClick={this.addNewCreature}>Add New Creature</button>
                    : <NewCreatureForm createNewCreature={this.createNewCreature} handleChange={this.handleChange} addNewCreature={this.addNewCreature} />
                }
            </div>
        );
    }
}

export default Creatures;