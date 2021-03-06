/** @jsx jsx */
import { jsx, Box, Label, Input } from "theme-ui";

const SearchForm = ({ onSearchChange, searchTerm }) => (
  <Box as="form" onSubmit={e => e.preventDefault()}>
    <Label htmlFor="search">Search Contacts</Label>
    <Input
      id="search"
      type="text"
      placeholder="Enter the name of the contact"
      name="search"
      mb={3}
      onChange={onSearchChange}
      value={searchTerm}
    />
  </Box>
);

export default SearchForm;
