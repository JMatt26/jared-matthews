import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styles from '../styles/components/Portrait.module.css'

export default function Portrait() {
    return (
        <Container>
             <Image src="Profile.png" alt="Profile" className={styles.portrait} />
        </Container>
    );
}