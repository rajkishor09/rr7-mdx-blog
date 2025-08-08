import { type RouteConfig, index } from "@react-router/dev/routes";
import { routes } from "react-router-mdx/server";

export default [
  index("routes/home.tsx"),
  ...routes("./routes/posts.tsx"),
] satisfies RouteConfig;
