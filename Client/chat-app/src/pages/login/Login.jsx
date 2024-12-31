import useLogin from "../../hooks/useLogin";
import { useState } from "react"
import { Link } from "react-router-dom"

export const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className="flex items-center justify-center h-auto min-w-96">
            <div className="w-full bg-orange-200 p-6 rounded-xl">
                <h1 className="text-3xl font-semibold text-center">Login</h1>
                <form>
                    <div>
                        <label className="label pad-2">
                            <span className="label-text text-base">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="input input-bordered w-full h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label pad-2">
                            <span className="label-text text-base">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="input input-bordered w-full h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className=" text-sm hover:underline hover:text-blue-600">
                        {"Don't have an Account?"}
                    </Link>

                    <div>
                        <button
                            className="btn btn-block btn-md mt-2"
                            disabled={loading}
                            onClick={handleSubmit}
                        >
                            {loading ?
                                <span className="loading loading-spinner" />
                                : <span className="label-text text-base">Login</span>
                            }
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
