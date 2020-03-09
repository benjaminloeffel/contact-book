import { Grid } from "theme-ui";
import Card from "./Card";

const CardList = ({ users }) => {
  return (
    <Grid gap={2} width={[128, null, 192]}>
      {users.map(user => (
        <Card key={user.login.uuid} {...user} />
      ))}
    </Grid>
  );
};

export default CardList;
