export interface MemberSearchResult {
    page: number
    per_page: number
    has_next_page: boolean
    count: number
    page_count: number
    records: Member[]
    next_search_after: number[]
  }
  
  export interface Member {
    headline: string
    member_tags: MemberTag[]
    name: string
    community_member_id: number
    avatar_url: any
    messaging_enabled?: boolean
    email: string
    can_receive_dm_from_current_member: boolean
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
  