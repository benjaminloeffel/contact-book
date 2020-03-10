import { Grid } from "theme-ui";
import Card from "./Card";

const CardList = ({ users }) => {
  return (
    <Grid gap={3} width={320}>
      {users.map(user => (
        <Card key={user.login.uuid} {...user} />
      ))}
    </Grid>
  );
};

export default CardList;
