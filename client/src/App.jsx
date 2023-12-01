import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayUserData from "./components/DisplayUserData";
import DisplayMovieData from "./components/DisplayMovieData";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {
        <>
          <div className="container mt-4">
            <DisplayUserData />
            <hr />
            <DisplayMovieData />
          </div>
        </>
      }
    </ApolloProvider>
  );
}

export default App;
