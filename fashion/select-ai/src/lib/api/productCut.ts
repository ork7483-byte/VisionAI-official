import type { ApiResponse, GenerateResult } from "@/types";

export interface ProductCutRequest {
  productImage: string;
  category: string;
}

/** 연출컷 생성 요청 (목업) */
export async function generateProductCut(
  req: ProductCutRequest
): Promise<ApiResponse<GenerateResult>> {
  await new Promise((r) => setTimeout(r, 2000));
  return {
    success: true,
    data: {
      taskId: `task_${Date.now()}`,
      status: "completed",
      outputUrl: "/images/mock/result-productcut.jpg",
      progress: 100,
    },
  };
}
