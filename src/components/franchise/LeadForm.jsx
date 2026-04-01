import { useState } from 'react';
import { Phone, Mail, CheckCircle } from 'lucide-react';

const initialForm = {
  name: '',
  phone: '',
  city: '',
  budget: 'Collection Center',
  message: '',
};

const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) {
    errors.name = 'Full name is required.';
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }
  if (!fields.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[6-9]\d{9}$/.test(fields.phone.replace(/\s+/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian phone number.';
  }
  if (!fields.city.trim()) {
    errors.city = 'City is required.';
  }
  return errors;
};

const LeadForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const message = [
      `*New Franchise Application - JADKO*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*City:* ${form.city}`,
      `*Select Model:* ${form.budget}`,
      form.message ? `*Message:* ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(`https://wa.me/919033608708?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border bg-gray-50 focus:bg-white transition-all outline-none text-base ${
      errors[field] ? 'border-red-400 focus:border-red-400' : 'border-gray-100 focus:border-jadko-primary'
    }`;

  return (
    <section id="franchise-form" className="py-16 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] shadow-xl shadow-jadko-primary/10 border border-gray-100 flex flex-col lg:flex-row">
          {/* Left Info Column */}
          <div className="lg:w-2/5 bg-jadko-primary p-10 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black mb-6 leading-tight">
                Ready to Build Your Own Healthcare Business?
              </h2>
              <p className="text-gray-200 text-base mb-10 leading-relaxed">
                Take the first step towards a rewarding healthcare entrepreneurship. Our experts will guide you through the entire process.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-0.5">Call for Enquiry</p>
                  <p className="text-lg font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-0.5">Email Enquiry</p>
                  <p className="text-lg font-bold">jadkohealthcare@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:w-3/5 bg-white p-10 lg:p-12">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h3 className="text-2xl font-black text-gray-900">Application Submitted!</h3>
                <p className="text-gray-500 text-base max-w-xs">
                  Thank you for your interest. Our franchise team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setForm(initialForm); setSubmitted(false); }}
                  className="mt-2 text-jadko-primary font-bold text-base underline underline-offset-2"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City Name"
                    className={inputClass('city')}
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Model</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['Collection Center', 'Mini Lab', 'Full Diagnostic Lab'].map((model) => (
                      <label 
                        key={model}
                        className={`
                          relative flex items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer text-sm font-bold
                          ${form.budget === model 
                            ? 'border-jadko-primary bg-jadko-primary/5 text-jadko-primary' 
                            : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
                          }
                        `}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={model}
                          checked={form.budget === model}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-center">{model}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us about your background..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:border-jadko-primary transition-all outline-none resize-none text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-jadko-secondary text-white font-bold rounded-lg tracking-widest uppercase shadow-lg shadow-jadko-secondary/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
