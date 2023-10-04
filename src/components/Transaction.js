import React from "react";


export const Transaction = ({ transaction }) => {
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.text} <span>400
    </span><button className="delete-btn">x</button>
  </li>
  )
}