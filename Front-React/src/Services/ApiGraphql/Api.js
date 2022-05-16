import { ApolloClient, InMemoryCache } from "@apollo/client";

export const API = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});