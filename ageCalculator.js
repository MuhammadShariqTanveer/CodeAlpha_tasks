function validateDOB() {
    const dob = document.getElementById('dob').value;
    const button = document.getElementById('calculate-button');

    if (dob) {
        button.classList.remove('button-error');
        button.classList.add('button-valid');
    } else {
        button.classList.remove('button-valid');
        button.classList.add('button-error');
    }
}


function calculateAge() {
    const dob = document.getElementById('dob').value;
    const button = document.getElementById('button');
    if (dob) {
        const dobDate = new Date(dob);
        const today = new Date();
        
        let age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        
        document.getElementById('result').textContent = `You are ${age} years old.`;
    } else {
        document.getElementById('result').textContent = 'Please enter your date of birth.';
        document.getElementById('result').classList.add('error');
    }

  
}
