interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClass =
    'h-11 rounded-lg px-4 py-3 text-sm font-medium cursor-pointer';

  const variantClasses = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-500 hover:underline',
    secondary:
      'text-black border border-yellow-400 hover:text-yellow-500 hover:underline',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${variantClasses[variant]} ${className} `}
    >
      {children}
    </button>
  );
}
