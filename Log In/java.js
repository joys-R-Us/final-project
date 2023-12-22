const registeredUsers = [
  { email: 'user1@example.com', username: 'user1', password: 'password1', firstName: 'John', lastName: 'Doe', mobile: '123456789', age: 25, dob: '1998-05-20' },
  { email: 'user2@example.com', username: 'user2', password: 'password2', firstName: 'Jane', lastName: 'Doe', mobile: '987654321', age: 28, dob: '1995-08-12' }
]; 

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const identifier = document.getElementById("login-identifier").value;
  const password = document.getElementById("login-password").value;

  const foundUser = registeredUsers.find(user => (user.email === identifier || user.username === identifier) && user.password === password);

  if (foundUser) {
    console.log("Login successful!");
    document.getElementById("login-message").innerText = "Login successful!";
    document.getElementById("login-message").style.color = "green";
    window.location.href = '../home.html';
  } else {
    document.getElementById("login-message").innerText = "If you're new here, let's get you started by creating your account!";
    document.getElementById("login-message").style.color = "red";
  }
  this.reset();
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("signup-email").value;
  const username = document.getElementById("signup-username").value;
  const firstName = document.getElementById("signup-firstname").value;
  const lastName = document.getElementById("signup-lastname").value;
  const mobile = document.getElementById("signup-mobile").value;
  const age = document.getElementById("signup-age").value;
  const dob = document.getElementById("signup-dob").value;
  const password = document.getElementById("signup-password").value;

  const emailExists = registeredUsers.some(user => user.email === email);
  const usernameExists = registeredUsers.some(user => user.username === username);

  if (emailExists || usernameExists) {
    document.getElementById("signup-message").innerText = "Email or username already exists. Please use a different one.";
    document.getElementById("signup-message").style.color = "ligh pink";
  } else {

    registeredUsers.push({
      email,
      username,
      firstName,
      lastName,
      mobile,
      age,
      dob,
      password
    });

    document.getElementById("signup-message").innerText = "Registration successful! You can now log in.";
    document.getElementById("signup-message").style.color = "green";
    
    toggleForms(true);
  }
  this.reset();
});

function toggleForms(showLoginForm) {
  if (showLoginForm) {
    document.getElementById("login").style.display = "block";
    document.getElementById("signup").style.display = "none";
  } else {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
  }
}
