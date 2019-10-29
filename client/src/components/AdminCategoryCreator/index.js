import React, { Component } from "react";
import ReactDom from "react-dom";
import { Input } from "../Form";
import API from "../../utils/API";
import cogoToast from "cogo-toast"
import "./style.css";


class AdminCategoryCreator extends Component {

    state = {
        category: "",
    }

    componentDidMount() {

        console.log(this.props.categories);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSuccess = () => {
        cogoToast.success("Added new Category!")
        this.props.rerender();
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.saveCategory({
            category: this.state.category
        })
        .then(res => this.handleSuccess())
        .catch(err => console.log(err));
    }

    // saveCategory = body => {
    //     // event.preventDefault()

    //     API.saveCategory(body)
    //         .then(res => console.log("You've saved this category to your DB!"))
    //         .catch(err => console.log(err));

    // }


    render() {
        return (
            <div className="card" id="adminCategory">
                <form>
                    <h5 id="admin-requestHeadCat">Input your caption here</h5>
                    <Input value={this.state.category} onChange={this.handleInputChange} name="category" placeholder="Category goes here" />
                    <button id="admin-createCategoryBtn" onClick={this.handleFormSubmit}>Create this Category</button>
                </form>
                <div> 
                    <br />
                    <h6 id="admin-requestHeadCat">Existing Categories: </h6>
                    {this.props.categories.map(listedcategory => (
                        <p key={listedcategory._id}>{listedcategory.category}</p>
                    ))}
                </div>
            </div>
        )
    }

}

export default AdminCategoryCreator
