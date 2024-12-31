import useSignup from "../../hooks/useSignup"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Signup = () => {

    const [signUpInput, setSignUpInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const { loading, signup } = useSignup(signUpInput);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(signUpInput);
    }
    return (
        <div className="flex items-center justify-center h-auto min-w-96">
            <div className="w-full bg-orange-200 p-6 rounded-xl">
                <h1 className="text-3xl font-semibold text-center">Signup</h1>
                <form>
                    <div>
                        <label className="label">
                            <span className="label-text text-base">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="input input-bordered w-full h-10"
                            value={signUpInput.username}
                            onChange={(e) => setSignUpInput({ ...signUpInput, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-base">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="input input-bordered w-full h-10"
                            value={signUpInput.email}
                            onChange={(e) => setSignUpInput({ ...signUpInput, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-base">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="input input-bordered w-full h-10"
                            value={signUpInput.password}
                            onChange={(e) => setSignUpInput({ ...signUpInput, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-base">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input input-bordered w-full h-10"
                            value={signUpInput.confirmPassword}
                            onChange={(e) => setSignUpInput({ ...signUpInput, confirmPassword: e.target.value })}
                        />
                    </div>
                    <Link to={"/login"} className=" text-sm hover:underline hover:text-blue-600">
                        {"Already have an Account?"}
                    </Link>

                    <div>
                        <button type="submit" onClick={handleSubmit} className="btn btn-block btn-md mt-2 ">
                            <span className="label-text text-base">Signup</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
