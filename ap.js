let body = document.querySelector('body');
        document.querySelector('#red').addEventListener('click', function(){
            body.style.backgroundColor = 'red';
        });
        document.querySelector('#blue').addEventListener('click', function(){
            body.style.backgroundColor = 'blue';
        });
        document.querySelector('#yellow').addEventListener('click', function(){
            body.style.backgroundColor = 'yellow';
        });
    // document.querySelector('#yellow').onclick = function(){
    //     body.style.backgroundColor = 'yellow';
    // };