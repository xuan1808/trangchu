 

    // const menuToggle = document.getElementById("menuToggle");
    // const menuItem = document.getElementById("menuItem");
    // const icon = menuToggle.querySelector("i");

    // menuToggle.addEventListener("click", () => {
    //     menuItem.classList.toggle("show");
    //     icon.classList.toggle("fa-bars");
    //     icon.classList.toggle("fa-xmark");
    // });



 let currentIndex = 0;
  const slider = document.getElementById("videoSlider");
  const cards = document.querySelectorAll(".video_card");

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 24; 
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function nextSlide() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }
  //


