import { FriendListItem } from "./friendlistitem";


export const Friendlist = ({friends}) => {
    return <ul>
        {friends.map(friend => (
            <FriendListItem friend={friend} key={friend.id}/>
        ))}
    
</ul>
}



