interface ExternalLinks {
  [key: string]: Link;
}

interface RepositoryLinks {
  [key: string]: Link & { repositoryURL?: string; };
}

interface Link {
  title: string;
  url  : string;
}

export const portfolioLinks: RepositoryLinks = {
  dartmong: {
    title: 'Dartmong Blog',
    url: 'https://dartmong.com',
  },
  auroraManga: {
    title: 'Aurora Manga',
    url: 'https://aurora-mangas.vercel.app/',
    repositoryURL: 'https://github.com/Kreator-97/aurora-mangas'
  },
  twittDuck: {
    title: 'Twitt Duck (Clon de Twitter)',
    url: 'https://twitt-duck.herokuapp.com/',
    repositoryURL: 'https://github.com/Kreator-97/twitt-duck',
  },
}

export const personalLinks: ExternalLinks = {
  twitter: {
    title: 'Twitter',
    url: 'https://twitter.com/arturo_monzon8'
  },
  github: {
    title: 'Github',
    url: 'https://github.com/Kreator-97'
  },
}

