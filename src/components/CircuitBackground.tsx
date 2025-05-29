
const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Circuit Paths */}
        <path
          d="M100 100 L300 100 L300 200 L500 200 L500 100 L700 100 L700 300 L900 300 L900 200 L1100 200"
          stroke="#00d4ff"
          strokeWidth="2"
          strokeDasharray="10,5"
          className="animate-circuit-flow"
        />
        
        <path
          d="M50 300 L200 300 L200 400 L400 400 L400 500 L600 500 L600 400 L800 400 L800 600 L1000 600"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          strokeDasharray="8,4"
          className="animate-circuit-flow"
          style={{ animationDelay: '1s' }}
        />
        
        <path
          d="M150 50 L150 150 L250 150 L250 250 L350 250 L350 350 L450 350 L450 450 L550 450 L550 550"
          stroke="#39ff14"
          strokeWidth="1"
          strokeDasharray="6,3"
          className="animate-circuit-flow"
          style={{ animationDelay: '2s' }}
        />

        {/* Circuit Nodes */}
        <circle cx="300" cy="100" r="4" fill="#00d4ff" className="animate-pulse-glow" />
        <circle cx="500" cy="200" r="3" fill="#8b5cf6" className="animate-pulse-glow" />
        <circle cx="700" cy="300" r="5" fill="#39ff14" className="animate-pulse-glow" />
        <circle cx="400" cy="400" r="3" fill="#ff007f" className="animate-pulse-glow" />
        <circle cx="600" cy="500" r="4" fill="#00d4ff" className="animate-pulse-glow" />

        {/* Data Flow Indicators */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx={100 + i * 150}
            cy={200 + Math.sin(i) * 100}
            r="2"
            fill="#00d4ff"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* Geometric Patterns */}
        <polygon
          points="800,150 850,100 900,150 850,200"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1"
          className="animate-pulse"
        />
        
        <rect
          x="950"
          y="350"
          width="50"
          height="50"
          fill="none"
          stroke="#39ff14"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </svg>

      {/* Floating Data Clusters */}
      <div className="absolute top-20 left-10 w-6 h-6 border border-cyber-blue rounded opacity-30 animate-float" />
      <div className="absolute top-40 right-20 w-4 h-4 border border-cyber-green rounded opacity-40 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-32 w-8 h-8 border border-cyber-violet rounded opacity-25 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-10 w-5 h-5 border border-cyber-pink rounded opacity-35 animate-float" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default CircuitBackground;
