const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

docFrames = [document.getElementById("first-container"),
            document.getElementById("second-container"),
            document.getElementById("third-container")];
ind = 0;


const animate = ()=>{
    docFrames[ind].style.height = "300px";
    docFrames[ind].style.top = "-50";
    docFrames[ind].style.backgroundColor = "rgb(255, 217, 222)";
    docFrames[ind].style.transition = ".5s";

}

const deanimate = ()=>{
    ind--;
    docFrames[ind].style.height = "250px";
    docFrames[ind].style.top = "0";
    docFrames[ind].style.backgroundColor = "rgb(22, 1, 37)";
    docFrames[ind].style.transition = ".5s";
}


//rightButton.onclick(animate);
rightButton.addEventListener('click',animate);
rightButton.addEventListener('click',()=>{ind++});
leftButton.addEventListener('click',deanimate);
