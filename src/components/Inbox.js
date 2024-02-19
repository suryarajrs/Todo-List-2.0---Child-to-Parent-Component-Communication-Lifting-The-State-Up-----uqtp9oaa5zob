import React, { useState, useRef } from "react";

const Inbox = (props) => {

  

  const [newTask , setnewTask]=useState(false)
  const ref = useRef();
  const ref2 = useRef();

  const handleAddClick = (e)=>{
    e.preventDefault();

    props.append({title:ref.current.value, date:(new Date(ref2.current.value)).toLocaleDateString("en-US")})

  }

 

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={()=>{setnewTask(true)}} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={ref}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={handleAddClick}>
              Add Task
            </button>
            <button className="new" onClick={()=>{setnewTask(false)}}>
              Cancel
            </button>
            <input
              type="date"
              ref={ref2}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
                {list.title} ({list.date})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
