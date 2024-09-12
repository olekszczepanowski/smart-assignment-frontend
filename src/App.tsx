import { UsersFilter } from "./features/filter/UsersFilter";
import { UsersView } from "./features/users/UsersView";

function App() {
  return (
    <div className="">
      <header className="flex bg-blue-500 px-3 py-4 justify-between items-center ">
        <h1 className="text-2xl text-white">Users</h1>
        <button className="text-white">Theme</button>
      </header>
      <div className="flex justify-center min-h-screen bg-blue-50 dark:bg-zinc-800 ">
        <div className="w-11/12 lg:w-9/12 min-w-[300px]">
          <UsersFilter />
          <UsersView />
        </div>
      </div>
    </div>
  );
}

export default App;
