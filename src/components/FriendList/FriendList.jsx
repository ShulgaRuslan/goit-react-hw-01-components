import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import css from 'components/FriendList/FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map(({ id, avatar, name,isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    )
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name:  PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}