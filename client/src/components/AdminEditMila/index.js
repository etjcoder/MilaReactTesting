import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";
import EditMilaModal from "../EditMilaModal";

class AdminEditMila extends Component {

    state = {
        categories: [],
        captions: [],
        caption: "",
        category: "",
        reference: "",
        lyric: "",
        quote: "",
        originalAuthor: "",
        tags: "",
        editMilaShown: false,
        editMilaData: ""
    }

    componentDidMount() {
        console.log("Component Mounted");
        console.log(this.props.captions);
    }

    // Two ways to do this, pass through entire object or just an ID
    editMilaRow = (data) => {

        console.log("You've chosen to revise: " + data);
        console.log("The ID you've chosen is: " + JSON.stringify(data));
        if (this.state.editMilaShown === false) {
            this.setState({
                editMilaShown: true,
                editMilaData: data
            }) 
        } else {
                this.setState({
                    editMilaShown: false,
                    editMilaData: ""
                })
            }
        }
    
    deleteCaption = (id) => {

        API.deleteCaption(id)
            .then(res => console.log("Successfully deleted caption!"))
            .catch(err => console.log(err));
    }

    featureCaption = (id) => {
        API.featureCaption(id)
            .then(res => console.log("Successfully featured caption!"))
    }
    
    render() {
        return (
            <div className="card">
                <h5>Edit Mila Captions Below</h5>
                <div>
                    {this.state.editMilaShown ? <EditMilaModal caption={this.state.editMilaData} categories={this.props.categories}/> : null}
                </div>
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
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Feature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.captions.map(caption => (
                            <tr key={caption._id}>
                                <td>{caption.caption}</td>
                                <td>{caption.category}</td>
                                <td>{caption.author}</td>
                                <td>{caption.reference}</td>
                                <td>{caption.originalAuthor}</td>
                                <td>{JSON.stringify(caption.tags)}</td>
                                <td><button value={caption._id} onClick={() => this.editMilaRow(caption)}>Edit</button></td>
                                <td><button value={caption._id} onClick={() => this.deleteCaption(caption._id)}>Delete</button></td>
                                <td><button value={caption._id} onClick={() => this.featureCaption(caption._id)}>Feature</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminEditMila