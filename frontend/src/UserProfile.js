import React, { Component } from 'react';

class Profile extends Component {

    render() {

        return (
            <div>

                <form>

                    <div>
                        <label>Name</label>
                    </div>

                    <div>
                        <label>User Role</label>
                    </div>

                    <button type="submit">Submit</button>

                </form>

            </div>
        );
    }
}

export default Profile;