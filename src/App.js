import React, {useState} from 'react';
import SlotsData from './data/SlotsData';
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col, Container, Dropdown, Form, Button } from 'react-bootstrap';


function App() {
  const [menuType, setMenuType] = useState("");

  function checkMenu(e){
    setMenuType(e.target.id)
  }

  function handleParking(){
    console.log(menuType)
  }

  const data = SlotsData.map( item => {
    return(
        <Card
          key = {item._id}
          slotName = {item.slotName}
          charge = {item.charge}
          isActive = {item.isActive}
          menuType = {menuType}
          desc = {item.description}
        />
      )
  });
  return (
    <React.Fragment>
      <Container fluid="md">
        <Row>
        <Col></Col>
          <Col xs={5}>
            <h1 className="text-center">Add Your Vehicle First</h1>
            <Form>
              <Dropdown className="dropdownMenus" onClick={e => checkMenu(e)}>
                <Dropdown.Toggle variant="secondary btn-block">
                  {menuType ? menuType : 'Vehicle Type'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item id="SP">Small</Dropdown.Item>
                  <Dropdown.Item id="MP">Medium</Dropdown.Item>
                  <Dropdown.Item id="LP">Large</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>  
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <Row> 
            {data}
        </Row>
      </Container>
    </React.Fragment> 
  );
}

export default App;
