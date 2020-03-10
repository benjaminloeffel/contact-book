const StatusBar = ({ results }) => {
  return results ? (
    <p>Cool! We've found {results} people matching your search</p>
  ) : (
    <p>Sorry, there are no results matching your search.</p>
  );
};

export default StatusBar;
