export interface LineBadgeProps {
  code: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LINE_COLORS: Record<string, { color: string; darkText: boolean }> = {
  '1': { color: '#7CB342', darkText: true },
  '2': { color: '#D32F2F', darkText: false },
  '3': { color: '#4FC3F7', darkText: true },
  '4': { color: '#1E3A8A', darkText: false },
  '5': { color: '#2E7D32', darkText: false },
  '6': { color: '#C7017F', darkText: false },
  '7': { color: '#F57C00', darkText: true },
  '8': { color: '#FDD835', darkText: true },
  '9': { color: '#1C1C1E', darkText: false },
};

export function LineBadge({ code, color, size = 'md', className = '' }: LineBadgeProps) {
  const lineInfo = LINE_COLORS[code] || { color: color || '#5B4BD6', darkText: false };
  const bgColor = color || lineInfo.color;
  const textColor = lineInfo.darkText ? '#1C1C1E' : '#FFFFFF';

  const sizeStyles = {
    sm: { minWidth: '22px', height: '22px', fontSize: '11px', padding: '0 5px' },
    md: { minWidth: '28px', height: '26px', fontSize: '13px', padding: '0 7px' },
    lg: { minWidth: '34px', height: '30px', fontSize: '15px', padding: '0 9px' },
  }[size];

  return (
    <span
      className={`line-badge line-badge--${code} ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minWidth: sizeStyles.minWidth,
        height: sizeStyles.height,
        fontSize: sizeStyles.fontSize,
        padding: sizeStyles.padding,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: '-0.02em',
        userSelect: 'none',
        flexShrink: 0,
      }}
      aria-label={`Linha ${code}`}
    >
      {code}
    </span>
  );
}
