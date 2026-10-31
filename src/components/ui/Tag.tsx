interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-sm border border-border bg-surface-2 px-2 py-0.5 font-mono text-tag text-text-muted">
      {children}
    </span>
  );
}
