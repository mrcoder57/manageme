import React, { useEffect, useState } from 'react'
import { cardsData } from '../constants'
import TodoCard from '../components/todo-cards'
import { supabase } from '../utils/SupabaseClient'
import add from "../assets/add.svg"

import { Link } from 'react-router-dom'

const Home = () => {
  const [todos, setTodos] = useState([]);
 
  async function getAllTodos() {
    let { data, error } = await supabase
      .from('todos')
      .select('*');

    if (error) console.log('Error fetching data: ', error);
    else console.log('Fetched data: ', data);

    return data;
 }

 useEffect(() => {
    getAllTodos().then(data => setTodos(data));
 }, []);

  return (
    <div className='flex flex-col mx-4 '>
      <Link to='/create'>
      <button className='flex flex-row h-12 w-12 items-center'>
        <img src={add} alt="" />
        <p className=' text-[#e5a50a]'>Add new</p>
      </button>
      </Link>
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
 </div>
  )
}

export default Home