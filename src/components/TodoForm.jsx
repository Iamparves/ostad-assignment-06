const TodoForm = ({onAddTodo}) => {
  return (
    <form className="todo__form" onSubmit={onAddTodo}>
      <input
        type="text"
        className="todo__input"
        placeholder="Create a new todo..."
        name="title"
      />
      <input className="todo__submit" type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
