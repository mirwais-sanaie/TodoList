import { useState } from "react";
import useStore from "../store/store";

function CreateNote() {
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const { setTask } = useStore();

  function handleAddTask() {
    if (!title || !priority) {
      alert("Please fill in both fields.");
      return;
    }
    setTask({
      title,
      priority,
      dueDate: "Today",
      completed: false,
      id: Date.now(),
    });
    setTitle("");
    setPriority("");
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-200"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-200"
          >
            <option defaultValue={"priority"}>Select Priority</option>
            <option defaultValue={"high"}>High</option>
            <option defaultValue={"medium"}>Medium</option>
            <option defaultValue={"low"}>Low</option>
          </select>
          <button
            onClick={handleAddTask}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
