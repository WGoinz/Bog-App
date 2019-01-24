import React, { Component } from 'react';
import axios from "axios"
import EditCreatureForm from './EditCreatureForm';


class SingleCreature extends Component {
    state = {
        creature: {}
    }

    componentDidMount() {
        this.getCreature()
    }

    getCreature = () => {
        axios.get(`/api/creatures/${this.props.match.params.id}`).then((res) => {
            console.log("response", res.data)
            this.setState({ creature: res.data })
        })
    }

    render() {
        // console.log(this.state.creature)
        return (
            <div>
                <h1>Hello</h1>
                <p>{this.state.creature.name}</p>
                <p>{this.state.creature.description}</p>
                <EditCreatureForm  params={this.props.match.params.id} getCreature={this.getCreature} />
            </div>
        );
    }
}

export default SingleCreature;