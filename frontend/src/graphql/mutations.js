/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWishlist = /* GraphQL */ `
  mutation CreateWishlist(
    $input: CreateWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    createWishlist(input: $input, condition: $condition) {
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
export const updateWishlist = /* GraphQL */ `
  mutation UpdateWishlist(
    $input: UpdateWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    updateWishlist(input: $input, condition: $condition) {
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
export const deleteWishlist = /* GraphQL */ `
  mutation DeleteWishlist(
    $input: DeleteWishlistInput!
    $condition: ModelWishlistConditionInput
  ) {
    deleteWishlist(input: $input, condition: $condition) {
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
