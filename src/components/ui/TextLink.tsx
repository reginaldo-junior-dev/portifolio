import { Icon, type IconName } from './Icon';

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  icon?: IconName;
}

const textLinkClass =
  'inline-flex min-h-11 items-center gap-2 text-text underline decoration-1 underline-offset-3 transition-colors duration-150 ease-out hover:text-accent hover:decoration-accent';

// Link de texto (docs/design.md, seção 7), com ícone opcional antes do texto.
export function TextLink({ href, children, icon, className = '', ...rest }: TextLinkProps) {
  return (
    <a href={href} className={`${textLinkClass} ${className}`} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
    </a>
  );
}
