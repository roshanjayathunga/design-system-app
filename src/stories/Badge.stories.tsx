import { Badge } from "../components/ui/badge";

export default {
  title: "Components/Badge",
  component: Badge,
};

export const Default = () => <Badge>Default Badge</Badge>;

export const Variants = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);
