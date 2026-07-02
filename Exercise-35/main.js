
function changeImage() {
    const image = document.querySelector("#image");

    const imageUrl = prompt("Please enter your image url");
    image.setAttribute("src", imageUrl);

    const imageBorderColor = prompt("Please enter your image border color");
    image.style.border= `5px solid ${imageBorderColor}`;

    const imageWidth = prompt("Please enter your image width");
    image.style.width= `${imageWidth}px`;

    const imageheight = prompt("Please enter your image height");
    image.style.height= `${imageheight}px`;

    const imageBorderRadius = prompt("Please enter your image border radius");
    image.style.borderRadius= `${imageBorderRadius}px`;

}