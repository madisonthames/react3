import React, {Component} from 'react'
import Data from './Data'

export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        let activeId = this.props.activeId;
        return (
        <div className='mainInfo'>
            <div className='id'> 
                <h1>{this.props.activeId}/{this.props.users.length}</h1>
            </div> 

            <div className='usersInfo'>
                <h1>{this.props.users[activeId - 1].name.first} {this.props.users[activeId - 1].name.last}</h1>

                <p><span>From: </span>{this.props.users[activeId - 1].city}, {this.props.users[activeId - 1].country}</p>

                <p><span>Job Title: </span> {this.props.users[activeId - 1].title}</p>

                <p><span>Employer: </span>{this.props.users[activeId - 1].employer}</p>

                <p className='favoriteMovies'><span>Favorite Movies:</span></p>
                    <ol>
                        <li>{this.props.users[activeId - 1].favoriteMovies[0]}</li>
                        <li>{this.props.users[activeId - 1].favoriteMovies[1]}</li>
                        <li>{this.props.users[activeId - 1].favoriteMovies[2]}</li>
                    </ol>

            </div>

        </div> 
        )
    }

}

