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
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();

  return {
    users: data.results
  };
};

export default Home;
