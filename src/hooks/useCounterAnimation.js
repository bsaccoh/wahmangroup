import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for animated number counting.
 * Triggers count-up animation when element scrolls into view.
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in ms (default 2000)
 * @returns {[React.RefObject, number]} ref and current count value
 */
export const useCounterAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();
          const startValue = 0;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (end - startValue) * easeOut);
            
            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end, duration]);

  return [ref, count];
};

export default useCounterAnimation;
