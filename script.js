function showContent(contentType) {
    var contentDiv = document.getElementById('content');
    var links = document.querySelectorAll("#left-panel ul li a");
  
    // Remove active class from all links
    links.forEach(function(link) {
      link.classList.remove("active");
    });
  
    switch(contentType) {
      case 'home':
        contentDiv.innerHTML = "<h1>Home</h1><p>This is the Home content.</p>";
        links[0].classList.add("active"); // Add active class to the Home link
        break;
      case 'contact':
        contentDiv.innerHTML = "<h1>Contact</h1><p>This is the Contact information.</p>";
        links[1].classList.add("active"); // Add active class to the Contact link
        break;
      case 'information':
        contentDiv.innerHTML = "<h1>Information</h1><p>This is the Information content.</p>";
        links[2].classList.add("active"); // Add active class to the Information link
        break;
      case 'guide':
        contentDiv.innerHTML = "<h1>Guide</h1><p>This is the Guide information.</p>";
        links[3].classList.add("active"); // Add active class to the Guide link
        break;
      default:
        contentDiv.innerHTML = "<h1>Welcome!</h1><p>This is the initial content of the page.</p>";
        links[0].classList.add("active"); // Add active class to the Home link by default
        break;
    }
  }
  