
interface UnsplashImage {
  imageURL: string;
  postURL: string;
  author: { name: string, URL: string }
}

interface UnsplashImages {
  dark  : UnsplashImage;
  light : UnsplashImage;
}

export const unsplashImages: UnsplashImages = {
  dark: {
    imageURL: '/images/background-dark.jpg',
    postURL: 'https://unsplash.com/es/s/fotos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: {
      name: 'AltumCode',
      URL: 'https://unsplash.com/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  light: {
    imageURL: '/images/background-light.jpg',
    postURL: 'https://unsplash.com/es/fotos/bs2Ba7t69mM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: {
      name: 'Ben Kolde',
      URL: 'https://unsplash.com/@benkolde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  }
}

