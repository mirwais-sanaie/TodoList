import { create } from "zustand";

type TodoItem = {
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
}));

export default useStore;
