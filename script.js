$(document).ready(function() {

    //{title: "", description: "", imageURL: ""}
    var courseData = [
      { title: "Data Science", description: "Data science is the art of extracting valuable insights from data to solve real-world problems.", imageURL: "https://t4.ftcdn.net/jpg/02/62/17/37/360_F_262173764_3sxll45SOaGP5uEC7PukV3LHOB7H8dp2.jpg" },
      { title: "Machine Learning", description: "Machine learning allows computer systems to learn and improve without being explicitly programmed.", imageURL: "https://www.informatec.com/sites/default/files/styles/medium/public/image-seperator/machine-learning-separator-1.jpg?itok=ycRLJQV9" },
    ];
  
    $('.search-input').keyup(function() {
      var searchTerm = $(this).val().toLowerCase();
      var filteredCourses = courseData.filter(function(course) {
        return course.title.toLowerCase().indexOf(searchTerm) !== -1;
      });
  
      $('.cards').empty();
  
      if (filteredCourses.length > 0) {
        filteredCourses.forEach(function(course) {
          
          var cardHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${course.imageURL}" class="card-img-top" alt="${course.title} Image">
              <div class="card-body">
                <h5 class="card-title">${course.title}</h5>
                <p class="card-text">${course.description}</p>
                <a href="/html/${course.title}.html" class="btn btn-primary">View Course</a>
              </div>
            </div>
          `;
          $('.cards').append(cardHTML);
        });
      } else {
        $('.cards').append('<p>No courses found.</p>');
      }
    });
  });