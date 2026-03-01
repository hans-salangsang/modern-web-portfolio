"use client";

type EmailLinkProps = {
  email: string;
  className?: string;
  children: React.ReactNode;
};

export default function EmailLink({ email, className = "", children }: EmailLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
