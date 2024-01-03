import "./Square.css"

const Square = ({number}) => 
    <div className={`number ${number.value === 16 ? 'disabled' : ''} slot--${number.index}`}>
        {number.value === 16 ? '' : number.value}
    </div>

export default Square;