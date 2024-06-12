// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Load user info from local storage when the page loads
    loadUserInfo();
});

function saveUserInfo() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const village = document.getElementById('village').value;
    const city = document.getElementById('city').value;

    // Create a user object
    const user = {
        name,
        phone,
        village,
        city
    };

    // Save the user object to local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Display the user card
    displayUserCard(user);
}

function loadUserInfo() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        displayUserCard(user);
    }
}

function displayUserCard(user) {
    const userCard = document.getElementById('userCard');
    userCard.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Phone Number:</strong> ${user.phone}</p>
        <p><strong>Village:</strong> ${user.village}</p>
        <p><strong>City:</strong> ${user.city}</p>
    `;
}