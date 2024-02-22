import { Rich } from "@common-module/static-site-generator";

export default interface Notice {
  id: number;
  title: string;
  content: string;
  rich?: Rich;
  created_at: string;
  updated_at?: string;
}
