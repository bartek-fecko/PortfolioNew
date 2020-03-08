window.addEventListener('load', () => {
   const carousel = () => {
      const carouselWrp = document.getElementsByClassName('carlousel')[0] as HTMLDivElement;

      let isDown: boolean = false;
      let mouseDownStartPoint: number = 0;
      let scrollLeft: number = 0;

      return () => {
         carouselWrp.addEventListener('mousedown', (e: MouseEvent) => {
            isDown = true;
            mouseDownStartPoint = e.pageX - carouselWrp.offsetLeft;
            scrollLeft = carouselWrp.scrollLeft;
         });

         document.addEventListener('mouseup', () => {
            isDown = false;
         });

         carouselWrp.addEventListener('mousemove', (e: MouseEvent) => {
            if (isDown) {
               const delta = e.pageX - carouselWrp.offsetLeft - mouseDownStartPoint;
               carouselWrp.scrollLeft = scrollLeft - delta;
            }
         });
      };
   };

   carousel()();
});
