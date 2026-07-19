import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/authService";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {

            alert("Please fill all fields.");

            return;

        }

        try {

            setLoading(true);

            const data = await loginUser({
                email,
                password,
            });

            localStorage.setItem(
                "token",
                data.access_token
            );

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.detail ||
                "Login Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* Logo */}

                <div className="text-center mb-8">

                    <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center text-white text-4xl shadow-xl">

                        🚀

                    </div>

                    <h1 className="mt-5 text-3xl font-bold text-gray-800">

                        Startup Navigator AI

                    </h1>

                    <p className="text-gray-500 mt-2">

                        AI Powered Startup Assistant

                    </p>

                </div>

                {/* Login Card */}

                <form
                    onSubmit={handleLogin}
                    className="bg-white rounded-3xl shadow-2xl p-8 border"
                >

                    <h2 className="text-2xl font-bold text-center text-gray-800">

                        Welcome Back

                    </h2>

                    <p className="text-center text-gray-500 mt-2 mb-8">

                        Login to continue

                    </p>

                    {/* Email */}

                    <div className="mb-5">

                        <label className="block mb-2 text-sm font-semibold text-gray-700">

                            Email Address

                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                    </div>

                    {/* Password */}

                    <div className="mb-6">

                        <label className="block mb-2 text-sm font-semibold text-gray-700">

                            Password

                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />
                    </div>
                                        {/* Login Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-xl text-white font-semibold transition ${
                            loading
                                ? "bg-blue-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >

                        {loading ? "Signing In..." : "Login"}

                    </button>

                    {/* Divider */}

                    <div className="my-6 flex items-center">

                        <div className="flex-1 border-t"></div>

                        <span className="px-3 text-gray-400 text-sm">

                            OR

                        </span>

                        <div className="flex-1 border-t"></div>

                    </div>

                    {/* Register */}

                    <div className="text-center">

                        <p className="text-gray-600">

                            New User?

                            <Link
                                to="/register"
                                className="ml-2 text-blue-600 font-semibold hover:text-blue-700 hover:underline"
                            >
                                Create Account
                            </Link>

                        </p>

                    </div>

                </form>

                {/* Footer */}

                <p className="text-center text-gray-500 text-sm mt-8">

                    © 2026 Startup Navigator AI

                    <br />

                    Empowering Entrepreneurs with AI 🚀

                </p>

            </div>

        </div>

    );

}