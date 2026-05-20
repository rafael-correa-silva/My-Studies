gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: true, // DEPURAÇÃO
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "0%",
  },
  "orange",
);

tl.to(
  "#laranja-cortada",
  {
    top: "160%",
    left: "23%",
  },
  "orange",
);

tl.to(
  "#laranja",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange",
);

tl.to(
  "#folha",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange",
);

tl.to(
  "#folha2",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange",
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    markers: true, // DEPURAÇÃO
  },
});

tl2.from(
  ".lemon1",
  {
    top: "110%",
    rotate: "-90deg",
    left: "-100%",
  },
  "ca",
);

tl2.from(
  "#cocacola",
  {
    top: "110%",
    rotate: "-90deg",
    left: "-100%",
  },
  "ca",
);

tl2.from(
  ".lemon2",
  {
    top: "110%",
    rotate: "90deg",
    left: "100%",
  },
  "ca",
);

tl2.from(
  ".pepsi",
  {
    top: "110%",
    rotate: "-90deg",
    left: "-100%",
  },
  "ca",
);

tl2.to(
  "#laranja-cortada",
    {
    width: "18%",      
    top: "204%",
    left: "42%",
  },
  "ca",
);

tl2.to(
  "#fanta",
    {
    width: "35%",      
    top: "210%",
    left: "33%",
  },
  "ca",
);