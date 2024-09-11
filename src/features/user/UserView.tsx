import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchUsers } from "./userSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const UserView = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filterBy = useSelector((state: RootState) => state.userFilter);

  const filteredUsers = user.users.filter((user) => {
    return (
      (filterBy.name
        ? user.name.toLowerCase().includes(filterBy.name.toLowerCase())
        : true) &&
      (filterBy.username
        ? user.username.toLowerCase().includes(filterBy.username.toLowerCase())
        : true) &&
      (filterBy.email
        ? user.email.toLowerCase().includes(filterBy.email.toLowerCase())
        : true) &&
      (filterBy.phoneNumber
        ? user.phone.toLowerCase().includes(filterBy.phoneNumber.toLowerCase())
        : true)
    );
  });

  return (
    <div className="w-full">
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && filteredUsers.length ? (
        <div className="mt-2 rounded-xl bg-slate-100 border-2">
          <Table>
            <TableHeader>
              <TableHead className="w-1/4">Name</TableHead>
              <TableHead className="w-1/4">Username</TableHead>
              <TableHead className="w-1/4">E-mail</TableHead>
              <TableHead className="w-1/4 text-right">Phone number</TableHead>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <p>{user.name}</p>
                  </TableCell>
                  <TableCell>
                    <p>{user.username}</p>
                  </TableCell>
                  <TableCell>
                    <p>{user.email}</p>
                  </TableCell>
                  <TableCell className="">
                    <p className="text-right">{user.phone}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <Alert className="bg-slate-100 w-1/2 flex flex-col justify-center items-center">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>No users found!</AlertTitle>
          <AlertDescription>
            Clear filters or change values in inputs to display data.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
