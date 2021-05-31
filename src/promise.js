const promiseResolver = (value, time, throwError = false) => {
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

module.exports = promiseResolver;
