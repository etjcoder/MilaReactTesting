import React, {Component} from "react";


class AdminCaptionCreator extends Component {

    state = {
        name: ""
    }

    render() {
        return (
            <div>
                <h3>Caption Creator Form</h3>
                <ul>
                    <li>Name:</li>
                    <li>Category:</li>
                    <li>Tags:</li>
                    <li>Caption:</li>
                </ul>
            </div>
        )
    }

}

export default AdminCaptionCreator