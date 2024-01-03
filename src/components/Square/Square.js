import "./Square.css"

const Square = ({number, moveSquare}) => 
    <div 
    onClick={() => moveSquare(number)} 
    className={`number ${number.value === number.index + 1 ? 'correct' : ''} ${number.value === 16 ? 'disabled' : ''} slot--${number.index}`}>
        {number.value === 16 ? '' : number.value}
    </div>

export default Square;