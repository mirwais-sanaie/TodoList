type TaskItemProps = {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
  completed: boolean;
  onToggle?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};

function TaskItem({
  id,
  title,
  dueDate,
  priority,
  completed,
  onToggle,
  onEdit,
  onDelete,
}: TaskItemProps) {
  const getPriorityClasses = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-600";
      case "medium":
        return "bg-yellow-100 text-yellow-600";
      case "low":
        return "bg-green-100 text-green-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 group ${
        completed
          ? "bg-green-50 hover:bg-green-100 opacity-60"
          : "bg-slate-50 hover:bg-slate-100"
      }`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle?.(id)}
        className={`w-5 h-5 rounded border-2 ${
          completed ? "border-primary-500 bg-primary-500" : "border-slate-300"
        }`}
      />
      <div className="flex-1">
        <p
          className={`font-medium text-slate-800 ${
            completed ? "line-through" : ""
          }`}
        >
          {title}
        </p>
        <p className="text-sm text-slate-500">
          {completed ? "Completed " : "Due: "} {dueDate}
        </p>
      </div>
      <span
        className={`${getPriorityClasses(
          priority
        )} px-2 py-1 rounded text-xs font-medium`}
      >
        {priority}
      </span>
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => onEdit?.(id)}
          className="p-2 hover:bg-slate-200 rounded-lg transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-slate-600">edit</span>
        </button>
        <button
          onClick={() => onDelete?.(id)}
          className="p-2 hover:bg-red-100 text-red-500 rounded-lg transition-colors duration-200"
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
