function reloadPage() {
    // Wait a moment to ensure navigation happens, then reload
    setTimeout(() => {
      location.reload();
    }, 0);
  }



const side = document.getElementById('side');
const nav = document.getElementById('nav');
const close = document.getElementById('close');

if(side){
    side.addEventListener('click', function(){
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', function(){
        nav.classList.remove('active');
    })
}