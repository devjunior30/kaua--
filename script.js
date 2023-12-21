
let myButton = document.querySelector('button')

console.log(myButton)

let time = 3000,
        currentImageIndex = 0,
        image = document.querySelectorAll('div p'),

    max = image.length; 

    function start() {
      setInterval(() => {
        image[currentImageIndex].classList.remove("principal")

        currentImageIndex ++

        if(currentImageIndex >= max) {
            currentImageIndex = 0
        }

        image[currentImageIndex].classList.add("principal")
      }, time);
    }

    myButton.addEventListener("click", start)
