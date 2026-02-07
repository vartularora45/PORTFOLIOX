import { motion } from "framer-motion";
import {
  HiStar,
  HiAcademicCap,
  HiBolt,
  HiTrophy,
} from "react-icons/hi2";
import { FiAward, FiTarget } from "react-icons/fi";
import { achievements } from "../data/portfolio";
import { SectionHeading, Card, Badge } from "../components/ui";
import { staggerContainer, staggerItem, easings } from "../utils/animations";

// Achievement type configuration
const achievementIcons = {
  hackathon: { icon: HiTrophy, gradient: 'from-yellow-400 to-orange-500' },
  certification: { icon: HiAcademicCap, gradient: 'from-blue-400 to-indigo-500' },
  competition: { icon: FiTarget, gradient: 'from-purple-400 to-pink-500' },
  default: { icon: HiStar, gradient: 'from-emerald-400 to-teal-500' }
};

// Helper to determine achievement type
const getAchievementType = (achievement) => {
  const title = achievement.title.toLowerCase();
  if (title.includes('hack') || title.includes('winner') || title.includes('finalist')) return 'hackathon';
  if (title.includes('certif') || title.includes('aws') || title.includes('google cloud')) return 'certification';
  if (title.includes('code jam') || title.includes('competition') || title.includes('contest')) return 'competition';
  return 'default';
};

/**
 * Achievement Card Component
 */
const AchievementCard = ({ achievement, index }) => {
  const type = getAchievementType(achievement);
  const config = achievementIcons[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: easings.easeOutExpo }}
      className="group"
    >
      <Card variant="default" padding="none" className="h-full overflow-hidden">
        {/* Gradient header */}
        <div className={`relative h-2 bg-gradient-to-r ${config.gradient}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
        </div>
        
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              {/* Header with title and date */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {achievement.title}
                </h3>
                <span className="flex-shrink-0 text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                  {achievement.date}
                </span>
              </div>
              
              {/* Organization */}
              <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">
                {achievement.organization}
              </p>
              
              {/* Award badge */}
              {achievement.award && (
                <div className="mb-3">
                  <Badge variant="warning" size="sm">
                    <HiTrophy className="w-3 h-3" />
                    {achievement.award}
                  </Badge>
                </div>
              )}
              
              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

/**
 * Premium Achievements Section
 * Features: Trophy-style cards, gradient accents, celebration design
 */
const Achievements = () => {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          badge="🏆 Recognition"
          title="Achievements"
          subtitle="Hackathons, certifications, and competitive programming highlights"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.id} 
              achievement={achievement} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Decorative achievement counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200/50 dark:border-yellow-800/50">
            <HiBolt className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Always pushing boundaries and competing at the highest level
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
