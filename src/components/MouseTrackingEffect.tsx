import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

export default function MouseTrackingEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [props1, api1] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Primary tracker
      api1.start({
        x: e.clientX - 88,
        y: e.clientY - 88,
        config: {
          mass: 2,
          tension: 180,
          friction: 30
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [api1]);

  const createPixelStyle = (x, y) => {
    const distanceFromMouse = Math.sqrt(
      Math.pow((x - mousePosition.x), 2) + 
      Math.pow((y - mousePosition.y), 2)
    );
    
    const maxDistance = 200; // Increased radius to match your larger cursor
    const scale = Math.max(0, 1 - distanceFromMouse / maxDistance);
    
    return {
      transform: `scale(${scale})`,
      opacity: scale * 0.7  // Reduced opacity to match your style
    };
  };

  return (
    <>
      {/* Pixelated background effect */}
      {/* <div className="fixed inset-0 z-[5] pointer-events-none">
        {[...Array(20)].map((_, row) => (
          <div key={row} className="flex">
            {[...Array(20)].map((_, col) => {
              const x = (col + 0.5) * (window.innerWidth / 20);
              const y = (row + 0.5) * (window.innerHeight / 20);
              
              return (
                <div
                  key={`${row}-${col}`}
                  className="w-[5vw] h-[5vh] flex-shrink-0"
                >
                  <div 
                    className="w-2 h-2 m-auto transition-transform duration-300 ease-out rounded-sm bg-zinc-700/20"
                    style={createPixelStyle(x, y)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div> */}

      {/* Mouse trackers */}
      <div className="fixed inset-0 z-10 pointer-events-none blur-3xl">
        {/* Primary tracker */}
        <animated.div
          style={{
            transform: 'translate3d(0,0,0)',
            x: props1.x,
            y: props1.y,
          }}
          className="rounded-full w-44 h-44 bg-zinc-700/30 backdrop-blur-sm"
        />
      </div>
    </>
  );
}