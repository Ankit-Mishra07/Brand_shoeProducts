let images = [
    "https://th.bing.com/th/id/OIP.pJyvFM75RGhU-BuS1BDY3QDqEK?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.utGU35Pd7KDWtqxauJVJUgHaDt?w=349&h=175&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.0tZXgWSS_7W0PKCKWEAUyQHaDJ?w=308&h=148&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.jaYrOCzVNVNJkIegcz5X2QHaD4?w=340&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.XFuKp7kUAIfg7qfgbjQmxgHaFK?w=260&h=181&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.kpgos1BEFWtDao6ig2BVLQHaC0?w=312&h=133&c=7&r=0&o=5&pid=1.7"
    ]

    let link = [
        "index.html",
        "index.html",
        "index.html",
        "index.html",
        "index.html",
        "index.html"
    ]
    let count = 0;
    let slides = document.getElementById("slides")

    let anchor = document.createElement("a")
    anchor.href = link[link.length-1]
     
    let img = document.createElement("img")
        img.src = images[images.length-1]

        anchor.append(img)
        slides.append(anchor)

    function slideshow() {
    let interval = setInterval(function()  {

        
        let slides = document.getElementById("slides")
        slides.innerHTML = null
        
        let anchor = document.createElement("a")
        anchor.href = link[count]

        let img = document.createElement("img")
        img.src = images[count]
      
        anchor.append(img)
        slides.append(anchor)
        count++
        if(count == images.length) {
            count = 0
        }

    },1500);
}
slideshow()

//video slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}
