import Link from "next/link";
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
      <Image src={picture.large} variant="avatar" />
      <Text color="background">
        <Link href={`/users/${login.uuid}`}>
          <Styled.a>
            {name.title}. {name.first} {name.last}
          </Styled.a>
        </Link>
        <p>{formattedDate}</p>
        <p>{email}</p>
      </Text>
    </StyledCard>
  );
};

export default Card;
