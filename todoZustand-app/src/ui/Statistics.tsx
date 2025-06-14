import useStore from "../store/store";

function Statistics() {
  const { todoItems } = useStore();
  const totalTasks = todoItems.length;
  const completedTasks = todoItems.filter((task) => task.completed).length;
  const inProgressTasks = totalTasks - completedTasks;
  const highPriorityTasks = todoItems.filter(
    (task) => task.priority.toLowerCase() === "high"
  ).length;
  const progressPercentage =
    totalTasks > 0 ? Math.floor((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Statistics
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Total Tasks</span>
            <span className="font-bold text-slate-800">{totalTasks}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Completed</span>
            <span className="font-bold text-green-600">{completedTasks}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">In Progress</span>
            <span className="font-bold text-blue-600">{inProgressTasks}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">High Priority</span>
            <span className="font-bold text-red-600">{highPriorityTasks}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Progress</span>
            <span className="text-sm font-medium text-slate-800">
              {progressPercentage}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: progressPercentage + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
