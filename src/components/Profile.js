import PropTypes from 'prop-types';
import {
  Container,
  DescriptionContainer,
  List,
  ListItem,
  Image,
  UserName,
  TagLoc,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <Container>
      <DescriptionContainer>
        <Image src={avatar} alt="" />
        <UserName> {username} </UserName>
        <TagLoc> {tag}</TagLoc>
        <TagLoc> {location}</TagLoc>
      </DescriptionContainer>

      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </List>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
