import imageCompression from 'browser-image-compression'
export async function compressImageTo15KB(file: File): Promise<File> {
    const options = {
      maxSizeMB: 0.015, // 15KB = 0.015MB
      maxWidthOrHeight: 800, // 控制图片最大尺寸，降低像素体积
      useWebWorker: true,
      initialQuality: 0.4, // 初始压缩质量（0~1）
      alwaysKeepResolution: false, // 允许调整尺寸
    }
  
    try {
      const compressedFile = await imageCompression(file, options)
      console.log('原始大小:', file.size / 1024, 'KB')
      console.log('压缩后大小:', compressedFile.size / 1024, 'KB')
      return compressedFile
    } catch (error) {
      console.error('图片压缩失败', error)
      throw error
    }
  }