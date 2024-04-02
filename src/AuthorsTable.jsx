import React, { useState } from "react";
import { useDataContext } from "./DataContext";

const AuthorsTable = () => {
  const { authors, deleteAuthor, editAuthor } = useDataContext();
  const [editMode, setEditMode] = useState(null);
  const [editedAuthor, setEditedAuthor] = useState({});

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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Bio</th>
          <th>Birth Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id}>
            <td>
              {editMode === author.id ? (
                <input
                  value={editedAuthor.name}
                  onChange={(e) =>
                    setEditedAuthor({ ...editedAuthor, name: e.target.value })
                  }
                />
              ) : (
                author.name
              )}
            </td>
            <td>
              {editMode === author.id ? (
                <input
                  value={editedAuthor.bio}
                  onChange={(e) =>
                    setEditedAuthor({ ...editedAuthor, bio: e.target.value })
                  }
                />
              ) : (
                author.bio
              )}
            </td>
            <td>
              {editMode === author.id ? (
                <input
                  value={editedAuthor.birthDate}
                  onChange={(e) =>
                    setEditedAuthor({
                      ...editedAuthor,
                      birthDate: e.target.value,
                    })
                  }
                />
              ) : (
                author.birthDate
              )}
            </td>
            <td>
              {editMode === author.id ? (
                <button onClick={handleUpdate}>Update</button>
              ) : (
                <button onClick={() => handleEdit(author)}>Edit</button>
              )}
              <button onClick={() => deleteAuthor(author.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorsTable;
