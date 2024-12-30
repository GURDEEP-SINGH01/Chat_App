import { BsSearch } from "react-icons/bs";
const SearchInput = () => {
    return (
        <form className=" flex items-center gap-1 mt-1 p-1">
            <input type="text" placeholder="Enter Username" className="input input-bordered " />
            <button type="submit" className="btn btn-circle bg-orange-200">
                <BsSearch className="w-6 h-6 " />
            </button>
        </form>

    )
}

export default SearchInput