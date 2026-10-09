const availableInternalRoutes = new Set(["/", "/ask-nihal", "/contact"]);

export function isInternalRouteAvailable(href: string) {
  const pathname = href.split(/[?#]/, 1)[0].replace(/\/$/, "") || "/";
  return availableInternalRoutes.has(pathname);
}
