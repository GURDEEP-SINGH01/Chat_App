
export const Signup = () => {
    return (
        <div className="flex items-center justify-center h-auto min-w-96">
            <div className="w-full bg-orange-200 p-6 rounded-xl">
                <h1 className="text-3xl font-semibold text-center">Signup</h1>
                <form>
                    <div>
                        <label className="label pad-2">
                            <span className="label-text text-base">Username</span>
                        </label>
                        <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10" />
                    </div>
                    <div>
                        <label className="label pad-2">
                            <span className="label-text text-base">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
                    </div>
                    <div>
                        <label className="label pad-2">
                            <span className="label-text text-base">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="input input-bordered w-full h-10" />
                    </div>
                    <a href="#" className=" text-sm hover:underline hover:text-blue-600">
                        {"Already have an Account?"}
                    </a>

                    <div>
                        <button className="btn btn-block btn-md mt-2 ">
                            <span className="label-text text-base">Login</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
