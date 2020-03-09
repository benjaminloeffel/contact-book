import Link from "next/link";

const CardList = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
