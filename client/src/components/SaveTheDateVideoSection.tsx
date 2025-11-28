import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const SaveTheDateVideoSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      id="save-the-date-video" 
      className="relative w-full overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 9.5 } : { duration: 0 }}
    >
      {/* Full Width Video Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Z5NPyAhcFTo"
            title="Save the Date Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="video-save-the-date"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateVideoSection;
