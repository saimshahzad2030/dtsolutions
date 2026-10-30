/**
 * Route template: remounts on every navigation, replaying a short CSS-only
 * entrance so page changes feel continuous without blocking rendering.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}

