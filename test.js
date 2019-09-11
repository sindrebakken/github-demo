let inp1 = document.getElementById('inp1');
    let btn1 = document.getElementById('btn1');
    let txt1 = document.getElementById('txt1');

    btn1.addEventListener('click', function(evt) {        
        txt1.innerHTML = inp1.value;        
    });