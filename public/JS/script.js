//Search Function
const searchGames = () => {
    let input, filter, div, name, a, txtValue
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName('gamePrev')
    name = document.getElementsByClassName('titleThumb')

    for (i = 0; i < name.length; i++){
        a = name[i]
        txtValue = a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            div[i].style.display = ""
        }else{
            div[i].style.display='none'
        }
    }
}
