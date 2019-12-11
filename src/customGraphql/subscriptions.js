/* eslint-disable */

export const onUpdateGameState = `subscription OnUpdateGameState($id: ID!) {
  onUpdateGameState(id: $id) {
    id
    fen
    ended
    history
    result
    winner
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
    }
  }
}
`;

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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

export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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