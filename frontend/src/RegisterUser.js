import React, { Component } from 'react';

class RegisterUser extends Component {

    render() {

        return (
            <div>

                <form>
                    <div>
                        <label>Name</label>
                        <input placeholder="Enter Name" />
                    </div>

                    <div>
                        <label>Password</label>
                        <input placeholder="Enter Password" />
                    </div>

                    <button type="submit">Submit</button>

                </form>

            </div>
        );
    }
}

export default RegisterUser;
