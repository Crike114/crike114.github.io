export const config = {
  github: {
    login: "Crike114", // github login name, not user name
    repo: "crike114.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Crike's Blog",
    brand: "Crike's Blog",
    description: "Crike's Blog yes",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/glink25",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
