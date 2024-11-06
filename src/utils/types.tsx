export type MenuItemProps = {
  name: string;
  iconUrl: string;
};

export type SidebarItemProps = {
  itemArray: MenuItemProps[];
};

export type ButtonProps = {
  name: string;
};

// Define types for nested objects first
type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard?: Thumbnail; // Optional, as it may not always be present
  };
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
};

type ContentDetails = {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: Record<string, unknown>; // Use Record for a flexible object
  projection: string;
};

type Statistics = {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
};

export type VideoInfo = {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
};

export type SearchState = {
  cache: {
    [key: string]: string[];
  };
  videos: any[];
};

export type Message = {
  name: String;
  message: String;
};
