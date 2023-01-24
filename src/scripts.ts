import axios from "axios";

type Countries = {
  name: string;
  code: string;
  capital: string;
  region: string;

  currency: {
    code: string;
    name: string;
    symbol: string;
  };

  language: {
    code: string;
    name: string;
  };

  flag: string;
  dialling_code: string;
  isoCode: string;
};

// const wrapper = document.querySelector("[data-column-one]");
// const columnThree = document.querySelector("[data-column-three`]");
// const columnFour = document.querySelector("[data-column-four`]");


const inputOne = document.querySelector("[data-input-one]")
const columnOne = document.querySelector("[data-column-one]");

axios.get<Countries[]>("http://localhost:3000/countries").then(({ data }) => {
    data.forEach((element) => {
        const searchColumnOne = document.createElement("p");
        searchColumnOne.classList.add("ppp");
        searchColumnOne.innerHTML = `${element.name}`;
        columnOne.append(searchColumnOne);
    });
});

const columnTwo = document.querySelector("[data-column-two]");

axios.get<Countries[]>("http://localhost:3000/countries").then(({ data }) => {
  data.forEach((element) => {
    const searchColumnTwo = document.createElement("p");  
    searchColumnTwo.classList.add("ppp");
    searchColumnTwo.innerHTML = `${element.code}`;
    columnTwo.append(searchColumnTwo);
  });
});

const columnThree = document.querySelector("[data-column-three]");

axios.get<Countries[]>("http://localhost:3000/countries").then(({ data }) => {
  data.forEach((element) => {
    const searchColumnThree = document.createElement("p"); 
    searchColumnThree.classList.add("ppp");
    searchColumnThree.innerHTML = `${element.capital}`;
    columnThree.append(searchColumnThree);
  });
});

const columnFour = document.querySelector("[data-column-four]");

axios.get<Countries[]>("http://localhost:3000/countries").then(({ data }) => {
  data.forEach((element) => {
    const searchColumnFour = document.createElement("p"); 
    searchColumnFour.classList.add("ppp");
    searchColumnFour.innerHTML = `${element.region}`;
    columnFour.append(searchColumnFour);
  });
});