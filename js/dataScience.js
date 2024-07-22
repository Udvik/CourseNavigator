// Sample data (replace with your actual data)
//{ name: "", category: "", price:, rating:, duration: , link: ""}


  const products = [
    { name: "365 careers", category: "Udemy", price: 399, rating: 4.6 , certification:"Yes" , language:"English" , duration: 31 , link: "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/"},
    { name: "Kirill Eremenko", category: "Udemy", price: 399, rating: 4.6 , certification:"Yes" , language:"English" , duration: 21 , link: "https://www.udemy.com/course/datascience/?couponCode=LEADERSALE24B"},
    { name: "Jitesh Kurkhuriya", category: "Udemy", price: 399, rating: 4.6 , certification:"Yes" , language:"English" , duration: 26 , link: "https://www.udemy.com/course/complete-data-science-and-machine-learning-using-python/?couponCode=LEADERSALE24B"},
    { name: "Henrick Johansson", category: "Udemy", price: 399, rating: 4.8 , certification:"Yes" , language:"English" , duration: 45 , link: "https://www.udemy.com/course/data-science-and-machine-learning-fundamentals-one/?couponCode=LEADERSALE24B"},
    { name: "GeeksForGeeks", category: "GeeksForGeeks" , price: "Free", rating: 4.8, certification:"No" , language:"English" , duration: 78 , link: "https://www.geeksforgeeks.org/courses/data-science-live"},
    { name: "GeeksForGeeks", category: "GeeksForGeeks" , price: 5999, rating: 4.8, certification:"Yes" , language:"English" , duration: 78 , link: "https://www.geeksforgeeks.org/courses/data-science-live?source=google&medium=cpc&device=c&keyword=data%20science%20course&matchtype=b&campaignid=21198026103&adgroup=162096365900&gad_source=1&gclid=EAIaIQobChMI_Lam1q2ShgMVkcFMAh2O-QimEAAYASAAEgK2UfD_BwE"},
    { name: "Refsnes Data AS", category: "w3Schools" , price: "Free", rating: 3.8, certification:"No" , language:"English" , duration: 45 , link: "https://www.w3schools.com/datascience/"},
    { name: "Intellipaat", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"English" , duration: 10, link: "https://www.youtube.com/watch?v=e_s_RiI766g"},
    { name: "Simplilearn", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"English" , duration: 11.5, link: "https://youtu.be/j65ifqmhI_M?si=A9WHzXXGUHOUAyg5"},
    { name: "python life", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"Telugu" , duration: 10, link: "https://youtu.be/WKHlx--15_I?si=PldV2O0dgoM24V6F"},
    { name: "Great Learning", category: "Youtube" , price:"Free", rating: "-", certification:"No" , language:"Hindi" , duration: 10, link: "https://youtu.be/JDcZBzb46ts?si=uOctVboQoXUt5w47"},
    { name: "Shankar Narasimhan", category: "NPTEL" , price:"Free", rating: 4, certification:"Yes" , language:"English" , duration: 24,  link: "https://nptel.ac.in/courses/106106179"},
    { name: "Infosys", category: "Infosys Springboard" , price:"Free", rating: "-", certification:"Yes" , language:"English" , duration: 16, link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_0126429312277463041725_shared/overview"},
    { name: "Infosys", category: "Infosys Springboard" , price:"Free", rating: "-", certification:"Yes" , language:"English" , duration: 13.1, link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_16286352104288236000_shared/overview"},
    { name: "Infosys", category: "Infosys Springboard" , price:"Free", rating: "-", certification:"Yes" , language:"English" , duration: 75 , link: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_12666306402263577000_shared/overview"},
    { name: "IBM", category: "Coursera", price: 6507, rating: 4.6 , certification:"Yes" , language:"English" ,  duration: 156 , link:"https://www.coursera.org/professional-certificates/ibm-data-science"},
    { name: "Emma freeman", category: "Coursera", price: 8175, rating: 4.2 , certification:"Yes" , language:"English" ,  duration: 18 , link:"https://www.coursera.org/learn/data-science-fundamentals-for-data-analysts"}
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
        (filterCategory === "" || product.category == filterCategory) &&
        ((product.price <= maxPrice) || (product.price === "Free")) &&
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