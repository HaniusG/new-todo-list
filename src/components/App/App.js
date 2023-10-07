import { Container, Card } from 'react-bootstrap';
import './App.css';
import AddItem from '../AddItem';
import Select from '../Select';
import TodoList from '../TodoList';
import Header from "../Header"


function App() {
  return (
    <Container fluid style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}>

          <Header/>

          <AddItem />

          <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
            <Select name="Filter" options="All" />
            <Select name="Sort" options="Added date" />
          </div>

          <TodoList />

    </Container>
  )
}

export default App;
