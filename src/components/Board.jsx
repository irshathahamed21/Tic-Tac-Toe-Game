import '../App.css';
import { Square } from './Square';
import {useState} from "react"
function Board(){
const[squares, setSquares] = useState(Array(9).fill(null))

    function renderSquare(i) {
        return <Square value = {i}/>
    }

    const status = "nextplayer: X"
    return (
        <>
     <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
        
        

        </>
    )

}
export {Board}