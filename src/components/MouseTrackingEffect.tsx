import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

export default function MouseTrackingEffect() {
  const [props1, api1] = useSpring(() => ({ x: 0, y: 0 }));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobileCheck =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        // window.innerWidth <= 768 ||
        'ontouchstart' in window;

      setIsMobile(mobileCheck);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        api1.start({
          x: e.clientX - 88,
          y: e.clientY - 88,
          config: {
            mass: 2,
            tension: 180,
            friction: 30,
          },
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [api1, isMobile]);

  if (isMobile) return null;

  return (
    <div className='fixed inset-0 z-10 pointer-events-none blur-3xl'>
      <animated.div
        style={{
          transform: 'translate3d(0,0,0)',
          x: props1.x,
          y: props1.y,
        }}
        className='rounded-full w-44 h-44 bg-zinc-700/30 backdrop-blur-sm'
      />
    </div>
  );
}
