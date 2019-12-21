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
export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createPostLike = `mutation CreatePostLike($input: CreatePostLikeInput!) {
  createPostLike(input: $input) {
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
              nextToken
            }
            comments {
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
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    liker {
      id
      username
    }
  }
}
`;
export const updatePostLike = `mutation UpdatePostLike($input: UpdatePostLikeInput!) {
  updatePostLike(input: $input) {
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
              nextToken
            }
            comments {
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
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    liker {
      id
      username
    }
  }
}
`;
export const deletePostLike = `mutation DeletePostLike($input: DeletePostLikeInput!) {
  deletePostLike(input: $input) {
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
              nextToken
            }
            comments {
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
              nextToken
            }
            comments {
              nextToken
            }
          }
        }
        nextToken
      }
    }
    liker {
      id
      username
    }
  }
}
`;
export const createPostComment = `mutation CreatePostComment($input: CreatePostCommentInput!) {
  createPostComment(input: $input) {
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
              nextToken
            }
            comments {
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
              nextToken
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
export const updatePostComment = `mutation UpdatePostComment($input: UpdatePostCommentInput!) {
  updatePostComment(input: $input) {
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
              nextToken
            }
            comments {
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
              nextToken
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
export const deletePostComment = `mutation DeletePostComment($input: DeletePostCommentInput!) {
  deletePostComment(input: $input) {
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
              nextToken
            }
            comments {
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
              nextToken
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
