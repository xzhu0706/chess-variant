/* eslint-disable */

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
    id
    players {
      items {
        player {
          id
          username
          points
          skillLevel
          rank
        }
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
    createdAt
  }
}
`;

export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    creator {
      id
      username
    }
    opponent {
      id
      username
    }
    available
  }
}
`;

export const updateGameState = `mutation updateGameState($input: UpdateGameStateInput!) {
  updateGameState(input: $input) {
    id
    fen
    ended
    history
    result
    winner
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
    }
  }
}
`;

export const createPlayerGameMapping = `mutation CreatePlayerGameMapping($input: CreatePlayerGameMappingInput!) {
  createPlayerGameMapping(input: $input) {
    id
  }
}
`;

export const createComplaint = `mutation CreateComplaint($input: CreateComplaintInput!) {
  createComplaint(input: $input) {
    id
    user {
      id
      username
    }
    reportedUser {
      id
      username
    }
    gameLink
    content
  }
}
`;

export const deleteComplaint = `mutation DeleteComplaint($input: DeleteComplaintInput!) {
  deleteComplaint(input: $input) {
    id
  }
}
`;