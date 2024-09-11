import { useSelector, useDispatch } from "react-redux";
import {
  setNameFilter,
  setUsernameFilter,
  setEmailFilter,
  setPhoneNumberFilter,
  clearFilters,
} from "./filterSlice";
import { AppDispatch, RootState } from "../../store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Filter = () => {
  const filter = useSelector((state: RootState) => state.userFilter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="bg-slate-100 rounded-xl border-2 p-4 mt-2 flex flex-col items-center justify-center gap-2">
        <div className="flex justify-center w-full gap-2">
          <Input
            onChange={(e) => dispatch(setNameFilter(e.target.value))}
            value={filter.name}
            placeholder="Name"
            className="w-1/4"
          ></Input>
          <Input
            onChange={(e) => dispatch(setUsernameFilter(e.target.value))}
            value={filter.username}
            placeholder="Username"
            className="w-1/4"
          ></Input>
          <Input
            onChange={(e) => dispatch(setEmailFilter(e.target.value))}
            value={filter.email}
            placeholder="Email"
            className="w-1/4"
          ></Input>
          <Input
            onChange={(e) => dispatch(setPhoneNumberFilter(e.target.value))}
            value={filter.phoneNumber}
            placeholder="Phone number"
            className="w-1/4"
          ></Input>
        </div>
        <Button variant="outline" onClick={() => dispatch(clearFilters())}>
          Clear filters
        </Button>
      </div>
    </>
  );
};
