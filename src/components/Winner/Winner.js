import NewGame from '../newGame/NewGame';
import './Winner.css'

const Winner = ({numbers, reset}) => {
    // бежит по массиву проверяет значение и индекс если все значения не совпадают то возвращается null
    if (!numbers.every(n => n.value === n.index +1))
        return null
    // если все значения = индексу то возвращается  вы выиграли
    return <div className='winner'>
                <p>Вы выиграли!!!</p>
                <NewGame reset={reset}/>
            </div>
}

export default Winner;