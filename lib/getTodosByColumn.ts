import { database } from '@/appwrite';

export const getTodosByColumn = async () => {
  const data = await database.listDocuments(
    '64da7966107119a5e4b8',
    '64da796e4d56ec3f36e6'
  );
  const todos = data.documents;

  const columns = todos.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: []
      });
    }
    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && { image: todo.image })
    });
    return acc;
  }, new Map<TypeColumn, Column>());
  console.log(columns);
};
