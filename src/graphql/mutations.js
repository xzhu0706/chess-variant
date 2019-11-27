/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateGameState = `mutation UpdateGameState($input: UpdateGameStateInput!) {
  updateGameState(input: $input) {
    id
    players {
      items {
        id
      }
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
      items {
        id
      }
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
      items {
        id
      }
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
      items {
        id
      }
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
      pastGames {
        nextToken
      }
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
    }
    player {
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
}
`;
export const deletePlayerGameMapping = `mutation DeletePlayerGameMapping($input: DeletePlayerGameMappingInput!) {
  deletePlayerGameMapping(input: $input) {
    id
    game {
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
    }
    player {
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
}
`;
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    players {
      items {
        id
      }
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
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    players {
      items {
        id
      }
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
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    players {
      items {
        id
      }
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
  }
}
`;
