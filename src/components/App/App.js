import { Container, Card } from 'react-bootstrap';
import './App.css';
import AddItem from '../AddItem';
import Select from '../Select';
import TodoListItem from '../TodoList/TodoListItem'
import TodoList from '../TodoList';


function App() {
  return (
    <Container fluid >


      <Card
        style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
      >
        <Card.Body className="">
          <Card.Title className="text-center justify-content-center align-items-center ">
            <input class="form-check-input me-0" type="checkbox" checked="true"/>
            <u>My Todo-s</u>
          </Card.Title>

          <AddItem />

          <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
            <Select name="Filter" options="All" />
            <Select name="Sort" options="Added date" />
          </div>

          <TodoList />

        </Card.Body>
      </Card>




    </Container>
  )
}

export default App;
