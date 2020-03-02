import React from 'react';
import ContactCard from './ContactCard';
import contactData from './ContactData';
import Joke from './Joke';
import jokesData from './JokesData';
import MyInfo from './MyInfo';
import TodoData from './TodoData';
import TodoItem from './TodoItem';

class App extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  getJokesArray() {
    return this.jokeComponents = jokesData.map(joke => {
      return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
      )
    });
  }

  getContactsArray() {
    return this.contactComponents = contactData.map(contact => {
      return (
        <ContactCard key={contact.id} contact={contact}/>
      )
    });
  }

  getTodoItemsArray() {
    return this.TodoDataComponents = TodoData.map(todo => {
      return (
        <TodoItem key={todo.id} item={todo}/>
      )
    });
  }

  render() {
    return (
      <div>
        <h2>this is Parent Component</h2>
          <MyInfo/>
        <div className="todo-list">
          <h2>Todo List</h2>
          {this.getTodoItemsArray()}
        </div>
        <div>
          <h2>Contacts</h2>
          { this.getContactsArray()}
        </div>
        <div>
          <h2>Jokes</h2>
          {this.getTodoItemsArray()}
        </div>
      </div>
    )
  }
}

export default App
