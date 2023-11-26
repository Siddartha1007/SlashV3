/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWishlist = /* GraphQL */ `
  query GetWishlist($id: ID!) {
    getWishlist(id: $id) {
      id
      userID
      name
      itemtype
      itemURl
      itemImageURl
      price
      store
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWishlists = /* GraphQL */ `
  query ListWishlists(
    $filter: ModelWishlistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWishlists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        name
        itemtype
        itemURl
        itemImageURl
        price
        store
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
