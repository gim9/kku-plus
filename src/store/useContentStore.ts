import { create } from "zustand";
import { fetchContent as fetchContentApi } from "../api/content";

type HeroContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  secondaryCta: string;
  highlight: string;
};

type StatItem = {
  label: string;
  value: string;
};

type EventItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
};

type ProgramItem = {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  cta: string;
  color: string;
};

type ClubItem = {
  id: string;
  name: string;
  description: string;
  members: number;
  color: string;
};

type AssistantContent = {
  welcome: string;
  quickQuestions: string[];
};

type ContactField = {
  id: string;
  label: string;
};

type ContactContent = {
  title: string;
  subtitle: string;
  fields: ContactField[];
  submitLabel: string;
};

type VoiceEpisode = {
  id: string;
  title: string;
  duration: string;
  airedAt: string;
};

type VoiceContent = {
  title: string;
  subtitle: string;
  categories: string[];
  episodes: VoiceEpisode[];
};

type ContentState = {
  hero?: HeroContent;
  stats: StatItem[];
  eventsTable?: {
    columns: string[];
    rows: Array<{
      event: string;
      date: string;
      time: string;
      category: string;
      location: string;
    }>;
  };
  events: EventItem[];
  programs: ProgramItem[];
  clubs: ClubItem[];
  assistant?: AssistantContent;
  contact?: ContactContent;
  voice?: VoiceContent;
  loading: boolean;
  error?: string;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  fetchContent: () => Promise<void>;
};

export const useContentStore = create<ContentState>((set) => ({
  hero: undefined,
  stats: [],
  events: [],
  programs: [],
  clubs: [],
  assistant: undefined,
  contact: undefined,
  voice: undefined,
  loading: false,
  error: undefined,
  categoryFilter: "جميع الفئات",
  setCategoryFilter: (value) => set({ categoryFilter: value }),
  fetchContent: async () => {
    set({ loading: true, error: undefined });
    try {
      const data = await fetchContentApi();
      set({
        hero: data.hero,
        stats: data.stats ?? [],
        eventsTable: data.eventsTable,
        events: data.events ?? [],
        programs: data.programs ?? [],
        clubs: data.clubs ?? [],
        assistant: data.assistant,
        contact: data.contact,
        voice: data.voice,
        loading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "خطأ غير معروف",
        loading: false,
      });
    }
  },
}));
