import { useState } from "react";
import useSearchFriends from "../../hooks/useSearchFriends";
import { BsSearch } from "react-icons/bs";
import toast from "react-hot-toast";
const SearchInput = () => {
    const [searchedFriend, setSearchedFriend] = useState('');
    const { loading, searchFriends, searchFriend } = useSearchFriends();
    const handleSearch = async (e) => {
        e.preventDefault();
        setSearchedFriend('');
        await searchFriends(searchedFriend);
    }

    return (
        <form className=" flex items-center gap-1 mt-1 p-1">
            <input type="text" placeholder="Enter Username" className="input input-bordered "
                value={searchedFriend}
                onChange={e => setSearchedFriend(e.target.value)}
            />
            <button type="submit" className="btn btn-circle bg-orange-200" onClick={handleSearch}>
                <BsSearch className="w-6 h-6 " />
            </button>
        </form>

    )
}

export default SearchInput