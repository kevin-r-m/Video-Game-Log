//Search Function
const searchGames = () => {
    let input, config, div, name
    input = document.getElementById('myInput');
    config = input.value.toUpperCase();
    div = document.getElementsByClassName('gamePrev')
    name = document.getElementsByClassName('titleThumb')

    for (i = 0; i < name.length; i++){
        let a = name[i]
        let txtValue = a.innerText;
        if(txtValue.toUpperCase().indexOf(config) > -1){
            div[i].style.display = ""
        }else{
            div[i].style.display='none'
        }
    }
}
