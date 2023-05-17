const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;
let rotateDegre = 0;

function update(cursorPosition){
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotation = el.dataset.rotation;
        console.log(cursorPosition);

        let computedLeft = parseFloat(getComputedStyle(el).left)
        let isInLeft = (computedLeft < window.innerWidth / 2) ? 1 : -1;
        let zValue = cursorPosition - computedLeft;
        let computedZ = zValue * isInLeft * 0.1;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
         translateY(calc(-50% + ${yValue * speedy}px))
            rotateY(${rotateDegre * rotation}deg)
            translateZ(${computedZ * speedz}px)
         `;
    });
}   

update(0)


window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;



    rotateDegre = xValue / (window.innerWidth / 2) * 20;
    update(e.clientX)


    
    



});
