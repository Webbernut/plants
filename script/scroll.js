gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

			const smoother = ScrollSmoother.create({
 smooth: 3,
 effects: true
				});

			smoother.effects("header", { speed: "auto" });