import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
// import EditMilaModal from "./EditMilaModal";

class AdminFeaturedMila extends Component {

    state = {
        categories: [],
        captions: [],
    }

    componentDidMount() {
        console.log("Component Mounted");
        console.log(this.props.featuredCaps)
    }

    // Two ways to do this, pass through entire object or just an ID

    unfeatureCaption = (id) => {
        API.unfeatureCaption(id)
            .then(res => console.log("Successfully unfeatured caption!"))
    }
    
    render() {
        return (
            <div className="card">
                <h5>Featured Mila Captions Below</h5>
                
                <br />
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Caption</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Reference</th>
                            <th>Original Author</th>
                            <th>Tags</th>
                            <th>Un-Feature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.featuredCaps.map(caption => (
                            <tr key={caption._id}>
                                <td>{caption.caption}</td>
                                <td>{caption.category}</td>
                                <td>{caption.author}</td>
                                <td>{caption.reference}</td>
                                <td>{caption.originalAuthor}</td>
                                <td>{JSON.stringify(caption.tags)}</td>
                                <td><button value={caption._id} onClick={() => this.unfeatureCaption(caption._id)}>Un-feature</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminFeaturedMila