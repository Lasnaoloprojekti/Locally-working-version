import React from "react";

const LoginForm = () => {

    return (
        <div className="min-h-screen flex items-center justify-center  text-white">
            <div className="bg-white p-8 rounded shadow-lg">
                <form>
                    <div>
                        <img className='flex h-[8rem] mb-5 w-auto' src="logo.png" alt="" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-semibold mb-2">Username</label>
                        <input
                            className="w-full text-black p-2 border rounded"
                            type="text"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-semibold mb-2">Password</label>
                        <input
                            className="w-full p-2 text-black border rounded"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
};


export default LoginForm;