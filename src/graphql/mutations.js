/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateGameState = `mutation UpdateGameState($input: UpdateGameStateInput!) {
  updateGameState(input: $input) {
    id
    players {
      nextToken
    }
    creator {
      id
      username
    }
    opponent {
      id
      username
    }
    creatorOrientation
    time
    variant
    fen
    available
    ended
    history
    result
    winner
    createdAt
    messages {
      nextToken
    }
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    username
    email
    phoneNumber
    pastGames {
      nextToken
    }
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
    email
    phoneNumber
    pastGames {
      nextToken
    }
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
    email
    phoneNumber
    pastGames {
      nextToken
    }
    points
    skillLevel
    rank
  }
}
`;
export const createPlayerGameMapping = `mutation CreatePlayerGameMapping($input: CreatePlayerGameMappingInput!) {
  createPlayerGameMapping(input: $input) {
    id
    game {
      id
      creatorOrientation
      time
      variant
      fen
      available
      ended
      history
      result
      winner
      createdAt
    }
    player {
      id
      username
      email
      phoneNumber
      points
      skillLevel
      rank
    }
  }
}
`;
export const updatePlayerGameMapping = `mutation UpdatePlayerGameMapping($input: UpdatePlayerGameMappingInput!) {
  updatePlayerGameMapping(input: $input) {
    id
    game {
      id
      creatorOrientation
      time
      variant
      fen
      available
      ended
      history
      result
      winner
      createdAt
    }
    player {
      id
      username
      email
      phoneNumber
      points
      skillLevel
      rank
    }
  }
}
`;
export const deletePlayerGameMapping = `mutation DeletePlayerGameMapping($input: DeletePlayerGameMappingInput!) {
  deletePlayerGameMapping(input: $input) {
    id
    game {
      id
      creatorOrientation
      time
      variant
      fen
      available
      ended
      history
      result
      winner
      createdAt
    }
    player {
      id
      username
      email
      phoneNumber
      points
      skillLevel
      rank
    }
  }
}
`;
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    players {
      nextToken
    }
    creator {
      id
      username
    }
    opponent {
      id
      username
    }
    creatorOrientation
    time
    variant
    fen
    available
    ended
    history
    result
    winner
    createdAt
    messages {
      nextToken
    }
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    players {
      nextToken
    }
    creator {
      id
      username
    }
    opponent {
      id
      username
    }
    creatorOrientation
    time
    variant
    fen
    available
    ended
    history
    result
    winner
    createdAt
    messages {
      nextToken
    }
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    players {
      nextToken
    }
    creator {
      id
      username
    }
    opponent {
      id
      username
    }
    creatorOrientation
    time
    variant
    fen
    available
    ended
    history
    result
    winner
    createdAt
    messages {
      nextToken
    }
  }
}
`;
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    id
    author {
      id
      username
    }
    content
    game {
      id
      creatorOrientation
      time
      variant
      fen
      available
      ended
      history
      result
      winner
      createdAt
    }
  }
}
`;
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
    id
    author {
      id
      username
    }
    content
    game {
      id
      creatorOrientation
      time
      variant
      fen
      available
      ended
      history
      result
      winner
      createdAt
    }
  }
}
`;
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
    id
    author {
      id
      username
    }
    content
    game {
      id
      creatorOrientation
      time
      variant
      fen
      available
      ended
      history
      result
      winner
      createdAt
    }
  }
}
`;
