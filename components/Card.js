import Link from "next/link";
import { Card as StyledCard, Image, Text } from "theme-ui";

const Card = ({ picture, login, name, dob, email }) => {
  const date = new Date(dob.date.toString());
  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
    <StyledCard key={login.uuid}>
      <Image src={picture.large} variant="avatar" />
      <Text>
        <Link href={`/users/${login.uuid}`}>
          <a>
            {name.title}. {name.first} {name.last}
          </a>
        </Link>
        <p>{formattedDate}</p>
        <p>{email}</p>
      </Text>
    </StyledCard>
  );
};

export default Card;
