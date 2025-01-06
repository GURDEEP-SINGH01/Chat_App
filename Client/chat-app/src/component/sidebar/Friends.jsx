import { Friend } from './Friend'
import useGetFriends from '../../hooks/useGetFriends';
import useFriendsList from '../../Store/useFriendsList';

export const Friends = () => {
    const { friends, setFriends } = useFriendsList();
    const { loading } = useGetFriends(friends, setFriends);
    return (
        <div className='flex flex-col overflow-auto'>
            {friends.map((friend, index) =>
                <Friend
                    key={index}
                    friend={friend}

                />
            )}
            {loading ? <span className='loading loading-spinner' /> : null}
        </div>
    )
}
