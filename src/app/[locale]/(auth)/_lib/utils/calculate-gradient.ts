/*function to caculate the opacity of the background */
export const calculateGradient = (scrollY: number): string => {
    const opacity = Math.min(1, scrollY / 250); 
    return `linear-gradient(to bottom, rgba(23, 96, 159, ${0.3 + opacity}), white)`;
  };
  