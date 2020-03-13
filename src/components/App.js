import React from 'react';
import ContactCard from './ContactCard';
import contactData from './ContactData';
import Joke from './Joke';
import jokesData from './JokesData';
import MyInfo from './MyInfo';
import StarWarsList from './StarWarList';
import TodoData from './TodoData';
import TodoItem from './TodoItem';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos : TodoData,
      jokes : jokesData,
      contacts: contactData,
      characters: [],
      isLoading: true,
      isApiRqComplete: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people")
    .then(response => response.json())
    .then(data => {
        this.setState({
            characters: data.results,
            isApiRqComplete: true
        })
    })
    setTimeout(() => {
      this.setState({
          isLoading: false
      })
  }, 0)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed : !todo.completed
          }
        }
        return todo;
      })
      return {
        todos : updatedTodos
      }
    })
  }
  
  getJokesArray() {
    return this.jokeComponents = this.state.jokes.map(joke => {
      return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
      )
    });
  }

  getContactsArray() {
    return this.contactComponents = this.state.contacts.map(contact => {
      return (
        <ContactCard key={contact.id} contact={contact}/>
      )
    });
  }

  getTodoItemsArray() {
    return this.TodoDataComponents = this.state.todos.map(todo => {
      return (
        <TodoItem key={todo.id} item={todo} handleChange={this.handleChange}/>
      )
    });
  }
  getStarWarsList() {
    return this.starWarsCharList = this.state.characters.map(char => {
      return (
        <StarWarsList key={char.url} character={char}/>
      )
    });
  }

  render() {
    return (
      
      <div>
        {this.state.isLoading ?
        <h1>Loading...</h1> :
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
            {this.getJokesArray()}
          </div>
          <div>
          {this.state.isApiRqComplete ? 
            <div>
              <h2>Star Wars List</h2>
              {this.getStarWarsList()}
            </div>
          : <div>Star Wars Data Loading May the Force be with you </div>}
          </div>
        </div> 
        }
      </div>
    )
  }
}
