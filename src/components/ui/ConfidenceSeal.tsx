export type ConfidenceLevel = 'high' | 'medium' | 'low' | 'estimated';

export interface ConfidenceSealProps {
  level: ConfidenceLevel;
  className?: string;
}

const CONFIG: Record<ConfidenceLevel, { count: number; label: string }> = {
  high: { count: 3, label: 'alta' },
  medium: { count: 2, label: 'média' },
  low: { count: 1, label: 'baixa' },
  estimated: { count: 0, label: 'estimado' },
};

const BAR_HEIGHTS = [4, 7, 11] as const;

export function ConfidenceSeal({ level, className = '' }: ConfidenceSealProps) {
  const { count, label } = CONFIG[level];

  return (
    <div
      className={`confidence-seal ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        color: 'var(--text-secondary)',
        fontSize: '12px',
        fontWeight: 500,
      }}
      title={`Nível de confiança: ${label}`}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '2px',
          width: '13px',
          height: '11px',
        }}
        aria-hidden="true"
      >
        {BAR_HEIGHTS.map((height, i) => {
          const isFilled = i < count;
          return (
            <div
              key={height}
              style={{
                width: '3px',
                height: `${height}px`,
                borderRadius: '1px',
                backgroundColor: isFilled ? 'var(--text-secondary)' : 'var(--divider)',
                transition: 'background-color var(--transition-fast)',
              }}
            />
          );
        })}
      </div>
      <span>{label}</span>
    </div>
  );
}
