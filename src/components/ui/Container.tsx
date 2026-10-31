interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-content px-4 lg:px-8 ${className}`}>{children}</div>;
}
