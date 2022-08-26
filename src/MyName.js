import React from 'react';

/*class MyName extends Component {
    render() {
        return (
            <div>
                <div>
                    내 이름은 <b>{this.props.name}</b> 이다!
                </div>
                <div>

                </div>
            </div>
        )
    }
}
*/

const MyName = ({ name }) => {
    return (
        <div>
            안녕 내 이름은 {name} 이다!
        </div>
    );
}

MyName.defaultProps = { 
    name : '기본이름'
};

export default MyName;