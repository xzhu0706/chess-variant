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
        createdAt
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
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
        createdAt
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
          createdAt
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
          createdAt
        }
        nextToken
      }
    }
    createdAt
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
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
          createdAt
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
          createdAt
        }
        nextToken
      }
    }
    createdAt
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
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
          createdAt
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
          createdAt
        }
        nextToken
      }
    }
    createdAt
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
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
        createdAt
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
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
        createdAt
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
        createdAt
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
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
        createdAt
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
        createdAt
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
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
        createdAt
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
          createdAt
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
          createdAt
        }
        nextToken
      }
    }
    createdAt
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
          createdAt
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
          createdAt
        }
        nextToken
      }
    }
    createdAt
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
          createdAt
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
          createdAt
        }
        nextToken
      }
    }
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
        createdAt
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
    points
    skillLevel
    rank
    createdAt
    variants {
      items {
        id
        name
        baseVariant
        startFen
        customPiece
        submitted
        approved
        createdAt
        creator {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
          }
          nextToken
        }
      }
      nextToken
    }
    comments {
      items {
        id
        content
        createdAt
        user {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        variant {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
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
        createdAt
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
    points
    skillLevel
    rank
    createdAt
    variants {
      items {
        id
        name
        baseVariant
        startFen
        customPiece
        submitted
        approved
        createdAt
        creator {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
          }
          nextToken
        }
      }
      nextToken
    }
    comments {
      items {
        id
        content
        createdAt
        user {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        variant {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
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
        createdAt
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
    points
    skillLevel
    rank
    createdAt
    variants {
      items {
        id
        name
        baseVariant
        startFen
        customPiece
        submitted
        approved
        createdAt
        creator {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        comments {
          items {
            id
            content
            createdAt
          }
          nextToken
        }
      }
      nextToken
    }
    comments {
      items {
        id
        content
        createdAt
        user {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        variant {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const createComplaint = `mutation CreateComplaint($input: CreateComplaintInput!) {
  createComplaint(input: $input) {
    id
    user {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    reportedUser {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    result
    createdAt
    updatedAt
  }
}
`;
export const updateComplaint = `mutation UpdateComplaint($input: UpdateComplaintInput!) {
  updateComplaint(input: $input) {
    id
    user {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    reportedUser {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    result
    createdAt
    updatedAt
  }
}
`;
export const deleteComplaint = `mutation DeleteComplaint($input: DeleteComplaintInput!) {
  deleteComplaint(input: $input) {
    id
    user {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    reportedUser {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    result
    createdAt
    updatedAt
  }
}
`;
export const createCustomizedVariant = `mutation CreateCustomizedVariant($input: CreateCustomizedVariantInput!) {
  createCustomizedVariant(input: $input) {
    id
    name
    baseVariant
    startFen
    customPiece
    submitted
    approved
    createdAt
    creator {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        user {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        variant {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const updateCustomizedVariant = `mutation UpdateCustomizedVariant($input: UpdateCustomizedVariantInput!) {
  updateCustomizedVariant(input: $input) {
    id
    name
    baseVariant
    startFen
    customPiece
    submitted
    approved
    createdAt
    creator {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        user {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        variant {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const deleteCustomizedVariant = `mutation DeleteCustomizedVariant($input: DeleteCustomizedVariantInput!) {
  deleteCustomizedVariant(input: $input) {
    id
    name
    baseVariant
    startFen
    customPiece
    submitted
    approved
    createdAt
    creator {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    comments {
      items {
        id
        content
        createdAt
        user {
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
          variants {
            nextToken
          }
          comments {
            nextToken
          }
        }
        variant {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
      }
      nextToken
    }
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    createdAt
    user {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    variant {
      id
      name
      baseVariant
      startFen
      customPiece
      submitted
      approved
      createdAt
      creator {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            createdAt
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
          }
          nextToken
        }
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    content
    createdAt
    user {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    variant {
      id
      name
      baseVariant
      startFen
      customPiece
      submitted
      approved
      createdAt
      creator {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            createdAt
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
          }
          nextToken
        }
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    content
    createdAt
    user {
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
          createdAt
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
      variants {
        items {
          id
          name
          baseVariant
          startFen
          customPiece
          submitted
          approved
          createdAt
          creator {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          comments {
            nextToken
          }
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
    variant {
      id
      name
      baseVariant
      startFen
      customPiece
      submitted
      approved
      createdAt
      creator {
        id
        username
        email
        phoneNumber
        pastGames {
          items {
            id
            createdAt
          }
          nextToken
        }
        points
        skillLevel
        rank
        createdAt
        variants {
          items {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
          nextToken
        }
        comments {
          items {
            id
            content
            createdAt
          }
          nextToken
        }
      }
      comments {
        items {
          id
          content
          createdAt
          user {
            id
            username
            email
            phoneNumber
            points
            skillLevel
            rank
            createdAt
          }
          variant {
            id
            name
            baseVariant
            startFen
            customPiece
            submitted
            approved
            createdAt
          }
        }
        nextToken
      }
    }
  }
}
`;
