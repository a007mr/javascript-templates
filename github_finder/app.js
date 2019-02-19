// Initiate Github
const github = new Github;

// Initiate UI
const ui = new UI;

// Find 
const search = document.getElementById('searchUser');

// Event Listener for typing
search.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  
  if(userText !== '') {
    // Get the data from GitHub
    github.getUser(userText)
      .then(data => {
        console.log(data);
        if(data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  } 
})



