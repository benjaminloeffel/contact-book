import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const Home = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return setSearchResults(results);
  }, [searchTerm]);

  return (
    <Layout>
      <input
        type="text"
        placeholder="Search Contact"
        onChange={handleSearchChange}
        value={searchTerm}
      />
      <ul>
        {searchResults.map(user => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    users: data
  };
};

export default Home;
