import styles from "../styles/components/InfoCircle.module.css";

export default function InfoCircle({ CircleTitle }) {
  return (
    <div style={{ background: "white" }}>
      <div className={styles.circleHeader}>{CircleTitle}</div>
      <div className={styles.circle}></div>
    </div>
  );
}
