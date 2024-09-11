import { Filter } from "./features/filter/UserFilter";
import { UserView } from "./features/user/UserView";

function App() {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-11/12 lg:w-9/12">
        <Filter />
        <UserView />
      </div>
    </div>
  );
}

export default App;
