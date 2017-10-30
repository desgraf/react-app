import React, { Component } from 'react';


class UisRegister extends Component {
    render () {
        return (
            <div>
                <h1>Registration</h1>
                <div>
                    <label for="user">User</label>
                    <input type="text" id="user"></input>
                </div>
            </div>
        );
    };
}
export default UisRegister;