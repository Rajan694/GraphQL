import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { useState } from "react";
const GET_USERS = gql`
  query {
    users {
      id
      name
      username
      email
      friends {
        name
        email
      }
    }
  }
`;

const GET_USER_BY_ID = gql`
  query ($id: ID!) {
    user(id: $id) {
      name
      username
    }
  }
`;
function DisplayUserData() {
  const [userId, setUserId] = useState("");
  const [getUser, { error: getUserError, data: getUserData }] =
    useLazyQuery(GET_USER_BY_ID);
  const { loading, data, error } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      <div>
        <h3>User&apos;s list</h3>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Friends</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <ul key={user.id}>
                    {user.friends.map((friend) => (
                      <li key={friend.id}>
                        {friend.name} - {friend.email}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex">
        <select
          className="form-select"
          onChange={(e) => setUserId(e.target.value)}
        >
          <option>Select User</option>
          {data.users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => getUser({ variables: { id: userId } })}
        >
          Get User
        </button>
      </div>
      <div>
        {getUserError && <p>{getUserError.message}</p>}
        {getUserData && (
          <p>
            {getUserData.user.name} - {getUserData.user.username}
          </p>
        )}
      </div>
    </>
  );
}

export default DisplayUserData;
