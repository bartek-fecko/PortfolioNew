const modals = () => {
   const modalsArray = [...document.getElementsByClassName('modal')];
   const showModalActionsArray = [...document.querySelectorAll('.carlousel__box__overlay [data-for]')];

   modalsArray.forEach((modalElement: HTMLDivElement) => {
      modalElement.addEventListener('click', (e) => {
         if (
            e.target === modalElement ||
            (e.target as HTMLDivElement).classList.contains('modal__close-btn')
         ) {
            modalElement.style.display = 'none';
         }
      });
   });

   showModalActionsArray.forEach((showModalAction: HTMLElement) => {
      showModalAction.addEventListener('click', (e) => {
         const modalToDisplay: HTMLDivElement = document.querySelector(`[data-for="${(e.target as HTMLElement).dataset.for}"]`);
         modalToDisplay.style.display = 'block';
      });
   });
};

modals();
