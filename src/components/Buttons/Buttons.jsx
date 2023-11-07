import styles from "./Buttons.module.css"
import { Button } from ".."

export const Buttons = ({ buttons }) => {
    return (<div className={styles.buttons}>{buttons.map(button => <Button button={button} />)}</div>)
}