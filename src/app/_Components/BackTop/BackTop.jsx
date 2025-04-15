import React, { useRef, useEffect, useState } from 'react';

export default function BackTop() {
  const pathRef = useRef(null); // Ref for the SVG path
  const progressWrapRef = useRef(null); // Ref for the progress wrapper
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // State to control visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = (scrollY / maxScroll) * 307.919; // 307.919 is the strokeDasharray value

      // Update strokeDashoffset
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = 307.919 - progress;
      }

      // Update scroll progress state (optional, for debugging or other use cases)
      setScrollProgress(progress);

      // Show/hide the progress circle based on scroll position
      if (scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check scroll position on page load/refresh
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <>
      <div
        ref={progressWrapRef}
        className="progress-wrap active-progress"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s',
          cursor: 'pointer', // Change cursor to pointer to indicate clickability
        }}
        onClick={scrollToTop} // Add onClick handler
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            ref={pathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              strokeDasharray: '307.919, 307.919',
              strokeDashoffset: '307.919',
            }}
          />
        </svg>
      </div>
    </>
  );
}