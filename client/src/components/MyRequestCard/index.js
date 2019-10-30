import React, { Component } from "react";
import "./style.css"
import API from "../../utils/API";
import SuggestedCaptions from "../SuggestedCaptions"
import SuggestionForm from "../SuggestionForm"
import Image from 'react-image-resizer';
import InfiniteUsersReqCard from "../InfiniteUsersReqCard";
import ReactDom from 'react-dom';
import Modal from 'react-modal';


class MyRequestCard extends Component {

    state = {
        categories: [],
        id: this.props.id,
        showSuggestions: true,
        showSuggestionForm: true,
        suggestions: [],
        goldStarGiven: "",
        modalIsOpen: false
    }

    customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '66%',
            // background: "transparent",
            color: "white",
            fontSize: '24px',
            // fontFamily: '"Courier New", Courier, monospace',
            fontFamily: "'Yantramanav', sans-serif",
            border: '0px',
            backgroundImage: 'linear-gradient(315deg, rgb(38, 19, 114) 9%, rgb(18, 8, 54)74%)'
        }
    };

    componentDidMount() {
        this.getSuggestions(this.props.id)
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    afterOpenModal = () => {
        // this.subtitle.style.color = '';
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    componentDidUpdate = () => {
        this.getSuggestions()
    }

    getSuggestions = (id) =>
        API.getSuggestions(id)
            .then(res =>
                this.setState({
                    suggestions: res.data.suggestedCaptions,
                    goldStarGiven: this.props.goldStarGiven
                })
            )

    onClickSuggestCaption() {
        if (this.state.showSuggestionForm === false) {
            this.setState({
                showSuggestionForm: true,
            })
        } else {
            this.setState({
                showSuggestionForm: false
            })
        }
    }

    onClickShowSuggestions() {
        if (this.state.showSuggestions === false) {
            this.setState({
                showSuggestions: true
            })
        } else {
            this.setState({
                showSuggestions: false
            })
        }
    }

    render() {
        return (

            <div className="col-md-4 col-sm-6 myreqcard" style={{textAlign: "center"}}>

                <br />
                <br /><br />
                <div id="flipcard-myrequest">
                    <div className="container">
                        <div className="front" onClick={this.openModal}>
                            <div id="image-here">
                                <img id="userImg" className="card-image" alt={this.props.id} src={this.props.imageSrc} />

                                {/* <SuggestionForm id={this.props.id} userdata={this.props.userdata} /> */}
                            </div>
                        </div>

                        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={this.customStyles} contentLabel="Your Request Viewer">
                            <div className="back">
                                    {this.state.showSuggestions ?
                                    <div className="ul" style={{ height: 300, overflow: 'auto' }}>
                                        <InfiniteUsersReqCard goldStarGiven={this.props.goldStarGiven} suggestions={this.state.suggestions} userdata={this.props.userdata} />
                                    </div>
                                    : null}
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        )

    }
}
export default MyRequestCard;