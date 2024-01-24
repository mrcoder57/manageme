import { useState } from "react";
import React from "react";
import del from "../assets/delete.svg";
import edit from "../assets/edit.svg";
import { DeleteDialog } from "./delete-dialog";
import { Link } from "react-router-dom";
import check from "../assets/check.svg"
import { supabase } from "../utils/SupabaseClient";

const TodoCard = ({ title, description, todo, dueDate, onDelete, onEdit,id }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
  
    setIsDeleteDialogOpen(false);
  };
  async function finishTodo(id) {
    let { data, error } = await supabase
       .from('todos')
       .update({ status: true })
       .match({ id: id });
   
    if (error) console.log('Error setting status: ', error);
    else console.log('Status set: ', data);
   
    return data;
   }
   
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* <img
            className="h-full w-full object-cover md:w-48"
            src="https://via.placeholder.com/150"
            alt="Placeholder Image"
          /> */}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
          <p className="mt-2 text-gray-500">{todo}</p>
          <p className="mt-2 text-gray-500">Due Date: {dueDate}</p>
          <button
             onClick={() => setIsDeleteDialogOpen(true)}
            className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            <img src={del} alt="" className=" h-8 w-8" />
          </button>
          <DeleteDialog
            open={isDeleteDialogOpen}
            setOpen={setIsDeleteDialogOpen}
            id={id}
            onDelete={handleDelete}
          />
          <Link to={`/${id}`}>
          <button
            onClick={onEdit}
            className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
          >
            <img src={edit} alt="" className=" h-8 w-8" />
          </button>
          </Link>
          <button
             onClick={() => finishTodo(id)}
            className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
          >
            <img src={check} alt="" className=" h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
