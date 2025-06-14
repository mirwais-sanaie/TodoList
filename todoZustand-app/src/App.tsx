import CreateNote from "./ui/CreateNote";
import Header from "./ui/Header";
import Statistics from "./ui/Statistics";
import Tasks from "./ui/Tasks";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Header />

        <CreateNote />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Tasks />

          <Statistics />
        </div>
        <footer className="mt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Mirwais sanaie. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
