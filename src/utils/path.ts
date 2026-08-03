const b = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an absolute path with the site base: '/foo' → '/portfolio-julius/foo' */
export const withBase = (path: string): string =>
  path && path.startsWith('/') ? `${b}${path}` : path;

/** Prefix absolute paths inside CSS url() values */
export const withBaseCss = (val: string): string =>
  val.replace(/url\(['"]?(\/[^'")\s]+)['"]?\)/g, (_, p) => `url('${b}${p}')`);
