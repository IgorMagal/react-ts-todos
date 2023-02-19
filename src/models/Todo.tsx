class Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;

  constructor(title: string, description: string, completed: boolean) {
    this.id = new Date().toISOString() + "todoId";
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

export default Todo;
