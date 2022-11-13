let sliderMain = document.getElementById('companies-logos');
let item = sliderMain.getElementsByClassName('logos');

let Next = () => {
    sliderMain.append(item[0]);
}
let Prev = () =>{
    sliderMain.prepend(item[item.length-1]);
}