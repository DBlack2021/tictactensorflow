import React, { useState } from 'react'
import Cell from './Cell'

export default function TicTacToe() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])

  const [turn, setTurn] = useState('X')

  const handleClick = (row, col) => {
    const newBoard = [...board]
    newBoard[row][col] = turn
    setBoard(newBoard)
    setTurn(turn === 'X' ? 'O' : 'X')
  }

  return (
    <div className='board'>
      {
        // Draw the board
        board.map((row, rowIndex) => (
          <div>
            {row.map((cell, columnIndex) => (
              <Cell turn = { cell } onClick = {() => handleClick(rowIndex, columnIndex)} />
            ))}
          </div>
        ))
      }
    </div>
  )
}
