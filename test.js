// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }





function passwd(){

    var password = prompt('Enter the password "AA####":');
    if(password.toLowerCase() == "teacher"){
      window.open("index.html")    
    }

    if(password.toLowerCase() == "co"){
        window.open("https://www.dropbox.com/sh/77jdf6k2boxiwm3/AADS-obAAmnB0l5qtyUmKuHNa?dl=0",'_blank')    
      }
      if(password.toLowerCase() == "co4242"){
        window.open("https://www.dropbox.com/sh/77jdf6k2boxiwm3/AADS-obAAmnB0l5qtyUmKuHNa?dl=0",'_blank')    
      }
      
      if(password.toLowerCase() == "ea0711"){
        window.open("https://www.dropbox.com/sh/7ql11jrdx97ihwz/AAD_EnKHym7l0J_dN_RrB3O6a?dl=0",'_blank')    
      }
      
      if(password.toLowerCase() == "code"){
        window.open("https://www.dropbox.com/sh/77jdf6k2boxiwm3/AADS-obAAmnB0l5qtyUmKuHNa?dl=0",'_blank')    
      }
      
      if(password.toLowerCase() == "cotde"){
        window.open("https://www.dropbox.com/sh/77jdf6k2boxiwm3/AADS-obAAmnB0l5qtyUmKuHNa?dl=0",'_blank')    
      }
      
      if(password.toLowerCase() == "M4504"){
        window.open("https://www.dropbox.com/sh/77jdf6k2boxiwm3/AADS-obAAmnB0l5qtyUmKuHNa?dl=0",'_blank')    
      }
      
      if(password.toLowerCase() == "ns0514"){
        window.open("https://www.dropbox.com/sh/br10bf4ieccmhb8/AACTMKTv46qqgPVIcEZ7hWIba?dl=0",'_blank')    
      }
      
      
      else{
        alert("Your Password is incorrect");
         }
  }



