import type { Gif, GiphyResponse } from "./data/giphy.response";

const API_KEY = "DTJN1ajzKaozHQ5wWJzOSVqbzscuSnpC";

const myRequest = fetch(
  `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`
);

const createImageInsideDom = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyResponse) => {
    const imageUrl = data.images.original.url;
    console.log(imageUrl);
    createImageInsideDom(imageUrl);
  })
  .catch((err) => {
    console.error(err);
  });