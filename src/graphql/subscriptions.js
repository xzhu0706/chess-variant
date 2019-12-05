/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onUpdateGameState = `subscription OnUpdateGameState($id: ID!) {
  onUpdateGameState(id: $id) {
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
export const onCreatePlayerGameMapping = `subscription OnCreatePlayerGameMapping {
  onCreatePlayerGameMapping {
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
export const onUpdatePlayerGameMapping = `subscription OnUpdatePlayerGameMapping {
  onUpdatePlayerGameMapping {
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
export const onDeletePlayerGameMapping = `subscription OnDeletePlayerGameMapping {
  onDeletePlayerGameMapping {
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

export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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

export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser($id: String) {
  onUpdateUser(id: $id) {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateComplaint = `subscription OnCreateComplaint {
  onCreateComplaint {
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
export const onUpdateComplaint = `subscription OnUpdateComplaint {
  onUpdateComplaint {
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
export const onDeleteComplaint = `subscription OnDeleteComplaint {
  onDeleteComplaint {
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
