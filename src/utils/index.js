export const getById = (id) => {
  return document.getElementById(id);
};

export const API_URLS = {
  products: () =>
    "https://my-json-server.typicode.com/bot5294/ecom_api/products",
};

const fstar = "https://cdn-icons-png.flaticon.com/512/477/477406.png";
const estar = "https://cdn-icons-png.flaticon.com/512/1828/1828961.png";

export const genRatings = (count) => {
  let i = 1;
  let arr = [];
  while (i <= count) {
    arr.push(fstar);
    i++;
  }
  while (i <= 5) {
    arr.push(estar);
    i++;
  }
  return arr;
};
