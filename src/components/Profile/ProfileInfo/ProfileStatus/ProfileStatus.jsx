import React from 'react';
import styles from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: ""
    }

    activateEditMode() {
        this.setState({
            editMode: true
        });
        //this.state.editMode = true;
        //this.forceUpdate(); //лучше не юзать
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                }
                {this.state.editMode &&
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
                }
            </div>
        )
    }
}

export default ProfileStatus;