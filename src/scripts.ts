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

const inputOne = document.querySelector<HTMLInputElement>("[data-input-one]");
const inputTwo = document.querySelector<HTMLInputElement>("[data-input-two]");
const inputThree =
  document.querySelector<HTMLInputElement>("[data-input-three]");
const inputFour = document.querySelector<HTMLInputElement>("[data-input-four]");

const dataWrapper = document.querySelector("[data-wrapper]");

const searchBtn = document.querySelector("[data-search-btn]");

let counter = 1;
const paginate = 19;

const getStart = () => {
  return counter * paginate + 1;
};

const getEnd = () => {
  return getStart() + paginate - 1;
};

searchBtn.addEventListener("click", function () {
  dataWrapper.innerHTML = "";

  const countryName = inputOne.value;
  const countryCode = inputTwo.value;
  const countryCapital = inputThree.value;
  const countryRegion = inputFour.value;

  getNewSortData(
    `http://localhost:3000/countries?name_like=${countryName}&code_like=${countryCode}&capital_like=${countryCapital}&region_like=${countryRegion}`
  );
});

//-----------------GET MORE DATA -------------------------------------
const getMoreBtn = document.querySelector("[data-get-mor-data]");

getMoreBtn.addEventListener("click", function () {
  const start = getStart();
  const end = getEnd();

  console.log(start, end);
  

  getNewSortData(`http://localhost:3000/countries?_start=${start}&_end=${end}`);
  counter++;
});

//-----------------START PAGE---------------------------------
document.addEventListener("DOMContentLoaded", function () {
  getNewSortData(get18DataUrl);
});

//-----------------BTN SORT BY NAME---------------------------------
const getSortedByName = "http://localhost:3000/countries?_sort=name&_order=asc";
const sortBtnName = document.querySelector("[data-btn-sort-name]");

sortBtnName.addEventListener("click", function () {
  dataWrapper.innerHTML = "";
  getNewSortData(getSortedByName);
});

//-----------------BTN SORT BY CODE---------------------------------
const getSortedByCode = "http://localhost:3000/countries?_sort=capital&_order=asc";
const sortBtnCode = document.querySelector("[data-btn-sort-code]");

sortBtnCode.addEventListener("click", function () {
  dataWrapper.innerHTML = "";
  getNewSortData(getSortedByCode);
});

//-----------------BTN SORT BY CAPITAL---------------------------------
const getSortedByCapital =
  "http://localhost:3000/countries?_sort=code&_order=asc";
const sortBtnCapital = document.querySelector("[data-btn-sort-capital]");

sortBtnCapital.addEventListener("click", function () {
  dataWrapper.innerHTML = "";
  getNewSortData(getSortedByCapital);
});

//-----------------BTN SORT BY REGION---------------------------------
const getSortedByRegion =
  "http://localhost:3000/countries?_sort=region&_order=asc";
const sortBtnRegion = document.querySelector("[data-btn-sort-region]");

sortBtnRegion.addEventListener("click", function () {
  dataWrapper.innerHTML = "";
  getNewSortData(getSortedByRegion);
});

const getDataUrl = "http://localhost:3000/countries";
const get18DataUrl = "http://localhost:3000/countries?name_start=1&_end=18";

const getNewSortData = (url: string) => {
  axios.get<Countries[]>(url).then(({ data }) => {
    data.forEach((element) => {
      const dataPlaceholder = document.createElement("div"); //     <div class="card-wrapper">
      dataPlaceholder.classList.add("dataPlaceHolder");

      dataPlaceholder.innerHTML = `
        <div class="all-data">
            <span class="span-text">${element.name}</span>
        </div> 
        <div class="all-data">
            <span class="span-text">${element.capital}</span>
        </div>
        <div class="all-data one">
            <span class="span-text">${element.code}</span>
        </div>
        <div class="all-data one">
            <span class="span-text padding-l">${element.region}</span>
        </div> 

        `;
      dataWrapper.append(dataPlaceholder);
    });
  });
};
