import type { ApiResponse, GenerateResult } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "/api";

export interface ModelCutRequest {
  productImage: string;
  category: string;
  modelId: string;
}

/** 모델컷 생성 요청 (목업) */
export async function generateModelCut(
  req: ModelCutRequest
): Promise<ApiResponse<GenerateResult>> {
  // TODO: 실제 API 연동 시 교체
  await new Promise((r) => setTimeout(r, 2000));
  return {
    success: true,
    data: {
      taskId: `task_${Date.now()}`,
      status: "completed",
      outputUrl: "/images/mock/result-modelcut.jpg",
      progress: 100,
    },
  };
}

/** 생성 상태 조회 */
export async function getModelCutStatus(
  taskId: string
): Promise<ApiResponse<GenerateResult>> {
  return {
    success: true,
    data: { taskId, status: "completed", progress: 100 },
  };
}
