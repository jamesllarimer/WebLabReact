import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/home.tsx"),
    route("/menu", "pages/menu.tsx"),
    route("/reservations", "pages/reservations.tsx"),
    route("/checkout", "pages/checkout.tsx"),
] satisfies RouteConfig;
