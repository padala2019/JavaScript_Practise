async function asyncFunction() {
  try {
    console.log("START");
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved");
      }, 2000);
    });
    const result = await promise;
    console.log("Result:", result);
    console.log("END");
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();
