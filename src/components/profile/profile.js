import PropTypes from "prop-types";
import { Avatar, ProfileStyle, Name, Tag, Location, Info, Item, Titles, Data } from "./profile.styled";

export const Profile = ({ user: { username, tag, location, avatar, stats: {followers, views, likes} } }) => {
    return <ProfileStyle>
        <div>
            <Avatar
                src={avatar}
                alt={username}
            /> 
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </div>

  <Info>
    <Item>
      <Titles>Followers</Titles>
      <Data>{followers}</Data>
    </Item>
    <Item>
      <Titles>Views</Titles>
      <Data>{views}</Data>
    </Item>
    <Item>
      <Titles>Likes</Titles>
      <Data>{likes}</Data>
    </Item>
  </Info>
    </ProfileStyle>
}

Profile.propTypes = {
user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
    }).isRequired,

}