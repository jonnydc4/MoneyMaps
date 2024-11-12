function App() {
    return (
        <div className="App min-h-screen bg-gray-light flex flex-col items-center justify-center">
            <header className="App-header">
                <h1 className="text-center font-bold text-3xl text-gray-dark bg-primary-light py-4 w-full">
                    MoneyMaps
                </h1>
            </header>

            <main className="flex flex-col items-center justify-center w-full max-w-md mt-10 p-6 bg-white rounded-md shadow-card">
                <h2 className="font-semibold text-2xl text-gray-dark mb-8 border-b-2 border-gray pb-2">
                    Sign In
                </h2>

                <form className="w-full flex flex-col items-center">
                    <label htmlFor="username" className="text-gray font-semibold mb-2 w-full">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        className="border border-gray rounded-md p-2 w-full focus:outline-none focus:shadow-focus mb-4"
                        aria-label="Username"
                    />

                    <label htmlFor="password" className="text-gray font-semibold mb-2 w-full">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="border border-gray rounded-md p-2 w-full focus:outline-none focus:shadow-focus mb-6"
                        aria-label="Password"
                    />

                    <button
                        type="submit"
                        className="bg-primary text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-primary-dark focus:outline-none focus:shadow-focus"
                    >
                        Sign In
                    </button>
                </form>
            </main>
        </div>
    );
}

export default App;
