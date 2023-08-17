import { GiscusProps } from "@giscus/vue";

export interface BsBlogThemeConfig {
  author: string
  bio: string
  avatar: string
  defaultPostCover: string
  navLinks?: NavLink[]
  socialLinks?: SocialLink[]
  giscus: GiscusProps
}

export interface NavLink {
  href: string
  title: string
  icon: string
}

export interface SocialLink {
  href: string
  icon: string
  desc: string
}