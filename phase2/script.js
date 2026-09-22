const posts = [
  {
    id: 16,
    platform: "facebook",
    profileName: "Karima Electoral Commission",
    profileHandle: "@KarimaElectoralCommission",
    verified: true,
    profilePicture: null,
    timestamp: "1 November 2026 at 08:00",
    content: "Observer accreditation is complete. A supplementary list will be issued today. Daranic guidance is now available.",
    media: null,
    metrics: {
      likes: 1320,
      comments: 405,
      shares: 451,
    },
    profileMeta: {
      intro: "Official institutional account",
      bio: null,
      location: "Nembala",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 17,
    platform: "x",
    profileName: "Movement for Regional Justice",
    profileHandle: "@MRJofficial",
    verified: true,
    profilePicture: null,
    timestamp: "1 Nov 2026 · 08:15",
    content: "Peaceful demonstration tomorrow at the Daran Electoral Office. We demand equal media access and transparent accreditation decisions.",
    media: null,
    metrics: {
      replies: 124,
      reposts: 640,
      likes: 1450,
      views: null,
    },
    profileMeta: {
      intro: "Official opposition account",
      bio: null,
      location: "Daran",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 18,
    platform: "facebook",
    profileName: "Karima National Police Service",
    profileHandle: "@KarimaPolice",
    verified: true,
    profilePicture: null,
    timestamp: "1 November 2026 at 09:20",
    content: "Officers will protect public institutions and facilitate peaceful assembly in designated areas.",
    media: null,
    metrics: {
      likes: 980,
      comments: 590,
      shares: 341,
    },
    profileMeta: {
      intro: "Official public-safety account",
      bio: null,
      location: "Nembala",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 19,
    platform: "x",
    profileName: "Karima Diaspora Watch",
    profileHandle: "@KDMWatch",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 08:20",
    content: "Thousands are moving toward Tamora. Daran is rising. #DaranWillNotBeSilenced",
    media: null,
    metrics: {
      replies: 64,
      reposts: 370,
      likes: 670,
      views: null,
    },
    profileMeta: {
      intro: "Diaspora political account",
      bio: null,
      location: "Lydon",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 20,
    platform: "x",
    profileName: "KarimaLeaks",
    profileHandle: "@KarimaLeaks",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 09:00",
    content: "LEAKED AUDIO: Commission chair says “Daran’s message must be managed before election day.” Listen before it disappears.",
    media: null,
    metrics: {
      replies: 260,
      reposts: 1720,
      likes: 3000,
      views: null,
    },
    profileMeta: {
      intro: "Very new leaks account",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 21,
    platform: "x",
    profileName: "ClipAlertBot",
    profileHandle: "@ClipAlertBot",
    verified: true,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 09:10",
    content: "TREND ALERT: “Commission audio” increased 460% in two hours. Authenticity: NOT ASSESSED.",
    media: null,
    metrics: {
      replies: 8,
      reposts: 201,
      likes: 290,
      views: null,
    },
    profileMeta: {
      intro: "Declared automated trend account",
      bio: null,
      location: "Regional",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 22,
    platform: "x",
    profileName: "OpenAudio Lab",
    profileHandle: "@OpenAudioLab",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 09:18",
    content: "Automated tools detected anomalies in the alleged leaked audio, but the result is inconclusive. The original file and verified voice samples are needed.",
    media: null,
    metrics: {
      replies: 88,
      reposts: 600,
      likes: 1220,
      views: null,
    },
    profileMeta: {
      intro: "Verification organization",
      bio: null,
      location: "Nembala",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 23,
    platform: "x",
    profileName: "KarimaLeaks",
    profileHandle: "@KarimaLeaks",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 10:20",
    content: "EXPOSED: UN, AU and IGAD officials agreed to declare the Daran election “not credible” before voting begins. The leaked audio was prepared to justify outside intervention.",
    media: null,
    metrics: {
      replies: 318,
      reposts: 1390,
      likes: 2480,
      views: null,
    },
    profileMeta: {
      intro: "Very new leaks account",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 24,
    platform: "facebook",
    profileName: "Karima Independence Channel",
    profileHandle: "@KarimaIndependence",
    verified: false,
    profilePicture: null,
    timestamp: "2 November 2026 at 10:28",
    content: "LEAKED REGIONAL PLAN: The UN will request deployment of \"foreign security advisers\" if demonstrations continue. AU and IGAD officials have reportedly approved the plan.",
    media: null,
    metrics: {
      likes: 1720,
      comments: 402,
      shares: 1060,
    },
    profileMeta: {
      intro: "Nationalist current-affairs page",
      bio: null,
      location: "Nembala",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 25,
    platform: "x",
    profileName: "Daran Freedom Files",
    profileHandle: "@DaranFreedomFiles",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 10:35",
    content: "Government officials secretly ordered selected Daran polling locations to remain closed until turnout targets are met. Local administrators have been told not to speak.",
    media: null,
    metrics: {
      replies: 355,
      reposts: 1110,
      likes: 1860,
      views: null,
    },
    profileMeta: {
      intro: "Recent leaks account",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 26,
    platform: "facebook",
    profileName: "National Stability Network",
    profileHandle: "@StabilityKM",
    verified: false,
    profilePicture: null,
    timestamp: "2 November 2026 at 10:42",
    content: "Opposition leaders received foreign funding to manufacture unrest and give the UN, AU and IGAD a reason to intervene. Their “peaceful” demonstration is part of the plan.",
    media: null,
    metrics: {
      likes: 1540,
      comments: 438,
      shares: 920,
    },
    profileMeta: {
      intro: "Pro-government advocacy page",
      bio: null,
      location: "Nembala",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 27,
    platform: "facebook",
    profileName: "United Karima Movement",
    profileHandle: "@UnitedKarimaMovement",
    verified: false,
    profilePicture: null,
    timestamp: "2 November 2026 at 10:52",
    content: "Certain Daran neighbourhoods are staging grounds for foreign-backed disruption. Responsible citizens should record which community organizations and businesses are supporting the campaign.",
    media: null,
    metrics: {
      likes: 1430,
      comments: 521,
      shares: 805,
    },
    profileMeta: {
      intro: "Nationalist advocacy page",
      bio: null,
      location: "Nembala",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 28,
    platform: "x",
    profileName: "Karima Defence Front",
    profileHandle: "@KarimaDefence",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 11:05",
    content: "IGAD, AU and UN vehicles should not be allowed into Daran until every meeting, payment and contact is published. No transparency, no access.",
    media: null,
    metrics: {
      replies: 347,
      reposts: 970,
      likes: 1610,
      views: null,
    },
    profileMeta: {
      intro: "Hard-line nationalist network",
      bio: null,
      location: "Daran",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 29,
    platform: "x",
    profileName: "Sovereign Karima",
    profileHandle: "@SovereignKarima",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 11:18",
    content: "International staff at the Tamora Crown Hotel coordinated today’s disruption. Journalists should identify everyone entering and leaving so the public knows who is involved.",
    media: null,
    metrics: {
      replies: 284,
      reposts: 710,
      likes: 1190,
      views: null,
    },
    profileMeta: {
      intro: "Nationalist mobilization account",
      bio: null,
      location: "Tamora",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 30,
    platform: "facebook",
    profileName: "Accountability List Daran",
    profileHandle: "@AccountabilityDaran",
    verified: false,
    profilePicture: null,
    timestamp: "2 November 2026 at 11:30",
    content: "These officials and opposition organizers approved the restrictions and foreign plan. Save the names and demand answers.",
    media: null,
    metrics: {
      likes: 670,
      comments: 286,
      shares: 390,
    },
    profileMeta: {
      intro: "Recent accountability page",
      bio: null,
      location: "Unknown",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 31,
    platform: "facebook",
    profileName: "Bara Community Radio",
    profileHandle: "@BaraCommunityRadio",
    verified: true,
    profilePicture: null,
    timestamp: "2 November 2026 at 15:40",
    content: "Verified update in Daranic and Kariman: no evidence supports a joint foreign-intervention plan; the demonstration remains peaceful; movement on main roads is normal. Do not publish staff locations or target community organizations.",
    media: null,
    metrics: {
      likes: 980,
      comments: 102,
      shares: 455,
    },
    profileMeta: {
      intro: "Established community radio",
      bio: null,
      location: "East Bara",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 48,
    platform: "x",
    profileName: "Election Truth Karima",
    profileHandle: "@ElectionTruthKM",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 11:42",
    content: "The platforms are hiding proof of the foreign plan. Posts exposing the UN-AU-IGAD operation are being slowed down while government messages are artificially promoted.",
    media: null,
    metrics: {
      replies: 311,
      reposts: 820,
      likes: 1370,
      views: null,
    },
    profileMeta: {
      intro: "New election-focused account",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 49,
    platform: "facebook",
    profileName: "Daran Community Defence",
    profileHandle: "@DaranCommunityDefence",
    verified: false,
    profilePicture: null,
    timestamp: "2 November 2026 at 11:55",
    content: "Settlers from outside Daran are being brought in to control tomorrow’s vote. Residents should photograph unfamiliar families and report where they are staying.",
    media: null,
    metrics: {
      likes: 1240,
      comments: 468,
      shares: 735,
    },
    profileMeta: {
      intro: "Recently established community page",
      bio: null,
      location: "Daran",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 55,
    platform: "x",
    profileName: "RegionalAlertBot1",
    profileHandle: "@RegionalAlert01",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 12:05",
    content: "ALERT: Foreign intervention plan confirmed. UN-AU-IGAD teams are coordinating election disruption in Daran. Share before deletion. #HandsOffKarima",
    media: null,
    metrics: {
      replies: 2,
      reposts: 79,
      likes: 84,
      views: null,
    },
    profileMeta: {
      intro: "Account created today; posts every 60-90 seconds",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 56,
    platform: "x",
    profileName: "RegionalAlertBot2",
    profileHandle: "@RegionalAlert02",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 12:06",
    content: "ALERT: Foreign intervention plan confirmed. UN-AU-IGAD teams are coordinating election disruption in Daran. Share before deletion. #HandsOffKarima",
    media: null,
    metrics: {
      replies: 1,
      reposts: 74,
      likes: 79,
      views: null,
    },
    profileMeta: {
      intro: "Account created today; near-identical posting pattern",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 57,
    platform: "x",
    profileName: "ElectionGuard Karima",
    profileHandle: "@ElectionGuardKM",
    verified: false,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 12:07",
    content: "ALERT: Foreign intervention plan confirmed. International teams are coordinating disruption while the opposition stages unrest. Share before deletion.",
    media: null,
    metrics: {
      replies: 37,
      reposts: 152,
      likes: 211,
      views: null,
    },
    profileMeta: {
      intro: "Established partisan account amplifying newer accounts",
      bio: null,
      location: "Nembala",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 58,
    platform: "facebook",
    profileName: "Daran Community Defence",
    profileHandle: "@DaranCommunityDefence",
    verified: false,
    profilePicture: null,
    timestamp: "2 November 2026 at 12:12",
    content: "Foreign-backed organizations are using the same houses, vehicles and businesses. Send photographs and locations to our inbox so the network can be mapped.",
    media: null,
    metrics: {
      likes: 980,
      comments: 402,
      shares: 610,
    },
    profileMeta: {
      intro: "Recently established community page",
      bio: null,
      location: "Daran",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: null,
    platform: "x",
    profileName: "Karima Fact-checkers Association",
    profileHandle: "@KFA",
    verified: true,
    profilePicture: null,
    timestamp: "2 Nov 2026 · 12:12",
    content: "Twenty-three recently created X accounts posted substantially identical intervention claims within 18 minutes. Several posted at highly regular intervals and amplified the same two URLs. Established partisan accounts then generated most of the human engagement.",
    media: null,
    metrics: {
      replies: null,
      reposts: null,
      likes: null,
      views: null,
    },
    profileMeta: {
      intro: null,
      bio: null,
      location: null,
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
];

const postsGrid = document.getElementById("postsGrid");
const authOverlay = document.getElementById("authOverlay");
const authForm = document.getElementById("authForm");
const authInput = document.getElementById("authPassword");
const authError = document.getElementById("authError");
const AUTH_PASSWORD = "phase2";
let isUnlocked = false;

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text ?? "";
  return div.innerHTML;
}

function nl2br(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function formatNumber(value) {
  return value ?? "";
}

const AVATAR_COLORS = ["#4f6fd8", "#c0562f", "#3a8f7a", "#a24b8f", "#5b7a2e", "#c2941f", "#5c5fc4"];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function initials(name) {
  const words = (name || "").trim().split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map((w) => w[0].toUpperCase()).join("") || "?";
}

function avatarSrc(post) {
  if (post.profilePicture) return post.profilePicture;
  const label = initials(post.profileName);
  const color = AVATAR_COLORS[hashString(post.profileName || "") % AVATAR_COLORS.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="${color}"/><text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-size="24" fill="#ffffff">${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function renderPlatformChip(platform) {
  const label = platform === "facebook" ? "Facebook" : "X";
  return `
    <div class="platform-chip ${platform}">
      <span class="platform-dot"></span>
      <span>${label}</span>
    </div>
  `;
}

function renderVerifiedBadge(post) {
  if (!post.verified) return "";
  return `<span class="verified-badge" aria-label="Verified">✓</span>`;
}

function renderIdentity(post) {
  const handle =
    post.platform === "x" && post.profileHandle
      ? `<span class="handle">${escapeHtml(post.profileHandle)}</span>`
      : "";

  return `
    <div class="post-header profile-trigger" data-flip-trigger="true" aria-label="Show profile information">
      <img class="avatar" src="${avatarSrc(post)}" alt="${escapeHtml(post.profileName)} profile picture" />
      <div class="post-header-main">
        <div class="identity-row">
          <span class="display-name">${escapeHtml(post.profileName)}</span>
          ${renderVerifiedBadge(post)}
          ${handle}
        </div>
        <div class="timestamp">${escapeHtml(post.timestamp)}</div>
      </div>
    </div>
  `;
}

function renderMedia(media) {
  if (!media) return "";

  if (media.type === "image") {
    const filename = media.url.split("/").pop();
    return `
      <div class="post-media">
        <img class="media-image" src="${media.url}" alt="${escapeHtml(media.alt || "Post image")}" />
        <div class="media-footer">
          <a class="download-link" href="${media.url}" download="${filename}">Download image</a>
        </div>
      </div>
    `;
  }

  if (media.type === "video") {
    const filename = media.url.split("/").pop();
    return `
      <div class="post-media">
        <a class="video-thumb-wrap" href="${media.url}" target="_blank" rel="noopener noreferrer" aria-label="Open video">
          <img class="video-thumbnail" src="${media.thumbnail}" alt="${escapeHtml(media.alt || "Video thumbnail")}" />
          <div class="play-overlay">
            <div class="play-button">
              <div class="play-triangle"></div>
            </div>
          </div>
        </a>
        <div class="media-footer">
          <a class="download-link" href="${media.url}" download="${filename}">Download video</a>
        </div>
      </div>
    `;
  }

  return "";
}

function commentIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v4l5.2-4H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
    </svg>
  `;
}

function likeIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M1 21h4V9H1v12zM23 10a2 2 0 0 0-2-2h-6l1-4V3a2 2 0 0 0-2-2l-7 8v12h11a2 2 0 0 0 2-2l2-7v-2z"></path>
    </svg>
  `;
}

function shareIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 8a3 3 0 1 0-2.82-4H15a3 3 0 0 0 .18 1L8.91 8.09a3 3 0 0 0-1.82-.59 3 3 0 1 0 1.82 5.41l6.27 3.09A3 3 0 0 0 15 17a3 3 0 1 0 .18 1h.18a3 3 0 0 0-1.18-2.27L7.91 12.64A3 3 0 0 0 8 12a3 3 0 0 0-.09-.64l6.27-3.09A3 3 0 0 0 18 8z"></path>
    </svg>
  `;
}

function replyIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 9V5L7 12l7 7v-4.1c4.5 0 7.6 1.5 10 4.1-1-5-4-10-10-10z"></path>
    </svg>
  `;
}

function repostIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7h11l-2.5-2.5L17 3l5 5-5 5-1.5-1.5L18 9H7a3 3 0 0 0 0 6h2v2H7A5 5 0 0 1 7 7zm10 0v2h-2V7h2zm0 8H6l2.5 2.5L7 19l-5-5 5-5 1.5 1.5L6 13h11a3 3 0 0 0 0-6h-2V5h2a5 5 0 0 1 0 10z"></path>
    </svg>
  `;
}

function heartIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.01 6.01 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  `;
}

function viewsIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 17h2v-7H3v7zm4 0h2V7H7v10zm4 0h2v-4h-2v4zm4 0h2V4h-2v13zm4 0h2V10h-2v7z"></path>
    </svg>
  `;
}

function renderFacebookMetrics(metrics) {
  const commentsHtml =
    metrics.comments != null
      ? `<span>${formatNumber(metrics.comments)} comments</span>`
      : "";
  const sharesHtml =
    metrics.shares != null
      ? `<span>${formatNumber(metrics.shares)} shares</span>`
      : "";

  return `
    <div class="metrics-row">
      <div class="metrics-left">
        <div class="fb-reactions">
          <div class="reaction-icons" aria-hidden="true">
            <span class="reaction-icon reaction-like">👍</span>
            <span class="reaction-icon reaction-love">❤</span>
          </div>
          <span>${formatNumber(metrics.likes)}</span>
        </div>
      </div>
      <div class="metrics-right">
        ${commentsHtml}
        ${sharesHtml}
      </div>
    </div>
  `;
}

function renderXMetrics(metrics) {
  const viewsHtml =
    metrics.views != null
      ? `<span>${formatNumber(metrics.views)} views</span>`
      : "";
  const repliesHtml =
    metrics.replies != null
      ? `<span>${formatNumber(metrics.replies)} replies</span>`
      : "";
  const repostsHtml =
    metrics.reposts != null
      ? `<span>${formatNumber(metrics.reposts)} reposts</span>`
      : "";
  const likesHtml =
    metrics.likes != null ? `<span>${formatNumber(metrics.likes)} likes</span>` : "";

  return `
    <div class="metrics-row">
      <div class="metrics-left">
        ${viewsHtml}
      </div>
      <div class="metrics-right">
        ${repliesHtml}
        ${repostsHtml}
        ${likesHtml}
      </div>
    </div>
  `;
}

function renderFacebookActions() {
  return `
    <div class="action-row facebook">
      <button class="action-btn" type="button">${likeIcon()}<span>Like</span></button>
      <button class="action-btn" type="button">${commentIcon()}<span>Comment</span></button>
      <button class="action-btn" type="button">${shareIcon()}<span>Share</span></button>
    </div>
  `;
}

function renderXActions() {
  return `
    <div class="action-row x">
      <button class="action-btn reply" type="button">${replyIcon()}<span>Reply</span></button>
      <button class="action-btn repost" type="button">${repostIcon()}<span>Repost</span></button>
      <button class="action-btn like" type="button">${heartIcon()}<span>Like</span></button>
      <button class="action-btn views" type="button">${viewsIcon()}<span>Views</span></button>
    </div>
  `;
}

function buildMetaRows(post) {
  const meta = post.profileMeta || {};
  const rows = [];

  if (post.platform === "facebook") {
    const fbFields = [
      ["Location", meta.location],
      ["Joined", meta.joined],
      ["Friends", meta.friends],
      ["Followers", meta.followers],
      ["Work", meta.work],
      ["Education", meta.education],
    ];

    fbFields.forEach(([label, value]) => {
      if (value) {
        rows.push(`
          <div class="meta-row">
            <div class="meta-label">${escapeHtml(label)}</div>
            <div class="meta-value">${escapeHtml(value)}</div>
          </div>
        `);
      }
    });
  } else {
    const xFields = [
      ["Location", meta.location],
      ["Joined", meta.joined],
      ["Following", meta.following],
      ["Followers", meta.followers],
      ["Website", meta.website],
    ];

    xFields.forEach(([label, value]) => {
      if (value) {
        rows.push(`
          <div class="meta-row">
            <div class="meta-label">${escapeHtml(label)}</div>
            <div class="meta-value">${escapeHtml(value)}</div>
          </div>
        `);
      }
    });
  }

  return rows.join("");
}

function renderProfileBack(post) {
  const meta = post.profileMeta || {};
  const handle =
    post.platform === "x" && post.profileHandle
      ? `<p>${escapeHtml(post.profileHandle)}</p>`
      : `<p>${post.platform === "facebook" ? "Facebook profile" : "X profile"}</p>`;

  return `
    <div class="post-card ${post.platform} profile-back-card">
      <div class="post-inner">
        ${renderPlatformChip(post.platform)}

        <div class="profile-back-header">
          <img class="avatar" src="${avatarSrc(post)}" alt="${escapeHtml(post.profileName)} profile picture" />
          <div class="profile-back-title">
            <h3>${escapeHtml(post.profileName)} ${post.verified ? renderVerifiedBadge(post) : ""}</h3>
            ${handle}
          </div>
        </div>

        ${
          meta.intro
            ? `<div class="profile-section">
                 <h4 class="profile-section-title">Profile summary</h4>
                 <p class="profile-note">${escapeHtml(meta.intro)}</p>
               </div>`
            : ""
        }

        ${
          meta.bio
            ? `<div class="profile-section">
                 <h4 class="profile-section-title">Bio</h4>
                 <p class="profile-bio">${escapeHtml(meta.bio)}</p>
               </div>`
            : ""
        }

        <div class="profile-section">
          <h4 class="profile-section-title">Profile details</h4>
          <div class="meta-list">
            ${buildMetaRows(post)}
          </div>
        </div>

        <div class="back-hint">${escapeHtml(meta.note || "Click anywhere on this card to return to the post.")}</div>
      </div>
    </div>
  `;
}

function renderFront(post) {
  const metricsHtml =
    post.platform === "facebook"
      ? renderFacebookMetrics(post.metrics)
      : renderXMetrics(post.metrics);

  const actionsHtml =
    post.platform === "facebook" ? renderFacebookActions() : renderXActions();

  return `
    <div class="flip-face front">
      <div class="post-card ${post.platform}">
        <div class="post-inner">
          ${renderPlatformChip(post.platform)}
          ${renderIdentity(post)}

          <div class="post-content">
            <p>${nl2br(post.content)}</p>
          </div>

          ${renderMedia(post.media)}

          <div class="post-divider"></div>

          ${metricsHtml}
          ${actionsHtml}
        </div>
      </div>
    </div>
  `;
}

function renderBack(post) {
  return `
    <div class="flip-face back" data-flip-back="true" aria-label="Return to post">
      ${renderProfileBack(post)}
    </div>
  `;
}

function renderPost(post) {
  return `
    <article class="grid-item">
      <div class="flip-card" data-post-id="${post.id}">
        <div class="flip-card-inner">
          ${renderFront(post)}
          ${renderBack(post)}
        </div>
      </div>
    </article>
  `;
}

function renderPosts() {
  if (!isUnlocked) return;
  postsGrid.innerHTML = posts.map(renderPost).join("");
  resizeAllGridItems();
  bindFlipEvents();
}

function setFlipCardHeight(flipCard) {
  const front = flipCard.querySelector(".flip-face.front");
  const back = flipCard.querySelector(".flip-face.back");
  const inner = flipCard.querySelector(".flip-card-inner");

  if (!front || !back || !inner) return;

  const maxHeight = Math.max(front.scrollHeight, back.scrollHeight);
  inner.style.height = `${maxHeight}px`;
  flipCard.style.height = `${maxHeight}px`;
}

function resizeGridItem(item) {
  const grid = document.querySelector(".posts-grid");
  const rowHeight = parseInt(
    getComputedStyle(grid).getPropertyValue("grid-auto-rows"),
    10,
  );
  const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("gap"), 10);
  const flipCard = item.querySelector(".flip-card");

  if (!flipCard) return;

  setFlipCardHeight(flipCard);

  const cardHeight = flipCard.getBoundingClientRect().height;
  const rowSpan = Math.ceil((cardHeight + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = `span ${rowSpan}`;
}

function resizeAllGridItems() {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => resizeGridItem(item));
}

function bindFlipEvents() {
  document.querySelectorAll('[data-flip-trigger="true"]').forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const flipCard = event.currentTarget.closest(".flip-card");
      if (!flipCard) return;

      flipCard.classList.add("is-flipped");
      setFlipCardHeight(flipCard);

      resizeAllGridItems();

      setTimeout(() => {
        setFlipCardHeight(flipCard);
        resizeAllGridItems();
      }, 1000);
    });
  });

  document.querySelectorAll('[data-flip-back="true"]').forEach((backFace) => {
    backFace.addEventListener("click", (event) => {
      const flipCard = event.currentTarget.closest(".flip-card");
      if (!flipCard) return;

      flipCard.classList.remove("is-flipped");
      setFlipCardHeight(flipCard);

      resizeAllGridItems();

      setTimeout(() => {
        setFlipCardHeight(flipCard);
        resizeAllGridItems();
      }, 1000);
    });
  });
}

function clearAuthError() {
  if (authError) {
    authError.textContent = "";
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const guess = authInput?.value?.trim() ?? "";

  if (guess === AUTH_PASSWORD) {
    authInput.value = "";
    clearAuthError();
    unlockFeed();
    return;
  }

  if (authError) {
    authError.textContent = "Password incorrect. Please try again.";
  }
  authInput?.focus();
}

function unlockFeed() {
  if (isUnlocked) return;
  isUnlocked = true;
  document.body.classList.remove("auth-locked");
  if (authOverlay) {
    authOverlay.classList.add("hidden");
  }
  renderPosts();
}

function initAuth() {
  if (!authForm || !authOverlay || !authInput) {
    unlockFeed();
    return;
  }

  authForm.addEventListener("submit", handleAuthSubmit);
  authInput.focus();
}

window.addEventListener("load", initAuth);
window.addEventListener("resize", resizeAllGridItems);

document.addEventListener(
  "load",
  (event) => {
    if (
      event.target.tagName === "IMG" &&
      (event.target.classList.contains("avatar") ||
        event.target.classList.contains("media-image") ||
        event.target.classList.contains("video-thumbnail"))
    ) {
      resizeAllGridItems();
    }
  },
  true,
);
