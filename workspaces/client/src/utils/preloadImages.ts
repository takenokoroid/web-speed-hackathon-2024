import path from 'path-browserify';

async function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function preloadImages() {
  const pathList = process.env['PATH_LIST'];
  if (pathList == null) {
    return;
  }

  const imagePathList: string[] = pathList.split(',').filter((imagePath) => {
    const extension = path.parse(imagePath).ext.toLowerCase();
    return ['.bmp', '.jpg', '.jpeg', '.gif', '.png', '.webp', '.avif'].includes(extension);
  });

  const prefetch = Promise.all(
    imagePathList.map((imagePath) => {
      const link = document.createElement('link');
      return new Promise((resolve) => {
        Object.assign(link, {
          as: 'image',
          crossOrigin: 'anonymous',
          fetchPriority: 'high',
          href: imagePath,
          onerror: resolve,
          onload: resolve,
          rel: 'preload',
        });
        document.head.appendChild(link);
      });
    }),
  );

  await Promise.race([prefetch, wait(5000)]);
}
