const nav = document.querySelector(".nav-regular");
const SectionOne = document.querySelector(".page-title");

const SectionOneOptions = {
    rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
   entries.forEach(entry => {
    if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
    }
   }); 
},
SectionOneOptions);

sectionOneObserver.observe(SectionOne);
