import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AddItem from '../AddItem';
import Filter from '../Filter';
import TodoList from '../TodoList';
import Header from "../Header";
import Sort from '../Sort';
import { useState } from 'react';
import TodoCalendar from '../TodoCalendar';
import ToDoListItem from '../TodoList/TodoListItem/TodoListItem';


function App() {

  const itemsArr = [
    { text: "Buy groceries for next week", important: false, done: true, date: "08 Oct 2023", id: 1, },
    { text: "Renew car insurance", important: true, done: false, date: "29 Jun 2020", id: 2 },
    { text: "Sign up for online course", important: false, done: false, date: "31 Jun 2020", id: 3 },
  ]


  const [items, setItems] = useState(itemsArr);

  const [filter, setFilter] = useState('All');

  const [sort, setSort] = useState('Newest first');

  const [calClicked, setCalClicked] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  


  const [date, setDate] = useState((new Date()).toString());


  const onCalChange = date => {
    setDate(date.toString());
  };

  const onCalClick = () => {
    setCalClicked(!calClicked)
  }




  const deleteItem = (id) => {
    const idx = items.findIndex((el) => el.id === id)
    setItems([
      ...items.slice(0, idx),
      ...items.slice(idx + 1)
    ])
  }



  const onDoneOrImp = (id, button) => {

    const idx = items.findIndex((el) => el.id === id)
    let newItem = {};

    if (button === "important") {
      newItem = {
        ...items[idx],
        important: !items[idx].important
      }
    } else {
      newItem = {
        ...items[idx],
        done: !items[idx].done
      }
    }
    setItems(
      [
        ...items.slice(0, idx),
        newItem,
        ...items.slice(idx + 1)
      ]
    )
  }





  const onAddItem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1

    const newItem = {
      text: inputValue,
      important: false,
      id: id,
      date: "",
      done: false
    };

    setItems((prevState)=>
        [
          [...prevState, newItem]
        ]
      ) 
    }
  

  const onFilter = (items, filter) => {
    switch (filter) {
      case 'All':
        return items;
      case 'Done':
        return items.filter((el) => el.done)
      case 'Important':
        return items.filter((el) => el.important && !el.done)
      default:
        return items
    }
  }

  const onFilterChange = (filter) => {
    setFilter(filter)
  }

  const onSort = (items, sort) => {
    switch (sort) {
      case 'Oldest first':
        return items.sort((a, b) => new Date(a.date) - new Date(b.date))

      case 'Newest first':
        return items.sort((a, b) => new Date(b.date) - new Date(a.date))
      default:
        return items
    }
  }

  const onSortChange = (sort) => {
    setSort(sort)
  }


  const visibleItems = onSort(onFilter(items, filter), sort)
  return (
      <Container fluid style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Header />
            <p>{date.toString()}</p>
            <AddItem onCalClick={onCalClick} onAddItem={onAddItem} onInputChange={onInputChange} inputValue={inputValue}/>

            <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
              <Filter onFilterChange={onFilterChange} />
              <Sort onSortChange={onSortChange} />

            </div>

            <TodoList
              deleteItem={deleteItem}
              items={visibleItems}
              onDoneOrImp={onDoneOrImp}
            />
          </Col>
          <Col> {calClicked ?<TodoCalendar onCalChange={onCalChange} date={date}/>: null}</Col>
        </Row>


      </Container>


      )
}

      export default App;
