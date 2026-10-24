# syukatsu.win — Engineering & Operations Handover (AI Agent / Grok Bot Guide)

> **Document Purpose**: This document provides an exhaustive architectural, operational, and structural handover for AI agents (such as Grok Bot) to safely inspect, develop, refactor, and maintain the `syukatsu.win` platform without breaking existing features, security boundaries, or zero-build compatibility.

---

## 1. Project High-Level Overview

* **Product Name**: 就勝 (syukatsu.win)
* **Official URL**: `https://syukatsu.win/`
* **Target Audience**: Japanese new graduates (新卒 27卒 / 28卒) and international students (留学生) job-hunting in Japan.
* **Core Capabilities**:
  1. **1,773+ Company Database** (`🏢 企業DB`): Fast search, salary, employee count, market listing, popularity ranking (#1~#300).
  2. **Selection Management** (`📑 選考管理`): Table view with Next Action status, primary deadlines, inline stage switching.
  3. **Visual Kanban** (`📌 カンバン`): Drag-and-drop progression across 6 stages (`entry`, `es`, `first`, `final`, `offer`, `rejected`).
  4. **ES Workspace** (`📝 ES`): Question-by-question answer drafts, character limit counter with auto-warning, linked StoryBank cards.
  5. **Story Bank** (`💡 Story Bank`): STAR-framework behavioral interview episode repository (Situation, Task, Action, Result, Learning).
  6. **Dashboard & Selection Calendar** (`📊 ダッシュボード`): Conversion funnel, industry donut charts, monthly selection calendar with auto-completion for expired events.
  7. **MyPage Credential Vault** (`🔒 マイページ`): Enterprise applicant portal URLs, login IDs, masked passwords, 1-click clipboard copy.

---

## 2. Dual-Repository Workspace Architecture

The system is maintained across two physical working directories on Windows:

| Workspace Path | Git Remote | Purpose & Rules |
| :--- | :--- | :--- |
| `D:\syukatsu.win` | `https://github.com/michaelho1117-cloud/syukatsu.git` | **Main Workspace**: Contains both the public Web platform and private job-hunting intelligence, research reports, and scraping tools. Personal directories are strictly ignored by `.gitignore`. |
| `D:\syukatsu_showcase` | `https://github.com/michaelho1117-cloud/syukatsu.win.git` | **Deployment Mirror**: Clean public repository serving GitHub Pages (`syukatsu.win`). Contains ONLY the public web files. |

> **IMPORTANT RULE FOR AI AGENTS**: Any changes made to the Web platform code (`index.html`, `style.css`, `app.js`, `data/*`, `js/*`, `assets/*`, `robots.txt`, `sitemap.xml`) in `D:\syukatsu.win` **MUST be synchronized to `D:\syukatsu_showcase`** and committed/pushed to both remote repositories.

---

## 3. Directory Layout & Public vs. Private Boundary

```
D:\syukatsu.win\
├── [PUBLIC / GIT TRACKED — WEB PLATFORM]
│   ├── index.html                  # Semantic semantic HTML view skeleton (~1,440 lines)
│   ├── style.css                   # Responsive stylesheet (~3,224 lines)
│   ├── app.js                      # Application state, cloud sync, view controllers (~5,400 lines)
│   ├── js/
│   │   └── core-services.js        # CatalogIndex, Clipboard, Export, Search, Date utilities (~500 lines)
│   ├── data/
│   │   ├── master_companies.js     # Raw master data for 1,773 Japanese enterprises
│   │   └── showcase_seed.js        # Seed catalog, stages config, aliases, dynamic showcase data
│   ├── assets/
│   │   ├── logos/                  # High-res logos for companies (e.g. c_toyota.png)
│   │   ├── favicon.ico / .png / .svg
│   │   ├── apple-touch-icon.png
│   │   ├── logo-mark.png / logo-full.png
│   │   └── og-image.png
│   ├── robots.txt                  # Search crawler directives pointing to sitemap.xml
│   ├── sitemap.xml                 # Canonical XML sitemap for Google & Bing
│   └── manifest.json               # PWA configuration
│
└── [PRIVATE / GIT IGNORED — DO NOT COMMIT OR LEAK]
    ├── profile/                    # Personal background, writing style, resume PDFs
    │   └── resumes_and_forms/      # 履歴書 PDFs, Excel entry sheets, headshot photos
    ├── es/                         # Drafted Japanese ES submissions and industry research
    │   └── research/               # SIer landscape reports and database dumps
    ├── interview/                  # Transcripts, audio recordings, prep notes
    ├── data/companies/             # Structured enterprise intelligence & raw scraper output
    │   └── raw/                    # Raw HTML / JSON dumps (DXC, JCB, Rakuten, etc.)
    └── scripts/                    # Python SOP automation engines (audio transcription, crawlers)
        ├── scrapers/               # Enterprise scrapers
        └── archive/                # Historical one-off test scripts
```

---

## 4. Frontend Layered Architecture & Loading Sequence

The web platform is designed with a **Strict Zero-Build Architecture** (compatible with both static cloud hosting `https://syukatsu.win` and local browser execution `file:///D:/syukatsu.win/index.html`).

Browsers block ES module `import`/`export` under the local `file://` protocol due to CORS. Therefore, standard ordered `<script>` tags are used:

```html
<!-- 1. External Supabase SDK -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<!-- 2. Master Company Data Layer (Global: window.MASTER_COMPANIES) -->
<script src="data/master_companies.js"></script>

<!-- 3. Seed Config & Alias Layer (Globals: DEFAULT_CATALOG, stages, ALIAS_TO_MASTER_MAP, getDynamicShowcaseData) -->
<script src="data/showcase_seed.js"></script>

<!-- 4. Core Infrastructure & Utility Services (Globals: CatalogIndex, ClipboardService, ExportService, SearchNormalizer) -->
<script src="js/core-services.js"></script>

<!-- 5. Application State, Supabase Cloud Sync & View Controllers -->
<script src="app.js"></script>
```

### Module Responsibilities:

1. **`data/master_companies.js`**:
   * Contains 1,773 corporate entries: `{ id, name, code, domain, cat, ind17, sub, emp, payBachelor, payMaster, avgAnnual, color, popRank, popBadge }`.
2. **`data/showcase_seed.js`**:
   * `DEFAULT_CATALOG`: Demo seed companies with sample statuses.
   * `stages` / `stageMap`: Pipeline stages definition (`entry`, `es`, `first`, `final`, `offer`, `rejected`).
   * `ALIAS_TO_MASTER_MAP`: Normalizes enterprise ID discrepancies across crawls.
   * `DUMMY_SEED_IDS`: Identifies unauthenticated showcase demo IDs to prevent cloud pollution.
   * `getDynamicShowcaseData()`: Computes dynamic deadline dates relative to today's date for guest showcase.
3. **`js/core-services.js`**:
   * `CatalogIndex`: Reactive $O(1)$ Map index (`_companyMap`, `_esMap`, `_storyMap`) providing `getCompanyById(id)`, `getEsById(id)`, `getStoryById(id)`. Replaces $O(N)$ linear scans across 1,773 items.
   * `ClipboardService`: Unified clipboard handler with `navigator.clipboard.writeText` and `<textarea>` fallback.
   * `ExportService`: Unified Blob, UTF-8 BOM CSV (`\uFEFF`), and JSON downloader.
   * `SearchNormalizer`: Full/half-width, hiragana/katakana, small kana (`キャノン` ↔ `キヤノン`, `フィルム` ↔ `フイルム`), and corporate affix normalization with search haystack caching.
   * `FormatUtils` & `DateUtils`: `fmtPay`, `fmtEmp`, `fmtAnnual`, `getDueStatus`, `getRadarCountdown`.
4. **`app.js`**:
   * Global state: `catalog`, `selectionEvents`, `esList`, `storyBank`, `currentTasks`, `currentSettings`, `currentAuthUser`.
   * Views: `db` (Database), `list` (Selection Table), `kanban` (Visual Kanban), `es` (ES Editor), `story` (STAR StoryBank), `dash` (Dashboard & Calendar), `mypage` (Vault).
   * Event Lifecycle Engine: `isSelectionEventEnded`, `syncCompanyPrimaryDue`, `cleanupAndSyncAllEvents`.

---

## 5. Cloud Sync Protocol & Data Contracts (Supabase)

* **Backend**: Supabase PostgreSQL (`user_selections` table).
* **Row Schema**:
  * `user_id`: UUID of authenticated user.
  * `company_id`: String ID of company (e.g. `c_toyota`).
  * `stage`: Current stage (`entry`, `es`, `first`, `final`, `offer`, `rejected`).
  * `due`: Primary deadline string (`YYYY-MM-DD`).
  * `due_label`: Deadline title (e.g. `1次面接`, `本選考ES`).
  * `tags`: Array of packed strings.
* **Packed Tags Serialization Protocol**:
  Because the schema is compact, auxiliary metadata is packed into the `tags` text array:
  * `__mp_url:<encoded_url>`: MyPage portal URL.
  * `__mp_id:<encoded_id>`: MyPage login username/ID.
  * `__mp_pass:<encoded_password>`: MyPage login password.
  * `__cn:<encoded_custom_name>`: Display name for user-created custom companies.
  * `__ev:<encoded_json>`: Serialized JSON array of `selectionEvents` for this company.

---

## 6. Event Lifecycle & Selection Calendar Rules

* **Selection Events Lifecycle**:
  * An event is considered **ended** if:
    1. `ev.status === 'completed' || ev.status === 'cancelled'`
    2. Event date is before today (`normalizeDateKey(datetime) < getLocalTodayStr()`)
    3. Company is not tracked or has `c.stage === 'rejected'`.
  * **Calendar Rule**: `renderCalendar()` only displays active, future/today, non-ended events.
  * **Primary Due Sync**: `syncCompanyPrimaryDue(companyId)` automatically sets `c.due` to the earliest active upcoming event, and clears `c.due` when all events have ended.

---

## 7. Operational Workflow for AI Agents

When executing feature updates or bug fixes:

1. **Modify in `D:\syukatsu.win`**.
2. **Verify Syntax**:
   ```powershell
   node --check "D:\syukatsu.win\app.js"
   node --check "D:\syukatsu.win\js\core-services.js"
   ```
3. **Run End-to-End Headless Tests**:
   Ensure Playwright checks pass with 0 errors (`python scratch/verify_refactor.py`).
4. **Mirror to Showcase**:
   ```powershell
   Copy-Item "D:\syukatsu.win\index.html" "D:\syukatsu_showcase\index.html" -Force
   Copy-Item "D:\syukatsu.win\style.css" "D:\syukatsu_showcase\style.css" -Force
   Copy-Item "D:\syukatsu.win\app.js" "D:\syukatsu_showcase\app.js" -Force
   Copy-Item "D:\syukatsu.win\js\core-services.js" "D:\syukatsu_showcase\js\core-services.js" -Force
   Copy-Item "D:\syukatsu.win\data\showcase_seed.js" "D:\syukatsu_showcase\data\showcase_seed.js" -Force
   Copy-Item "D:\syukatsu.win\robots.txt" "D:\syukatsu_showcase\robots.txt" -Force
   Copy-Item "D:\syukatsu.win\sitemap.xml" "D:\syukatsu_showcase\sitemap.xml" -Force
   ```
5. **Git Commit & Push Both Repositories**:
   * Commit in `D:\syukatsu.win` -> push to `origin main`.
   * Commit in `D:\syukatsu_showcase` -> push to `origin main`.
