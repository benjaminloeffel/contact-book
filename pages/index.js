import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Box, Flex } from "theme-ui";
import Layout from "../components/MainLayout";
import CardList from "../components/CardList";
import SearchForm from "../components/SearchForm";

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
      <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
        <SearchForm
          onSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />
      </Flex>
      <Box p={3}>
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
