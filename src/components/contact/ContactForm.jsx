import { useState } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const EMPTY_FORM = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const validate = (data) => {
  const errors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.subject) errors.subject = 'Please select a subject.';
  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
};

const inputClass = (hasError) =>
  `w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${hasError
    ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50'
    : 'border-white/10 focus:border-gold focus:ring-gold/50'
  }`;

const FieldError = ({ message }) =>
  message ? (
    <p role="alert" className="mt-1.5 text-red-400 text-xs font-medium">
      {message}
    </p>
  ) : null;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) {
      const fieldErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(EMPTY_FORM).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const fieldErrors = validate(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // NOTE: Replace these with your actual EmailJS credentials
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData(EMPTY_FORM);
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-navy-dark rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold rounded-full blur-[80px] opacity-20" />

      <h3 className="font-heading text-2xl font-bold text-white mb-6 relative z-10">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit} noValidate className="space-y-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-white/60 text-sm mb-2">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass(errors.fullName)}
              placeholder="John Doe"
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              aria-invalid={!!errors.fullName}
            />
            <FieldError message={errors.fullName} />
          </div>

          <div>
            <label htmlFor="company" className="block text-white/60 text-sm mb-2">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClass(false)}
              placeholder="Your Company"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-white/60 text-sm mb-2">
              Email Address <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass(errors.email)}
              placeholder="john@example.com"
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            <FieldError message={errors.email} />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white/60 text-sm mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass(false)}
              placeholder="+23276000000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-white/60 text-sm mb-2">
            Subject <span className="text-gold">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass(errors.subject)} appearance-none`}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            aria-invalid={!!errors.subject}
          >
            <option value="" disabled className="text-navy-dark">Select a subject...</option>
            <option value="General Inquiry" className="text-navy-dark">General Inquiry</option>
            <option value="Investment" className="text-navy-dark">Investment Opportunities</option>
            <option value="Partnership" className="text-navy-dark">Business Partnership</option>
            <option value="Media" className="text-navy-dark">Media &amp; Press</option>
            <option value="Careers" className="text-navy-dark">Careers</option>
          </select>
          <FieldError message={errors.subject} />
        </div>

        <div>
          <label htmlFor="message" className="block text-white/60 text-sm mb-2">
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputClass(errors.message)} resize-none`}
            placeholder="How can we help you?"
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={!!errors.message}
          />
          <div className="flex items-center justify-between mt-1">
            <FieldError message={errors.message} />
            <span className={`text-xs ml-auto ${formData.message.length > 0 ? 'text-white/40' : 'text-transparent'}`}>
              {formData.message.length} chars
            </span>
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
