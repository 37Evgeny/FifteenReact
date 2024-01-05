import './NewGame.css'

const NewGame = ({reset}) => 
    <div className='newGame'>
        <button onClick={reset}>Новая Игра</button>
    </div>


export default NewGame;