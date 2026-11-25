const paths: Record<string, React.ReactNode> = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  home: (<><path d="M3 10.5 12 3l9 7.5V21H3z" /><path d="M9.5 21v-6h5v6" /></>),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.4A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />,
  shield: (<><path d="M12 3 4.5 6v6c0 4.6 3.2 7.7 7.5 9 4.3-1.3 7.5-4.4 7.5-9V6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>),
  clock: (<><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.2 2" /></>),
  pin: (<><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.4" /></>),
  people: (<><circle cx="8.5" cy="8" r="3.2" /><circle cx="16.5" cy="9" r="2.6" /><path d="M2.5 19.5c.9-3.6 3.3-5.3 6-5.3s5.1 1.7 6 5.3M15 14.3c2.7 0 4.8 1.4 5.6 4.3" /></>),
  chat: <path d="M4 5h16v11H9.5L5 19.5V16H4z" />,
  plus: (<><path d="M12 4v16M4 12h16" /></>),
  mail: (<><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></>),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
};

type Props = { name: keyof typeof paths | string; size?: number; stroke?: number; className?: string };

export default function Icon({ name, size = 20, stroke = 1.7, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
