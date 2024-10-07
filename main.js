
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('12345678').value;

    if (username === 'admin' && password === '12345678') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la página principal o dashboard
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
