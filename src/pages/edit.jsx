import React, { useState, useEffect } from "react";
import { supabase } from "../utils/SupabaseClient";
import { useParams } from "react-router-dom";
const EditTodo = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  async function getTodoById(id) {
    let { data, error } = await supabase.from("todos").select("*").eq("id", id);

    if (error) console.log("Error fetching todo: ", error);
    else console.log("Fetched todo: ", data);

    return data;
  }

  useEffect(() => {
    getTodoById(id).then((data) => {
      if (data && data.length > 0) {
        const todo = data[0];
        setTitle(todo.title);
        setDescription(todo.description);
        setDueDate(todo.due_date);
      }
    });
  }, [id]);
  async function handleSubmit(event) {
    event.preventDefault();

    let { data, error } = await supabase
      .from("todos")
      .update([{ title: title, description: description, dueDate: dueDate }])
      .match({ id: id });

    if (error) console.log("Error updating todo: ", error);
    else {
      console.log("Todo updated: ", data);
      window.location.href = "/";
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-bold mb-6">Edit Todo</h1>
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
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          value={description}
          onChange={handleDescriptionChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="dueDate"
          className="block text-sm font-medium text-gray-700"
        >
          Due Date
        </label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={dueDate}
          onChange={handleDueDateChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update Todo
      </button>
    </form>
    </div>
  );
};

export default EditTodo;
