import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Christian Ascone Software Engineer',

  origin: 'http://localhost',
  basePathname: '/',
  trailingSlash: false,

  title: 'Christian Ascone - Software Engineer',
  description:
    'Pagina personale.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'TODO',
};

export const SITE = { ...CONFIG, blog: undefined };
export const DATE_FORMATTER = CONFIG.dateFormatter;
export const SITE_TITLE = 'My personal website.';
export const SITE_DESCRIPTION = 'Welcome to my website!';
