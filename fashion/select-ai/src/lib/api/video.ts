import type { ApiResponse, GenerateResult } from "@/types";

export interface VideoRequest {
  sourceImage: string;
  mood?: string;
  sceneControl?: Record<string, string>;
  duration: 3 | 5 | 10;
}

/** 영상 변환 요청 (목업) */
export async function generateVideo(
  req: VideoRequest
): Promise<ApiResponse<GenerateResult>> {
  await new Promise((r) => setTimeout(r, 3000));
  return {
    success: true,
    data: {
      taskId: `task_${Date.now()}`,
      status: "completed",
      outputUrl: "/images/mock/result-video.mp4",
      progress: 100,
    },
  };
}
