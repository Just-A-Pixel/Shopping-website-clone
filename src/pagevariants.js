const home = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
  out: {},
};

const checkout = {
  initial: {
    x: "100vw",
  },
  in: {
    x: 0,
  },
  out: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
};

export { home, checkout };
