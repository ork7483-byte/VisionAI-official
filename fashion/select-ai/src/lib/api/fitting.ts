import type { ApiResponse, GenerateResult, FittingOptions } from "@/types";

/** 가상피팅 생성 요청 (목업) */
export async function generateFitting(
  options: FittingOptions
): Promise<ApiResponse<GenerateResult>> {
  await new Promise((r) => setTimeout(r, 2500));
  return {
    success: true,
    data: {
      taskId: `task_${Date.now()}`,
      status: "completed",
      outputUrl: "/images/mock/result-fitting.jpg",
      progress: 100,
    },
  };
}
