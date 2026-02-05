export type HeroContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  secondaryCta: string;
  highlight: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type EventTable = {
  columns: string[];
  rows: Array<{
    event: string;
    date: string;
    time: string;
    category: string;
    location: string;
  }>;
};

export type EventItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
};

export type ProgramItem = {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  cta: string;
  color: string;
};

export type ClubItem = {
  id: string;
  name: string;
  description: string;
  members: number;
  color: string;
};

export type AssistantContent = {
  welcome: string;
  quickQuestions: string[];
};

export type ContactField = {
  id: string;
  label: string;
};

export type ContactContent = {
  title: string;
  subtitle: string;
  fields: ContactField[];
  submitLabel: string;
};

export type VoiceEpisode = {
  id: string;
  title: string;
  duration: string;
  airedAt: string;
};

export type VoiceContent = {
  title: string;
  subtitle: string;
  categories: string[];
  episodes: VoiceEpisode[];
};

export type ContentResponse = {
  hero: HeroContent;
  stats: StatItem[];
  eventsTable: EventTable;
  events: EventItem[];
  programs: ProgramItem[];
  clubs: ClubItem[];
  assistant: AssistantContent;
  contact: ContactContent;
  voice: VoiceContent;
};
