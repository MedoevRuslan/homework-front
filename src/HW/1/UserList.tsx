type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number;
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={"hw01-users"}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((user) => (
          <li>
            <strong>{user.name}</strong> (Age: {user.age})
            <strong> Address:</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};
