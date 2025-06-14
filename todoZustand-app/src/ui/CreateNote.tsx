function CreateNote() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a new task..."
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-200"
          />
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-200">
            <option>Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Add Task
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors duration-200">
          All Tasks
        </button>
        <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-full text-sm font-medium transition-colors duration-200">
          Active
        </button>
        <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-full text-sm font-medium transition-colors duration-200">
          Completed
        </button>
        <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-full text-sm font-medium transition-colors duration-200">
          High Priority
        </button>
      </div>
    </div>
  );
}

export default CreateNote;
