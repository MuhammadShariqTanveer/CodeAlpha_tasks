function calculateAge() {
    const dob = document.getElementById('dob').value;
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
    }
}
