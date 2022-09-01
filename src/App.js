import React, {Component} from "react";
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 3
  state = {
    information: [
      {
        name: '이수형',
        phone: '010-1111-1111',
        id: 1
      },
      {
        name: '이지웅',
        phone: '010-2222-2222',
        id: 2
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;