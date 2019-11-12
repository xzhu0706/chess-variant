/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    points
    skillLevel
    rank
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    username
    points
    skillLevel
    rank
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    username
    points
    skillLevel
    rank
  }
}
`;
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createSocketId = `mutation CreateSocketId($input: CreateSocketIdInput!) {
  createSocketId(input: $input) {
    id
    socketId
  }
}
`;
export const updateSocketId = `mutation UpdateSocketId($input: UpdateSocketIdInput!) {
  updateSocketId(input: $input) {
    id
    socketId
  }
}
`;
export const deleteSocketId = `mutation DeleteSocketId($input: DeleteSocketIdInput!) {
  deleteSocketId(input: $input) {
    id
    socketId
  }
}
`;
