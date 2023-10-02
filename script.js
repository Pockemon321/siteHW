// Получаем ссылки на элементы страницы
const searchButton = document.getElementById('search-button');
const subscribeButton = document.getElementById('subscribe-button');

// Обработчик события для кнопки поиска
searchButton.addEventListener('click', function() {
    const region = document.getElementById('region').value;
    const date = document.getElementById('date').value;
    const participants = document.getElementById('participants').value;
    
    // Ваши действия с полученными данными (например, отправка на сервер или обновление интерфейса)
});

// Обработчик события для кнопки подписки
subscribeButton.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    
    // Ваши действия с полученным email (например, отправка на сервер или подписка на рассылку)
});