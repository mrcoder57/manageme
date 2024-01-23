import React from 'react'
import TodoCard from '../components/todo-cards'
import { cardsData } from '../constants'

const Finished = () => {
  return (
    <div className="flex flex-wrap">
    {cardsData.map((card, index) => (
      <TodoCard
        key={index}
        title={card.title}
        description={card.description}
       
        dueDate={card.dueDate}
      />
    ))}
 </div>
  )
}

export default Finished