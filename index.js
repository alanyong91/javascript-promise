const promiseResolve = (value, time, throwError = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!throwError) {
        console.log(value);
        resolve(value);
      } else {
        reject(new Error("something goes wrong"));
      }
    }, time);
  });
};

const testPromise = () => {
  return Promise.all([
    promiseResolve(1, 2000),
    promiseResolve(2, 1000),
    promiseResolve(3, 7000, true),
    promiseResolve(4, 3000),
    promiseResolve(5, 3000)
  ])
    .then(function (values) {
      console.log(`values: ${values}`);
    })
    .catch((error) => {
      console.error(`throwing error: ${error.message}`);
    });
};

testPromise();
