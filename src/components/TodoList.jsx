import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onTodoCompleted,
  onTodoRemove,
  onTodoClearCompleted,
}) => {
  const todosLeft = todos?.filter((todo) => !todo.completed).length;

  return (
    <div className="todo__list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onTodoCompleted={onTodoCompleted}
            onTodoRemove={onTodoRemove}
          />
        ))
      ) : (
        <p className="no__todos">Nothing to show. Create some new todos</p>
      )}

      <div className="todo__bottom">
        <p className="todo__left">{todosLeft} items left</p>
        <button className="todo__clear" onClick={onTodoClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
