import React, { useState,useCallback,useReducer } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { data } from "../../../../data";

const finalSpaceCharacters = [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
      thumb: '../../../../assets/gary.png'
    },
    {
        id: 'bla',
        name: 'Gary Goodspeed',
        thumb: '../../../../assets/gary.png'
    }
]

function Drag() {
   

  return(
      //@ts-ignore
    <DragDropContext>
    <ul className="characters">
  {finalSpaceCharacters.map(({id, name, thumb}) => {
    return (
      <li key={id}>
        <div className="characters-thumb">
          <img src={thumb} alt={`${name} Thumb`} />
        </div>
        <p>
          { name }
        </p>
      </li>
    );
  })}
</ul>
        <Droppable droppableId="characteres">

    {(provided)=>(
     <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
         {provided.placeholder}
         </ul>
    )}
        </Droppable>

    </DragDropContext>
  );
}

export default Drag;
