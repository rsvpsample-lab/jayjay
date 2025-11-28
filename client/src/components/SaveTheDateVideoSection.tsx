import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const SaveTheDateVideoSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      id="save-the-date-video" 
      className="section-pastel-lavender py-12 px-4 relative overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 9.5 } : { duration: 0 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 9.8 } : { duration: 0 }}
        >
          <h2 className="text-5xl font-script italic font-black text-gold mb-4" data-testid="text-save-the-date-title">Save the Date Video</h2>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          className="mb-12"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.1 } : { duration: 0 }}
        >
          <div className="bg-card/30 border border-border rounded-xl overflow-hidden shadow-soft hover-elegant">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Z5NPyAhcFTo"
                title="Save the Date Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="video-save-the-date"
              />
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div 
          className="text-center"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.4 } : { duration: 0 }}
        >
          <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
            We can't wait to share our special day with you. More details coming soon!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateVideoSection;
