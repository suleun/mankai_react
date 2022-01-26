import React, { Component } from 'react';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';
import './App.css';
class App extends Component {
  id = 4;
  state = {
    toDoList: [
      {
        id: 1,
        text: '러닝 뛰기',
      },
      {
        id: 2,
        text: '공부하기',
      },
      {
        id: 3,
        text: '독서하기',
      },
    ],
    search: '',
  };

  handleCreate = (data) => {
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.concat({
        id: this.id++,
        ...data,
      }),
    });
  };
  handleUpdate = (id, data) => {
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.map((toDoList) => {
        console.log(toDoList);
        if (toDoList.id === id) {
          console.log(toDoList.id + ' / ' + id);
          return {
            id,
            ...data,
          };
        }
        return toDoList;
      }),
    });
  };
  handleRemove = (id) => {
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.filter((data) => data.id !== id),
    });
  };

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

 render() {
    const { toDoList, search } = this.state;
    return (
      <div>
        <ToDoForm onCreate={this.handleCreate} />
        <input value={search} name="search" onChange={this.handleSearch} placeholder=" ..검색" />
        <ToDoList
          data={toDoList.filter((data) => data.text.indexOf(search) !== -1)}
          onUpdate={this.handleUpdate}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;