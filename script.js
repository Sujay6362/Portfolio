document.addEventListener('DOMContentLoaded', () => {
  // Typed.js initialization
  new Typed('#role', {
    strings: ['Data Scientist', 'Data Analyst'],
    typeSpeed: 130,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    smartBackspace: true
  });

  // Project data
  const projectsData = {
  1: {
    title: "The-Global-EV-olution-Are-We-There-Yet",
    description:
      "This project presents a scrollytelling-based interactive narrative that explores the global rise of electric vehicles (EVs), the technologies driving them, the policy incentives accelerating their growth, and the future challenges and opportunities in the space.",
    live:
      "https://scrollytelling-the-global-ev-olutio.vercel.app",

    images: [
      "./files/scrollytelling.png"
    ]
  },
    2: {
      title: "Android Mobile App - ArecaNut",
      description: "It is a Mobile app which scrapes the data from the website and display it in app. The website used to scrape is karnataka arecanut price, in which gov updates prices of each item everyday.",
      live:
      "https://github.com/Sujay6362/AndroidMobileApp-ArecaNut",
      images: [
        "./files/arecanut.png",
        "./files/arecanut_2.png"
      ]
    },
    3: {
      title: "SVM Text Classifier",
      description: "Text classification using Support Vector Machines (SVM) for accurate and efficient categorization of textual data into predefined classes.",
      live: "https://github.com/Sujay6362/SVMTextClassifier",
      images: [
        "./files/svmtextclassifier.png",
      ]
    },
    4: {
      title: "Financial-Risk-Assessment",
      description: "Machine learning project for credit default prediction using the Kaggle “Give Me Some Credit” dataset. Includes EDA, preprocessing pipelines, SMOTE balancing, model benchmarking, hyperparameter tuning, and ensemble learning with XGBoost, Random Forest, SVM, and MLP models. Achieved ROC-AUC of 0.837 using an XGB+RF ensemble.",
      live: "https://github.com/Sujay6362/Financial-Risk-Assessment",
      images: [
        "./files/FIMG_1.png",
        "./files/FIMG_2.png"
      ]
    }
    // 5: {
    //   title: "Project Epsilon",
    //   description: "Hybrid recommendation system combining collaborative filtering with content-based methods. Implemented for an e-commerce platform, resulting in 25% increase in click-through rate and 15% uplift in conversions.",
    //   images: [
    //     "https://via.placeholder.com/600x400/f0ede6/0f2340?text=Epsilon+Recommendations",
    //     "https://via.placeholder.com/600x400/e8e3d8/0f2340?text=Epsilon+Architecture"
    //   ]
    // },
    // 6: {
    //   title: "Project Zeta",
    //   description: "Customer churn prediction model using XGBoost with engineered features from user behavior logs. Achieved AUC of 0.92 and helped retain 30% of at-risk customers through targeted interventions.",
    //   images: [
    //     "https://via.placeholder.com/600x400/f0ede6/0f2340?text=Zeta+Feature+Importance",
    //     "https://via.placeholder.com/600x400/e8e3d8/0f2340?text=Zeta+Confusion+Matrix"
    //   ]
    // }
  };

  const projectCards = document.querySelectorAll('.project-card');
  const displayTitle = document.getElementById('display-title');
  const displayDescription = document.getElementById('display-description');
  const projectImages = document.querySelector('.project-images');

  function updateProjectDisplay(projectId) {
    const project = projectsData[projectId];
    displayTitle.textContent = project.title;
    displayDescription.innerHTML = `
  ${project.description}

  ${
    project.live
      ? `<br><br>
         <a href="${project.live}" 
            target="_blank"
            class="live-project-link">
            View Live Project →
         </a>`
      : ''
  }
`;
    projectImages.innerHTML = project.images.map(imgUrl =>
      `<img src="${imgUrl}" alt="${project.title} screenshot">`
    ).join('');
    projectCards.forEach(card => {
      card.classList.toggle('active', card.dataset.project === projectId);
    });
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => updateProjectDisplay(card.dataset.project));
  });

  if (projectCards.length > 0) updateProjectDisplay('1');

  // Research arrow navigation
  // const researchSlides = document.querySelector('.research-slides');
  // const nextArrows = document.querySelectorAll('.next-slide');
  // nextArrows.forEach(arrow => {
  //   arrow.addEventListener('click', () => {
  //     const nextSlide = document.getElementById(arrow.dataset.next);
  //     if (nextSlide) nextSlide.scrollIntoView({ behavior: 'smooth' });
  //   });
  // });

  // if (researchSlides) {
  //   researchSlides.addEventListener('scroll', () => {
  //     const slides = document.querySelectorAll('.research-slide');
  //     const arrows = document.querySelectorAll('.research-arrow');
  //     slides.forEach((slide, index) => {
  //       const rect = slide.getBoundingClientRect();
  //       const isActive = rect.top >= 0 && rect.top < window.innerHeight / 2;
  //       if (isActive) {
  //         arrows.forEach((arrow, i) => {
  //           arrow.style.opacity = i === index ? '1' : '0.3';
  //           arrow.style.pointerEvents = i === index ? 'auto' : 'none';
  //         });
  //       }
  //     });
  //   });
  // }

  // Contact — draft email
  const draftBtn = document.getElementById('draft-email-btn');
  const messageBox = document.getElementById('contact-message');
  if (draftBtn && messageBox) {
    draftBtn.addEventListener('click', () => {
      const message = messageBox.value.trim();
      if (!message) {
        alert('Please write a message before drafting an email.');
        messageBox.focus();
        return;
      }
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sshivap8@asu.edu&su=&body=${encodeURIComponent(message)}`;
      window.open(gmailUrl, '_blank');
    });
    messageBox.addEventListener('input', () => {
      draftBtn.style.opacity = messageBox.value.trim() ? '1' : '0.5';
    });
    draftBtn.style.opacity = '0.5';
  }

// ===== FEATURED APP SMOOTH HORIZONTAL SCROLL =====

const storySection = document.querySelector('.story');
const storyTrack = document.querySelector('.story-track');

if (storySection && storyTrack) {

  let currentX = 0;
  let targetX = 0;

  const smoothness = 0.08;

  function animate() {

    currentX += (targetX - currentX) * smoothness;

    storyTrack.style.transform =
      `translate3d(-${currentX}px, 0, 0)`;

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('scroll', () => {

    const sectionTop = storySection.offsetTop;
    const sectionHeight = storySection.offsetHeight;
    const scrollY = window.scrollY;

    const maxVerticalScroll =
      sectionHeight - window.innerHeight;

    const scrollProgress =
      Math.min(
        Math.max(scrollY - sectionTop, 0),
        maxVerticalScroll
      );

    const progress =
      scrollProgress / maxVerticalScroll;

    const maxHorizontalScroll =
      storyTrack.scrollWidth - window.innerWidth;

    targetX =
      progress * maxHorizontalScroll;
  });
}
});
