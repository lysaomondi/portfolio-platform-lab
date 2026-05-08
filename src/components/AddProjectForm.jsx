import { useState } from "react";
export default function AddProjectForm({addProject}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
  useState("");

  //Prevent form refresh
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

//Create new project 
    const newProject ={
      id: crypto.randomUUID(), //special identifier
      title,
      description,
      image: "https://picsum.photos/80?random=${Math.random()",
    };
     addProject(newProject);

    setTitle("");
    setDescription("");
  };
    return (
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-pink-50">
      <h2 className="text-2xl font-bold mb-4">Add Project</h2>
      
        <div className="mb-4">
        <label htmlFor="title" className="block mb-2">Title</label>
        <input
         id="title"
         type="text"
         value={title}
          onChange={(e) => setTitle(e.target.value)}
           className="w-full border p-2 rounded"
        />
      </div> 
       
        <div className="mb-4">
         <label htmlFor="description" className="block mb-2">Description</label>
           <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded h-28"
             />
        </div>

        <button type="submit" className="border px-6 py-2 rounded hover:bg-black hover:text-white transition">
         Add
        </button>

      </form>
    );
  }
