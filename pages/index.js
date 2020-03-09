import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Box, Input } from "theme-ui";
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

    console.log(results);

    return setSearchResults(results);
  }, [searchTerm]);

  return (
    <Layout>
      <Box p={2}>
        <Input
          type="text"
          placeholder="Search Contact"
          onChange={handleSearchChange}
          value={searchTerm}
        />
      </Box>
      <Box p={2}>
        <CardList users={searchResults} />
      </Box>
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
