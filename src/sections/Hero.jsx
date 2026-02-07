import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight, HiArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import { Button, Badge, GradientText } from '../components/ui';
import { staggerContainer, staggerItem, fadeInUp, easings } from '../utils/animations';

/**
 * Premium Hero Section
 * Features: Animated gradient background, floating elements, smooth parallax
 */
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Social links configuration
  const socialLinks = [
    { name: 'GitHub', href: personalInfo.links.github, icon: FiGithub },
    { name: 'LinkedIn', href: personalInfo.links.linkedin, icon: FiLinkedin },
    { name: 'Twitter', href: personalInfo.links.twitter, icon: FiTwitter },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-500/15 to-pink-500/15 blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main content with parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Availability badge */}
          <motion.div variants={staggerItem}>
            <Badge variant="success" dot pulse className="mb-2">
              {personalInfo.availability}
            </Badge>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.div variants={staggerItem}>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              <span className="text-neutral-900 dark:text-white">Hi, I'm </span>
              <GradientText variant="primary" className="inline-block">
                {personalInfo.name}
              </GradientText>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            variants={staggerItem}
            className="text-xl sm:text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Role description */}
          <motion.p 
            variants={staggerItem}
            className="text-lg text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto"
          >
            {personalInfo.role} focused on building{' '}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">reliable</span>,{' '}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">performant systems</span>{' '}
            that scale. Currently exploring distributed systems and developer experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<HiArrowRight className="text-lg" />}
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            variants={staggerItem}
            className="flex items-center justify-center gap-4 pt-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/50 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={(e) => handleScroll(e, '#about')}
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <HiArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-[10%] w-2 h-2 rounded-full bg-primary-500/60"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-[15%] w-3 h-3 rounded-full bg-purple-500/40"
          animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-pink-500/50"
          animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default Hero;
