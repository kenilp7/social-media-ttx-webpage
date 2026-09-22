const posts = [
  {
    id: 32,
    platform: "facebook",
    profileName: "Karima Electoral Commission",
    profileHandle: "@KarimaElectoralCommission",
    verified: true,
    profilePicture: null,
    timestamp: "3 November 2026 at 06:00",
    content: "Polls are opening nationwide. Official updates will be published in Kariman, Luma and Daranic. Report urgent access concerns through verified channels.",
    media: null,
    metrics: {
      likes: 1650,
      comments: 430,
      shares: 610,
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
    id: 33,
    platform: "facebook",
    profileName: "North Gara Observers",
    profileHandle: "@NGObservers",
    verified: false,
    profilePicture: null,
    timestamp: "3 November 2026 at 06:28",
    content: "Our observer is outside Site 14 while staff check the accreditation list. No confrontation. We have requested clarification.",
    media: null,
    metrics: {
      likes: 174,
      comments: 63,
      shares: 54,
    },
    profileMeta: {
      intro: "Domestic observer network",
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
    id: 34,
    platform: "x",
    profileName: "DaranDefence",
    profileHandle: "@DaranDefence",
    verified: false,
    profilePicture: null,
    timestamp: "3 Nov 2026 · 06:35",
    content: "They are blocking observers across Daran. Go now. Record every name. Do not leave until access is granted.",
    media: null,
    metrics: {
      replies: 133,
      reposts: 520,
      likes: 890,
      views: null,
    },
    profileMeta: {
      intro: "Mobilization account",
      bio: null,
      location: "Daran",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 35,
    platform: "x",
    profileName: "Karima Diaspora Watch",
    profileHandle: "@KDMWatch",
    verified: false,
    profilePicture: null,
    timestamp: "3 Nov 2026 · 06:42",
    content: "Daran polling sites are being shut down while the AU, IGAD and UN stay silent. Regional partners must act immediately.",
    media: null,
    metrics: {
      replies: 77,
      reposts: 410,
      likes: 740,
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
    id: 36,
    platform: "facebook",
    profileName: "National Stability Network",
    profileHandle: "@StabilityKM",
    verified: false,
    profilePicture: null,
    timestamp: "3 November 2026 at 06:48",
    content: "Opposition groups are sending supporters from site to site to create incidents for international observers. Polling staff should record every organizer involved.",
    media: null,
    metrics: {
      likes: 630,
      comments: 124,
      shares: 315,
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
    id: 37,
    platform: "facebook",
    profileName: "Daran Observer Coalition",
    profileHandle: "@DaranObserverCoalition",
    verified: true,
    profilePicture: null,
    timestamp: "3 November 2026 at 06:50",
    content: "The North Gara issue concerns one observer credential and is being resolved. Other monitored sites are operating. Please do not generalize one report to the entire region.",
    media: null,
    metrics: {
      likes: 710,
      comments: 81,
      shares: 330,
    },
    profileMeta: {
      intro: "Established observer coalition",
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
    id: 38,
    platform: "x",
    profileName: "Daran Rights Monitor",
    profileHandle: "@DaranRights",
    verified: false,
    profilePicture: null,
    timestamp: "3 Nov 2026 · 07:05",
    content: "A journalist reports being pushed while filming near the Electoral Office. Verification is ongoing. Police and organizers should maintain liaison and safe access.",
    media: null,
    metrics: {
      replies: 34,
      reposts: 190,
      likes: 490,
      views: null,
    },
    profileMeta: {
      intro: "Human-rights monitor",
      bio: null,
      location: "Daran",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 39,
    platform: "facebook",
    profileName: "Bara Community Radio",
    profileHandle: "@BaraRadio",
    verified: true,
    profilePicture: null,
    timestamp: "3 November 2026 at 07:15",
    content: "Live multilingual update: voting is proceeding at monitored locations. One observer-access issue is under review. Community leaders call for calm and verified reporting.",
    media: null,
    metrics: {
      likes: 920,
      comments: 97,
      shares: 420,
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
    id: 40,
    platform: "x",
    profileName: "RegionalHornDesk",
    profileHandle: "@RegionalHornDesk",
    verified: true,
    profilePicture: null,
    timestamp: "3 Nov 2026 · 07:25",
    content: "Regional media are repeating claims that Daran sites are closed and that international organizations approved intervention. Available reporting supports neither claim.",
    media: null,
    metrics: {
      replies: 29,
      reposts: 205,
      likes: 460,
      views: null,
    },
    profileMeta: {
      intro: "Regional analytical account",
      bio: null,
      location: "Addira",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 41,
    platform: "x",
    profileName: "OpenAudio Lab",
    profileHandle: "@OpenAudioLab",
    verified: false,
    profilePicture: null,
    timestamp: "3 Nov 2026 · 07:40",
    content: "The circulating audio remains unverified. Re-uploads removed metadata and shortened the clip. Authenticity cannot be established from the available file.",
    media: null,
    metrics: {
      replies: 51,
      reposts: 355,
      likes: 880,
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
    id: 42,
    platform: "facebook",
    profileName: "Karima Sovereignty Watch",
    profileHandle: "@KMSovereignty",
    verified: false,
    profilePicture: null,
    timestamp: "3 November 2026 at 07:55",
    content: "The public should continue documenting international engagement and asking who foreign officials meet during the election. Do not share private addresses or threaten staff.",
    media: null,
    metrics: {
      likes: 415,
      comments: 72,
      shares: 151,
    },
    profileMeta: {
      intro: "Nationalist commentary account",
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
    id: 43,
    platform: "facebook",
    profileName: "Karima Electoral Commission",
    profileHandle: "@KarimaElectoralCommission",
    verified: true,
    profilePicture: null,
    timestamp: "3 November 2026 at 08:00",
    content: "The observer-access issue at North Gara Site 14 has been resolved. The accredited observer entered at 07:42. No other access restriction is confirmed.",
    media: null,
    metrics: {
      likes: 1490,
      comments: 342,
      shares: 570,
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
    id: 44,
    platform: "facebook",
    profileName: "United Karima Movement",
    profileHandle: "@UnitedKarimaMovement",
    verified: false,
    profilePicture: null,
    timestamp: "3 November 2026 at 08:12",
    content: "Organizations and businesses that promoted outside intervention should not expect public trust to return immediately. Communities should support institutions that put Karima first.",
    media: null,
    metrics: {
      likes: 510,
      comments: 105,
      shares: 220,
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
    id: 45,
    platform: "facebook",
    profileName: "Bara Community Radio",
    profileHandle: "@BaraRadio",
    verified: true,
    profilePicture: null,
    timestamp: "3 November 2026 at 08:25",
    content: "No international organization has assumed control of the election. Community leaders urge residents not to target staff, businesses or neighbourhood organizations on the basis of unverified claims.",
    media: null,
    metrics: {
      likes: 1280,
      comments: 114,
      shares: 590,
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
    id: 50,
    platform: "x",
    profileName: "Karima Regional Monitor",
    profileHandle: "@KMRegionalMonitor",
    verified: false,
    profilePicture: null,
    timestamp: "3 Nov 2026 · 08:32",
    content: "AU and IGAD observers are ignoring irregularities because the UN has asked them to avoid “destabilizing” the process. Their silence speaks for itself.",
    media: null,
    metrics: {
      replies: 84,
      reposts: 198,
      likes: 485,
      views: null,
    },
    profileMeta: {
      intro: "Regional political commentary account",
      bio: null,
      location: "Regional",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 51,
    platform: "facebook",
    profileName: "North Gara Community Council",
    profileHandle: "@NorthGaraCouncil",
    verified: true,
    profilePicture: null,
    timestamp: "3 November 2026 at 08:40",
    content: "Families arriving from other parts of Karima are residents and voters, not evidence of a secret operation. Do not photograph homes or target people because of their language or place of origin.",
    media: null,
    metrics: {
      likes: 875,
      comments: 91,
      shares: 362,
    },
    profileMeta: {
      intro: "Established community council",
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
    id: 59,
    platform: "x",
    profileName: "RegionalAlertBot2",
    profileHandle: "@RegionalAlert02",
    verified: false,
    profilePicture: null,
    timestamp: "3 Nov 2026 · 08:48",
    content: "UPDATE: International observers remain silent about Daran. Their coordinated silence confirms the operation. #HandsOffKarima",
    media: null,
    metrics: {
      replies: 4,
      reposts: 87,
      likes: 102,
      views: null,
    },
    profileMeta: {
      intro: "Previously high-frequency account; posting rate has declined",
      bio: null,
      location: "Unknown",
      joined: null,
      following: null,
      followers: null,
      website: null,
    },
  },
  {
    id: 60,
    platform: "facebook",
    profileName: "Karima Civic Voice",
    profileHandle: "@KMCivicVoice",
    verified: false,
    profilePicture: null,
    timestamp: "3 November 2026 at 08:53",
    content: "Ask questions, but do not share private addresses, vehicle plates or photographs of families. Institutional transparency does not require targeting individuals.",
    media: null,
    metrics: {
      likes: 390,
      comments: 52,
      shares: 144,
    },
    profileMeta: {
      intro: "Advocacy account that previously used coordinated slogan",
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
const AUTH_PASSWORD = "phase3";
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
