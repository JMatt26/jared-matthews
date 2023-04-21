import styles from '../styles/components/QuickIntro.module.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function QuickIntro() {
    return (
        <>
        <div className={styles.headerText}>
            Student🧑🏽‍🎓
        </div>
        <div className={styles.midHeaderText}>
            Aspiring Engineer👨🏽‍💻
        </div>
        <div className={styles.bottomHeaderText}>
            Learner📚
        </div>
        <p className={styles.bodyText}>
            It’s a pleasure to meet everyone, I’m Jared Matthews! I am an aspiring software engineer at McGill University, 
            currently pursuing my Software Engineering Co-op undergraduate degree. I believe every concept is just a puzzle, 
            and I will always take on the challenge of solving it.
        </p>
        </>
    );
}