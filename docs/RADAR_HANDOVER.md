# 選考締切レーダー (Deadline Radar) 模块技术交接与重新上线文档

> **状态**: 暂从前端下线（代码与数据 100% 完整保留在代码库中）  
> **归档日期**: 2026-09-25  
> **涉及仓库**: `michaelho1117-cloud/syukatsu` (Branch: `main`)

---

## 1. 模块定位与初衷 (Overview & Goals)

**選考締切レーダー (Deadline Radar)** 的设计目标是解决日本新卒就活中“**多 MyPage 账号分散、截止时间容易遗漏**”的痛点：
1. **聚合探测**: 用户在求职过程中注册了数十至上百家企业的 MyPage 门户（主要跑在 i-webs、axol、sonar、snar 等 ATS 系统上），难以逐一登录检查新邮件与新通知。
2. **分级预警**: 针对本选考、早期选考、实习截止日进行紧急度分级（`至急（3日以内）`、`近日（7日以内）`、`待機中`）。
3. **一键转入选考**: 在雷达卡片中点击“1クリックエントリー”，即可直接将目标日程录入选考日程表（`selectionEvents`）并自动进入正式选考管理列表（`added: true`）。

---

## 2. 核心架构与现存资产清单 (Assets & Code Map)

所有代码与数据均**完全保留**，未做任何破坏性删除：

### 2.1 前端视图与交互 (`index.html`)
- **雷达视图容器**: `#view-radar`（第 3260 行 ~ 3325 行）
  - 包含雷达顶部 Header、状态指示器（本地 Agent 状态、最后扫描时间）、筛选 Chip 栏（すべて / 緊急 / 本選考 / 早期 / インターン / MyPage連携 / 公開情報）、搜索框与卡片网格 `#radarGrid`。
- **扫描 HUD 弹窗**: `#radarScanModal`（第 4497 行 ~ 4530 行）
  - 实时展示扫描进度百分比、巡检企业名、当前状态及彩色实时终端日志（Live Terminal Log）。
- **JavaScript 核心逻辑**:
  - `loadRadarItems()` / `saveRadarItems()`: 本地存储与预置数据加载。
  - `renderRadarView()`: 卡片网格渲染、倒计时计算、标签配色。
  - `triggerRadarScan()`: 启动巡检（优先尝试连接本地网桥，若未启动则运行前端平滑模拟并同步最新日程）。
  - `addRadarToSelection(radarId)`: 一键将雷达项转为选考管理项。
  - `dismissRadarItem(radarId)`: 忽略该条提醒。
  - `updateRadarBadge()`: 更新导航栏上的未读预警红色徽标角标。

### 2.2 数据源 (`data/radar_feed.js`)
- 包含全量 101 家企业的预置情报与 57 条活跃日程：
  - 外资投行/咨询：麦肯锡、BCG、罗兰贝格、PwC、EY、德勤、高盛、摩根士丹利等。
  - 综合商社：三菱商事、三井物产、伊藤忠等。
  - IT/通信/互联网：NTT数据、NRI、日立、索尼、乐天等。
  - 金融/银行：MUFG、三井住友、瑞穗、JCB 等。
- 每个条目格式遵循标准 Schema：
  ```javascript
  {
    id: "radar_c_rakuten_alert",
    companyId: "c_rakuten",
    companyName: "楽天グループ",
    industry: "情報通信・サービス",
    title: "ビジネス総合職・エンジニア職 秋季選考エントリー",
    eventType: "intern",
    category: "intern",
    deadline: "2026-10-18 23:59",
    sourceType: "public", // 'mypage' | 'public'
    sourceLabel: "公開選考日程",
    notes: "楽天エコシステム共創ワークショップ",
    mypageUrl: "https://mypage.3010.i-webs.jp/rakuten-bu-2028/",
    status: "pending" // 'pending' | 'converted' | 'dismissed'
  }
  ```

### 2.3 本地真实扫描网桥 (`radar-agent/`)
- **服务端**: `radar-agent/server.js` (运行于 `http://localhost:3028`)
  - 基于 Node.js 原生 HTTP + Server-Sent Events (SSE) 协议。
  - 接收 `/scan/start` 指令，拉起本地已安装的真实 Chrome (`C:\Program Files\Google\Chrome\Application\chrome.exe`)。
  - 实时将扫描进度、当前检测到的预警与紧急度通过 SSE 流式广播至前端。
