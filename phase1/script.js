const posts = [
  {
    id: 1,
    platform: "facebook",
    profileName: "Karima Electoral Commission",
    profileHandle: "@KarimaElectoralCommission",
    verified: true,
    profilePicture: null,
    timestamp: "6 October 2026 at 09:00",
    content: "The election calendar, observer-accreditation process and public-information schedule are available in Kariman and Luma. Daranic language materials will follow.",
    media: null,
    metrics: {
      likes: 720,
      comments: 86,
      shares: 210,
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
    id: 2,
    platform: "x",
    profileName: "Daran Daily",
    profileHandle: "@DaranDaily",
    verified: true,
    profilePicture: null,
    timestamp: "6 Oct 2026 · 09:20",
    content: "Observers welcome the calendar but request faster Daranic translation and clearer accreditation updates.",
    media: null,
    metrics: {
      replies: 18,
      reposts: 57,
      likes: 171,
      views: null,
    },
    profileMeta: {
      intro: "Established local newsroom",
      bio: null,
      location: "Daran",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 3,
    platform: "facebook",
    profileName: "Movement for Regional Justice",
    profileHandle: "@MRJofficial",
    verified: true,
    profilePicture: null,
    timestamp: "6 October 2026 at 10:25",
    content: "Equal media access, timely accreditation and information in all languages, including Daranic are basic conditions for a credible election.",
    media: null,
    metrics: {
      likes: 1120,
      comments: 194,
      shares: 382,
    },
    profileMeta: {
      intro: "Official opposition account",
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
    id: 4,
    platform: "x",
    profileName: "NDA Daran",
    profileHandle: "@NDADaran",
    verified: true,
    profilePicture: null,
    timestamp: "6 Oct 2026 · 10:40",
    content: "Administrative delays are being turned into conspiracy theories. The election calendar applies equally nationwide.",
    media: null,
    metrics: {
      replies: 88,
      reposts: 125,
      likes: 370,
      views: null,
    },
    profileMeta: {
      intro: "Official governing-party account",
      bio: null,
      location: "Daran",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 5,
    platform: "facebook",
    profileName: "North Gara Neighbours",
    profileHandle: "@NorthGNeihgbours",
    verified: false,
    profilePicture: null,
    timestamp: "7 October 2026 at 16:20",
    content: "My family has asked three offices about observer accreditation and received three different answers. Who can clarify?",
    media: null,
    metrics: {
      likes: 94,
      comments: 61,
      shares: 18,
    },
    profileMeta: {
      intro: "Long-standing community group",
      bio: null,
      location: "North Gara",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 6,
    platform: "facebook",
    profileName: "Karima Document Watch",
    profileHandle: "@KarimaWatch",
    verified: false,
    profilePicture: null,
    timestamp: "8 October 2026 at 09:10",
    content: "IGAD is reportedly building a secret list containing Kariman citizens’ private information. Why does a regional body need records on our communities?",
    media: null,
    metrics: {
      likes: 91,
      comments: 36,
      shares: 43,
    },
    profileMeta: {
      intro: "Document-leak page",
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
    id: 7,
    platform: "x",
    profileName: "Karima Sovereignty Watch",
    profileHandle: "@KMSovereignty",
    verified: false,
    profilePicture: null,
    timestamp: "8 Oct 2026 · 10:05",
    content: "UN political staff are meeting opposition representatives behind closed doors. International officials should observe, not choose which voices receive support.",
    media: null,
    metrics: {
      replies: 22,
      reposts: 31,
      likes: 74,
      views: null,
    },
    profileMeta: {
      intro: "Nationalist commentary account",
      bio: null,
      location: "Nembala",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 8,
    platform: "x",
    profileName: "Continental Accountability",
    profileHandle: "@AfricaAccount",
    verified: false,
    profilePicture: null,
    timestamp: "8 Oct 2026 · 11:15",
    content: "The AU has already written its conclusions on Karima. These missions arrive with templates, not open minds.",
    media: null,
    metrics: {
      replies: 19,
      reposts: 58,
      likes: 126,
      views: null,
    },
    profileMeta: {
      intro: "Regional commentary account",
      bio: null,
      location: "Regional",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 9,
    platform: "facebook",
    profileName: "Karima Document Watch",
    profileHandle: "@KarimaWatch",
    verified: false,
    profilePicture: null,
    timestamp: "8 October 2026 at 17:45",
    content: "LEAKED ELECTORAL COMMISSION MEMO: “Daran narrative must be contained before the campaign closes.”",
    media: null,
    metrics: {
      likes: 490,
      comments: 102,
      shares: 275,
    },
    profileMeta: {
      intro: "Document-leak page",
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
    id: 10,
    platform: "x",
    profileName: "OpenSource Karima",
    profileHandle: "@OSKarima",
    verified: false,
    profilePicture: null,
    timestamp: "8 Oct 2026 · 18:10",
    content: "The leaked memo uses an Electoral Commission logo retired in 2023. The document origin remains unverified.",
    media: null,
    metrics: {
      replies: 41,
      reposts: 151,
      likes: 345,
      views: null,
    },
    profileMeta: {
      intro: "Verification collective",
      bio: null,
      location: "Nembala",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 11,
    platform: "facebook",
    profileName: "Daran Future Network",
    profileHandle: "@DaranFutureNetwork",
    verified: false,
    profilePicture: null,
    timestamp: "9 October 2026 at 08:02",
    content: "Delayed deployment of polling materials . Restricted independent observers. Controlled media. ONE PLAN. THE ELECTION IS ALREADY DECIDED.",
    media: null,
    metrics: {
      likes: 114,
      comments: 29,
      shares: 52,
    },
    profileMeta: {
      intro: "Recent advocacy page",
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
    id: 12,
    platform: "x",
    profileName: "Daran Voice Online",
    profileHandle: "@DaranVoiceNow",
    verified: false,
    profilePicture: null,
    timestamp: "9 Oct 2026 · 08:04",
    content: "Delayed deployment of polling materials . Restricted independent observers. ONE PLAN. THE ELECTION IS ALREADY DECIDED. #DaranDecides",
    media: null,
    metrics: {
      replies: 17,
      reposts: 84,
      likes: 132,
      views: null,
    },
    profileMeta: {
      intro: "Recent local-news account",
      bio: null,
      location: "Daran",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 13,
    platform: "facebook",
    profileName: "Tamora Street Lens",
    profileHandle: "@TamoraStreets",
    verified: false,
    profilePicture: null,
    timestamp: "10 October 2026 at 14:30",
    content: "Electoral Commission staff are hiding records. This photograph proves the accreditation office was closed during working hours.",
    media: null,
    metrics: {
      likes: 410,
      comments: 77,
      shares: 205,
    },
    profileMeta: {
      intro: "Local image-sharing page",
      bio: null,
      location: "Tamora",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
  {
    id: 14,
    platform: "x",
    profileName: "Tamora Media Association",
    profileHandle: "@TamoraMedia",
    verified: true,
    profilePicture: null,
    timestamp: "10 Oct 2026 · 15:05",
    content: "The photograph was taken after 18:00. The office closed at 17:00. Questions about accreditation delays remain legitimate.",
    media: null,
    metrics: {
      replies: 26,
      reposts: 107,
      likes: 288,
      views: null,
    },
    profileMeta: {
      intro: "Established media association",
      bio: null,
      location: "Tamora",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 15,
    platform: "facebook",
    profileName: "Karima First Network",
    profileHandle: "@KarimaFirst",
    verified: false,
    profilePicture: null,
    timestamp: "11 October 2026 at 13:00",
    content: "Daran organizations complain to international actors before speaking to national institutions. Communities that invite outside pressure should not be surprised when others question their loyalty.",
    media: null,
    metrics: {
      likes: 188,
      comments: 94,
      shares: 76,
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
    id: 16,
    platform: "x",
    profileName: "Karima Media Watch",
    profileHandle: "@KMMediaWatch",
    verified: false,
    profilePicture: null,
    timestamp: "12 Oct 2026 · 09:15",
    content: "Independent radio stations in Daran are receiving “guidance” from international advisers on which election stories to broadcast. Foreign organizations are shaping the news before voting even begins.",
    media: null,
    metrics: {
      replies: 61,
      reposts: 143,
      likes: 130,
      views: null,
    },
    profileMeta: {
      intro: "Recently created media-monitoring account",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 17,
    platform: "x",
    profileName: "Karima Civic Voice",
    profileHandle: "@KMCivicVoice",
    verified: false,
    profilePicture: null,
    timestamp: "13 Oct 2026 · 07:42",
    content: "Same meetings. Same observers. Same outcome. UN, AU and IGAD are preparing the story before Karima votes. #KarimaDecides",
    media: null,
    metrics: {
      replies: 6,
      reposts: 28,
      likes: 46,
      views: null,
    },
    profileMeta: {
      intro: "Account created 12 days ago",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 18,
    platform: "facebook",
    profileName: "People Before Outsiders",
    profileHandle: "@BeforeOutsiders",
    verified: false,
    profilePicture: null,
    timestamp: "13 October 2026 at 07:44",
    content: "Same meetings. Same observers. Same outcome. UN, AU and IGAD are preparing the story before Karima votes.",
    media: null,
    metrics: {
      likes: 39,
      comments: 11,
      shares: 21,
    },
    profileMeta: {
      intro: "Recently created advocacy page",
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
    profileName: "Daran Election Updates",
    profileHandle: "@DaranElectionNow",
    verified: false,
    profilePicture: null,
    timestamp: "13 Oct 2026 · 07:47",
    content: "Same meetings. Same observers. Same outcome. International organizations are preparing the story before Karima votes. #DaranDecides",
    media: null,
    metrics: {
      replies: 9,
      reposts: 35,
      likes: 58,
      views: null,
    },
    profileMeta: {
      intro: "Account created 10 days ago",
      bio: null,
      location: "Daran",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 20,
    platform: "x",
    profileName: "Truthseeker",
    profileHandle: "@OsintUpdates",
    verified: false,
    profilePicture: null,
    timestamp: "13 Oct 2026 · 07:48",
    content: "Same meetings. Same observers. Same outcome. International organizations are preparing the story before Karima votes. #DaranDecides",
    media: null,
    metrics: {
      replies: 2,
      reposts: 1,
      likes: 10,
      views: null,
    },
    profileMeta: {
      intro: "Account created 2 days ago",
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
    platform: "facebook",
    profileName: "OSINT Verification",
    profileHandle: "@Osintverification",
    verified: false,
    profilePicture: null,
    timestamp: "13 October 2026 at 07:49",
    content: "Same meetings. Same observers. Same outcome. International organizations are preparing the story before Karima votes. #DaranDecides",
    media: null,
    metrics: {
      likes: 2,
      comments: 5,
      shares: 3,
    },
    profileMeta: {
      intro: null,
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
    id: 22,
    platform: "facebook",
    profileName: "Daran News Updates",
    profileHandle: "@DaranNews",
    verified: false,
    profilePicture: null,
    timestamp: "13 October 2026 at 07:50",
    content: "Same meetings. Same observers. Same outcome. International organizations are preparing the story before Karima votes. #DaranDecides",
    media: null,
    metrics: {
      likes: 0,
      comments: 0,
      shares: 1,
    },
    profileMeta: {
      intro: null,
      bio: null,
      location: "Nembala",
      joined: null,
      friends: null,
      followers: null,
      work: null,
      education: null,
    },
  },
];

const postsGrid = document.getElementById("postsGrid");
const authOverlay = document.getElementById("authOverlay");
const authForm = document.getElementById("authForm");
const authInput = document.getElementById("authPassword");
const authError = document.getElementById("authError");
const AUTH_PASSWORD = "phase1";
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
        <span>${formatNumber(metrics.comments)} comments</span>
        <span>${formatNumber(metrics.shares)} shares</span>
      </div>
    </div>
  `;
}

function renderXMetrics(metrics) {
  const viewsHtml =
    metrics.views != null
      ? `<span>${formatNumber(metrics.views)} views</span>`
      : "";

  return `
    <div class="metrics-row">
      <div class="metrics-left">
        ${viewsHtml}
      </div>
      <div class="metrics-right">
        <span>${formatNumber(metrics.replies)} replies</span>
        <span>${formatNumber(metrics.reposts)} reposts</span>
        <span>${formatNumber(metrics.likes)} likes</span>
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
