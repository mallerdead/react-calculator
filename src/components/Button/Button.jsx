import styles from "./Button.module.css"

export const Button = ({ button }) => {
    return (<button className={`${styles.calculatorButton} ${button.color === "orange" ? styles.orange : button.color === "white" ? styles.white : button.color === "red" ? styles.red : ""} `} onClick={button.func}>{button.value}</button >)
}