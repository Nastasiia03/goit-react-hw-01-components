import PropTypes from "prop-types";
import { Friend, Name, Status } from "./friends.styled";

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
    return <Friend key={id}>
        <Status isActive={isOnline === true}></Status>
        <img src={avatar} alt={name} width="48"/>
        <Name>{name}</Name>
</Friend>
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}