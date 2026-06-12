// kc-boards.jsx — the style tile + 8 logo directions + canvas assembly.
// Relies on globals from kc-system.jsx (loaded first).

const W = 720, H = 540;

// Frame shared by every direction board
function Board({ bg = T.paper, ink = T.ink, children, footer }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: bg, color: ink }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 48px', minHeight: 0 }}>{children}</div>
      {footer}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// STYLE TILE
// ════════════════════════════════════════════════════════════════════════
function StyleTile() {
  const sw = (c, name, hex) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
      <div style={{ height: 76, borderRadius: 6, background: c, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }} />
      <div style={{ fontFamily: "'Hanken Grotesk',sans-serif" }}>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: T.ink }}>{name}</div>
        <div style={{ fontSize: 11, color: 'rgba(28,38,48,0.5)', letterSpacing: 0.4, marginTop: 1 }}>{hex}</div>
      </div>
    </div>
  );
  const eyebrow = (t) => (
    <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 10.5, letterSpacing: 2.4, textTransform: 'uppercase', color: T.clay, fontWeight: 700, marginBottom: 16 }}>{t}</div>
  );
  return (
    <div style={{ width: '100%', height: '100%', background: T.cream2, color: T.ink, display: 'flex', flexDirection: 'column', padding: '46px 52px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontFamily: "'Newsreader',serif", fontSize: 33, fontWeight: 400, letterSpacing: -0.5 }}>Kelly Celeste — sistema visual</div>
          <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 14, color: T.inkSoft, marginTop: 6, maxWidth: 560, lineHeight: 1.5 }}>
            Uma base quente e humana com seriedade contábil. Tinta + papel como neutros; celeste e argila entram só como acento.
          </div>
        </div>
        <MarkSeal s={92} ink={T.ink} accent={T.clay} />
      </div>

      <div style={{ height: 1, background: T.line, margin: '34px 0 32px' }} />

      <div style={{ display: 'flex', gap: 48, flex: 1, minHeight: 0 }}>
        <div style={{ flex: '0 0 46%' }}>
          {eyebrow('Paleta')}
          <div style={{ display: 'flex', gap: 16 }}>
            {sw(T.ink, 'Tinta', '#1C2630')}
            {sw(T.paper, 'Papel', '#F3EEE4')}
            {sw(T.celeste, 'Celeste', '#5E83A0')}
            {sw(T.clay, 'Argila', '#BD6B49')}
          </div>
        </div>
        <div style={{ width: 1, background: T.line }} />
        <div style={{ flex: 1 }}>
          {eyebrow('Tipografia')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div>
              <div style={{ fontFamily: "'Newsreader',serif", fontSize: 38, fontWeight: 400, lineHeight: 1 }}>Newsreader</div>
              <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 11, color: 'rgba(28,38,48,0.5)', marginTop: 5, letterSpacing: 0.3 }}>Serifa editorial · acolhe e dá confiança</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 30, fontWeight: 600, lineHeight: 1 }}>Hanken Grotesk</div>
              <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 11, color: 'rgba(28,38,48,0.5)', marginTop: 5, letterSpacing: 0.3 }}>Grotesca humanista · texto, descritores, UI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION 1 · Sereno — pure editorial serif wordmark
