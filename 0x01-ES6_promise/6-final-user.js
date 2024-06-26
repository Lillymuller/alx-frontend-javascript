import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    values.forEach((val) => {
      arr.push({
        status: val.status,
        value: val.status === 'fulfilled' ? val.value : `Error: ${val.reason.message}`,
      });
    });
    return arr;
  });
}
