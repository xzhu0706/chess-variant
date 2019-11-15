/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    gameRoomID
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    gameRoomID
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    gameRoomID
    creator {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
  }
}
`;
export const createGameRoom = `mutation CreateGameRoom($input: CreateGameRoomInput!) {
  createGameRoom(input: $input) {
    id
    opponent {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
    fen
  }
}
`;
export const updateGameRoom = `mutation UpdateGameRoom($input: UpdateGameRoomInput!) {
  updateGameRoom(input: $input) {
    id
    opponent {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
    fen
  }
}
`;
export const deleteGameRoom = `mutation DeleteGameRoom($input: DeleteGameRoomInput!) {
  deleteGameRoom(input: $input) {
    id
    opponent {
      id
      username
      points
      skillLevel
      rank
    }
    creatorOrientation
    time
    variant
    fen
  }
}
`;
