function clickMe(button){
   if(button.innerHTML == 'Щелчок') 
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}
function clickName(button){
    if(button.innerHTML == 'Александра') 
         button.innerHTML = 'Бороданева';
     else
         button.innerHTML = 'Александра';
 }
 function clickOn(button){
    if(button.innerHTML == 'Нажми меня') 
         button.innerHTML = 'Еще раз нажми';
    else if(button.innerHTML == 'Еще раз нажми') 
         button.innerHTML = 'Еще';
    else if(button.innerHTML == 'Еще') 
         button.innerHTML = 'Начать сначала';
    else button.innerHTML = 'Нажми меня';
 }
function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
    if (event.ctrlKey) {
        alert('Нажат Ctrl');
    } 
    if (event.shiftKey) {
        alert('Нажат Shift');
    }
    if (event.altKey) {
        alert('Нажат Alt');
    }
}
window.addEventListener('DOMContentLoaded', function(){
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
})