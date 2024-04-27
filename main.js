function burst() {
    const box = document.querySelector('.birthday-box');
    box.classList.add('burst');
    setTimeout(() => {
      box.classList.remove('burst');
    }, 500);
    location.href="index1.html"
  }
  
