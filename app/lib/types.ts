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
  