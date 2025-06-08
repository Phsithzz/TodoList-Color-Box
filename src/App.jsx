//components
import TodoInput from './components/TodoInput';
import TodoShow from './components/TodoShow';
//component

import { useState } from 'react'

const App = () => {

  const [todo,setTodo] = useState([])

  const handleAddTodo = (item) => {
    setTodo([
      ...todo,
      item
    ])
  }
  

  return (
    <>
    <div className="flex flex-col  bg-white rounded-4xl m-10 h-150 overflow-y-auto">

        <div className="text-center rounded-t-4xl">

          <h1 className='text-2xl mt-4 font-semibold' >Todo List</h1>

        </div>

        <TodoInput onAdd={handleAddTodo}/>

        <hr className="text-gray-300"/>

        <TodoShow todo={todo} setTodo={setTodo}/>

    </div>
    
    </>
  )
}

export default App