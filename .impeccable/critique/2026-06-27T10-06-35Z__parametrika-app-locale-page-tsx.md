---
target: parametrika/app/[locale]/page.tsx
total_score: 27
p0_count: 0
p1_count: 2
p2_count: 3
timestamp: 2026-06-27T10-06-35Z
slug: parametrika-app-locale-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Нет скелетона для категорий без фото; нет breadcrumbs |
| 2 | Match System / Real World | 3 | Aria-label mute по-русски при EN-локали |
| 3 | User Control & Freedom | 3 | Mobile nav race condition; нет skip-link |
| 4 | Consistency & Standards | 3 | Gold opacity варьируется; eyebrow дублируется |
| 5 | Error Prevention | 2 | Нет клиентской валидации email/phone |
| 6 | Recognition Rather Than Recall | 3 | Каталог без превью категорий до клика |
| 7 | Flexibility & Efficiency | 3 | Нет keyboard nav; WhatsApp не оптимизирован |
| 8 | Aesthetic & Minimalist Design | 3 | Glassmorphism-блок статистики; marquee-филлер |
| 9 | Error Recovery | 2 | "Error — try again" без причины; нет fallback на WhatsApp |
| 10 | Help & Documentation | 2 | "Photos Coming Soon" без контекста |
| Total | | 27/40 | Acceptable |

## Anti-Patterns
Detector: layout-transition (Cursor.tsx:79, globals.css:130), gradient-text (globals.css:44). Glassmorphism в About, Marquee-филлер.

## Priority Issues
P1: Glassmorphism stats (About.tsx) — SaaS шаблон, нарушает material honesty
P1: WhatsApp buried в форме — форма first вместо WhatsApp first для UAE
P2: Marquee — декоративный филлер без семантики
P2: Eyebrow inconsistency — нет shared компонента
P2: "Photos Coming Soon" убивает доверие
