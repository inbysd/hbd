const animationTimeline = () => {
    const tl = gsap.timeline();

    tl.to(".container", { duration: 0.1, visibility: "visible" })

    .fromTo("#helloYasmine", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#helloYasmine", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#birthdayGirl", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#birthdayGirl", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#happyBirthday", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#happyBirthday", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#wish1", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#wish1", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#wish2", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#wish2", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#wish3", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#wish3", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#wish4", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#wish4", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#onceAgain", { opacity: 0 }, { duration: 1, opacity: 1, ease: "elastic.out(1, 0.5)" })
    .to("#onceAgain", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    // Animate image and text pairs together, keeping them centered
    .fromTo("#imageMyLove, #myLove", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#imageMyLove, #myLove", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#imageSweetest, #sweetest", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#imageSweetest, #sweetest", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#imageCutest, #cutest", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#imageCutest, #cutest", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#imageStrongest, #strongest", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#imageStrongest, #strongest", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#imageExquisite, #exquisite", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#imageExquisite, #exquisite", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#future", { opacity: 0 }, { duration: 1.5, opacity: 1, ease: "elastic.out(1, 0.5)" })
    .to("#future", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .fromTo("#finalWish", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.out" })
    .to("#finalWish", { duration: 1, opacity: 0, ease: "power2.in", delay: 1 })

    .from("#balloons", { duration: 2, display: "block", opacity: 0, y: 200, ease: "bounce.out" });

    document.getElementById("replay").addEventListener("click", () => {
        tl.restart();
    });
};

window.onload = animationTimeline;
