import React, { Component } from 'react';
import User from './user';

class UserSuggestions extends Component {
    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {users: props.users};
        console.log(`user suggestions ${this.state}`);
        console.log(this.state);
    }

    setUsers() {
        console.log(this.props);
        if (!this.props.users) {
            return null;
        }

        return this.props.users.map(user => {
            console.log(user);
            return (
                <User user={user} key={user.id} />
            );
        });
    }

    render() {
        if (!this.props.users) {
            return null;
        } else {
            console.log("here");
            const users = this.setUsers();
            return (
                <ul className="users">
                    {users}
                </ul>
            );
        }
    }
}

export default UserSuggestions;
