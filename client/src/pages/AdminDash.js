// // import React, { Component } from "react";
// // // import Jumbotron from "../components/Jumbotron/";
// // import API from "../utils/API";
// // import Nav from "../components/Nav/";
// // import { Col, Row, Container } from "../components/Grid/";
// // import { List, ListItem } from "../components/List/";
// // import { Input, FormBtn } from "../components/Form";
// // import SearchBtn from "../components/SearchBtn";
// import AdminCaptionCreator from "../components/AdminCaptionCreator";
// import AdminCategoryCreator from "../components/AdminCategoryCreator";
// import AdminEditMila from "../components/AdminEditMila";
// import AdminFeaturedMila from "../components/AdminFeaturedMila";
// // import SideNavPageAdmin from "../components/SideNavPageAdmin";
// import "./page-styles/css/style.css";

// class AdminDash extends Component {

//     state = {
//         showAdminCaptionCreator: false,
//         showCategoryCreator: false,
//         showMilaEditor: false,
//         showMilaFeatured: false,

//         featuredCaps: []
//     };

//     componentDidMount() {
//         console.log("loaded admin Dashboard page");
//         // this.gatherCategories()
//         this.gatherAdminCaptions()
//         this.gatherFeaturedCaptions()

//     };

//     // gatherCategories = () => {
//     //     API.getCategories()
//     //         .then(res =>
//     //             this.setState({
//     //                 categories: res.data
//     //             }))
//     //     // .catch(err => console.log(err)))
//     // };

//     gatherAdminCaptions = () => {
//         API.getCaptions()
//             .then(res =>
//                 this.setState({
//                     captions: res.data
//                 }))
//     }

//     gatherFeaturedCaptions = () => {
//         API.getFeaturedCaptions()
//             .then(res =>
//                 this.setState({
//                     featuredCaps: res.data
//                 }))
//     }

//     onClickAdminCaption = () => {
//         if (this.state.showAdminCaptionCreator === false) {
//             this.setState({
//                 showAdminCaptionCreator: true,
//                 showCategoryCreator: false,
//                 showMilaEditor: false,
//                 showMilaFeatured: false
//             })
//         } else {
//             this.setState({
//                 showAdminCaptionCreator: false
//             })
//         }
//     }

//     onClickCategory = () => {
//         if (this.state.showCategoryCreator === false) {
//             this.setState({
//                 showAdminCaptionCreator: false,
//                 showCategoryCreator: true,
//                 showMilaEditor: false,
//                 showMilaFeatured: false
//             })
//         } else {
//             this.setState({
//                 showCategoryCreator: false
//             })
//         }
//     }

//     onClickEditMila = () => {
//         if (this.state.showMilaEditor === false) {
//             this.setState({
//                 showAdminCaptionCreator: false,
//                 showCategoryCreator: false,
//                 showMilaEditor: true,
//                 showMilaFeatured: false
//             })
//         } else {
//             this.setState({
//                 showMilaEditor: false
//             })
//         }
//     }

//     onClickFeaturedMila = () => {
//         if (this.state.showMilaFeatured === false) {
//             this.setState({
//                 showAdminCaptionCreator: false,
//                 showCategoryCreator: false,
//                 showMilaEditor: false,
//                 showMilaFeatured: true
//             })
//         } else {
//             this.setState({
//                 showMilaFeatured: false
//             })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Nav />
//                 <SideNavPageAdmin createOption={this.onClickAdminCaption} createCatOption={this.onClickCategory} editOption={this.onClickEditMila} featureOption={this.onClickFeaturedMila} />
//                 <Container fluid>
//                     <Row>
//                         <Col size="lg-12">
//                             <div>
//                                 {this.state.showAdminCaptionCreator ? <AdminCaptionCreator categories={this.state.categories} toggleShow={this.OnClickCaption} /> : null}
//                             </div>
//                             <div>
//                                 {this.state.showCategoryCreator ? <AdminCategoryCreator categories={this.state.categories} rerender={this.state.gatherCategories} toggleShow={this.OnClickCategory} /> : null}
//                             </div>
//                             <div>
//                                 {this.state.showMilaEditor ? <AdminEditMila categories={this.state.categories} captions={this.state.captions} rerender={this.gatherAdminCaptions} /> : null}
//                             </div>
//                             <div>
//                                 {this.state.showMilaFeatured ? <AdminFeaturedMila featuredCaps={this.state.featuredCaps} rerender={this.gatherFeaturedCaptions} toggleShow={this.OnClickFeaturedMila} /> : null}
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         )
//     }
// }

// export default AdminDash;




