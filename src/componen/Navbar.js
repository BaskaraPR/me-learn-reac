import React from "react"
import {Nav, Navbar, Container} from "react-bootstrap"

function Navibar({navValue}){
    return(
        <div>
        <Navbar>
            <Container>
            <Navbar.Brand>I</Navbar.Brand>
            <Navbar.Brand>Fucking</Navbar.Brand>
            <Navbar.Brand>Love</Navbar.Brand>
            <Nav.Link href="https://youtu.be/wqdUd06npUI?si=Gr4tYOIAmxPcWBmB" target = "_blank">
            {!navValue ? "Eurobeat": navValue}
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navibar