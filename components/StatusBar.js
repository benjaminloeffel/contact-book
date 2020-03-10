const StatusBar = ({ searchTerm, results }) => {
  return searchTerm ? (
    results ? (
      <p>Cool! We've found {results} people matching your search</p>
    ) : (
      <p>Sorry, there are no results matching your search.</p>
    )
  ) : null;
};

export default StatusBar;
