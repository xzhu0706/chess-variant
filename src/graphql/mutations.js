/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateGameState = `mutation UpdateGameState($input: UpdateGameStateInput!) {
  updateGameState(input: $input) {
    id
    players {
      items {
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
          messages {
            nextToken
          }
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
          createdAt
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
    ended
    history
    result
    winner
    createdAt
    messages {
      items {
        id
        author {
          id
          username
        }
        content
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
          messages {
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const createPlayerGameMapping = `mutation CreatePlayerGameMapping($input: CreatePlayerGameMappingInput!) {
  createPlayerGameMapping(input: $input) {
    id
    game {
      id
      players {
        items {
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
            createdAt
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
      ended
      history
      result
      winner
      createdAt
      messages {
        items {
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
        nextToken
      }
    }
    player {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
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
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
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
        items {
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
            createdAt
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
      ended
      history
      result
      winner
      createdAt
      messages {
        items {
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
        nextToken
      }
    }
    player {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
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
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
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
        items {
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
            createdAt
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
      ended
      history
      result
      winner
      createdAt
      messages {
        items {
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
        nextToken
      }
    }
    player {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
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
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
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
          messages {
            nextToken
          }
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
          createdAt
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
    ended
    history
    result
    winner
    createdAt
    messages {
      items {
        id
        author {
          id
          username
        }
        content
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
          messages {
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
    id
    players {
      items {
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
          messages {
            nextToken
          }
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
          createdAt
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
    ended
    history
    result
    winner
    createdAt
    messages {
      items {
        id
        author {
          id
          username
        }
        content
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
          messages {
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
    id
    players {
      items {
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
          messages {
            nextToken
          }
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
          createdAt
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
    ended
    history
    result
    winner
    createdAt
    messages {
      items {
        id
        author {
          id
          username
        }
        content
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
          messages {
            nextToken
          }
        }
      }
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
      players {
        items {
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
            createdAt
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
      ended
      history
      result
      winner
      createdAt

      messages {
        items {
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
        nextToken
      }
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
      players {
        items {
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
            createdAt
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
      ended
      history
      result
      winner
      createdAt
      messages {
        items {
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
        nextToken
      }
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
      players {
        items {
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
            createdAt
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
      ended
      history
      result
      winner
      createdAt
      messages {
        items {
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
        nextToken
      }
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
      items {
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
          messages {
            nextToken
          }
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
          createdAt
        }
      }
      nextToken
    }
    points
    skillLevel
    rank
    createdAt
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
          messages {
            nextToken
          }
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
          createdAt
        }
      }
      nextToken
    }
    points
    skillLevel
    rank
    createdAt
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
          messages {
            nextToken
          }
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
          createdAt
        }
      }
      nextToken
    }
    points
    skillLevel
    rank
    createdAt
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
    processed
    processedBy {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
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
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
    }
    createdAt
  }
}
`;
export const updateComplaint = `mutation UpdateComplaint($input: UpdateComplaintInput!) {
  updateComplaint(input: $input) {
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
    processed
    processedBy {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
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
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
    }
    createdAt
  }
}
`;
export const deleteComplaint = `mutation DeleteComplaint($input: DeleteComplaintInput!) {
  deleteComplaint(input: $input) {
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
    processed
    processedBy {
      id
      username
      email
      phoneNumber
      pastGames {
        items {
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
            createdAt
          }
        }
        nextToken
      }
      points
      skillLevel
      rank
      createdAt
    }
    createdAt
  }
}
`;
