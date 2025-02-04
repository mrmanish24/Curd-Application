"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
const AddTopic =  () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();



  const handleSubmit = async (e)=>{
    console.log(title , description)
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3000/api/topics",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({title, description}),
    })

    if (res.ok){
      router.push('/'); 
    }
     else{
      throw new Error("Failed to create a topic");
    }
    
  } catch (error) {
    console.log(error)
  }

  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic Title"
        className="border border-gray-300 px-8 py-2"
        required
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic Discription"
        className="border border-gray-300 px-8 py-2"
        required
      />
      <button
        className=" font-bold bg-blue-500 text-white py-3 px-6"
        type="submit"
      >
        {" "}
        Add Topic
      </button>
    </form>
  );
}
export default AddTopic