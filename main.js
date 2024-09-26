
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la página principal o dashboard
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
