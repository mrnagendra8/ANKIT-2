function login() {

    let username = document.getElementById('user-input').value;
    let password = document.getElementById('password-input').value;
     // Storing username & password in localStorage, overriding them if they exist

    window.localStorage.setItem('username', username);
    window.localStorage.setItem('password', password);
    // Will be an API call in production
    
    if(username === 'username' && password === 'password') {
        document.write("You will be redirected to main page in 2 sec.");
            setTimeout('Redirect()', 2000);
			return true;
    } else {
        document.getElementById('invalid-login').style.display = 'block';
        document.getElementById('user-input').value = ''
        document.getElementById('password-input').value = '';
    }
}

function Redirect() {
    window.location = "resume.html";
 }
     window.history.forward();
     function noBack() {
         window.history.forward();
     }