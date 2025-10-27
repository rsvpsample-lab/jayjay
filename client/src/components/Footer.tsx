import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-card text-foreground py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* Grateful Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-foreground/90 text-base italic leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Closing */}
          <div className="mt-8">
            <p className="text-foreground/80 text-sm mb-2">With love and gratitude,</p>
            <p className="text-foreground text-lg mb-4" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Jay & Lianne
            </p>
            <p className="text-foreground/70 text-2xl" style={{ fontFamily: 'Boska, serif', fontWeight: 200 }}>
              12.02.25
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;