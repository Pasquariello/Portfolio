export interface MemberSearchResult {
    page: number
    per_page: number
    has_next_page: boolean
    count: number
    page_count: number
    records: SearchMember[]
    meta: {
        next_search_after: string[]
    }
    next_search_after: string[]
}
  
export interface SearchMember {
    first_name: string
    last_name: string
    user_id: number
    id: number
    admin: boolean
    headline: string
    public_uid: string
    user_attachable_sgid: string
    name: string
    avatar_url: string
    is_deleted: boolean
    community_member_id: number
}
  
export interface MemberTag {
    id: number
    name: string
    color: string
    emoji: string
    is_public: boolean
    custom_emoji_url: string
    custom_emoji_dark_url: string
    display_format: string
    display_locations: string[]
    text_color: string
}
  
export interface CommunityMemberSearchResult {
    page: number
    per_page: number
    has_next_page: boolean
    count: number
    page_count: number
    records: CommunityMember[]
    next_search_after: number[]
}

export interface CommunityMember {
    headline: string
    member_tags: MemberTag[]
    name: string
    community_member_id: number
    avatar_url: string | null
    messaging_enabled: boolean | null
    email: string
    can_receive_dm_from_current_member: boolean
}
  
export type Interest = {
    interest_id: number;
    name: string;
};

export type UserProfile = {
    email: string;
    community_member_id?: string;
    name?: string;
    interests: string[];
    created_at: Date;
};

export interface Post {
  post_type: string;
  space_type: string;
  status: string;
  id: number;
  name: string | null;
  display_title: string;
  slug: string;
  is_comments_closed: boolean;
  is_comments_enabled: boolean;
  is_liking_enabled: boolean;
  comment_count: number;
  user_likes_count: number;
  body?: {
    html: string;
    attachments: any;
    attachments_array: any[];
  };
  tiptap_body?: {
    body: {
      type: string;
      content: any[];
    };
  } | null;
  body_plain_text: string;
  created_at: string;
  updated_at: string;
  author: PostAuthor;
  topics: PostTopic[];
}

export interface PostAuthor {
  id: number;
  community_member_id: number;
  name: string;
  headline: string;
  avatar_url: string | null;
  roles: string[];
}

export interface PostTopic {
  id: number;
  name: string;
  admin_only: boolean;
}

export interface PostsResponse {
  page: number;
  per_page: number;
  has_next_page: boolean;
  count: number;
  sort: string;
  records: Post[];
}

export interface Comment {
  id: number;
  post_id: number;
  body_text: string;
  created_at: string;
  author: PostAuthor;
  replies: Comment[];
  replies_count: number;
}

export interface CommentsResponse {
  page: number;
  per_page: number;
  has_next_page: boolean;
  count: number;
  records: Comment[];
}

export interface CreatePostRequest {
  space_id: number;
  name: string;  // Title of the post
  tiptap_body: {
    body: {
      type: string;
      content: Array<{
        type: string;
        content?: Array<{
          type: string;
          text: string;
        }>;
      }>;
    };
  };
  topics?: any[];
}

export interface CreateCommentRequest {
  comment: {
    body: string;
  };
}
  