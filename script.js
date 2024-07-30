document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registerForm').addEventListener('submit', registerUser);
    document.getElementById('loginForm').addEventListener('submit', loginUser);
    document.getElementById('ideaForm').addEventListener('submit', submitIdea);
});

function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(`User Registered: ${username}, ${email}, ${password}`);
    alert('User Registered!');
    showSection('login');
}

function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    console.log(`User Logged In: ${username}`);
    alert('User Logged In!');
    showSection('home');
}

function submitIdea(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const startingPrice = document.getElementById('startingPrice').value;
    const ideaList = document.getElementById('ideasList');
    const ideaItem = document.createElement('li');
    ideaItem.textContent = `Title: ${title}, Description: ${description}, Starting Price: $${startingPrice}`;
    ideaList.appendChild(ideaItem);
    alert('Idea Submitted!');
    showSection('ideas');
}
