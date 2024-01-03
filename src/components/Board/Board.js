import { useState } from 'react';
import Overlay from "../Overlay/Overlay";
import "./Board.css"
import Square from '../Square/Square';

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

    return <div className="game">
        <div className="board">
            <Overlay/>   
            {numbers.map((x, i) => 
                <Square key={i} number={x}/>
            )} 
        </div> 
    </div>
}

export default Board;