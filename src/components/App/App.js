import { Container, Col, Card, Row, Tooltip, Button, Form } from 'react-bootstrap';
import './App.css';
import AddItem from '../AddItem';
import Select from '../Select';
import TodoListItem from '../TodoListItem'


function App() {
  return (
    <Container fluid >


      <Card
        style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
      >
        <Card.Body className="">
          <Card.Title className="text-center justify-content-center align-items-center ">
            <u>My Todo-s</u>
          </Card.Title>
          
          <AddItem/>
      
          <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
            <Select name="Filter" options="All"/>
            <Select name="Sort" options="Added date"/>
          </div>

          <TodoListItem title="Buy groceries for next week" date="28th Jun 2020"/>
          <TodoListItem  title="Renew car insurance" date="28th Jun 2020"/>
          <TodoListItem title="Sign up for online course" date="28th Jun 2020" />
          
        </Card.Body>
      </Card>




    </Container>
  )
}

export default App;
