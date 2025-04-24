import { Image as MantineImage } from '@mantine/core';  
import Image from 'next/image';  
import IPortfolioImageInterface from './models/portfolio-image.interface';

const PortfolioImage: React.FC<{ schema?: IPortfolioImageInterface }> = ({ schema }) => {  
  const {  
    src,  
    height = 80,  
    width = 80,  
    fit = 'contain',  
    loading = 'lazy',  
    fill = false,  
    priority = false,  
    withBorder,  
    radius="lg",  
    alt,  
    padding, 
  } = schema || {};  

  return (  
    <MantineImage  
      className={withBorder ? 'border-solid-light' : ''}  
      component={Image}
      p={padding}  
      height={height}  
      width={width}  
      fit={fit}  
      priority={priority}  
      fill={fill}  
      loading={loading}  
      radius={radius}  
      alt={alt || 'image'}  
      src={src} 
    />  
  );  
};  
export default PortfolioImage;