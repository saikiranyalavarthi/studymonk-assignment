

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  console.log(`Logging in with email: ${email} and password: ${password}`);
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const companyName = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  
  console.log(`Registering with company name: ${companyName}, email: ${email}, and password: ${password}`);
});

const searchForm = document.getElementById('search-form');
const candidateList = document.getElementById('candidate-list');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = searchForm.querySelector('input:nth-of-type(1)').value;
  const jobRoles = searchForm.querySelector('input:nth-of-type(2)').value;

  
  const candidates = performCandidateSearch(location, jobRoles);
  displayCandidates(candidates);
});

function performCandidateSearch(location, jobRoles) {
 

  const candidates = [
    { name: 'Candidate 1', location: 'Location 1', jobRole: 'Job Role 1' },
    { name: 'Candidate 2', location: 'Location 2', jobRole: 'Job Role 2' },
    { name: 'Candidate 3', location: 'Location 1', jobRole: 'Job Role 2' },
  ];

  return candidates;
}

function displayCandidates(candidates) {
  candidateList.innerHTML = '';

  if (candidates.length === 0) {
    candidateList.innerHTML = 'No candidates found.';
    return;
  }

  const list = document.createElement('ul');
  candidates.forEach(candidate => {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${candidate.name}, Location: ${candidate.location}, Job Role: ${candidate.jobRole}`;
    list.appendChild(listItem);
  });

  candidateList.appendChild(list);
}
