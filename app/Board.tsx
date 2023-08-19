'use client';
import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard
  ]);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: any) => {};

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable
        droppableId='board'
        type='column'
        direction='horizontal'>
        {(provided) => (
          <div
            className='grid grid-cols-1 p-5 m-2 max-w-4xl mx-auto md:grid-cols-3'
            {...provided.droppableProps}
            ref={provided.innerRef}
            id='board'>
            {Array.from(board.columns.entries()).map(
              ([id, column]: any, index: number) => {
                console.log(column.todos);

                return (
                  <Column
                    id={id}
                    key={id}
                    todos={column.todos}
                    index={index}
                  />
                );
              }
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