- **一键启动脚本**: `start_radar_agent.bat`
  - 双击即可在本地快速启动 Agent 网桥。

---

## 3. 本次下线处理细节 (Offline Implementation)

为了让前端对用户完全隐形，同时保证内部机制零报错，本次下线做了以下最小侵入式配置：

1. **桌面端导航 Tab (`index.html`)**:
   - 对 `<button data-view="radar" class="tab-radar">` 进行了 HTML 注释标记 `<!-- [OFFLINE: RADAR] ... -->`。
2. **移动端底部导航栏 (`index.html`)**:
   - 对移动端底栏的雷达按钮进行了 HTML 注释。
3. **路由安全重定向 (`switchView(v)`)**:
   - 若有任何旧链接或代码尝试切换至 `radar` 视图，自动安全重定向至 `db`（企业数据库）：
     ```javascript
     if (v === 'radar') {
       // 締切レーダーは現在オフライン（機能改善・検証中のため一時非表示）
       switchView('db');
       return;
     }
     ```
4. **渲染函数兼容 (`renderAll()`)**:
   - `renderAll()` 中将 `currentView === 'radar'` 优雅回退至 `renderDB()`，避免渲染报错。

---

## 4. 重新上线操作指引 (How to Re-enable)

未来在完成改进准备重新上线时，只需 1 分钟即可完整恢复：

### 步骤 1：恢复导航栏入口
打开 `index.html`：
1. 搜索 `[OFFLINE: RADAR]`，取消桌面端导航 Tab 的注释（约 3192 行）：
   ```html
   <button data-view="radar" class="tab-radar">📡 締切レーダー <span class="radar-badge-count" id="radarBadgeCount">1</span></button>
   ```
2. 取消移动端底部导航按钮的注释（约 3700 行）：
   ```html
   <button class="mobile-nav-btn" data-view="radar" onclick="switchView('radar')">
     <span class="icon">📡</span>
     <span>レーダー</span>
   </button>
   ```

### 步骤 2：恢复路由切换
在 `switchView(v)` 中（约 6675 行），将：
```javascript
} else if (v === 'radar') {
  switchView('db');
  return;
}
```
恢复为：
```javascript
} else if (v === 'radar') {
  renderRadarView();
}
```

并在 `renderAll()` 中恢复 `else if (currentView === 'radar') renderRadarView();`。即可完全重新开放！

---

## 5. v2 重构与优化建议 (Improvement Roadmap for v2)

用户反馈“目前还不太好用”的核心瓶颈及针对性改进方向：

### 5.1 痛点诊断
1. **真实自动化登录的门槛与脆弱性**：
   - 日本各大 ATS（尤其是 i-webs、axol）经常有图形验证码、首次登录修改临时密码、二步验证等阻碍，纯脚本无头登录易遇到反爬虫拦截。
   - 依赖本地拉起 Chrome 需要用户在本机后台运行 `start_radar_agent.bat`，对于非技术操作有一定心智负担。
2. **模拟巡检与真实数据的混淆**：
   - 用户往往期望“点击扫描就能立刻爬出我那 102 个账号里的真实收件箱未读邮件”，如果返回的是预置日程聚合，用户会感到“不够真实”。

### 5.2 v2 升级演进建议（二选一推荐）

#### 建议方案 A：专注于高价值公开日历/选考情报爬取（轻量免维护型，推荐）
- **思路**: 不让用户承担登录 MyPage 的风险与复杂性。
- **做法**:
  - 由服务端或定时 GitHub Action 每日自动爬取各行业公开的選考解禁日、ワンキャリア、外資就活等公开 DDL 日历。
  - 自动映射到用户 MyPage 库中的企业，直接向用户推送精准的“公开发布的选考日程”。
  - **优势**: 用户免启动任何本地 Agent，打开网页即见全网最新截止日，准确率 100%，无封号与验证码风险。

#### 建议方案 B：Chrome 扩展插件方案 (Chrome Extension)
- **思路**: 取代本地 Node 脚本，改为官方 Chrome 浏览器扩展。
- **做法**:
  - 用户在正常浏览器中使用已登录的 MyPage Session。
  - 扩展在用户日常打开 MyPage 时静默抓取页面中的通知消息与 DDL，自动回传给 syukatsu.win。
  - **优势**: 完全绕过验证码与 Session 过期问题，原生可信度极高。
