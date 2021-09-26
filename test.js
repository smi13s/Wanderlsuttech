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

    if(password.toLowerCase() == "vk2525"){
        window.open("https://www.dropbox.com/sh/alat0n6ilp33387/AAD23sHNWc0FxLHmDFlYxDf0a?dl=0",'_blank')    
      }
      if(password.toLowerCase() == "co4242"){
        window.open("https://www.dropbox.com/sh/77jdf6k2boxiwm3/AADS-obAAmnB0l5qtyUmKuHNa?dl=0",'_blank')    
      }
    
      if(password.toLowerCase() == "mj0608"){
        window.open("https://www.dropbox.com/sh/4x72y4yk3ci5iyc/AAD1mHuYJGYefK6x9G7iooAGa?dl=0",'_blank')    
      }
    
      if(password.toLowerCase() == "ea0711"){
        window.open("https://www.dropbox.com/sh/7ql11jrdx97ihwz/AAD_EnKHym7l0J_dN_RrB3O6a?dl=0",'_blank')    
      }
      
      if(password.toLowerCase() == "vn0624"){
        window.open("https://www.dropbox.com/sh/mci471x96sdg12w/AACOjjRlqWpDt4qK8-aCh3GNa?dl=0",'_blank')    
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
    
    if(password.toLowerCase() == "tc0510"){
        window.open("https://www.dropbox.com/sh/sq5jtmejna8o2ud/AACIqiTfJxBu4to35ngz7xMWa?dl=0",'_blank')    
      }
    
    if(password.toLowerCase() == "aj0711"){
        window.open("https://www.dropbox.com/sh/zq44fti1i8zkr1t/AAAYKsjaFlrO9RkDWYaMV1IPa?dl=0",'_blank')    
      }
    
    if(password.toLowerCase() == "mm0712"){
        window.open("https://www.dropbox.com/sh/eotpece6ii0sdyp/AADxJMYby9GRQF54I4bFYB_ha?dl=0",'_blank')    
      }
    
    if(password.toLowerCase() == "is0713"){
        window.open("https://www.dropbox.com/sh/b9uv6lx1vgzexpx/AACCoVaILJ5xfEWjxQs3imjla?dl=0",'_blank')    
      }
    
    if(password.toLowerCase() == "bb0713"){
        window.open("https://www.dropbox.com/sh/pw6narz739idx7q/AAAdBsFszM_YwGNl_k3heY6fa?dl=0",'_blank')    
      }
    
    if(password.toLowerCase() == "st8459"){
        window.open("https://www.dropbox.com/sh/8hp79xapr3s9wst/AAC3jWWcWgZv0Gfsb0Z0OaV-a?dl=0",'_blank')    
      }
    
    if(password.toLowerCase() == "dh0623"){
        window.open("https://www.dropbox.com/sh/06g58v5axhji9jo/AAA36JKfAS_tRAUOL7fpP_9xa?dl=0",'_blank')    
      }
    
    
    //New
    
    if(password.toLowerCase() == "sw0925"){
        window.open("https://www.dropbox.com/sh/xtimebjkdg8nc0i/AAB7E1WvwEKtTea6AAz0QPKLa?dl=0",'Sonia&William')    
      }
    
    if(password.toLowerCase() == "G0925"){
        window.open("https://www.dropbox.com/sh/lyczgk9s8m8cckx/AADJ3qrCZH0YQU5NSh_0IuDxa?dl=0",'SW-Guesst')    
      }
    
    if(password.toLowerCase() == "1111"){
        window.open("1111",'_blank')    
      }
    
    if(password.toLowerCase() == "1111"){
        window.open("1111",'_blank')    
      }
    
    if(password.toLowerCase() == "1111"){
        window.open("1111",'_blank')    
      }
    
    if(password.toLowerCase() == "1111"){
        window.open("1111",'_blank')    
      }
    
   
    
 
      
      
      else{
        alert("Enter the code");
         }
  }



