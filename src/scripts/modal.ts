const modals = () => {
   const modalsArray = [...document.getElementsByClassName('modal')];
   const showModalActionsArray = [...document.querySelectorAll('.carlousel__box__overlay [data-for]')];

   const hideModal = (target: HTMLElement, modalElement: HTMLDivElement) => {
      if (
         target === modalElement ||
         (target as HTMLDivElement).classList.contains('modal__close-btn')
      ) {
         modalElement.style.display = 'none';
      }
   };

   const showModal = (target: HTMLElement) => {
      const modalToDisplay: HTMLDivElement = document.querySelector(`[data-for="${target.dataset.for}"]`);
      modalToDisplay.style.display = 'block';
   };

   modalsArray.forEach((modalElement: HTMLDivElement) => {
      modalElement.addEventListener('click', (e) => hideModal(e.target as HTMLElement, modalElement));
   });

   showModalActionsArray.forEach((showModalAction: HTMLElement) => {
      showModalAction.addEventListener('click', (e) => showModal(e.target as HTMLElement));
   });
};

modals();
