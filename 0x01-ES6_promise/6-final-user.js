import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName)
{
  const v1 = signUpUser(firstName, lastName);
  const v2 = uploadPhoto(fileName);

  return Promise.allSettled([v1, v2]).then((value) => {
    const arr = [];
    value.forEach((val) => {
      if (val.status === 'fulfilled') {
        arr.push({ status: val.status, value: val.value });
      } else {
        arr.push({ 
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
       }
  });
    return arr;
  });
}
