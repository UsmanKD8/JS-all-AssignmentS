var product = {
    id: 1,
    title: "Fjallraven Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: [2, 4, 1, 0, 5, 3],
    calculateRating: function () {
      if (this.rating.length === 0) return 0;
      var total = this.rating.reduce((acc, rating) => acc + rating, 0);
      return total / this.rating.length;
    }
  };
  
  document.getElementById('ratingResult').innerText = 'Average Rating: ' + product.calculateRating();
  


var employee = {
    id: 101,
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    daysOff: ["Monday", "Friday"],
    isTodayOff: function () {
      var today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      return this.daysOff.includes(today);
    }
  };
  
  document.getElementById('dayOffResult').innerText = 'Is today off? ' + employee.isTodayOff();
  


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
  