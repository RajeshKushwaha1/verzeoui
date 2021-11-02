import React from 'react';

const TodoProps = (props) => {

    return (
        <>
            <div className="todo_style">
                <i class="fa fa-times" aria-hidden="true" onClick={props.onSelect}/>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default TodoProps;
