import React, { Component } from 'react';
import User from './user';

class UserSuggestions extends Component {
    constructor(props) {
        super(props);

        this.state = {users: props.users};
    }

    // componentDidMount() {
    //     if (this.state.users.length > 0) {
    //         var users = document.querySelector('.user-suggestion');
    //         console.log('users');
    //     }
    // }

    setUsers() {
        if (!this.props.users) {
            return null;
        }

        return this.props.users.map((user) => {
            return (
                <User
                    user={user}
                    key={user.id}
                    onMentionSelect={this.props.onMentionSelect} />
            );
        });
    }

    render() {
        if (!this.props.users) {
            return null;
        } else {
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
