const GradientSVG = ({ startColor, endColor, idCSS, rotation }) => {
  return (
    <svg style={{ height: 0, position: 'absolute' }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={`rotate(${rotation || "0"})`}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
