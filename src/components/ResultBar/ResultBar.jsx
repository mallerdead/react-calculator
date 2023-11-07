import styles from "./ResultBar.module.css"

export const ResultBar = ({ expression, result }) => {
    return (<div className={styles.resultBar}><div className={styles.expression}>{`${expression.firstOperand} ${expression.operator} ${expression.secondOperand}`}</div><div className={styles.result}>{result}</div></div>)
}