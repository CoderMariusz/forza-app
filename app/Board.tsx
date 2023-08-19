'use client';
import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <h1>heloo</h1>
    // <DragDropContext>
    //   <Droppable
    //     droppableId='board'
    //     direction='horizontal'
    //     type='column'>
    //     {(provided) => (
    //       <div
    //         className='flex space-x-5 p-5 overflow-x-auto'
    //         {...provided.droppableProps}
    //         ref={provided.innerRef}>
    //         {provided.placeholder}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
