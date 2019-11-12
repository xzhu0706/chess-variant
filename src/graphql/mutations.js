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
