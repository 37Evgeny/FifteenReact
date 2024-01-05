import { useState, useEffect } from 'react';
import Overlay from "../Overlay/Overlay";
import "./Board.css"
import Square from '../Square/Square';
import Winner from '../Winner/Winner';
import NewGame from '../newGame/NewGame';

const Board = () => {

    // функция заполнения и сортировки
    const shuffle = () => 
        new Array (16)
        .fill()
        // заполняем массив
        .map((_, i) => i+1)
        // сортируем массив
        .sort(() => Math.random() -.5)
        // присваиваем value, index 
        .map((x, i) => ({value : x, index: i}))

    const [numbers, setNumbers] = useState(shuffle())
    const [animating, setAnimating] = useState(false)

    // изменение положения при клике
    const moveSquare = square => {
        const item16 = numbers.find(n => n.value === 16).index
        if(![item16-1, item16+1, item16-4, item16+4].includes(square.index) || animating)
            return

            const newNumbers = [...numbers].map(number => {
                if (number.index !== item16 && number.index !== square.index)
                return number
            else if (number.value === 16)
                return {value: 16, index: square.index}
            return {value : square.value, index: item16}
            })
        setAnimating(true)
        setNumbers(newNumbers)
        setTimeout(() => setAnimating(false), 400)
    }

    const handleKeyDown = e => {
        const item16 = numbers.find(n => n.value === 16).index
        if (e.keyCode === 37 && !(item16 % 4 === 3))
            moveSquare(numbers.find(n => n.index === item16 + 1))
        if (e.keyCode === 38 && !(item16 > 11))
            moveSquare(numbers.find(n => n.index === item16 + 4))
        if (e.keyCode === 39 && !(item16 % 4 === 0))
            moveSquare(numbers.find(n => n.index === item16 - 1))
        if (e.keyCode === 40 && !(item16 < 4))
            moveSquare(numbers.find(n => n.index === item16 -4))
    }

    const reset = () => setNumbers(shuffle());

    useEffect(reset, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    })

    return <div className="game">
        <NewGame reset={reset}/>
        <div className="board">
            <Overlay/>   
            {numbers.map((x, i) => 
                <Square key={i} number={x} moveSquare = {moveSquare}/>
            )}  
        </div> 
            <Winner numbers = {numbers} reset = {reset}/>
            
    </div>
}

export default Board;