// ════════════════════════════════════════════════════════════════════════
function D1() {
  const Lock = ({ scale = 1, ink = T.ink, accent = T.clay }) => (
    <div style={{ textAlign: 'center', lineHeight: 1 }}>
      <div style={{ fontFamily: "'Newsreader',serif", fontWeight: 300, fontSize: 64 * scale, letterSpacing: -1 * scale, color: ink }}>Kelly</div>
      <div style={{ fontFamily: "'Newsreader',serif", fontWeight: 300, fontStyle: 'italic', fontSize: 64 * scale, letterSpacing: -0.5 * scale, color: ink, marginTop: 2 * scale }}>Celeste</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 * scale, marginTop: 20 * scale }}>
        <span style={{ width: 26 * scale, height: 1, background: accent }} />
        <span style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 11 * scale, letterSpacing: 4.5 * scale, fontWeight: 600, color: T.inkSoft }}>CONTABILIDADE</span>
        <span style={{ width: 26 * scale, height: 1, background: accent }} />
      </div>
    </div>
  );
  return (
    <Board footer={
      <Footer idea="Só o nome, em serifa editorial. O itálico em “Celeste” traz intimidade; a confiança vem da elegância contida.">
        <Chip label="Mono">
          <span style={{ fontFamily: "'Newsreader',serif", fontStyle: 'italic', fontSize: 30, color: T.ink }}>Kc</span>
        </Chip>
        <Chip label="Avatar">
          <Avatar s={56} bg={T.ink}><span style={{ fontFamily: "'Newsreader',serif", fontStyle: 'italic', fontSize: 26, color: T.paper }}>Kc</span></Avatar>
        </Chip>
      </Footer>
    }>
      <Lock />
    </Board>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION 8 · Ponto final — bold lowercase grotesque + decisive period
// ════════════════════════════════════════════════════════════════════════
function D8() {
  const Lock = ({ scale = 1, ink = T.ink, dot = T.clay }) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 700, fontSize: 58 * scale, letterSpacing: -2 * scale, color: ink, lineHeight: 1 }}>
        kelly celeste<span style={{ color: dot }}>.</span>
      </div>
      <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 12 * scale, letterSpacing: 7 * scale, fontWeight: 600, color: T.inkSoft, marginTop: 16 * scale, paddingLeft: 7 * scale }}>CONTABILIDADE</div>
    </div>
  );
  return (
    <Board footer={
      <Footer idea="Caixa-baixa, próxima e moderna. O ponto final diz “está tudo certo, fechado” — precisão sem rigidez.">
        <Chip label="Símbolo"><MarkDot s={40} c={T.clay} /></Chip>
        <Chip label="Mono">
          <span style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 700, fontSize: 30, color: T.ink, letterSpacing: -1 }}>kc<span style={{ color: T.clay }}>.</span></span>
        </Chip>
        <Chip label="Avatar">
          <Avatar s={56} bg={T.clay}><span style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 700, fontSize: 26, color: T.cream2, letterSpacing: -1 }}>kc.</span></Avatar>
        </Chip>
      </Footer>
    }>
      <Lock />
    </Board>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION 7 · Ledger — name anchored on accounting rules
// ════════════════════════════════════════════════════════════════════════
function D7() {
  const Lock = ({ scale = 1, ink = T.ink, rule = T.celeste }) => (
    <div style={{ position: 'relative', paddingBottom: 22 * scale }}>
      <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 600, fontSize: 50 * scale, letterSpacing: -0.5 * scale, color: ink, lineHeight: 1.04, textAlign: 'left' }}>
        Kelly<br />Celeste
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', gap: 5 * scale }}>
        <span style={{ height: 1.5, background: rule }} />
        <span style={{ height: 1.5, background: rule, opacity: 0.45 }} />
      </div>
      <div style={{ position: 'absolute', right: 0, bottom: 12 * scale, fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 10.5 * scale, letterSpacing: 4 * scale, fontWeight: 600, color: T.inkSoft }}>CONTABILIDADE</div>
    </div>
  );
  return (
    <Board footer={
      <Footer idea="O nome assenta sobre linhas de razão (ledger) — a estrutura do livro-caixa vira identidade. Organizado e firme.">
        <Chip label="Símbolo"><MarkLedger s={42} rule={T.celeste} ink={T.ink} /></Chip>
        <Chip label="Mono">
          <span style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 600, fontSize: 30, color: T.ink }}>KC</span>
        </Chip>
        <Chip label="Avatar">
          <Avatar s={56} bg={T.celesteDeep}><MarkLedger s={34} rule={T.cream2} ink={T.celesteSoft} /></Avatar>
        </Chip>
      </Footer>
    }>
      <div style={{ transform: 'scale(1.18)' }}><Lock /></div>
    </Board>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION 2 · Monograma KC — tile mark + grotesque wordmark
