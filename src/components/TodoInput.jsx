import { useState } from "react";

const TodoInput = ({onAdd}) => {
    const [text,setText] = useState('');
    
    const classColors = ['bg-blue-300', 'bg-red-300', 'bg-green-300'];

    const handleSave = ()=>{
    
    if(!text){
      alert("Don't Have Todo List")
      return
    }

    const randomColor = classColors[Math.floor(Math.random() * classColors.length)];

    const newTodo = {
        id:new Date(),
        text,
        color:randomColor
    }
    onAdd(newTodo)
    setText('');

  }
  return (
    <>
    <div className="flex justify-end gap-6 m-4 ">

          <input 
          value={text}
          onChange={(e)=> setText(e.target.value)}
          className='border rounded-md border-gray-300 placeholder:text-center focus:outline-blue-400'
          type="text" 
          placeholder="Enter Todo List!!!"/>

          <button 
          onClick={handleSave}
          className='bg-blue-400 text-white font-semibold rounded-md w-14 h-10 cursor-pointer transition ease-in duration-400 hover:bg-blue-800 active:scale-80'>
          Save
          </button>

        </div>
    </>
  )
}

export default TodoInput