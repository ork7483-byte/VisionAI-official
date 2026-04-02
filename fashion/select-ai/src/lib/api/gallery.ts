import type { ApiResponse, GalleryItem } from "@/types";
import { galleryItems } from "@/lib/mock/data";

/** 갤러리 목록 조회 (목업) */
export async function getGalleryItems(params?: {
  type?: string;
  category?: string;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<GalleryItem[]>> {
  await new Promise((r) => setTimeout(r, 300));

  let items = [...galleryItems];

  if (params?.type && params.type !== "all") {
    items = items.filter((item) => item.type === params.type);
  }
  if (params?.category && params.category !== "all") {
    items = items.filter((item) => item.category === params.category);
  }

  return { success: true, data: items };
}

/** 갤러리 이미지 삭제 (목업) */
export async function deleteGalleryItem(
  id: string
): Promise<ApiResponse<void>> {
  await new Promise((r) => setTimeout(r, 300));
  return { success: true };
}

/** 갤러리에 저장 (목업) */
export async function saveToGallery(
  imageUrl: string,
  type: string
): Promise<ApiResponse<GalleryItem>> {
  await new Promise((r) => setTimeout(r, 300));
  return {
    success: true,
    data: {
      id: `gallery_${Date.now()}`,
      imageUrl,
      type: type as GalleryItem["type"],
      createdAt: new Date().toISOString(),
    },
  };
}