// ════════════════════════════════════════════════════════════════════════
function D2() {
  const Lock = ({ scale = 1 }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 26 * scale }}>
      <MarkMonogram s={92 * scale} bg={T.ink} k={T.paper} c={T.celesteSoft} />
      <div style={{ lineHeight: 1, whiteSpace: 'nowrap' }}>
        <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontWeight: 700, fontSize: 40 * scale, letterSpacing: -1 * scale, color: T.ink }}>Kelly Celeste</div>
        <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 12.5 * scale, letterSpacing: 5.5 * scale, fontWeight: 600, color: T.celeste, marginTop: 9 * scale }}>CONTABILIDADE</div>
      </div>
    </div>
  );
  return (
    <Board footer={
      <Footer idea="Monograma “kc” num bloco sólido — funciona pequeno (favicon, foto de perfil) e o nome respira ao lado.">
        <Chip label="Símbolo"><MarkMonogram s={44} bg={T.ink} k={T.paper} c={T.celesteSoft} /></Chip>
        <Chip label="Acento"><MarkMonogram s={44} bg={T.celeste} k={T.cream2} c={T.ink} /></Chip>
        <Chip label="Avatar"><Avatar s={56} bg="transparent"><MarkMonogram s={56} r={28} bg={T.ink} k={T.paper} c={T.celesteSoft} /></Avatar></Chip>
      </Footer>
    }>
      <Lock />
    </Board>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION 3 · Parênteses — accounting notation as an embrace
// ════════════════════════════════════════════════════════════════════════
function D3() {
  const Paren = ({ side, scale, c }) => (
    <span style={{ fontFamily: "'Spectral',serif", fontWeight: 300, fontSize: 96 * scale, color: c, lineHeight: 0.7, transform: 'translateY(2px)' }}>{side}</span>
  );
  const Lock = ({ scale = 1, ink = T.ink, accent = T.clay }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 * scale }}>
      <Paren side="(" scale={scale} c={accent} />
      <div style={{ textAlign: 'center', lineHeight: 1, whiteSpace: 'nowrap' }}>
        <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontWeight: 600, fontSize: 38 * scale, letterSpacing: -0.6 * scale, color: ink }}>Kelly Celeste</div>
        <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 11.5 * scale, letterSpacing: 5.5 * scale, fontWeight: 600, color: T.inkSoft, marginTop: 10 * scale }}>CONTABILIDADE</div>
      </div>
      <Paren side=")" scale={scale} c={accent} />
    </div>
  );
  return (
    <Board footer={
      <Footer idea="Parênteses são notação real de contador (valores entre parênteses). Aqui eles também abraçam o nome — acolhimento.">
        <Chip label="Símbolo"><MarkParens s={44} c={T.clay} dot={T.ink} /></Chip>
        <Chip label="Mono">
          <span style={{ fontFamily: "'Spectral',serif", fontWeight: 300, fontSize: 34, color: T.ink }}>(<span style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontWeight: 600, fontSize: 22 }}>kc</span>)</span>
        </Chip>
        <Chip label="Avatar"><Avatar s={56} bg={T.clay}><MarkParens s={42} c={T.cream2} dot={T.cream2} /></Avatar></Chip>
      </Footer>
    }>
      <Lock />
    </Board>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION 4 · Horizonte — calm circle + horizon ('celeste' / clarity)
// ════════════════════════════════════════════════════════════════════════
function D4() {
  const Lock = ({ scale = 1, ink = T.ink }) => (
    <div style={{ textAlign: 'center' }}>
      <MarkHorizon s={84 * scale} ring={T.celeste} line={T.celeste} />
      <div style={{ fontFamily: "'Spectral',serif", fontWeight: 400, fontSize: 46 * scale, letterSpacing: -0.5 * scale, color: ink, marginTop: 22 * scale, lineHeight: 1 }}>Kelly Celeste</div>
      <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 11.5 * scale, letterSpacing: 5.5 * scale, fontWeight: 600, color: T.celeste, marginTop: 12 * scale }}>CONTABILIDADE</div>
    </div>
  );
  return (
    <Board footer={
      <Footer idea="Um horizonte sereno — aceno ao sobrenome “Celeste” e à clareza/tranquilidade que um bom contador entrega.">
        <Chip label="Símbolo"><MarkHorizon s={44} ring={T.celeste} line={T.celeste} /></Chip>
        <Chip label="Sólido"><MarkHorizon s={44} ring={T.celesteDeep} line={T.cream2} fill={T.celesteDeep} /></Chip>
        <Chip label="Avatar"><Avatar s={56} bg={T.celesteDeep}><MarkHorizon s={42} ring={T.cream2} line={T.cream2} /></Avatar></Chip>
      </Footer>
    }>
      <Lock />
    </Board>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION 5 · Selo pessoal — the solo professional's seal
// ════════════════════════════════════════════════════════════════════════
function D5() {
  return (
    <Board bg={T.paperDeep} footer={
      <Footer idea="Um selo pessoal — a assinatura de uma profissional só. Oficial e confiável, mas com a serifa em itálico que humaniza.">
        <Chip label="Selo"><MarkSeal s={48} ink={T.ink} accent={T.clay} /></Chip>
        <Chip label="Mono"><span style={{ fontFamily: "'Newsreader',serif", fontStyle: 'italic', fontSize: 30, color: T.ink }}>Kc</span></Chip>
        <Chip label="Avatar"><Avatar s={56} bg={T.ink}><MarkSeal s={50} ink={T.paper} accent={T.claySoft} /></Avatar></Chip>
      </Footer>
    }>
      <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
        <MarkSeal s={150} ink={T.ink} accent={T.clay} />
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontSize: 44, letterSpacing: -0.5, color: T.ink }}>Kelly</div>
          <div style={{ fontFamily: "'Newsreader',serif", fontWeight: 400, fontStyle: 'italic', fontSize: 44, letterSpacing: -0.5, color: T.ink, marginTop: 2 }}>Celeste</div>
          <div style={{ width: 38, height: 1.5, background: T.clay, margin: '16px 0' }} />
          <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 11, letterSpacing: 4.5, fontWeight: 600, color: T.inkSoft }}>CONTABILIDADE</div>
        </div>
      </div>
    </Board>
  );
}

