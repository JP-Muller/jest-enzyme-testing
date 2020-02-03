import React, { Component } from 'react'
import axios from 'axios'
import {getPlaceholderData} from '../../helperFunctions'
import '../../Counters.css'


export class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: null,
            colorData: [],
            name: '',
            footBallSeason: null
        }
    }

    componentDidMount = () => {
        this.setCount()
        // this.getCurrentFootballSeason()
        getPlaceholderData()
        this.getData()
        this.setName('Jake', 'Muller')
    }

    // componentDidUpdate = (prevState) => {
    //     let {count} = this.state
    //     if (count !== prevState.count)
    // }

    mountCheck = () => {
        console.log('The component was mounted!')
    }

    setName = (first, last) => {
        this.setState({
            name: `${first} ${last}`
        })
    }

    getData = () => {
        this.setState({
            colorData: [
                {
                    color: "red",
                    value: "#f00"
                },
                {
                    color: "green",
                    value: "#0f0"
                },
                {
                    color: "blue",
                    value: "#00f"
                },
                {
                    color: "cyan",
                    value: "#0ff"
                },
                {
                    color: "magenta",
                    value: "#f0f"
                },
                {
                    color: "yellow",
                    value: "#ff0"
                },
                {
                    color: "black",
                    value: "#000"
                }
            ]
        })
    }

    getCurrentFootballSeason = () => {
        return axios.get('https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=e51c3989c4c643ef85084f27c7e1d466')
        .then(res => {
            return res.data
        })
        .catch(err => console.log('Error', err))
    }

    addNums = (num1, num2) => {
        return num1 + num2
    }

    setCount = () => {
        this.setState({
            count: 0
        })
    }

    incrementCount = () => {
        let {count} = this.state
        this.setState({
            count: count + 1
        })
    }

    decrementCount = () => {
        let {count} = this.state
        this.setState({
            count: count - 1
        })
    }
    render() {
        let {count} = this.state
        return (
            <div className='counter-wrapper'>
                <h3>Class Counter</h3>
                <div className='current-count'>
                        <h1>{count}</h1>
                    </div>
                    <div className='button-container'>
                        <button onClick={() => this.decrementCount()}><i className="far fa-minus-square" /></button>
                        <button onClick={() => this.incrementCount()}><i className="far fa-plus-square" /></button>
                    </div>                
            </div>
        )
    }
}

export default ClassCounter
