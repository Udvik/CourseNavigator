// Sample data (replace with your actual data)
//{ name: "", category: "", price:, rating:, duration: , link: ""}
const products = [
  { name: " Kirill Eremenko", category: "Udemy", price: 549, rating: 4.5 , certification : "Yes" , language : "English", duration: 42.5 , link: "https://www.udemy.com/share/101Wci3@cVVyIPPJ0Hp-YbtcLF646N_rfd6CaWNDSi2jB5NCVwBeNBTHn4VzBDzYj8d59bh2IQ==/"},
  { name: " Andrei Neagoie", category: "Udemy", price: 399, rating: 4.6 , certification : "Yes" , language : "English", duration: 44 , link: "https://www.udemy.com/course/complete-machine-learning-and-data-science-zero-to-mastery/?couponCode=LEADERSALE24B"},
  { name: "Atul", category: "Youtube", price:"Free" , rating:"-", certification : "No" , language : "English", duration: 10 , link: "https://youtu.be/GwIo3gDZCVQ?si=VyP9hPnwiXECVGDp"},
  { name: "python life", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"Telugu" , duration: 6, link: "https://youtu.be/UehuI1w10lg?si=8cTe7nW1B2FQeO3g"},
  { name: "CSE & IT tutorials", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"Telugu" , duration: 6, link: "https://youtube.com/playlist?list=PLaLj9pkyu5Pby5irXGRL37ZBveEGiOLgn&si=UgKp_V3HHTw11s6r"},
  { name: "Nerchuko", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"Telugu" , duration: 15, link: "https://youtube.com/playlist?list=PLVG0Zju2HPJe0bhmV6l1MEE-6h0MG-20P&si=LGDLLbUEPLD-fTXN"},
  { name: "Trouble-free", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"English" , duration: 10, link: "https://youtube.com/playlist?list=PLmAmHQ-_5ySyQeEryrlomrEvOGNYN3TAL&si=Pe3205zNzNYzOxFT"},
  { name: "WsCube-Tech", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"Hindi" , duration: 7, link: "https://youtube.com/playlist?list=PLjVLYmrlmjGe-xLyoCdDrt8Nil1Alg_L3&si=XWMC4Bjt5XwHyDUM"},
  { name: "Indian AI Production", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"Hindi" , duration: 34, link: "https://youtube.com/playlist?list=PLfP3JxW-T70Hh7j17_NLzjZ8CejSPx40V&si=WGCe8Qv_GkgYW8Aw"},
  { name: "Great Learning", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"Hindi" , duration: 5, link: "https://youtu.be/IoZGSQ07e8g?si=i-LN-vwsH2sdkuB2"},
  { name: "Andrew Ng", category: "Coursera", price: 4087, rating: 4.9 , certification : "Yes" , language : "English",  duration: 80 , link:"https://www.coursera.org/specializations/machine-learning-introduction?action=enroll#courses"},
  {name:"andrew nguyen",category:"Youtube",price:"Free",rating:"-", certification : "No" , language : "English",duration:26.5,link:"https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU"},
  {name:"Prof. Balaraman Ravindran",category:"NPTEL",price:"Free",rating:4, certification : "Yes" , language : "English",duration:36,link:"https://onlinecourses.nptel.ac.in/noc21_cs24/preview"},
  { name: "Infosys", category: "Infosys Springboard" , price:"Free", rating: "-", certification:"Yes" , language:"English" , duration: 297, link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_01360970789049139215/overview"},
  { name: "Infosys", category: "Infosys Springboard" , price:"Free", rating: "-", certification:"Yes" , language:"English" , duration: 13, link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_01384321260520243233957_shared/overview"},
  {name:"sanchhaya education private limited",category:"GeeksForGeeks",price:"Free",rating:"-", certification : "No" , language : "English",duration:52,link:"https://www.geeksforgeeks.org/machine-learning/"},
  {name:"w3schools",category:"w3Schools",price:"Free",rating:"-", certification : "No" , language : "English",duration:21,link:"https://www.w3schools.com/ai/ai_learning.asp"},
   
];

const tableBody = document.getElementById("table-body");

function displayProducts(filteredProducts) {
  tableBody.innerHTML = "";
  filteredProducts.forEach(product => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td >${product.name}</td>
      <td >${product.category}</td>
      <td >${product.price}</td>
      <td >${product.rating}</td>
      <td >${product.language}</td>
      <td >${product.certification}</td>
      <td >${product.duration}</td>
      <td><a href="${product.link}" target="_blank" style="text-decoration: none;">${product.category}</a></td>
    `;
    tableBody.appendChild(tableRow);
  });
}

function filterProducts() {
  const filterName = document.querySelector(".filters input[placeholder='Instructor Name']").value.toLowerCase();
  const filterCategory = document.querySelector(".filters select[name='category']").value;
  const maxPrice = document.querySelector(".filters input[placeholder='Max Price']").value === "0"? 0 : parseInt(document.querySelector(".filters input[placeholder='Max Price']").value) || Infinity;;
  const minRating = parseFloat(document.querySelector(".filters input[placeholder='Min Rating']").value) || 0;
  const filterlanguage = document.querySelector(".filters select[name='language']").value;
  const filtercertification = document.querySelector(".filters select[name='certification']").value;
  const maxtime = parseInt(document.querySelector(".filters input[placeholder='Max hrs']").value) || Infinity;


  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(filterName) &&
      (filterCategory === "" || product.category === filterCategory) &&
      ((product.price <= maxPrice) || (product.price == "Free")) &&
      (filterlanguage === "" || product.language === filterlanguage)&&
      (filtercertification === "" || product.certification === filtercertification)&&
      ((product.rating >= minRating) || (product.rating ==="-"))&&
      product.duration <= maxtime;
  });

  displayProducts(filteredProducts);
}


const filterInputs = document.querySelectorAll(".filters input, .filters select");
filterInputs.forEach(input => {
  input.addEventListener("change", filterProducts);
});


filterProducts();


  