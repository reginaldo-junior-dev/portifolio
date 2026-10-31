import { content } from '../../content';
import { Icon, type IconName } from './Icon';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: IconName;
  external?: boolean;
  download?: boolean;
}

const base =
  'inline-flex min-h-11 items-center gap-2 rounded-sm px-5 font-sans text-button transition-colors duration-150 ease-out motion-safe:active:translate-y-px';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover',
  secondary: 'border border-border-strong text-text hover:border-text-muted hover:bg-surface-2',
};

// Botão como link (todas as ações do site são navegação ou download).
export function Button({
  href,
  children,
  variant = 'primary',
  icon,
  external = false,
  download = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...(download && { download: true })}
    >
      {icon && <Icon name={icon} />}
      {children}
      {external && (
        <>
          <Icon name="external" size={14} />
          <span className="sr-only">{content.a11y.opensInNewTab}</span>
        </>
      )}
    </a>
  );
}
