
const TodoShow = ({todo,setTodo}) => {
  return (
    <div className="grid grid-cols-3 gap-6 ml-44 mt-6 overflow-y-auto">
            {
              todo.map((t,index)=>(
                
                <div className={`w-56 h-32 rounded-2xl overflow-y-auto ${t.color}`} key={index}>

                  <p className=' h-20 text-white text-xl font-semibold break-words p-4'>{t.text}</p>

                  <button

                  onClick={()=>setTodo(todo.filter((item)=>item.id !== t.id))}
                  type="button" className='inline-block ml-2 pl-2 font-semibold rounded-md h-8 pr-4 cursor-pointer bg-white transition ease-in duration:400 hover:bg-black hover:text-white'>
                    Delete</button>

                </div>
              ))
            }
        </div>
  )
}

export default TodoShow