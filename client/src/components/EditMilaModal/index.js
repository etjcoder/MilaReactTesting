import React from "react";
import ReactDom from "react-dom";
import cogoToast from "cogo-toast"
import { Input } from "../Form";
import API from "../../utils/API"
import "./style.css"

export default class EditMilaModal extends React.Component {

    state = {
        id: this.props.caption._id,
        caption: this.props.caption.caption,
        author: this.props.caption.author,
        category: this.props.caption.category,
        reference: this.props.caption.reference,
        lyric: this.props.caption.lyric,
        quote: this.props.caption.quote,
        originalAuthor: this.props.caption.originalAuthor,
        tags: this.props.caption.tags
    }

    componentDidMount() {
        console.log(this.props.caption)
        console.log(this.props.categories)
  
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    prepareFormSubmit = event => {
        event.preventDefault();

        var apiTags = this.state.tags

        if (typeof apiTags === "string") {
            var dataString = apiTags.replace(/]|[[]\"/g, "");
            var noSpaceString = dataString.replace(/ /g, "");

            this.handleFormSubmit(noSpaceString)

        } else {
            this.handleFormSubmit(apiTags)
        }

    }
    handleUpdate = () => {
        cogoToast.success("Your edit was a success!")
        this.props.rerender();
    }

    handleFormSubmit = arr => {

        if (typeof arr === "string") {
            var lowerCaseTags = arr.toLowerCase();
            var splicedArr = lowerCaseTags.split(",")
            console.log(splicedArr);

            API.updateCaption(this.state.id, {
                caption: this.state.caption,
                category: this.state.category,
                author: this.state.author,
                reference: this.state.reference,
                originalAuthor: this.state.originalAuthor,
                tags: splicedArr
            })
                .then(res => 
                    this.handleUpdate())
                .catch(err => console.log)

        } else {

            API.updateCaption(this.state.id, {
                caption: this.state.caption,
                category: this.state.category,
                author: this.state.author,
                reference: this.state.reference,
                originalAuthor: this.state.originalAuthor,
                tags: this.state.tags
            })
                .then(res => this.handleUpdate())
                .catch(err => console.log)
        }

    }


    render() {
        return (
            <div className="card admin-editModal">
                <form>
                    <h5 id="admin-modalHead">Input your caption here</h5>
                    <Input value={this.state.caption} onChange={this.handleInputChange} name="caption" placeholder="Caption goes here" />
                    <select id="catDrop5" value={this.state.category} onChange={this.handleInputChange} name="category">

                        {this.props.categories.map(listedcategory => (
                            <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                        ))}

                    </select>
                    <Input value={this.state.author} onChange={this.handleInputChange} name="author" placeholder="Your name goes here" />
                    <Input value={this.state.reference} onChange={this.handleInputChange} name="reference" placeholder="Caption's reference goes here" />
                    <p><i>When re-entering tags, please separate with comma's!</i></p>
                    <Input value={this.state.tags} onChange={this.handleInputChange} name="tags" placeholder="Insert captions here" />
                    <button id="admin-modalEditBtn" onClick={this.prepareFormSubmit}>Submit your caption</button>
                </form>
            </div>
        )
    }
}