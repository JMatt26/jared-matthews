import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/components/TopNavbar.module.css'
import { BsFillMoonFill } from "react-icons/bs";

export default function TopNavBar() {
    return (
        <Navbar style={{background: "#ffff", outline: "thin solid"}} fixed="top" collapseOnSelect expand="sm">
            <Container>
             <Image src="Logo.png" height="90" alt="Logo" />
             </Container>
            <Container> 
                <Nav.Link href="" className={styles.navText} style={{fontSize: "1.2rem"}}>Skills</Nav.Link>
                <Nav.Link href="" className={styles.navText} style={{fontSize: "1.2rem"}}>Projects</Nav.Link>
                <Nav.Link href="" className={styles.navText} style={{fontSize: "1.2rem"}}>Download Resume</Nav.Link>
                    <BsFillMoonFill size={25} style={{marginRight: '2rem'}}/>
            </Container>
        </Navbar>
    );
}