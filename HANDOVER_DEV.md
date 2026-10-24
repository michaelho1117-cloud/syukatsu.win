# syukatsu.win — Web Platform Engineering & DevOps Handover

> **Audience**: AI Engineering Agents (e.g., Grok Bot), Frontend Developers & DevOps maintainers.  
> **Workspace Path**: `D:\syukatsu.win`  
> **Production URL**: `https://syukatsu.win/`  
> **Git Remote**: `https://github.com/michaelho1117-cloud/syukatsu.win.git` (Mirror: `syukatsu.git`)

---

## 1. Product Mission & Overview

`syukatsu.win` (就勝) is an all-in-one productivity cock-pit designed for Japanese new-graduate job hunters (新卒 27卒 / 28卒) and international students (留学生).

### Core Features:
1. **🏢 企業DB (Enterprise Database)**:
   * Instant search across 1,773+ Japanese enterprises with real salary data (bachelor/master initial pay, avg annual pay), employee count, market category, and popularity rank (#1~#300).
2. **📑 選考管理 (Selection Management Table)**:
   * Table view showing real-time Next Action badges, deadline countdowns, inline stage selectors, and external MyPage quick-launch buttons.
3. **📌 カンバン (Visual Kanban)**:
   * Drag-and-drop workflow tracking across 6 stages: `entry` (エントリー), `es` (ES/Webテスト), `first` (一次面接), `final` (最終面接), `offer` (内々定/内定), `rejected` (お祈り/辞退).
4. **📝 ES (Entry Sheet Editor)**:
   * Multi-question blocks with live character counting, warning on length limit (+X字超過), linked StoryBank badges, and 1-click clipboard export.
5. **💡 Story Bank (STAR Framework)**:
   * Reusable episode cards categorized into Internship, Academic, Leadership, etc., structured by Situation, Task, Action, Result, and Learning.
6. **📊 ダッシュボード (Analytics & Selection Calendar)**:
   * Real-time funnel conversion rates, industry donut breakdown, and an interactive monthly calendar that automatically excludes completed or expired events.
7. **🔒 マイページ (Credentials Vault)**:
   * Centralized management of application portal URLs, login IDs, and masked passwords.

---

## 2. Clean Workspace Directory Structure

This repository is **strictly pure Web platform code**. All private candidate resumes, audio recordings, and scraping tools are isolated in a separate private vault (`D:\syukatsu_vault`).

```
D:\syukatsu.win\
├── index.html                  # Semantic semantic HTML view skeleton (~1,440 lines)
├── style.css                   # Unified responsive stylesheet (~3,224 lines)
├── app.js                      # Application state, cloud sync, view controllers (~5,400 lines)
├── js/
│   └── core-services.js        # CatalogIndex O(1), Clipboard, Export, Search, Date utils (~500 lines)
├── data/
│   ├── master_companies.js     # Raw master data for 1,773 Japanese enterprises
│   ├── showcase_seed.js        # Seed catalog, stages config, aliases, dynamic showcase data
│   ├── companies_catalog.js    # Legacy catalog compatibility data
│   ├── companies_catalog_raw.json
│   └── radar_feed.js           # Public selection deadline feed
├── assets/
│   ├── logos/                  # Official enterprise logos (e.g. c_toyota.png)
│   ├── favicon.ico / .png / .svg
│   ├── apple-touch-icon.png
│   ├── logo-mark.png / logo-full.png
│   └── og-image.png
├── docs/                       # Architecture diagrams & screenshots
├── robots.txt                  # Search engine crawler instructions pointing to sitemap.xml
├── sitemap.xml                 # Canonical XML sitemap for Google & Bing
├── manifest.json               # Progressive Web App (PWA) manifest
└── HANDOVER_DEV.md             # This engineering handover document
```

---

## 3. Architecture & Zero-Build Runtime Invariants

### 3.1 Zero-Build Architecture
* **Strict Invariant**: Do NOT introduce Node build pipelines (Webpack, Vite, Rollup, Parcel).
* The app must remain operable by **directly double-clicking `file:///D:/syukatsu.win/index.html`** in a browser and deployable directly via static GitHub Pages.
* **No ES Module `import`/`export`**: Browsers block ES module syntax under `file://` due to CORS. Always use clean, ordered global `<script>` tags.

### 3.2 Script Loading Sequence (in `index.html`)
```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="data/master_companies.js"></script>
<script src="data/showcase_seed.js"></script>
<script src="js/core-services.js"></script>
<script src="app.js"></script>
```

---

## 4. Core Infrastructure (`js/core-services.js`)

1. **`CatalogIndex` ($O(1)$ Reactive Map Index)**:
   * Replaces $O(N)$ linear `.find()` loops over 1,773 companies.
   * Exposes: `getCompanyById(id)`, `getEsById(id)`, `getStoryById(id)`.
   * Automatically rebuilds cache when `catalog`, `esList`, or `storyBank` array references change.
2. **`ClipboardService`**:
   * Unified `copy(text, successMsg, emptyMsg)` handling both modern `navigator.clipboard.writeText` and `<textarea>` + `execCommand('copy')` fallback for `file://` contexts.
3. **`ExportService`**:
   * Unified `downloadBlob()`, `downloadCsv()` (prepends UTF-8 BOM `\uFEFF` to prevent Excel Japanese mojibake), and `downloadJson()`.
4. **`SearchNormalizer`**:
   * Normalizes Japanese text: half/full-width, katakana/hiragana, upper/lowercase, small kana variants (`キャノン` ↔ `キヤノン`, `フィルム` ↔ `フイルム`), and corporate noise terms (`株式会社`, `（株）`).
   * Provides `smartSearchMatches(company, query)` with lazy `_searchCache`.
5. **`FormatUtils` & `DateUtils`**:
   * Formatting: `fmtPay`, `fmtPayMaster`, `fmtAnnual`, `fmtEmp`, `logoHtml`.
   * Due calculation: `getDueStatus(c)`, `getRadarCountdown(deadline)`.

---

## 5. State Management & Cloud Sync Contracts (`app.js`)

### 5.1 Primary State Variables
* `catalog`: Array of company objects currently in memory.
* `selectionEvents`: Array of structured selection schedule events:
  `{ id, companyId, title, type, datetime, status, memo, createdAt, updatedAt }`.
* `esList`: Array of ES entries with questions, answers, limits, and linked stories.
* `storyBank`: Array of STAR behavioral stories.
* `currentTasks`: Array of To-Do items.
* `currentSettings`: Settings object (e.g. `{ gradYear: '28卒' }`).
* `currentAuthUser`: Supabase user object or `null` (guest mode).

### 5.2 Supabase Cloud Contract
* Table: `user_selections` (Row Level Security keyed by `user_id`).
* **Auxiliary Data Serialization**:
  Because table columns are fixed, company-specific metadata is packed into the `tags` text array:
  * `__mp_url:<encoded>`: MyPage portal URL.
  * `__mp_id:<encoded>`: MyPage applicant ID.
  * `__mp_pass_enc:v1:<base64>`: MyPage password (encrypted); legacy `__mp_pass:` plaintext migrated on save.
  * `__cn:<encoded>`: Custom company name (for user-added custom companies).
  * `__ev:<encoded_json>`: Serialized JSON array of `selectionEvents` for this company.

### 5.3 Selection Events Lifecycle & Selection Calendar Rules
* **Ended Event Definition (`isSelectionEventEnded(ev)`)**:
  An event is treated as ended/completed if:
  1. `ev.status === 'completed' || ev.status === 'cancelled'`
  2. Its date is before today (`normalizeDateKey(datetime) < getLocalTodayStr()`)
  3. The associated company is untracked or has `c.stage === 'rejected'`.
* **Selection Calendar Filter**:
  * `renderCalendar()` **must never display ended events**. Only future or active today's events appear on the monthly calendar.
* **Primary Due Synchronization**:
  * `syncCompanyPrimaryDue(companyId)` automatically sets `c.due` and `c.dueLabel` to the earliest active upcoming event. If all events have ended, it clears `c.due = ''`.

---

## 6. Development & Deployment Workflow

### Step 1: Coding & Invariants
* Maintain 100% visual layout and CSS fidelity.
* Preserve existing comments and docstrings.

### Step 2: Syntax & Sanity Verification
Run the following in PowerShell:
```powershell
node --check "D:\syukatsu.win\app.js"
node --check "D:\syukatsu.win\js\core-services.js"
```

### Step 3: Git Commit & Push
```powershell
git -C "D:\syukatsu.win" add .
git -C "D:\syukatsu.win" commit -m "feat/fix: <clear summary>"
git -C "D:\syukatsu.win" push origin main
```
The repository deploys automatically to `https://syukatsu.win/`.
