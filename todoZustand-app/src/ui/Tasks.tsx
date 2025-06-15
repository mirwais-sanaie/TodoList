import useStore from "../store/store";
import TaskItem from "./TaskItem";

// const tasks = [
//   {
//     id: 1,
//     title: "Complete project documentation",
//     dueDate: "Today",
//     priority: "High",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Review team performance",
//     dueDate: "Tomorrow",
//     priority: "Medium",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "Update website design",
//     dueDate: "Yesterday",
//     priority: "Low",
//     completed: true,
//   },
//   {
//     id: 4,
//     title: "Plan marketing strategy",
//     dueDate: "Next week",
//     priority: "Medium",
//     completed: false,
//   },
//   {
//     id: 5,
//     title: "Client meeting preparation",
//     dueDate: "Friday",
//     priority: "High",
//     completed: false,
//   },
// ];

function Tasks() {
  const { todoItems } = useStore();
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-800">Tasks</h2>
          <span className="bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-600">
            {todoItems.length} tasks
          </span>
        </div>

        <div className="space-y-3">
          {todoItems.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority}
              completed={task.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
