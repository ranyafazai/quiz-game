
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    localStorage.setItem("monoprix",0);
    localStorage.setItem("grait",0);
    localStorage.setItem("zen",0);
    localStorage.setItem("exist",0);
    localStorage.setItem("fatales",0);
    localStorage.setItem("maxi-Mag",0);
    const user = document.getElementById("user");
    localStorage.setItem("user",user.value);

    event.preventDefault();
    window.location.href = '../home page/homepage2.html';

});