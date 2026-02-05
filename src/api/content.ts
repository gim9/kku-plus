import { ContentResponse } from "../types/content";

export async function fetchContent(): Promise<ContentResponse> {
  const response = await fetch("/data/content.json");

  if (!response.ok) {
    throw new Error("تعذر تحميل البيانات");
  }

  return response.json();
}
