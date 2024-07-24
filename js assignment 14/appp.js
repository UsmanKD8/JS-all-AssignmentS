var employee = {
    id: 102,
    name: "Jane Smith",
    position: "Project Manager",
    department: "Management",
    experience: 5, // years of experience
    performance: 4.5, // performance rating out of 5
    isIncrementEligible: function () {
      return this.experience >= 3 && this.performance >= 4;
    }
  };
  
  document.getElementById('incrementResult').innerText = 'Is increment eligible? ' + employee.isIncrementEligible();
  