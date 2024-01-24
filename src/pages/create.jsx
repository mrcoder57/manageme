import React from "react";
import { supabase } from "../utils/SupabaseClient";
import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date,setDate]=useState("")

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    let { data, error } = await supabase
      .from("todos")
      .insert([{ title: title, description: description, status: false, dueDate:date}]);

    if (error) console.log("Error creating todo: ", error);
    else {
        console.log("Todo created: ", data);
        setDescription("");
        setTitle("")
        window.location.href='/'
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Create New Todo</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 block w-full py-2 px-3 border  bg-white rounded-md shadow-sm shadow-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder=" Enter your Description here"
            value={description}
            onChange={handleDescriptionChange}
            className="mt-1 block w-full py-2 px-3 bg-white rounded-md shadow-md shadow-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date:
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            className="mt-1 block w-full py-2 px-3 border  bg-white rounded-md shadow-sm shadow-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#e5a50a] hover:bg-[#e5a50a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create 
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
