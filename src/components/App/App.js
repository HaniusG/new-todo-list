import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AddItem from '../AddItem';
import Filter from '../Filter';
import TodoList from '../TodoList';
import Header from "../Header";
import Sort from '../Sort';
import { useState } from 'react';
import TodoCalendar from '../TodoCalendar';
import { validateInput, validateDate } from '../../utils/validator';
import ErrorMessage from '../ErrorMessage';

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

  const [date, setDate] = useState("");

  const [errorMessage, setErrrorMessage] = useState(false)



  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  


 


  const onCalChange = date => {
    let displaydate = date.getDate()+" "+ date.toLocaleString('default', { month: 'short' }) + " " +date.getFullYear()
    setDate(displaydate.toString());
  };

  const onCalClick = () => {
    setCalClicked(!calClicked)
  }




  const deleteItem = (id) => {
    const idx = items.findIndex((el) => el.id === id)
    setItems(prevState=>
      [
      ...prevState.slice(0, idx),
      ...prevState.slice(idx + 1)
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
    setItems((prevState)=>
      [
        ...prevState.slice(0, idx),
        newItem,
        ...prevState.slice(idx + 1)
      ]
    )
  }





  const onAddItem = () => {
    const idx = itemsArr.length ? items.length + 1 : 1
    if(validateInput(inputValue) && validateDate(date)){
      const newItem = {
        text: inputValue,
        important: false,
        id: idx,
        date,
        done: false
      };
  
      setItems((prevState)=>
          [
            ...prevState, newItem
          ]
        )

      setInputValue("")
      setDate("")
      setErrrorMessage(false)
      }else{
        setErrrorMessage(true)
      }
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


  let visibleItems = onSort(items, sort)
  visibleItems=onFilter(items, filter)
  return (
      <Container fluid style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}>
        <Row>
          <Col></Col>

          <Col xs={6}>
            <Header />
            <p>{date.toString()}</p>
            <AddItem onCalClick={onCalClick} onAddItem={onAddItem} onInputChange={onInputChange} inputValue={inputValue}/>
            {errorMessage ? <ErrorMessage text="Add text and date"/>: null}
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
