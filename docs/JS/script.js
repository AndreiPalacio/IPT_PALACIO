document.addEventListener("DOMContentLoaded", function() {
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(item => {
    item.addEventListener('click', function() {
      const imageSrc = item.querySelector('img').src;

      // Create modal
      const modal = document.createElement('div');
      modal.classList.add('modal');

      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');

      const modalImage = document.createElement('img');
      modalImage.src = imageSrc;
      modalContent.appendChild(modalImage);

      const closeButton = document.createElement('span');
      closeButton.classList.add('close');
      closeButton.innerText = 'X';
      closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300); 
      });
      modalContent.appendChild(closeButton);

      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      setTimeout(() => {
        modal.classList.add('show');
      }, 10); 
    });
  });
});