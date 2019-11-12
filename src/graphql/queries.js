/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    points
    skillLevel
    rank
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      points
      skillLevel
      rank
    }
    nextToken
  }
}
`;
export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorSocketId
    creatorOrientation
    variant
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      creator {
        id
        username
        points
        skillLevel
        rank
      }
      creatorSocketId
      creatorOrientation
      variant
    }
    nextToken
  }
}
`;
export const getSocketId = `query GetSocketId($id: ID!) {
  getSocketId(id: $id) {
    id
    socketId
  }
}
`;
export const listSocketIds = `query ListSocketIds(
  $filter: ModelSocketIdFilterInput
  $limit: Int
  $nextToken: String
) {
  listSocketIds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      socketId
    }
    nextToken
  }
}
`;
