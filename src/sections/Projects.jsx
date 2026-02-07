import { motion } from 'framer-motion';
import { HiExternalLink, HiArrowRight } from 'react-icons/hi';
import { FiGithub, FiFolder, FiStar } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import { SectionHeading, Card, Badge, Button } from '../components/ui';
import { staggerContainer, staggerItem, easings } from '../utils/animations';

/**
 * Featured Project Card - Large format for highlighted projects
 */
const FeaturedProjectCard = ({ project, index }) => {
  // Generate a consistent gradient based on index
  const gradients = [
    'from-blue-500/10 via-purple-500/5 to-pink-500/10',
    'from-emerald-500/10 via-teal-500/5 to-cyan-500/10',
    'from-orange-500/10 via-rose-500/5 to-pink-500/10',
    'from-violet-500/10 via-purple-500/5 to-indigo-500/10',
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: easings.easeOutExpo }}
      className="group relative"
    >
      <Card variant="default" padding="none" className="overflow-hidden">
        {/* Project preview/header area */}
        <div className={`relative h-48 md:h-56 bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 left-4 w-32 h-32 border border-neutral-400/20 rounded-xl" />
            <div className="absolute bottom-4 right-4 w-24 h-24 border border-neutral-400/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-lg backdrop-blur-sm" />
          </div>
          
          {/* Featured badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="gradient" size="sm">
              <FiStar className="w-3 h-3" />
              Featured
            </Badge>
          </div>

          {/* Project icon/visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FiFolder className="w-16 h-16 text-neutral-400/30 group-hover:scale-110 transition-transform duration-500" />
          </div>

          {/* Hover overlay with links */}
          <div className="absolute inset-0 bg-neutral-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm transition-colors"
                aria-label="View code on GitHub"
              >
                <FiGithub className="w-6 h-6 text-white" />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm transition-colors"
                aria-label="View live demo"
              >
                <HiExternalLink className="w-6 h-6 text-white" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 md:p-8">
          <h3 className="font-display font-bold text-xl md:text-2xl text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Problem & Solution */}
          <div className="space-y-3 mb-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                Problem
              </span>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <Badge key={idx} variant="success" size="sm">
                  {highlight}
                </Badge>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.article>
  );
};

/**
 * Regular Project Card - Compact format
 */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card variant="default" padding="md" className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800">
            <FiFolder className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          </div>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                aria-label="Live Demo"
              >
                <HiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono text-neutral-500 dark:text-neutral-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </Card>
    </motion.article>
  );
};

/**
 * Premium Projects Section
 */
const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Portfolio"
          title="Projects"
          subtitle="A selection of projects demonstrating systems thinking, engineering quality, and real-world problem solving"
        />

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Featured Work
            </h3>
            <div className="h-px flex-1 ml-4 bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                More Projects
              </h3>
              <div className="h-px flex-1 ml-4 bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </div>
        )}

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Button
            variant="ghost"
            href="https://github.com/alexchen"
            icon={<HiArrowRight />}
            className="text-neutral-600 dark:text-neutral-400"
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
