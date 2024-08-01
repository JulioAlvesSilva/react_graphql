
const SvgLogo = () => (
  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      {/* Gradiente de Luz mais Intenso */}
      <linearGradient id="lightGradient">
        <stop offset="0%" stopColor="white" stopOpacity="0" />
        <stop offset="30%" stopColor="white" stopOpacity="0.8" />
        <stop offset="70%" stopColor="white" stopOpacity="0.8" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>

      {/* Máscara com Luz Ampliada */}
      <mask id="mask">
        <polygon 
          points="50,15 61,35 85,35 66,50 75,75 50,60 25,75 34,50 15,35 39,35" 
          fill="white"
        />
        <rect width="300" height="100" fill="url(#lightGradient)">
          <animate 
            attributeName="x" 
            from="-200" 
            to="200" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </rect>
      </mask>
    </defs>

    {/* Estrela com Efeito de Luz */}
    <polygon 
      points="50,15 61,35 85,35 66,50 75,75 50,60 25,75 34,50 15,35 39,35"
      fill="#e6e696" 
      stroke="gray" 
      strokeWidth="2" 
      mask="url(#mask)"
    />
  </svg>
);

export { SvgLogo };
