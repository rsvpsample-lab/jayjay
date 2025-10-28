import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        src="https://res.cloudinary.com/db3limorz/video/upload/v1761568053/VICTEL9989small_sbtkiu.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center' }}
        data-testid="hero-video"
      />

      {/* Content */}
      <div className="relative z-10 text-left px-8 sm:px-12 lg:px-16 max-w-7xl w-full">
        <div className="mb-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300, textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)' }}>
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'Jayrald\n&\nJulie Anne',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="span"
                speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                cursor={true}
                repeat={0}
                className="typewriter-text"
              />
            ) : (
              <span 
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                className="typewriter-text"
              >
                Jayrald
                <br />
                &
                <br />
                Julie Anne
              </span>
            )}
          </h1>
        </div>

        <div className={`transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <div className="text-right">
            <p className="text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wider" style={{ fontFamily: 'Boska, serif', fontWeight: 200, textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)' }} data-testid="text-date">
              12
              <br />
              02
              <br />
              25
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className={`absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-1000 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'}`}
        data-testid="scroll-indicator"
      >
        <span className="text-sm font-bold tracking-widest" style={{ fontFamily: 'Boska, serif', color: '#FFD700', textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 2px 2px 8px rgba(0,0,0,0.9)' }}>
          SCROLL DOWN
        </span>
        <ChevronDown className="w-6 h-6" style={{ color: '#FFD700', filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.8)) drop-shadow(2px 2px 8px rgba(0,0,0,0.9))' }} />
      </div>

      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 3rem !important;
            line-height: 1.2 !important;
          }
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: white;
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;