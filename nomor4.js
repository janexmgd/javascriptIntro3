//fetch and show name only

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((e) => {
      console.log(e.name);
    });
  })
  .catch((err) => {
    console.log(err);
  });
