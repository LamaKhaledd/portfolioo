/********************************************************************** */
/*Will be moved to the dashboard utils section*/
/*This function will be used for typing effect in the dashboard section*/
/********************************************************************** */
  export const typeTextEffect = (
    text1: string,
    text2: string,
    typingSpeed: number,
    setShowArrow: React.Dispatch<React.SetStateAction<boolean>>,
    nameElementId: string,
    roleElementId: string
  ) => {
    let index1 = 0;
    let index2 = 0;
  
    const nameElement = document.getElementById(nameElementId);
    const roleElement = document.getElementById(roleElementId);
  
    const userNameTyping = () => {
      if (index1 < text1.length) {
        if (nameElement) {
          nameElement.innerHTML += text1[index1] === " " ? "&nbsp;" : text1[index1];
        }
        index1++;
      } else {
        clearInterval(interval1);
        setTimeout(userJobTyping, 250);
      }
    };
  
    const userJobTyping = () => {
      const interval2 = setInterval(() => {
        if (index2 < text2.length) {
          if (roleElement) {
            roleElement.innerHTML += text2[index2] === " " ? "&nbsp;" : text2[index2];
          }
          index2++;
        } else {
          clearInterval(interval2);
          setTimeout(() => {
            setShowArrow(true);
          }, 250);
        }
      }, typingSpeed);
    };
  
    const interval1 = setInterval(userNameTyping, typingSpeed);
  
    return () => {
      clearInterval(interval1);
    };
  };
  