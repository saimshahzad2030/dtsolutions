import {
  Bot,
  ChartNoAxesCombined,
  CodeXml,
  CreditCard,
  Globe,
  LifeBuoy,
  Workflow,
  type LucideProps,
} from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/data/site";

const map = {
  web: Globe,
  software: CodeXml,
  ai: Bot,
  dashboard: ChartNoAxesCombined,
  api: Workflow,
  payment: CreditCard,
  support: LifeBuoy,
} satisfies Record<ServiceIconName, React.ComponentType<LucideProps>>;

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & LucideProps) {
  const Icon = map[name];
  return <Icon aria-hidden strokeWidth={1.6} {...props} />;
}

