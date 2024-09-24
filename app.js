// Предопределенные логин и пароль
const correctUsername = "miras134";
const correctPassword = "asdf1233";

// Обработка отправки формы
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем отправку формы и перезагрузку страницы

    // Получаем введенные пользователем значения
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    const loginStatus = document.getElementById('login-status');

    // Проверяем введенные логин и пароль
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        loginStatus.textContent = "Авторизация успешна!";
        loginStatus.style.color = "green";

        // Перенаправление на сайт при успешной авторизации
        window.location.href = "https://qwenty73.github.io/MirBazaDannyx/";
    } else {
        loginStatus.textContent = "Неверный логин или пароль.";
        loginStatus.style.color = "red";
    }
});
