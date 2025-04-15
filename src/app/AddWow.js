import { useEffect } from 'react'

export default function AddWow() {

      useEffect(() => {
        if (typeof window !== 'undefined') {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
          script.onload = () => new WOW().init();
          document.body.appendChild(script);
        }
      }, []);
    
  return null ;
}
