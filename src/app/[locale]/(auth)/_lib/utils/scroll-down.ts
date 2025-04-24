export const scrollDownByScreen = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };