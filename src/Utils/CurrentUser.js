import { Auth } from 'aws-amplify';

async function getUserInfo() {
  const currentUser = {};
  await Auth.currentAuthenticatedUser().then((user) => {
    currentUser.id = user.attributes.sub;
    currentUser.username = user.username;
  }).catch(async (e) => {
    await Auth.currentCredentials().then((credential) => {
      currentUser.id = credential.identityId.split(':')[1];
      currentUser.username = 'anonymous';
    });
  });
  return currentUser;
}

export default getUserInfo;
