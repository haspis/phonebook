import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        edited: false,
        name: '',
        phone: '',
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdited = () => {
        const { edited } = this.state;
        this.setState({
            edited: !edited
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;
        if(!prevState.edited && this.state.edited) {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.edited && !this.state.edited) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.edited
            && !nextState.edited
            && nextProps.info === this.props.info) {
                return false;
        }

        return true;
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { edited } = this.state;

        //수정모드
        if(edited) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="NAME"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="Phone"
                            placeholder="PHONE"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdited}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        const {
            name, phone //, id
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdited}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;