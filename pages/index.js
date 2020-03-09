import { useState, useEffect } from "react";

import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import CardList from "../components/CardList";

const Home = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = users.filter(user => {
      const fullName = user.name.first + " " + user.name.last;
      return fullName.toLocaleLowerCase().includes(searchTerm.toLowerCase());
    });

    // Sort results by name ASC
    results.sort((a, b) => a.name.first.localeCompare(b.name.first));

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
      <CardList users={searchResults} />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch("https://randomuser.me/api/?results=50");
  const data = await response.json();

  return {
    users: data.results
  };
};

export default Home;
