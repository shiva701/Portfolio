// Minimal sculptural compositions built purely from CSS, echoing the
// soft 3D still-life imagery of the design template.
export default function Art({ variant = 'sand', className = '' }) {
  return (
    <div className={`art art--${variant} ${className}`} aria-hidden="true">
      <span className="art__arch" />
      <span className="art__plinth" />
      <span className="art__sphere" />
      <span className="art__shadow" />
    </div>
  );
}
