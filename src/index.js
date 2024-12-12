import "./styles.css";
import {} from "./downloadingData";

// const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");

const img = document.querySelector("img");
// const background = document.querySelector(".background");
// const front = document.querySelector(".front");

const display = document.querySelector(".display");

let giphyAPI = "";
let weatherAPI = "";

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=sunny`, {
  mode: "cors",
})
  .then((res) => {
    // It doesn't work cuz contentLength's much smaller than real progressEvent.value.byteLength
    console.log(...res.headers);
    const contentLength = res.headers.get("content-length");
    let loaded = 0;
    return new Response(
      new ReadableStream({
        start(controller) {
          const reader = res.body.getReader();
          read();
          function read() {
            reader.read().then((progressEvent) => {
              console.log(progressEvent);
              if (progressEvent.done === true) {
                controller.close();
                return;
              }
              loaded += progressEvent.value.byteLength;
              console.log(Math.round((loaded / contentLength) * 100) + "%");
              controller.enqueue(progressEvent.value);
              read();
            });
          }
        },
      }),
    );
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    // const url = URL.createObjectURL(res);
    img.src = res.data.images.original.url;
  });

// .then(function (response) {
//   return response.json();
// })
// .then(function (response) {
//   img.src = response.data.images.original.url;
// });

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let resp;
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=${weatherAPI}&unitGroup=metric`,
    {
      mode: "cors",
    },
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })

    .then(function (response) {
      display.textContent = "";
      console.log(response);

      const city = document.createElement("h1");
      city.classList.add("city");
      const temp = document.createElement("p");
      temp.classList.add("temp");
      const humidity = document.createElement("p");
      humidity.classList.add("humidity");
      const emoji = document.createElement("p");
      emoji.classList.add("emoji");

      city.textContent = response.address;
      temp.textContent = `${response.currentConditions.temp}°C`;
      humidity.textContent = `${response.currentConditions.humidity}%`;
      let temperature = response.currentConditions.temp;
      switch (true) {
        case temperature < 0:
          emoji.textContent = "🥶";
          break;
        case temperature > 25:
          emoji.textContent = "🥵";
          break;

        default:
          emoji.textContent = "☀️";
      }

      display.classList.remove("invisible");
      img.classList.add("invisible");
      display.append(city, temp, humidity, emoji);
    })
    .catch((err) => {
      console.log(err);
      display.textContent = "";
      const message = document.createElement("p");
      message.classList.add("message");
      message.textContent = "Error: Cannot find the city. Try again";
      display.appendChild(message);
      display.classList.remove("invisible");
      img.classList.add("invisible");
    });
});
