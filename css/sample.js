const companies = [
  { name: "company One", category: "Finance", start: 1981, end: 2004 },
  { name: "company Two", category: "Retails", start: 1991, end: 2024 },
  { name: "company Three", category: "Retails", start: 2001, end: 2014 },
  { name: "company Four", category: "Finance", start: 2011, end: 2021 },
  { name: "company Five", category: "Auto", start: 1984, end: 2004 },
  { name: "company Six", category: "Finance", start: 1997, end: 2016 },
  { name: "company Seven", category: "Auto", start: 1998, end: 2007 },
  { name: "company Eight", category: "Retails", start: 2002, end: 2024 },
  { name: "company Nine", category: "Retails", start: 2006, end: 2014 },
  { name: "company Ten", category: "Finance", start: 2017, end: 2026 },
];
const ages = [33, 12, 55, 23, 11, 77, 43, 24, 89, 51];
// normal for loop
// for (let i = 0; i <companies.length; i++) {
//     console.log(companies[i].start);
// }
// foreach
// companies.forEach(company=> console.log(company.start));
// loop ages and get each element value add to total
let total = 0;
ages.forEach((age) => (total = total + age));
// loop ages with optional index, ages parameters and update ages content
ages.forEach((age, index, ages) => (ages[index] = ++age));
console.log(ages);
// filter
let adult = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 18) {
    adult.push(ages[i]);
  }
}
console.log(adult);
// array filter
let adult1 = ages.filter((age) => {
  if (age < 18) {
    return true;
  }
});
adult1 = ages.filter((age) => age < 18);
console.log(adult1);
const retailCompanies = companies.filter(
  (company) => company.category == "Retails",
);
console.log(retailCompanies);
const tenYears = companies.filter(
  (company) => company.end - company.start >= 10,
);
console.log(tenYears);
const eightly = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990,
);
console.log(eightly);
