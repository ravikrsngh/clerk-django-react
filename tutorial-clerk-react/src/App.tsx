import "./App.css";
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";

function App() {
  const { isLoaded, getToken, signOut } = useAuth();

  const getAllPosts = async () => {
    const token = await getToken();
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_API_URL}/posts`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Replace 'YOUR_AUTH_TOKEN' with the actual JWT token
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-full h-screen">
      <h1 className="text-center">Clerk Django</h1>
      {isLoaded ? (
        <>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <p>
              You have been logged in successfully. <br /> Click the button to
              initate an api call with django which returns some data.
            </p>
            <button className="" onClick={getAllPosts}>
              Click Here
            </button>
            <br />
            <br />
            <div>
              <span className="" onClick={() => signOut()}>
                Logout
              </span>
            </div>
          </SignedIn>
        </>
      ) : (
        <span>Loading ...</span>
      )}
    </div>
  );
}

export default App;
