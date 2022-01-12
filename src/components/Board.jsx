import '../App.css';
import { Square } from './Square';
import {useState} from "react"
function Board(){
const[squares, setSquares] = useState(Array(9).fill(null))
const[xIsNext, setXIsNext] = useState(true)


    console.log(squares)
    let count = 0;
    let xcount = 0;
    
    for(let i = 0; i < squares.length; i++){
        if(squares[i] === null){
            count++
        }
        if(squares[i] === "X" ){
            xcount++
        }
        if(squares[i] === "O" ){
            xcount++
        }
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;

      
    }
    else if(count === 9 ){
        status = "Select X or O"
    }
    else if(!winner  && xcount === 9){
        status = "Draw"
    }
   
    

    else {
        
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function handleClick(i){

         if (calculateWinner(squares) || squares[i]) {
      return;
    }
        const newSquares = squares.slice()
        newSquares[i] = xIsNext ? "X": "O"
        setSquares(newSquares)
        setXIsNext(!xIsNext)

    }
    function renderSquare(i) {
        return (<Square 
                    value = {squares[i]}
                    onClick = { ()=> handleClick(i)}/>
        )
    }








   
    return (
        <>
     <div>
     < h1 className = "titl">Tic Tac Toe</h1>
     

      <div className="status">{status}</div>
      <div className="flex-butt">

     
       {xcount ? " " : <button className = "butto" onClick = {() => {setXIsNext(false)}}>X</button>}
       {xcount ? " " : <button className = "butto" onClick = {() => {setXIsNext(false)}}>O</button>}
    
     </div>

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

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
 

  export {Board}
