function openPopup() {
    var url = 'popup.html';
    var width = 400;
    var height = 300;
    var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    window.open(url, 'popup', 'width=' + width + ', height=' + height + ', top=' + topPosition + ', left=' + leftPosition + ', scrollbars=yes');
  }
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    openPopup();
  });
  