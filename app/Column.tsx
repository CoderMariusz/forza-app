import { type } from 'os';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import TodoCard from './TodoCard';

type ColumnProps = {
  id: string;
  todos: Todo[];
  index: number;
};

const idColumnText: {
  [key in TypeColumn]: string;
} = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done'
};

function Column({ id, todos, index }: ColumnProps) {
  console.log(id);

  return (
    <Draggable
      draggableId={id}
      index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <Droppable
              droppableId={id.toString()}
              type='card'>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-3 rounded-2xl shadow-md m-2 ${
                    snapshot.isDraggingOver ? 'bg-green-200' : 'bg-slate-50'
                  }`}>
                  <h2 className='p-2 flex justify-between text-xl rounded-lg font-bold'>
                    {idColumnText[id]}
                    <span className='font-normal bg-slate-200 text-gray-500 rounded-full px-2 py-2 text-sm'>
                      {todos.length}
                    </span>
                  </h2>
                  <div className='space-y-3'>
                    {todos.map((todo, index) => (
                      <Draggable
                        key={todo.$id}
                        draggableId={todo.$id}
                        index={index}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}>
                            <TodoCard
                              todo={todo}
                              id={todo.$id}
                              index={index}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
            {provided.placeholder}
          </div>
        );
      }}
    </Draggable>
  );
}

export default Column;
