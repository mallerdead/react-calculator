import styles from "./Calculator.module.css"
import { Buttons, ResultBar } from ".."
import { useState } from "react"

export const Calculator = () => {
    const [expression, setExpression] = useState({ firstOperand: "", operator: "", secondOperand: "" })
    const [result, setResult] = useState("0")

    const addNumber = (number) => setExpression(prev => {
        if (prev.operator) {
            return { ...prev, secondOperand: prev.secondOperand + number }
        }
        else if (prev.firstOperand === "0" && number === "0") {
            return prev
        }
        return { ...prev, firstOperand: prev.firstOperand + number }
    })
    const addSign = (sign) => {
        setExpression(prev => {
            if (prev.firstOperand === "") {
                return prev
            }
            return { ...prev, operator: sign }
        })
    }
    const clearExpression = () => {
        setExpression({ firstOperand: "", operator: "", secondOperand: "" })
        setResult("0")
    }
    const calculateResult = () => {
        const { firstOperand, operator, secondOperand } = expression
        if (operator === "+") {
            setResult(+firstOperand + +secondOperand)
        }
        else if (operator === "-") {
            setResult(+firstOperand - +secondOperand)
        }
        else if (operator === "x") {
            setResult(+firstOperand * +secondOperand)
        }
        else if (operator === "/") {
            setResult(+firstOperand / + secondOperand)
        }
    }
    const backspace = () => {
        setExpression(prev => {
            if (prev.secondOperand === "" && prev.operator === "") {
                return { ...prev, firstOperand: prev.firstOperand.slice(0, prev.firstOperand.length - 1) }
            }
            else if (prev.secondOperand === "" && prev.operator !== "") {
                return { ...prev, operator: "" }
            }
            else {
                return { ...prev, secondOperand: prev.secondOperand.slice(0, prev.secondOperand.length - 1) }
            }
        })
    }
    const swapSignNumber = () => {
        if (expression.secondOperand === "") {
            setExpression(prev => {
                return {
                    ...prev, firstOperand: (prev.firstOperand[0] === "-" ? prev.firstOperand.slice(1) : `-${prev.firstOperand}`)
                }
            })
        }
        else {
            setExpression(prev => {
                return {
                    ...prev, secondOperand: (prev.secondOperand[0] === "-" ? prev.secondOperand.slice(1) : `-${prev.secondOperand}`)
                }
            })
        }
    }
    const findPercent = () => {
        setResult(expression.firstOperand / 100)
    }

    const CalculatorButtons = [{ value: "C", color: "white", func: clearExpression },
    { value: "+/-", color: "white", func: swapSignNumber },
    { value: "%", color: "white", func: findPercent },
    { value: "/", color: "orange", func: () => addSign("/") },
    { value: "7", color: "gray", func: () => addNumber("7") },
    { value: "8", color: "gray", func: () => addNumber("8") },
    { value: "9", color: "gray", func: () => addNumber("9") },
    { value: "x", color: "orange", func: () => addSign("x") },
    { value: "4", color: "gray", func: () => addNumber("4") },
    { value: "5", color: "gray", func: () => addNumber("5") },
    { value: "6", color: "gray", func: () => addNumber("6") },
    { value: "-", color: "orange", func: () => addSign("-") },
    { value: "1", color: "gray", func: () => addNumber("1") },
    { value: "2", color: "gray", func: () => addNumber("2") },
    { value: "3", color: "gray", func: () => addNumber("3") },
    { value: "+", color: "orange", func: () => addSign("+") },
    { value: "0", color: "gray", func: () => addNumber("0") },
    { value: ".", color: "gray", func: () => addNumber(".") },
    { value: "←", color: "gray", func: backspace },
    { value: "=", color: "red", func: calculateResult }]

    return (
        <div className={styles.calculator}>
            <ResultBar expression={expression} result={result} />
            <Buttons buttons={CalculatorButtons} />
        </div>)
}