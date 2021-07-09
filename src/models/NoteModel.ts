import ToDo from "@/models/ToDoModel";

export default interface Note {
  title: string;
  todos: Array<ToDo>;
  id: number;
}
