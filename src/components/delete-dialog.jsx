import React from "react";
import { supabase } from "../utils/SupabaseClient";

export function DeleteDialog({ open, setOpen,id }) {
  const handleDelete = async() => {
   
      let { data, error } = await supabase
         .from('todos')
         .delete()
         .match({ id: id });
     
      if (error) console.log('Error deleting todo: ', error);
      else console.log('Deleted todo: ', data);
      setOpen(false);
      window.location.reload()
      return data;
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${open ? "" : "hidden"}`}>
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
       <div
         className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
         role="dialog"
         aria-modal="true"
         aria-labelledby="modal-headline"
       >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Confirm Delete
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete this item?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleDelete}
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Yes
            </button>
            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
