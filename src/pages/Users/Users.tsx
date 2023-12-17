import Button from "../../components/Button";
import { IoMdAdd } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import { useUsersQuery } from "../../redux/api/userApi";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Nav from "../../components/Nav";
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";

type singleUserDataType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

// type usersDataType = {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: singleUserDataType[];
// };

const Users = () => {
  const [page, setPage] = useState<number>(1);

  const { data: usersData, isLoading } = useUsersQuery(
    { page },
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    }
  );

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const { data: users, total_pages } = usersData;

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNextPage = () => {
    if (page < total_pages) {
      setPage(page + 1);
    }
  };

  const handleModal = () => {
    toast("Testing...", {
      duration: 1000,
    });
  };

  return (
    <div>
      <Nav />
      <main className="max-w-7xl px-6 xl:px-0 mx-auto">
        <div className="my-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Users</h2>
          <div className="flex flex-row gap-2 items-center font-semibold">
            <Button
              buttonType="light"
              className="flex items-center gap-2"
              onClick={handleModal}
            >
              <FiUploadCloud className="text-xl " />
              <span className="hidden sm:flex">Import</span>
            </Button>
            <Button
              className="flex items-center gap-2 font-semibold"
              onClick={handleModal}
            >
              <IoMdAdd className="text-xl text-secondary" />
              <span className="hidden sm:flex">Add User</span>
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border-2">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-color">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>User Info</th>
                <th>About</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user: singleUserDataType) => (
                <tr key={user.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                          <img
                            src={user.avatar}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {user.first_name} {user.last_name}
                        </div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>No Data</td>
                  <td>No Data</td>
                  <th className="flex items-center justify-end gap-3">
                    <Button buttonType="light" className="border-none p-2 ">
                      <RiDeleteBin6Line className="text-xl text-gray-500" />
                    </Button>
                    <Button buttonType="light" className="border-none p-2 ">
                      <FiEdit2 className="text-xl text-gray-500" />
                    </Button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-row gap-2 justify-between items-center py-4 px-4">
            <Button
              disabled={page === 1}
              buttonType="light"
              className="py-1 px-3"
              onClick={handlePreviousPage}
            >
              <GrChapterPrevious className="flex sm:hidden" />
              <span className="hidden sm:flex">Previous</span>
            </Button>
            <p>
              Page {page} of {total_pages}
            </p>
            <Button
              disabled={page === total_pages}
              buttonType="light"
              className="py-1 px-3"
              onClick={handleNextPage}
            >
              <GrChapterNext className="flex sm:hidden" />
              <span className="hidden sm:flex">Next</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Users;
