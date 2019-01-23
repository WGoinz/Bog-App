import React, { Component } from 'react';
import axios from "axios"
import SingleCreature from './SingleCreature';

class Creatures extends Component {
    state = {
        creatures: []
    }
    componentDidMount() {
        axios.get("/api/creatures").then((res) => {
            console.log(res.data)
            this.setState({ creatures: res.data })
        })
    }

    render() {
        let creatureArray = this.state.creatures.map((creature, i) => {
            return (
                <div >
                    <SingleCreature key={i} name={creature.name} desc={creature.description} />
                </div>
            )
        })
        return (
            <div>
                {creatureArray}
            </div>
        );
    }
}

export default Creatures;