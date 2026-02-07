import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPaperAirplane, HiLocationMarker, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import { SectionHeading, Card, Button } from '../components/ui';
import { staggerContainer, staggerItem, easings } from '../utils/animations';

/**
 * Premium Contact Section
 * Features: Animated form, social links, status feedback
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please email me directly at ' + personalInfo.email
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social links configuration
  const socialLinks = [
    { name: 'GitHub', href: personalInfo.links.github, icon: FiGithub },
    { name: 'LinkedIn', href: personalInfo.links.linkedin, icon: FiLinkedin },
    { name: 'Twitter', href: personalInfo.links.twitter, icon: FiTwitter },
  ];

  // Input field component with floating label effect
  const InputField = ({ label, name, type = 'text', placeholder, required = true, ...props }) => (
    <div className="relative">
      <label 
        htmlFor={name} 
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          focusedField === name || formData[name] 
            ? '-top-2.5 text-xs font-medium text-primary-600 dark:text-primary-400 bg-white dark:bg-neutral-900 px-1' 
            : 'top-3.5 text-neutral-500 dark:text-neutral-400'
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        required={required}
        className="w-full px-4 py-3.5 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:border-primary-500 dark:focus:border-primary-500 focus:ring-0 outline-none transition-colors text-neutral-900 dark:text-white"
        {...props}
      />
    </div>
  );

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-950/50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          badge="Let's Connect"
          title="Get in Touch"
          subtitle="Interested in working together? Have a question or opportunity? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info - 2 columns */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Quick contact info */}
            <motion.div variants={staggerItem}>
              <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HiMail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">Email</p>
                    <p className="font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                    <HiLocationMarker className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">Location</p>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={staggerItem}>
              <h3 className="font-display font-semibold text-lg text-neutral-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability status */}
            <motion.div variants={staggerItem}>
              <Card variant="gradient" padding="md">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      Available for opportunities
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Response time: ~24 hours
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easings.easeOutExpo }}
            className="lg:col-span-3"
          >
            <Card variant="default" padding="lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label="Name" name="name" placeholder="Your name" />
                  <InputField label="Email" name="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <InputField label="Subject" name="subject" placeholder="What's this about?" />
                
                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'message' || formData.message 
                        ? '-top-2.5 text-xs font-medium text-primary-600 dark:text-primary-400 bg-white dark:bg-neutral-900 px-1' 
                        : 'top-3.5 text-neutral-500 dark:text-neutral-400'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="5"
                    className="w-full px-4 py-3.5 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:border-primary-500 dark:focus:border-primary-500 focus:ring-0 outline-none transition-colors resize-none text-neutral-900 dark:text-white"
                  />
                </div>

                {/* Status message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      status.type === 'success'
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <HiExclamationCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  icon={<FiSend className="w-4 h-4" />}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
