import styles from "../styles/components/Journey.module.css";
import InfoCircle from "./InfoCircle";
import Container from "react-bootstrap/Container";

export default function Journey() {
  return (
    <div style={{ background: "white" }}>
      <div className={styles.headerText}>My Journey</div>
      <div className={styles.centennial}>
        <InfoCircle CircleTitle="Centennial Regional High School" />
      </div>
    </div>
  );
}
