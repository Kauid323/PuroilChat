# DESIGN.md

## Product
Lite is an ArkUI-X chat client focused on fast conversation browsing, chat reading, token persistence, and a polished mobile-first message experience.

## Users
The primary user wants a native-feeling chat UI with strong conversation handling, fast startup, cached avatars, and practical account/profile settings.

## Principles
- Prefer MVVM file separation for pages, services, and models.
- Keep ArkTS code compile-safe for ArkUI-X cross-platform builds.
- Favor responsive mobile layouts over desktop-first composition.
- Preserve existing navigation and chat behavior unless a task explicitly changes it.
- Optimize perceived performance: async loading, incremental rendering, caching, and minimal layout jump.

## UI Direction
- Chat should feel closer to Telegram/iOS than default boilerplate ArkUI samples.
- Message grouping, avatar anchoring, unread states, and quote context should feel deliberate.
- Me/settings surfaces should be clean, modular, and easy to extend.

## Engineering Rules
- Read and write files as UTF-8.
- Prefer apply_patch-style small edits over broad rewrites.
- Keep generated/proto parsing isolated from page code.
- Put reusable UI into separate component files when a page gets crowded.

## Current Active Areas
- Authentication with encrypted token persistence.
- Conversation list + avatar caching.
- Chat timeline, quote context, pagination, and style variants.
- Me page with user profile proto parsing and settings.
