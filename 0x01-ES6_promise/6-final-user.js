import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise]).then((values) => {
    const myArray = [];
    values.forEach((ele) => {
      if (ele.status === 'fulfilled') {
        myArray.push({ status: ele.status, value: ele.value });
      } else {
        myArray.push({ status: ele.status, value: `${ele.reason}` });
      }
    });
    return myArray;
  });
}
