import { UsersFilter } from "./features/filter/UsersFilter";
import { UsersView } from "./features/users/UsersView";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="flex bg-blue-500 px-3 py-4 justify-between items-center dark:bg-zinc-900 ">
        <h1 className="text-2xl text-white font-semibold">Users</h1>
        <ModeToggle />
      </header>
      <div className="flex justify-center min-h-screen bg-blue-50 dark:bg-gradient-to-r from-zinc-600 to-zinc-900">
        <div className="w-11/12 lg:w-9/12 min-w-[300px]">
          <UsersFilter />
          <UsersView />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
