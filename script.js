// filepath: c:\Users\jdbji\OneDrive\Documents\FireFinder\script.js
function login(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message'); // Add an error message element

    if (email !== "adminfdp@gmail.com") {
        errorMessage.textContent = "Only admin can access this panel";
        errorMessage.style.display = 'block'; // Show the error message
        return;
    }

    // Dynamically import Firebase Auth
    import("firebase/auth").then(({ getAuth, signInWithEmailAndPassword }) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Login successful, redirecting to Admin.html...");
                window.location.href = "Admin.html"; // Redirect to Admin.html
            })
            .catch((error) => {
                console.error("Login failed:", error);
                errorMessage.textContent = "Incorrect password. Please try again.";
                errorMessage.style.display = 'block'; // Show the error message
            });
    }).catch((error) => {
        console.error("Failed to load Firebase Auth:", error);
        errorMessage.textContent = "An error occurred while loading the login functionality.";
        errorMessage.style.display = 'block'; // Show the error message
    });
}

const trapezoid = document.getElementById('trapezoid');
const tableContainer = document.getElementById('table-container');

trapezoid.addEventListener('click', () => {
    trapezoid.classList.toggle('clicked'); // Add or remove the 'clicked' class

    if (tableContainer.classList.contains('visible')) {
        tableContainer.classList.remove('visible');
        tableContainer.classList.add('hidden'); // Move the table back down
    } else {
        tableContainer.classList.remove('hidden');
        tableContainer.classList.add('visible'); // Move the table up
    }
});
    // Optional: Close the dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!icon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
    const icon = document.getElementById('icon');
const loginModal = document.getElementById('login-modal');
const loginContent = document.querySelector('.login-content');

// Show the login modal when the icon is clicked
icon.addEventListener('click', () => {
    loginModal.style.display = 'flex'; // Show the modal
});

// Hide the login modal when clicking outside the login content
loginModal.addEventListener('click', (event) => {
    if (!loginContent.contains(event.target)) {
        loginModal.style.display = 'none'; // Hide the modal
    }
});
const createAccountLink = document.querySelector('.create-account-link');
const createAccountModal = document.getElementById('create-account-modal');
const createCloseBtn = document.getElementById('create-close-btn');

// Show the create account modal when the link is clicked
createAccountLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    createAccountModal.style.display = 'flex'; // Show the modal
    loginModal.style.display = 'none'; // Hide the login modal
});

// Hide the create account modal when clicking the close button
createCloseBtn.addEventListener('click', () => {
    createAccountModal.style.display = 'none'; // Hide the modal
});

// Hide the create account modal when clicking outside the content
createAccountModal.addEventListener('click', (event) => {
    const createAccountContent = document.querySelector('.create-account-content');
    if (!createAccountContent.contains(event.target)) {
        createAccountModal.style.display = 'none'; // Hide the modal
    }
});
    

document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');

    // Wait for a short duration (optional) before sliding down
    setTimeout(() => {
        splashScreen.style.transform = 'translateY(0)';
    }, 100); // Adjust the delay if needed

    document.addEventListener('click', function() {
        if (!splashScreen.classList.contains('hidden')) {
            splashScreen.classList.add('hidden');
            mainContent.classList.add('visible');
            body.style.overflow = 'auto'; // Enable scrolling for main content
        }
    });
});

