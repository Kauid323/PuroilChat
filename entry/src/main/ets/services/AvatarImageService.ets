import http from '@ohos.net.http';
import image from '@ohos.multimedia.image';
import { fileIo } from '@kit.CoreFileKit';
import { AppConfig } from './AppConfig';
import { AppContextHolder } from './AppContextHolder';

interface AvatarHeaders {
  referer: string;
  'device-id': string;
}

const AVATAR_PARAM: string = 'imageView2%2F2%2Fw%2F120%2Fh%2F120';

export class AvatarImageService {
  private static readonly CACHE_DIR_NAME: string = 'avatars';
  private cache: Map<string, image.PixelMap> = new Map<string, image.PixelMap>();

  static normalizeAvatarUrl(url: string): string {
    if (url.length === 0) {
      return '';
    }
    if (url.indexOf(AVATAR_PARAM) >= 0) {
      return url;
    }
    const separator: string = url.indexOf('?') >= 0 ? '&' : '?';
    return `${url}${separator}${AVATAR_PARAM}`;
  }

  private buildHeaders(): AvatarHeaders {
    return {
      referer: 'https://myapp.jwznb.com',
      'device-id': AppConfig.DEVICE_ID
    };
  }

  private getCacheRoot(): string {
    const context = AppContextHolder.getContext();
    if (context === undefined) {
      return '';
    }
    return `${context.cacheDir}/${AvatarImageService.CACHE_DIR_NAME}`;
  }

  private ensureCacheDir(): string {
    const cacheRoot: string = this.getCacheRoot();
    if (cacheRoot.length === 0) {
      return '';
    }
    try {
      if (!fileIo.accessSync(cacheRoot)) {
        fileIo.mkdirSync(cacheRoot, true);
      }
    } catch (_error) {
      return '';
    }
    return cacheRoot;
  }

  private hashUrl(url: string): string {
    let hash: number = 0;
    for (let i = 0; i < url.length; i++) {
      hash = (hash * 131 + url.charCodeAt(i)) & 0x7fffffff;
    }
    return `${hash}`;
  }

  private getFileExtension(url: string): string {
    const queryIndex: number = url.indexOf('?');
    const path: string = queryIndex >= 0 ? url.substring(0, queryIndex) : url;
    const dotIndex: number = path.lastIndexOf('.');
    if (dotIndex < 0 || dotIndex >= path.length - 1) {
      return 'img';
    }
    const suffix: string = path.substring(dotIndex + 1).toLowerCase();
    if (suffix.length === 0 || suffix.length > 5) {
      return 'img';
    }
    return suffix;
  }

  private buildCachePath(url: string): string {
    const cacheRoot: string = this.ensureCacheDir();
    if (cacheRoot.length === 0) {
      return '';
    }
    return `${cacheRoot}/${this.hashUrl(url)}.${this.getFileExtension(url)}`;
  }

  private async createPixelMapFromPath(path: string): Promise<image.PixelMap | undefined> {
    try {
      if (path.length === 0 || !fileIo.accessSync(path)) {
        return undefined;
      }
    } catch (_error) {
      return undefined;
    }
    try {
      const source: image.ImageSource = image.createImageSource(path);
      return await source.createPixelMap();
    } catch (_error) {
      return undefined;
    }
  }

  private writeCacheFile(path: string, data: ArrayBuffer): void {
    if (path.length === 0) {
      return;
    }
    let file: fileIo.File | undefined = undefined;
    try {
      file = fileIo.openSync(path, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.TRUNC);
      fileIo.writeSync(file.fd, data);
    } catch (_error) {
    } finally {
      if (file !== undefined) {
        try {
          fileIo.closeSync(file);
        } catch (_closeError) {
        }
      }
    }
  }

  private async loadFromDisk(url: string): Promise<image.PixelMap | undefined> {
    const cachePath: string = this.buildCachePath(url);
    const pixelMap: image.PixelMap | undefined = await this.createPixelMapFromPath(cachePath);
    if (pixelMap !== undefined) {
      this.cache.set(url, pixelMap);
    }
    return pixelMap;
  }

  private async loadFromNetwork(url: string): Promise<image.PixelMap | undefined> {
    const request: http.HttpRequest = http.createHttp();
    try {
      const options: http.HttpRequestOptions = {
        method: http.RequestMethod.GET,
        header: this.buildHeaders(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
        connectTimeout: 12000,
        readTimeout: 12000
      };
      let response: http.HttpResponse;
      try {
        response = await request.request(url, options);
      } catch (_requestError) {
        return undefined;
      }
      if (response.responseCode < 200 || response.responseCode >= 300) {
        return undefined;
      }
      if (!(response.result instanceof ArrayBuffer)) {
        return undefined;
      }

      const cachePath: string = this.buildCachePath(url);
      this.writeCacheFile(cachePath, response.result);

      const source: image.ImageSource = image.createImageSource(response.result);
      const pixelMap: image.PixelMap = await source.createPixelMap();
      this.cache.set(url, pixelMap);
      return pixelMap;
    } catch (_error) {
      return undefined;
    } finally {
      try {
        request.destroy();
      } catch (_error) {
      }
    }
  }

  async loadAvatar(url: string): Promise<image.PixelMap | undefined> {
    const normalizedUrl: string = AvatarImageService.normalizeAvatarUrl(url);
    if (normalizedUrl.length === 0) {
      return undefined;
    }
    const memoryCached: image.PixelMap | undefined = this.cache.get(normalizedUrl);
    if (memoryCached !== undefined) {
      return memoryCached;
    }

    const diskCached: image.PixelMap | undefined = await this.loadFromDisk(normalizedUrl);
    if (diskCached !== undefined) {
      return diskCached;
    }

    return await this.loadFromNetwork(normalizedUrl);
  }
}
