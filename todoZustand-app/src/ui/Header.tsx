import useStore from "../store/store";

function Header() {
  const { count, increment } = useStore();
  return (
    <header className="text-center mb-8 pt-8">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
        Todo App
      </h1>
      <p className="text-slate-600 text-lg">
        Stay organized and get things done
      </p>

      <button
        onClick={increment}
        className="mt-4 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2"
      >
        plus <span className="material-symbols-outlined">add</span>
      </button>
      <p>{count}</p>
    </header>
  );
}

export default Header;