// ════════════════════════════════════════════════════════════════════════
// DIRECTION 6 · Equilíbrio — two bars settling level
// ════════════════════════════════════════════════════════════════════════
function D6() {
  const Lock = ({ scale = 1, ink = T.ink }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 * scale }}>
      <MarkBalance s={72 * scale} c={T.clay} c2={T.ink} />
      <div style={{ lineHeight: 1, whiteSpace: 'nowrap' }}>
        <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 600, fontSize: 38 * scale, letterSpacing: -0.8 * scale, color: ink }}>Kelly Celeste</div>
        <div style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 12 * scale, letterSpacing: 5 * scale, fontWeight: 600, color: T.clay, marginTop: 9 * scale }}>CONTABILIDADE</div>
      </div>
    </div>
  );
  return (
    <Board footer={
      <Footer idea="Duas barras que assentam no nível — “a conta bate”. Conciliação e equilíbrio, sem recorrer à balança óbvia.">
        <Chip label="Símbolo"><MarkBalance s={44} c={T.clay} c2={T.ink} /></Chip>
        <Chip label="Mono"><MarkBalance s={44} c={T.ink} c2={T.ink} /></Chip>
        <Chip label="Avatar"><Avatar s={56} bg={T.ink}><MarkBalance s={42} c={T.claySoft} c2={T.cream2} /></Avatar></Chip>
      </Footer>
    }>
      <Lock />
    </Board>
  );
}

// ════════════════════════════════════════════════════════════════════════
// CANVAS
// ════════════════════════════════════════════════════════════════════════
function App() {
  return (
    <DesignCanvas>
      <DCSection id="sistema" title="Sistema visual" subtitle="A base — paleta, tipografia e tom. Ajuste comigo antes de fechar uma direção.">
        <DCArtboard id="tile" label="Estilo · paleta + tipografia" width={1124} height={540}><StyleTile /></DCArtboard>
      </DCSection>

      <DCSection id="abordagem-a" title="Abordagem A — só o nome" subtitle="Sem símbolo. A força está na tipografia e no espaçamento.">
        <DCArtboard id="d1" label="01 · Sereno" width={W} height={H}><D1 /></DCArtboard>
        <DCArtboard id="d8" label="02 · Ponto final" width={W} height={H}><D8 /></DCArtboard>
        <DCArtboard id="d7" label="03 · Ledger" width={W} height={H}><D7 /></DCArtboard>
      </DCSection>

      <DCSection id="abordagem-b" title="Abordagem B — nome + símbolo" subtitle="Um símbolo que funciona sozinho (perfil, favicon) e ao lado do nome.">
        <DCArtboard id="d2" label="04 · Monograma" width={W} height={H}><D2 /></DCArtboard>
        <DCArtboard id="d3" label="05 · Parênteses" width={W} height={H}><D3 /></DCArtboard>
        <DCArtboard id="d4" label="06 · Horizonte" width={W} height={H}><D4 /></DCArtboard>
        <DCArtboard id="d5" label="07 · Selo pessoal" width={W} height={H}><D5 /></DCArtboard>
        <DCArtboard id="d6" label="08 · Equilíbrio" width={W} height={H}><D6 /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
