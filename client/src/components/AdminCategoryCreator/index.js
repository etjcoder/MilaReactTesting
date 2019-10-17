import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API";

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

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.saveCategory({
            category: this.state.category
        })
        .then(res => console.log("Successfully added book"))
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
            <div className="card bg-dark text-white">
                <form>
                    <h5>Input your caption here</h5>
                    <Input value={this.state.category} onChange={this.handleInputChange} name="category" placeholder="Category goes here" />
                    <button onClick={this.handleFormSubmit}>Create this Category</button>
                </form>
                <div>
                    <h6>Existing Categories: </h6>
                    {this.props.categories.map(listedcategory => (
                        <p key={listedcategory._id}>{listedcategory.category}</p>
                    ))}
                </div>
            </div>
        )
    }

}

export default AdminCategoryCreator
