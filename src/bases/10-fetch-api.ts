import type { GiphyResponse } from "./data/giphy.response";

const API_KEY = "DTJN1ajzKaozHQ5wWJzOSVqbzscuSnpC";

const myRequest = fetch(
  `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`
);

myRequest
  .then((response) => response.json())
  .then(({data}: GiphyResponse) => {
    const imageUrl = data.images.original.url;
    console.log(imageUrl)
    // const imageUrl = data.data.images.original.url;
    // console.log(imageUrl);

    // const imgElement = document.createElement("img");
    // imgElement.src = imageUrl;
    
    // document.body.append(imgElement);
  })
  .catch((err) => {
    console.error(err);
  });
