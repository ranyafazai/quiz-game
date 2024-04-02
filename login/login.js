
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const user = document.getElementById("user");
    localStorage.setItem("user",user.value);

    event.preventDefault();
    console.log('Form submitted!');
    window.location.href = '../home page/homepage2.html';
  
    
});