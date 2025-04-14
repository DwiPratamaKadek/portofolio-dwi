import PropTypes from 'prop-types';

export default function ImageBox({ 
    src, 
    alt, 
    className = "", 
    width = "", 
    height = "" 
}) {
    return (
        <div className={`ml-2 overflow-hidden border border-gray-400 rounded-xl shadow-md transition-transform hover:scale-[1.03] ${className}`} style={{width, height}}>
        <img 
            src={src} 
            alt={alt || "image"} 
            className="w-full h-full object-cover block"
        />
        </div>
    );
    }

    ImageBox.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};