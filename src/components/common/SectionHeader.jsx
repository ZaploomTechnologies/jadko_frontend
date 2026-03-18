import React from 'react';

/**
 * SectionHeader component to maintain consistent heading styles across the site.
 * 
 * @param {string} title - The main heading text.
 * @param {string} highlight - The portion of the title to highlight in the primary color.
 * @param {string} subtitle - Optional subheading text below the title.
 * @param {boolean} centered - Whether to center the header (default: true).
 * @param {string} className - Additional CSS classes for the container.
 */
const SectionHeader = ({ 
  label,
  title, 
  highlight, 
  subtitle, 
  centered = true,
  className = "" 
}) => {
  // If highlight is provided, split the title and wrap the highlight in a span
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return title;
    }

    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-jadko-primary">{highlight}</span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jadko-primary/5 border border-jadko-primary/10 mb-6 group-hover:bg-jadko-primary/10 transition-colors">
          <span className="text-[11px] font-bold tracking-widest text-jadko-primary uppercase">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
        {renderTitle()}
      </h2>
      <div 
        className={`w-20 h-1.5 bg-jadko-primary ${centered ? 'mx-auto' : ''} rounded-full mix-blend-multiply opacity-80 mt-4 mb-5`}
      ></div>
      {subtitle && (
        <p className={`text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
