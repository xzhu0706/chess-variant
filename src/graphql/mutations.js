/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    creator
    variant
    started
    white
    black
    history
    fen
    pgn
    turn
    result
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    creator
    variant
    started
    white
    black
    history
    fen
    pgn
    turn
    result
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    creator
    variant
    started
    white
    black
    history
    fen
    pgn
    turn
    result
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
