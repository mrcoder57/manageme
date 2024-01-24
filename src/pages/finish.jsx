import React from 'react'
import TodoCard from '../components/todo-cards'
import { cardsData } from '../constants'
import { useState,useEffect } from 'react'
import { supabase } from '../utils/SupabaseClient'

const Finished = () => {
  const [todos, setTodos] = useState([]);
 
  async function getAllTodos() {
    let { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('status', true);
  

    if (error) console.log('Error fetching data: ', error);
    else console.log('Fetched data: ', data);

    return data;
 }

 useEffect(() => {
    getAllTodos().then(data => setTodos(data));
 }, []);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
    {todos.map((card, index) => (
      <TodoCard
        key={index}
        title={card.title}
        description={card.description}
        dueDate={card.dueDate}
        id={card.id}
      />
    ))}
 </div>
  )
}

export default Finished