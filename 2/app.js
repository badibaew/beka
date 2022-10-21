const team = {
  userName: "user name",
  userAge: 29,
  hobbi: "play game",
};

const copyTeam = JSON.parse(JSON.stringify(team));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const err = false;

    if (!err) {
      const response = {
        status: 200,
        url: "https://google.com",
      };

      resolve(response);
    } else {
      reject("status code 404,not found");
    }
  }, 1000);
})
  .then((res) => {
    setTimeout(() => {
      console.log(copyTeam);
    }, 2000);
  })

  .catch((err) => console.log("we have error", err))
  .finally(() => console.log("loading ended"));
