export {};
const button = document.querySelector("button");
const input = document.querySelector("input");
const img = document.querySelector("img");
const output = document.querySelector("div");
const para = document.querySelector("p");
// button.addEventListener("click", (e) => {
//   fetch(
//     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=///&unitGroup=metric`,
//     {
//       mode: "cors",
//     },
//   )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     //   console.log(response);
//     para.removeAttribute("hidden");
//     output.textContent = `City: ${response.address};
//           Date: ${response.days[0].datetime};
//           Rough local time: ${response.currentConditions.datetime};
//           Conditions: ${response.currentConditions.conditions};
//           Temperature: ${response.currentConditions.temp} C;`;
//   });
//   fetch(
//   `https://api.giphy.com/v1/gifs/translate?api_key=...&s=${input.value}`,
//   {
//     mode: "cors",
//   },
//   )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     img.src = response.data.images.original.url;
//   })
//   .catch((err) => console.log(err));
//   input.value = "";
// });
// (
//   `https://api.giphy.com/v1/gifs/translate?api_key=...&s=fun`,
//   {
//     mode: "cors",
//   },
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     img.src = response.data.images.original.url;
//   });
