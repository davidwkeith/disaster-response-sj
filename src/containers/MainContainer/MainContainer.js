import React, { Component } from 'react'

import DisasterPosts from '../../compositions/DisasterPosts/DisasterPosts'
import { getPosts } from '../../api/api'

import './MainContainer.css'



class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        return getPosts().then(result => {
            this.setState(previousState => {
                return {
                    ...previousState,
                    posts: result
                }
            })
        })
    }

    render() {
        const { posts } = this.state
        return (
            <div className='MainContainer'>
                <h3>Active Disasters</h3>
                <hr />
                <DisasterPosts posts={ posts } />
            </div>
        );
    }
}

export default MainContainer;
