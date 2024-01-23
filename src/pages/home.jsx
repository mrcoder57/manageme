import React from 'react'
import { cardsData } from '../constants'
import TodoCard from '../components/todo-cards'

const Home = () => {
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

export default Home