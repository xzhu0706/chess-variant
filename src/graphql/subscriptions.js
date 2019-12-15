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
            items {
              id
              createdAt
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
              content
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
            items {
              id
              createdAt
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
              content
              createdAt
            }
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
    id
    players {
      items {
        id
        game {
          id
          players {
            items {
              id
              createdAt
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
              content
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
            items {
              id
              createdAt
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
              content
              createdAt
            }
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
    id
    players {
      items {
        id
        game {
          id
          players {
            items {
              id
              createdAt
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
              content
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
            items {
              id
              createdAt
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
              content
              createdAt
            }
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
export const onUpdateGameState = `subscription OnUpdateGameState($id: ID!) {
  onUpdateGameState(id: $id) {
    id
    players {
      items {
        id
        game {
          id
          players {
            items {
              id
              createdAt
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
              content
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
            items {
              id
              createdAt
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
              content
              createdAt
            }
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
    createdAt
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
    createdAt
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
    createdAt
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    author {
      id
      username
    }
    title
    content
    createdAt
    likes {
      items {
        id
        post {
          id
          author {
            id
            username
          }
          title
          content
          createdAt
          likes {
            items {
              id
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
        liker {
          id
          username
        }
      }
      nextToken
    }
    comments {
      items {
        id
        author {
          id
          username
        }
        content
        createdAt
        post {
          id
          author {
            id
            username
          }
          title
          content
          createdAt
          likes {
            items {
              id
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
      }
      nextToken
    }
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    author {
      id
      username
    }
    title
    content
    createdAt
    likes {
      items {
        id
        post {
          id
          author {
            id
            username
          }
          title
          content
          createdAt
          likes {
            items {
              id
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
        liker {
          id
          username
        }
      }
      nextToken
    }
    comments {
      items {
        id
        author {
          id
          username
        }
        content
        createdAt
        post {
          id
          author {
            id
            username
          }
          title
          content
          createdAt
          likes {
            items {
              id
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
      }
      nextToken
    }
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    author {
      id
      username
    }
    title
    content
    createdAt
    likes {
      items {
        id
        post {
          id
          author {
            id
            username
          }
          title
          content
          createdAt
          likes {
            items {
              id
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
        liker {
          id
          username
        }
      }
      nextToken
    }
    comments {
      items {
        id
        author {
          id
          username
        }
        content
        createdAt
        post {
          id
          author {
            id
            username
          }
          title
          content
          createdAt
          likes {
            items {
              id
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
      }
      nextToken
    }
  }
}
`;
export const onCreatePostLike = `subscription OnCreatePostLike {
  onCreatePostLike {
    id
    post {
      id
    }
  }
}
`;
export const onUpdatePostLike = `subscription OnUpdatePostLike {
  onUpdatePostLike {
    id
  }
}
`;
export const onDeletePostLike = `subscription OnDeletePostLike {
  onDeletePostLike {
    id
  }
}
`;
export const onCreatePostComment = `subscription OnCreatePostComment {
  onCreatePostComment {
    id
    author {
      id
      username
    }
    content
    createdAt
    post {
      id
    }
  }
}
`;
export const onUpdatePostComment = `subscription OnUpdatePostComment {
  onUpdatePostComment {
    id
  }
}
`;
export const onDeletePostComment = `subscription OnDeletePostComment {
  onDeletePostComment {
    id
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
            items {
              id
              createdAt
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
              content
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
      }
      nextToken
    }
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser($username: String) {
  onUpdateUser(username: $username) {
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
            items {
              id
              createdAt
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
              content
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
      }
      nextToken
    }
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
            items {
              id
              createdAt
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
              content
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
      }
      nextToken
    }
  }
}
`;
export const onCreateComplaint = `subscription OnCreateComplaint {
  onCreateComplaint {
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
    result
    createdAt
    updatedAt
  }
}
`;
export const onUpdateComplaint = `subscription OnUpdateComplaint {
  onUpdateComplaint {
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
    result
    createdAt
    updatedAt
  }
}
`;
export const onDeleteComplaint = `subscription OnDeleteComplaint {
  onDeleteComplaint {
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
    result
    createdAt
    updatedAt
  }
}
`;
export const onCreateCustomizedVariant = `subscription OnCreateCustomizedVariant {
  onCreateCustomizedVariant {
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
      }
      nextToken
    }
  }
}
`;
export const onUpdateCustomizedVariant = `subscription OnUpdateCustomizedVariant($creator: String) {
  onUpdateCustomizedVariant(creator: $creator) {
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
      }
      nextToken
    }
  }
}
`;
export const onDeleteCustomizedVariant = `subscription OnDeleteCustomizedVariant($creator: String) {
  onDeleteCustomizedVariant(creator: $creator) {
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
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
}
`;
