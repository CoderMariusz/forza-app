import Image from 'next/image';
import React from 'react';

type TodoCardProps = {
  todo: Todo;
  id: string;
  index: number;
};

function TodoCard({ todo, id, index }: TodoCardProps) {
  console.log(todo);
  const { image, title } = todo;

  return (
    <div className=' rounded-lg shadow-xl'>
      <h2 className='p-4'>{todo.title}</h2>
      {todo.image ? (
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
        />
      ) : null}

      <p>{todo.$createdAt.slice(0, 10)}</p>
    </div>
  );
}

export default TodoCard;
