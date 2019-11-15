/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateGameRoom = `subscription OnCreateGameRoom {
  onCreateGameRoom {
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
export const onUpdateGameRoom = `subscription OnUpdateGameRoom {
  onUpdateGameRoom {
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
export const onDeleteGameRoom = `subscription OnDeleteGameRoom {
  onDeleteGameRoom {
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
