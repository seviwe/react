import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
        //this.state.editMode = true;
        //this.forceUpdate(); //лучше не юзать
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status != this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span onClick={this.activateEditMode}>{this.props.status || "No status..."}</span>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                }
            </div>
        )
    }
}

export default ProfileStatus;