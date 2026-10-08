export function BrandMark({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Fundo do Ícone NoteBus (#5B4BD6) */}
      <rect width="48" height="48" rx="14" fill="#5B4BD6" />
      
      {/* Folha do caderno */}
      <rect x="11" y="9" width="26" height="30" rx="5" fill="#FFFFFF" />
      
      {/* Furos / marcadores de lista */}
      <circle cx="16" cy="16" r="1.5" fill="#5B4BD6" />
      <circle cx="16" cy="24" r="1.5" fill="#5B4BD6" />
      <circle cx="16" cy="32" r="1.5" fill="#5B4BD6" />
      
      {/* Linhas pautadas */}
      <rect x="20" y="14.5" width="12" height="3" rx="1.5" fill="#5B4BD6" />
      <rect x="20" y="22.5" width="12" height="3" rx="1.5" fill="#5B4BD6" />
      <rect x="20" y="30.5" width="6.5" height="3" rx="1.5" fill="#5B4BD6" />
      
      {/* Ponto / selo de destaque no canto inferior direito */}
      <circle cx="34.5" cy="33.5" r="5" fill="#5B4BD6" stroke="#FFFFFF" strokeWidth="2.5" />
    </svg>
  );
}
