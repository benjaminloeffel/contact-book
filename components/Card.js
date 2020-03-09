import Link from "next/link";
import { Card as StyledCard, Image, Text } from "theme-ui";

const Card = ({ picture, login, name }) => {
  return (
    <StyledCard key={login.uuid}>
      <Image src={picture.medium} />
      <Text>
        <Link href={`/users/${login.uuid}`}>
          <a>
            {name.first} {name.last}
          </a>
        </Link>
      </Text>
    </StyledCard>
  );
};

export default Card;
