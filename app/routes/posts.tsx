import { useMdxComponent } from "react-router-mdx/client";
import { loadMdx } from "react-router-mdx/server";
import type { Route } from "./+types/home";

export const loader = async ({ request }: Route.LoaderArgs) => {
  return loadMdx(request);
};

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-4" {...props} />
  ),
};
export default function Home() {
  const Component = useMdxComponent(components);
  return <Component />;
}
