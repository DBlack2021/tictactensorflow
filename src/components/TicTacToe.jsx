import React, { useState, useEffect } from 'react'
import styles from '../style/TicTacToe.module.css'
import Cell from './Cell'


export default function TicTacToe() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ])

  const [turn, setTurn] = useState('X')
  const [winner, setWinner] = useState('');

  useEffect(() => {
    setWinner(checkWin());
  }, [board])
  

  const handleClick = (row, col) => {
    if (board[row][col] === '' && !winner) {
      const newBoard = [...board]
      newBoard[row][col] = turn
      setBoard(newBoard)
      setTurn(turn === 'X' ? 'O' : 'X')
    }
  }

  const checkWin = () => {
    // check wins for tic tac toe
    // check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return board[i][0]
      }
    }
    // check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return board[0][i]
      }
    }
    // check diagonals
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0]
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2]
    }
    // check for tie
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return ''
        }
      }
    }
    return 'Tie'
  }

  return (
    <div>
      <div className={styles.board}>
        {
          // Draw the board
          board.map((row, rowIndex) => (
            row.map((cell, columnIndex) => (
              <Cell key={`${rowIndex},${columnIndex}`} 
                    turn = { cell } 
                    onClick = {() => handleClick(rowIndex, columnIndex)} />
            ))
          ))
        }
      </div>

      {winner && 
        <div>
          <h1>{winner} wins!</h1>
          <button>Reset</button>
        </div>
      }
    </div>
  )
}
