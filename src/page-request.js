import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://5.134.255.89:4000/',
  cache: new InMemoryCache()
});

async function getMenuItems(name, locale) {
  const result = await client.query({
    query: gql`
      query GetMenu {
        menuItems(name: "${name}") {
          title
          icon
          url
          slug
        }
      }
    `
    ,context: {
      headers: {
        'accept-language': locale
      }
    }
  });
  return result.data.menuItems;
}

async function getSetting(name) {
  const result = await client.query({
    query: gql`
      query GetSetting {
        setting(name: "${name}") {
          value
        }
      }
    `
  });
  return result.data.setting.value;
}

export { getMenuItems, getSetting };
