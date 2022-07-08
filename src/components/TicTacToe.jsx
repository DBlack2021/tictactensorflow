import React, { useState } from 'react'
import styles from '../style/TicTacToe.module.css'
import Cell from './Cell'


export default function TicTacToe() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])

  const [turn, setTurn] = useState('X')

  const handleClick = (row, col) => {
    if (board[row][col] == '') {
      const newBoard = [...board]
      newBoard[row][col] = turn
      setBoard(newBoard)
      setTurn(turn === 'X' ? 'O' : 'X')
    }
  }

  const checkWin = () => {
  }

  return (
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
  )
}
