import { Styled, Card as StyledCard, Image, Text } from "theme-ui";

const Card = ({ picture, login, name, dob, email }) => {
  const date = new Date(dob.date.toString());
  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
    <StyledCard key={login.uuid} bg="text">
      <Image
        src={picture.large}
        variant="avatar"
        alt={`Avatar of ${name.title} ${name.first} ${name.last}`}
      />
      <Text color="background">
        <Styled.p>
          {name.title}. {name.first} {name.last}
        </Styled.p>
        <Styled.p>{formattedDate}</Styled.p>
        <Styled.p>{email}</Styled.p>
      </Text>
    </StyledCard>
  );
};

export default Card;
