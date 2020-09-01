import React from "react";
import classes from './Profile.module.css';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return <div className={classes.content}>
            <Profile {...this.props} profile = {this.props.profile} />
        </div>
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataProfileContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataProfileContainerComponent);