import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        launches_list: [],
        sorted_launches: [],
        loading: true,
        year: 'all'
    }

    componentDidMount() {
            axios.get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                const launches = res.data.filter(launch => launch.upcoming === false);
                this.setState({launches_list: launches, sorted_launches: launches,  loading: false,});
                // console.log(this.state)
            })
            .catch(err => console.log(err));
    }

    handleChange = event => {
        const target = event.target
        const value = event.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]:value
        }, this.filterLaunches)
    }

    filterLaunches = () =>{
        let {
            launches_list, year
        } = this.state

        let tempLaunches = [...launches_list];
        if(year !== 'all'){
            tempLaunches = tempLaunches.filter(lauch => lauch.launch_year === year)
        }
        this.setState({
            sorted_launches: tempLaunches
        })
    }

    render() {
        return (
            <Context.Provider 
                value={{
                    ...this.state,
                    handleChange: this.handleChange
                }}> 
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;