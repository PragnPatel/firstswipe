document.addEventListener('DOMContentLoaded', function() {
  let startX;
  let currentMessage = 0;
  const messages = document.querySelectorAll('.message-page');
  const maxMessages = messages.length;

  function handleGestureMove(event) {
    const touch = event.touches[0];
    const change = startX - touch.clientX;

    if (change > 50) { // Swipe left to show the next message
      event.preventDefault();
      nextMessage();
    } else if (change < -50) { // Swipe right to show the previous message
      event.preventDefault();
      previousMessage();
    }
  }

  function setupMessageEventListeners() {
    document.addEventListener('touchstart', function(event) {
      startX = event.touches[0].clientX;
    }, false);
    
    document.addEventListener('touchmove', handleGestureMove, false);
  }

  function nextMessage() {
    if (currentMessage < maxMessages - 1) {
      messages[currentMessage].style.display = 'none';
      messages[currentMessage].classList.remove('prev-page');
      currentMessage += 1;
      messages[currentMessage].style.display = 'flex';
      messages[currentMessage].classList.add('next-page');
    }
  }

  function previousMessage() {
    if (currentMessage > 0) {
      messages[currentMessage].style.display = 'none';
      messages[currentMessage].classList.remove('next-page');
      currentMessage -= 1;
      messages[currentMessage].style.display = 'flex';
      messages[currentMessage].classList.add('prev-page');
    }
  }

  setupMessageEventListeners();
});
