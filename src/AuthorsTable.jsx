import React, { useState } from "react";
import { useDataContext } from "./DataContext";

const AuthorsTable = () => {
  const { authors, deleteAuthor, editAuthor } = useDataContext();
  const [editMode, setEditMode] = useState(null);
  const [editedAuthor, setEditedAuthor] = useState({});
  //handling edit mode
  const handleEdit = (author) => {
    setEditMode(author.id);
    setEditedAuthor(author);
  };

  const handleUpdate = () => {
    editAuthor(editedAuthor);
    setEditMode(null);
    setEditedAuthor({});
  };

  return (
    <div className="relative mt-20 overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Bio
            </th>
            <th scope="col" class="px-6 py-3">
              Birth Date
            </th>
            <th scope="col" class="px-6 py-3">
              Make changes
            </th>
            <th scope="col" class="px-6 py-3">
              Delete Author
            </th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr
              key={author.id}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {editMode === author.id ? (
                  <input
                    value={editedAuthor.name}
                    onChange={(e) =>
                      setEditedAuthor({ ...editedAuthor, name: e.target.value })
                    }
                    className="text-black"
                  />
                ) : (
                  author.name
                )}
              </td>
              <td class="px-6 py-4">
                {editMode === author.id ? (
                  <input
                    value={editedAuthor.bio}
                    onChange={(e) =>
                      setEditedAuthor({ ...editedAuthor, bio: e.target.value })
                    }
                    className="text-black"
                  />
                ) : (
                  author.bio
                )}
              </td>
              <td class="px-6 py-4">
                {editMode === author.id ? (
                  <input
                    value={editedAuthor.birthDate}
                    onChange={(e) =>
                      setEditedAuthor({
                        ...editedAuthor,
                        birthDate: e.target.value,
                      })
                    }
                    className="text-black"
                  />
                ) : (
                  author.birthDate
                )}
              </td>
              <td className="px-6 py-4">
                {editMode === author.id ? (
                  <button
                    onClick={handleUpdate}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(author)}
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Edit
                  </button>
                )}
              </td>
              <td class="px-6 py-4">
                {" "}
                <button
                  onClick={() => deleteAuthor(author.id)}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsTable;
