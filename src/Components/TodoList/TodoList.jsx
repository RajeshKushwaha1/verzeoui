import React,{useState} from 'react';
import TodoProps from './TodoProps';

const TodoList = () => {

    const [input, setInput] = useState([]);
    const [items, setItems] = useState([])

    const HandleChange = (event) =>{
          setInput(event.target.value)
    }

    const HandleSubmit = () => {
        setItems( (oldItems) => {
            return [...oldItems, input]
        })
        setInput("")
    }


    const deleteItems = () =>{
        
    }

    return (
        <>
            <div className="MainDiv">
                <div className="ListDiv">
                    <br />
                    <h1 className="Heading">Todo List</h1>
                    <br />
                    <input type="text" placeholder="Enter your name" className="Input" onChange={HandleChange} value={input} />
                    <button className="button" onClick={HandleSubmit}> + </button>
                    <ol className="ol">
                        {
                           items.map( (itemval, index) => {
                               return(
                                   <>
                                   <TodoProps text={itemval} key={index} id={index} onSelect={deleteItem}/>
                                   </>
                               )
                           })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoList;
