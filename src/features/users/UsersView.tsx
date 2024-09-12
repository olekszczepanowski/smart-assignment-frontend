import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchUsers } from "./usersSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const UsersView = () => {
  const users = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filterBy = useSelector((state: RootState) => state.userFilter);

  const filteredUsers = users.users.filter((user) => {
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
      {users.loading && <div className="text-center">Loading...</div>}
      {!users.loading && users.error ? (
        <Alert
          variant="destructive"
          className="flex flex-col justify-center items-center mt-2"
        >
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Failed to fetch the data.</AlertDescription>
        </Alert>
      ) : null}
      {!users.loading &&
        !users.error &&
        (filteredUsers.length ? (
          <div className="mt-2 rounded-xl bg-blue-100 dark:bg-zinc-700 border-2 ">
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
          <Alert className="mt-2 bg-blue-100 flex flex-col justify-center items-center">
            <AlertTitle>No users found!</AlertTitle>
            <AlertDescription>
              Clear filters or change values in inputs to display data.
            </AlertDescription>
          </Alert>
        ))}
    </div>
  );
};
