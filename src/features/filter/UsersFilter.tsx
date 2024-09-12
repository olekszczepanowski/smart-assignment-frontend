import { useSelector, useDispatch } from "react-redux";
import {
  setNameFilter,
  setUsernameFilter,
  setEmailFilter,
  setPhoneNumberFilter,
  clearFilters,
} from "./filterSlice";
import { AppDispatch, RootState } from "../../app/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const UsersFilter = () => {
  const filter = useSelector((state: RootState) => state.userFilter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="bg-blue-100 dark:bg-zinc-700 rounded-xl border-2 p-4 mt-2 flex flex-col items-center justify-center gap-2">
        <h1 className="dark:text-white text-lg">Available filters</h1>
        <div className="grid grid-cols-2 md:flex md:justify-center items-center w-full gap-2">
          <Input
            onChange={(e) => dispatch(setNameFilter(e.target.value))}
            value={filter.name}
            placeholder="Name"
            className="w-full md:w-1/4"
          ></Input>
          <Input
            onChange={(e) => dispatch(setUsernameFilter(e.target.value))}
            value={filter.username}
            placeholder="Username"
            className="w-full md:w-1/4"
          ></Input>
          <Input
            onChange={(e) => dispatch(setEmailFilter(e.target.value))}
            value={filter.email}
            placeholder="Email"
            className="w-full md:w-1/4"
          ></Input>
          <Input
            onChange={(e) => dispatch(setPhoneNumberFilter(e.target.value))}
            value={filter.phoneNumber}
            placeholder="Phone number"
            className="w-full md:w-1/4"
          ></Input>
        </div>
        <Button
          variant="outline"
          className="dark:text-white"
          onClick={() => dispatch(clearFilters())}
        >
          Clear
        </Button>
      </div>
    </>
  );
};
