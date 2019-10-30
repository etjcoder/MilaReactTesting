import React, { Component } from "react";
import ReactDom from "react-dom";
import cogoToast from "cogo-toast"
import { Input } from "../Form";
import API from "../../utils/API";
import "./style.css";

class LeaderBoard extends Component {

    state = {
        users: [],
    }

    componentDidMount() {
        console.log("Component Mounted");
        console.log(this.props.featuredCaps)
        // this.getAllUserData()
        this.getLeaderBoard()
    }

    getAllUserData = () => {
        API.getAllUserData()
            .then(res => 

                console.log(res)
                // the.setState({
                //     users: res.data
                // })
            )
    }

    getLeaderBoard = () => {
        API.getLeaderBoardData()
            .then(res =>
                console.log(res)
                
            )
    }

    
    render() {
        return (
            <div className="card" id="userLeaderBoard">
                <h5 id="userLeaderBoard-head">Leaderboard below</h5>
                
                <br />
                <br />
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Username</th>
                            <th>Gold Stars</th>
                            <th>Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.props.featuredCaps.map(caption => (
                            <tr key={caption._id}>
                                <td>{caption.caption}</td>
                                <td>{caption.category}</td>
                                <td>{caption.author}</td>
                                <td>{caption.reference}</td>
                                <td>{caption.originalAuthor}</td>
                                <td>{JSON.stringify(caption.tags)}</td>
                                <td><button value={caption._id} onClick={() => this.unfeatureCaption(caption._id)}>Un-feature</button></td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LeaderBoard