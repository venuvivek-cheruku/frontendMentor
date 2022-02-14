
//GSAP

gsap.registerPlugin(ScrollTrigger);

let duration = 10,
		sections = gsap.utils.toArray(".panel"),
		sectionIncrement = duration / (sections.length - 1),
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".container",
				pin: true,
				scrub: 1,
        snap: 1 / (sections.length - 1),
				start: "top top",
				end: "+=5000"
			}
		});

tl.to(sections, {
  xPercent: -100 * (sections.length - 1),
  duration: duration,
  ease: "none"
});



// // everything below this is just for the fading/scaling up which is NOT scrubbed - it's all dynamic, triggered when each section enters/leaves so that the fading/scaling occurs at a consistent rate no matter how fast you scroll!
// sections.forEach((section, index) => {
//   let tween = gsap.from(section, {
//     opacity: 0, 
//     scale: 0.6, 
//     duration: 1, 
//     force3D: true, 
//     paused: true
//   });
//   addSectionCallbacks(tl, {
//     start: sectionIncrement * (index - 0.99),
//     end: sectionIncrement * (index + 0.99),
//     onEnter: () => tween.play(),
//     onLeave: () => tween.reverse(),
//     onEnterBack: () => tween.play(),
//     onLeaveBack: () => tween.reverse()
//   });
//   index || tween.progress(1); // the first tween should be at its end (already faded/scaled in)
// });





//text effect

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["a Web Developer", "a Web Designer", "a Youtuber", "a Blogger"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



//quote

