let images = [
    "https://th.bing.com/th/id/OIP.pJyvFM75RGhU-BuS1BDY3QDqEK?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.utGU35Pd7KDWtqxauJVJUgHaDt?w=349&h=175&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.0tZXgWSS_7W0PKCKWEAUyQHaDJ?w=308&h=148&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.jaYrOCzVNVNJkIegcz5X2QHaD4?w=340&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.XFuKp7kUAIfg7qfgbjQmxgHaFK?w=260&h=181&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.kpgos1BEFWtDao6ig2BVLQHaC0?w=312&h=133&c=7&r=0&o=5&pid=1.7"
    ]
    let count = 0;
    let slides = document.getElementById("slides")
    let img = document.createElement("img")
        img.src = images[images.length-1]
        slides.append(img)

    function slideshow() {
    let interval = setInterval(function()  {
        
        let slides = document.getElementById("slides")
        slides.innerHTML = null
        let img = document.createElement("img")
        img.src = images[count]
        slides.append(img)
        count++
        if(count == images.length) {
            count = 0
        }

    },1500);
}
slideshow()