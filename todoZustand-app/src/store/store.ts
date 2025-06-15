import { create } from "zustand";

export type TodoItem = {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
  completed: boolean;
  onToggle?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};

type StoreState = {
  count: number;
  increment: () => void;
  todoItems: TodoItem[];
  setTask: (data: TodoItem) => void;
  deleteTask: (id: number) => void;
  makeCompleted: (id: number) => void;
  editTask: (id: number, updatedData: Partial<TodoItem>) => void;
};

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  todoItems: [
    {
      id: 1,
      title: "Complete project documentation",
      dueDate: "Today",
      priority: "High",
      completed: false,
    },
  ],
  setTask: (data: TodoItem) =>
    set((state) => ({ todoItems: [...state.todoItems, data] })),
  deleteTask: (id: number) =>
    set((state) => ({
      todoItems: state.todoItems.filter((task) => task.id !== id),
    })),
  makeCompleted: (id: number) =>
    set((state) => ({
      todoItems: state.todoItems.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

  editTask: (id: number, updatedData: Partial<TodoItem>) =>
    set((state) => ({
      todoItems: state.todoItems.map((task) => {
        if (task.id === id) {
          return { ...task, ...updatedData };
        } else {
          return task;
        }
      }),
    })),
}));

export default useStore;
