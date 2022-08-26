import React, { Component} from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                내 이름은 <b>{this.props.name}</b> 이다!
            </div>
        )
    }
}

MyName.defaultProps = { 
    name : '기본이름'
};

export default MyName;