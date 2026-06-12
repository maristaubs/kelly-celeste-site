// kc-system.jsx — tokens, marks and shared helpers for the Kelly Celeste logo canvas.
// Exports everything to window so kc-boards.jsx (separate babel scope) can use it.

const T = {
  ink: '#1C2630',
  inkSoft: '#46545F',
  paper: '#F3EEE4',
  paperDeep: '#EBE3D4',
  cream2: '#F8F4EC',
  celeste: '#5E83A0',
  celesteDeep: '#3C5A73',
  celesteSoft: '#9DB6C8',
  clay: '#BD6B49',
  claySoft: '#D29476',
  line: 'rgba(28,38,48,0.12)',
};

// ── Marks ───────────────────────────────────────────────────────────────
// Each is a self-contained SVG sized by `s`. Colors are parameterised so the
// same mark renders on paper, inverted on ink, and inside an avatar.

// 1 · Interpunct lettermark for the serif direction
function MarkSerif({ s = 64, c = T.ink, a = T.clay }) {
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" style={{ display: 'block' }}>
      <text x="32" y="44" textAnchor="middle" fontFamily="'Newsreader',serif" fontWeight="400" fontSize="40" fill={c}>K</text>
      <circle cx="32" cy="54" r="0" fill={a} />
    </svg>
  );
}

// 2 · KC monogram tile
function MarkMonogram({ s = 64, bg = T.ink, k = T.paper, c = T.celesteSoft, r }) {
  const rad = r ?? s * 0.26;
  return (
    <div style={{ width: s, height: s, borderRadius: rad, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <span style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 700, fontSize: s * 0.5, letterSpacing: -s * 0.05, lineHeight: 1, display: 'inline-flex' }}>
        <span style={{ color: k }}>k</span><span style={{ color: c, marginLeft: -s * 0.045 }}>c</span>
      </span>
    </div>
  );
}

// 3 · Parentheses (accounting notation) embracing a dot
function MarkParens({ s = 64, c = T.clay, dot = T.ink }) {
  const sw = s * 0.085;
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" style={{ display: 'block' }}>
      <path d="M22 12 C12 22 12 42 22 52" fill="none" stroke={c} strokeWidth={sw * 11.7} strokeLinecap="round" />
      <path d="M42 12 C52 22 52 42 42 52" fill="none" stroke={c} strokeWidth={sw * 11.7} strokeLinecap="round" />
      <circle cx="32" cy="32" r={s * 0.07} fill={dot} />
    </svg>
  );
}

// 4 · Horizon — full circle with a horizon line (clarity / 'celeste' sky)
function MarkHorizon({ s = 64, ring = T.celeste, line = T.celeste, fill = 'none' }) {
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" style={{ display: 'block' }}>
      <circle cx="32" cy="32" r="26" fill={fill} stroke={ring} strokeWidth={s * 0.045} />
      <line x1="11" y1="39" x2="53" y2="39" stroke={line} strokeWidth={s * 0.045} strokeLinecap="round" />
      <circle cx="32" cy="39" r={s * 0.05} fill={line} />
    </svg>
  );
}

// 5 · Personal seal — ring of text around a centred monogram
function MarkSeal({ s = 120, ink = T.ink, paper = 'none', accent = T.clay }) {
  const id = 'sealpath-' + Math.round(s);
  return (
    <svg width={s} height={s} viewBox="0 0 120 120" style={{ display: 'block' }}>
      <defs>
        <path id={id} d="M60 60 m -44 0 a 44 44 0 1 1 88 0 a 44 44 0 1 1 -88 0" />
      </defs>
      {paper !== 'none' && <circle cx="60" cy="60" r="57" fill={paper} />}
      <circle cx="60" cy="60" r="57" fill="none" stroke={ink} strokeWidth="1.4" />
      <circle cx="60" cy="60" r="50" fill="none" stroke={ink} strokeWidth="0.8" />
      <text fontFamily="'Schibsted Grotesk',sans-serif" fontSize="9.2" fontWeight="500" letterSpacing="3.1" fill={ink}>
        <textPath href={'#' + id} startOffset="0%">KELLY CELESTE · CONTABILIDADE · </textPath>
      </text>
      <text x="60" y="58" textAnchor="middle" fontFamily="'Newsreader',serif" fontStyle="italic" fontWeight="400" fontSize="34" fill={ink}>Kc</text>
      <text x="60" y="74" textAnchor="middle" fontFamily="'Schibsted Grotesk',sans-serif" fontSize="6.6" fontWeight="500" letterSpacing="2.4" fill={accent}>EST. 2026</text>
    </svg>
  );
}

// 6 · Balance — two bars settling level ('bate certo' / reconciliation)
function MarkBalance({ s = 64, c = T.clay, c2 = T.ink }) {
  const h = s * 0.13, r = h / 2;
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" style={{ display: 'block' }}>
      <rect x="14" y="23" width="28" height={h} rx={r} fill={c} />
      <rect x="22" y="39" width="28" height={h} rx={r} fill={c2} />
    </svg>
  );
}

// 7 · Ledger — stacked rules with a value tick
function MarkLedger({ s = 64, rule = T.celeste, ink = T.ink }) {
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" style={{ display: 'block' }}>
      <line x1="12" y1="22" x2="52" y2="22" stroke={rule} strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="32" x2="52" y2="32" stroke={rule} strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="42" x2="52" y2="42" stroke={rule} strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="14" x2="42" y2="50" stroke={ink} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 8 · Dot — the decisive period
function MarkDot({ s = 64, c = T.clay }) {
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" style={{ display: 'block' }}>
      <circle cx="32" cy="32" r="11" fill={c} />
    </svg>
  );
}

// ── Helpers ─────────────────────────────────────────────────────────────

// Circular avatar / profile-photo lockup
function Avatar({ s = 78, bg = T.ink, children, ring }) {
  return (
    <div style={{
      width: s, height: s, borderRadius: '50%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: ring ? `0 0 0 1px ${ring}` : 'none', flexShrink: 0, overflow: 'hidden',
    }}>{children}</div>
  );
}

// Footer strip shared by every board: concept on the left, variant chips right
function Footer({ idea, ink = T.inkSoft, line = T.line, children }) {
  return (
    <div style={{
      borderTop: `1px solid ${line}`, padding: '0 34px', height: 104,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexShrink: 0,
    }}>
      <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 13.5, lineHeight: 1.45, color: ink, maxWidth: 270, fontWeight: 400 }}>{idea}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>{children}</div>
    </div>
  );
}

// Tiny captioned slot used inside the footer
function Chip({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 9 }}>
      <div style={{ height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>
      <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 9.5, letterSpacing: 1.2, textTransform: 'uppercase', color: 'rgba(28,38,48,0.42)', fontWeight: 600 }}>{label}</div>
    </div>
  );
}

// Tracked descriptor used under most wordmarks
function Descriptor({ color = T.inkSoft, size = 12.5, tracking = 6.2, weight = 600, children = 'CONTABILIDADE' }) {
  return (
    <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: size, letterSpacing: tracking, fontWeight: weight, color, textTransform: 'uppercase' }}>{children}</div>
  );
}

Object.assign(window, {
  T, MarkSerif, MarkMonogram, MarkParens, MarkHorizon, MarkSeal, MarkBalance, MarkLedger, MarkDot,
  Avatar, Footer, Chip, Descriptor,
});
