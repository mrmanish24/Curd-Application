"use client"
import { useState } from "react";
import Router from "next/navigation";
import { useRouter } from "next/navigation";



const EditTopicForm = ({id, title, description}) => {
const router = useRouter();
const [newTitle, setNewTitle] = useState(title);
const [newDescription, setNewDescription] = useState(description);

const handleSubmit = async(e) =>{

e.preventDefault();

  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json",
      },
      body: JSON.stringify({newTitle, newDescription}),
    })

    if (!res.ok){
      throw new Error("failed to update topic");
    }

    router.push('/');

  } catch (error) {
    console.log(error);
  }
}
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder={""}
        className="border border-gray-300 px-8 py-2"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        placeholder={""}
        className="border border-gray-300 px-8 py-2"
      />
      <button
        className=" font-bold bg-blue-500 text-white py-3 px-6"
        type="submit"
      >
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;