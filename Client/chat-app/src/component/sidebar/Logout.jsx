import useLogout from "../../hooks/useLogout";
import { SlLogout } from "react-icons/sl";
export const Logout = () => {
    const { loading, logout } = useLogout();
    return (
        <div className="mt-auto p-1">
            {!loading ?
                (<SlLogout className="h-6" onClick={logout} />) :
                (<span className="loading loading-spinner"></span>)
            }
        </div>
    )
}
