import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import SearchPage from "../pages/search";
import ViewPage from "../pages/view";
import AppLayout from "../layouts/AppLayout";

export const routes = [
  { path: "/", element: <HomePage />, layout: "AppLayout" },
  { path: "/about", element: <AboutPage />, layout: "AppLayout" },
  { path: "/contact", element: <ContactPage />, layout: "AppLayout" },
  { path: "/search/:slug", element: <SearchPage />, layout: "AppLayout" },
  { path: "/view/:slug", element: <ViewPage />, layout: "AppLayout" },
];

routes.map((route) => {
  if (route.layout === "AppLayout") {
    route.element = <AppLayout>{route.element}</AppLayout>;
  }

  return route;
});