document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var slides = document.querySelectorAll('.slide');
    var prevBtn = document.querySelector('.prev-slide-btn');
    var nextBtn = document.querySelector('.next-slide-btn');
    var currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.style.display = 'none';
      });
      slides[index].style.display = 'block';
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    }
  
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });
});
/* Система пошуку */

function toggleYearInputs() {
    var yearOption = document.getElementById("yearOption").value;
    var yearInputsContainer = document.getElementById("yearInputsContainer");
  
    if (yearOption === "specific") {
      yearInputsContainer.style.display = "block";
    } else {
      yearInputsContainer.style.display = "none";
    }
}
  
function search() {
    var carType = document.getElementById("carType").value;
    var carBrand = document.getElementById("carBrand").value;
    var carModel = document.getElementById("carModel").value;
    var carRegion = document.getElementById("carRegion").value;
    var yearOption = document.getElementById("yearOption").value;
    var yearFrom = document.getElementById("yearFrom").value;
    var yearTo = document.getElementById("yearTo").value;
    var carPrice = document.getElementById("carPrice").value;
    
    document.getElementById("year").addEventListener("click", function() {
        var yearInputs = document.querySelector(".year-inputs");
        yearInputs.classList.toggle("opened");
    }); 
     
    // Виконуємо пошук за введеними параметрами
    // ...
}
  
  