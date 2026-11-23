# Fontes editáveis do corte e da galeria

Este documento é um pacote textual. O [materializador](../../scripts/cortes/materializar-kit.mjs) cria os arquivos em uma pasta de trabalho externa ao repositório, sem baixar mídia ou instalar ferramentas. Os blocos de `projeto/` preservam a versão local de referência, incluindo seus valores específicos. `referencias/index.html` é a galeria didática construída para compartilhar as composições com a equipe.

Os fontes não comprovam que LUT, fontes, licenças ou mídia externa estão disponíveis. Consulte [dependências](dependencias-e-creditos.md) e [revisão](revisao-e-medidas.md). Para adaptar, siga o [guia](guia-podimep.md). Não editar só a cópia materializada e presumir atualização deste documento; alterações ao kit devem voltar aos blocos abaixo em contribuição própria.

## referencias/index.html

<!-- kit-file: referencias/index.html -->
```html
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bezalel · referências de cortes PodIMEP</title>
<link rel="stylesheet" href="../projeto/style.css">
<style>
*{box-sizing:border-box}body{margin:0;background:#eee8dd;color:#211e19;font-family:Inter,Arial,sans-serif}main{max-width:1140px;padding:48px 30px 70px;margin:auto}.eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase}h1{font:normal 54px/1 Baskerville,Georgia,serif;letter-spacing:-.03em;margin:14px 0}header p{max-width:740px;line-height:1.6;color:#62584d}nav{display:flex;align-items:center;flex-wrap:wrap;gap:12px;padding:18px 0 24px;position:sticky;top:0;background:#eee8dd;z-index:4;border-bottom:1px solid #c6bbab}button{font:inherit;background:#211e19;color:#fff8ed;border:0;border-radius:5px;padding:10px 14px;cursor:pointer}button.secondary{background:#ded5c6;color:#211e19}input{flex:1;min-width:140px;accent-color:#844814}output{font-size:13px;font-variant-numeric:tabular-nums;min-width:98px}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:30px 22px;margin-top:28px}article{min-width:0}article h2{font-size:15px;margin:12px 0 7px}article p{font-size:13px;line-height:1.5;color:#62584d;margin:0}.viewport{position:relative;width:100%;aspect-ratio:9/16;overflow:hidden;background:#26313a;border-radius:3px}.stage{position:absolute;left:0;top:0;width:1080px;height:1920px;transform-origin:top left;overflow:hidden}.title-scene{position:absolute;inset:0}.placeholder{position:absolute;inset:0;background:#26313a}.placeholder:before{content:'';position:absolute;border-radius:48% 48% 43% 43%;background:#89918d;width:370px;height:470px;left:355px;top:380px}.placeholder:after{content:'';position:absolute;border-radius:43% 43% 0 0;background:#414e52;width:960px;height:1000px;left:60px;top:835px}.dramatic .placeholder{filter:grayscale(1);opacity:.72;transform:scale(1.24);transform-origin:540px 730px}.stage .caption-zone{position:absolute}.foot{margin-top:36px;border-top:1px solid #c6bbab;padding-top:20px;font-size:13px;line-height:1.6;color:#62584d}.tag{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:#8c5c2f}a{color:#754719}@media(max-width:780px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}h1{font-size:42px}main{padding:28px 18px}}@media(max-width:480px){.grid{grid-template-columns:1fr}.viewport{max-width:310px;margin:auto}article h2,article p{text-align:center}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
</style>
</head>
<body><main>
<header><span class="eyebrow">Ministério Bezalel / PodIMEP</span><h1>Uma mensagem.<br>Uma hierarquia clara.</h1><p>Referências editáveis do corte sobre o véu. Apoio discreto, palavra principal dominante e fundos sólidos. Os desenhos de pessoa são marcadores de composição: esta galeria não contém o vídeo, áudio ou fontes do episódio.</p></header>
<nav aria-label="Controles da demonstração"><button id="play" type="button">Reproduzir</button><button class="secondary" id="back" aria-label="Voltar um frame" type="button">−1</button><button class="secondary" id="next" aria-label="Avançar um frame" type="button">+1</button><label for="frame">Frame</label><input id="frame" type="range" min="0" max="119" value="60"><output id="time" for="frame">60 / 119 · 24 fps</output></nav>
<section class="grid" aria-label="Moodboard de seis composições">
<article><div class="viewport"><div class="stage" id="opening"></div></div><h2>01 · Gancho sobre imagem</h2><p>“Quando o véu” / <em>foi rasgado</em> / “no templo?”. Palavra principal a 174 px; apoio em caixa normal.</p></article>
<article><div class="viewport"><div class="stage" id="caption"></div></div><h2>02 · Legenda por palavra</h2><p>Sem caixas individuais. A palavra só fica visível no frame definido e a palavra ativa recebe cor.</p></article>
<article><div class="viewport"><div class="stage" id="question"></div></div><h2>03 · Pergunta em fundo sólido</h2><p>Carvão e marfim. “O véu?” ocupa o maior corpo; esta pergunta não usa traço horizontal.</p></article>
<article><div class="viewport"><div class="stage" id="death"></div></div><h2>04 · Ênfase em três linhas</h2><p>“Porque elas” / “não querem” / <em>morrer</em>. Entrada e saída de P&amp;B + zoom no mesmo frame.</p></article>
<article><div class="viewport"><div class="stage" id="cross"></div></div><h2>05 · Cruz em segundo plano</h2><p>Forma editável atrás do texto e entrada suave de sete frames. A voz deve continuar independente.</p></article>
<article><div class="viewport"><div class="stage" id="passage"></div></div><h2>06 · Pergunta → resposta</h2><p>Marfim → carvão, diretamente no frame 64 desta demonstração. Sem flash da câmera entre os sólidos.</p></article>
</section>
<p class="foot"><span class="tag">Referência de composição, sem áudio</span><br>Os tempos desta galeria são didáticos. O projeto materializado contém a montagem original e os tempos da fonte. Use os controles para examinar entradas e a troca de cartelas. A fonte efetiva depende da máquina; confira Baskerville/Inter e substituições antes de reutilizar os encaixes. A galeria inicia pausada e não reproduz SFX.</p>
</main>
<script>
const scenes = {
 opening:{theme:'shot',lines:[[0,'Quando o véu','small accent opening-line'],[3,'foi rasgado','hero prominent opening-hero'],[7,'no templo?','small']]},
 question:{theme:'ink',rule:false,lines:[[0,'E o que é que é','support'],[18,'o véu?','hero']]},
 death:{theme:'shot',lines:[[0,'porque elas','small'],[3,'não querem','strong'],[12,'morrer','hero final-word']]},
 cross:{theme:'cross-card',rule:false,lines:[[0,'A CRUZ','hero accent'],[30,'é o que vai','support join'],[78,'matar','support join'],[92,'o seu ego','hero restrained']]},
 left:{theme:'paper',lines:[[0,'E o que tinha','support'],[18,'do outro lado','strong'],[36,'do véu?','hero']]},
 right:{theme:'ink',lines:[[0,'O Santo','strong'],[10,'dos Santos','hero restrained']]}
};
const clamp = n => Math.min(1,Math.max(0,n));
function eased(t){t=clamp(t);let lo=0,hi=1;for(let i=0;i<16;i++){const m=(lo+hi)/2;const x=3*(1-m)*(1-m)*m*.17+3*(1-m)*m*m*.24+m*m*m;if(x<t)lo=m;else hi=m}const m=(lo+hi)/2;return 3*(1-m)*(1-m)*m*.72+3*(1-m)*m*m+m*m*m}
function clear(el){el.replaceChildren()}
function person(el){const p=document.createElement('div');p.className='placeholder';el.append(p)}
function title(el,s,f){const layer=document.createElement('div');layer.className='title-scene '+s.theme+(s.rule===false?' no-rule':'');if(s.theme==='cross-card'){layer.style.opacity=Math.min(clamp(f/7),clamp((119-f)/7));const cross=document.createElement('div');cross.className='cross-symbol';layer.append(cross)}const zone=document.createElement('div');zone.className='type-zone';if(s.theme!=='shot'&&s.rule!==false){const line=document.createElement('div');line.className='title-rule';line.style.scale=s.theme==='paper'?(.13+.87*eased((f-18)/14))+' 1':'1 1';zone.append(line)}s.lines.forEach(([at,text,kind],index)=>{const age=f-at;const span=document.createElement('span');span.className=kind;span.textContent=text;const hard=kind.includes('accent');span.style.opacity=age<0?0:hard?1:clamp(age/3);const slide=s.theme==='paper'&&index===1?-38:s.theme==='ink'&&s.rule!==false?28:0;span.style.translate=(slide*(1-eased(age/9)))+'px '+((slide||hard)?0:13*(1-eased(age/5)))+'px';zone.append(span)});layer.append(zone);el.append(layer)}
function render(f){document.querySelector('#frame').value=f;document.querySelector('#time').value=f+' / 119 · 24 fps';for(const id of ['opening','caption','question','death','cross','passage']){const el=document.getElementById(id);clear(el);if(['opening','caption','death'].includes(id))person(el);if(id==='death'){const active=f>=12&&f<85;el.classList.toggle('dramatic',active);if(active)title(el,scenes.death,f-12)}else if(id==='caption'){const zone=document.createElement('div');zone.className='caption-zone single-line';const band=document.createElement('div');band.className='caption-band';const words=[['quando',5],['você',20],['entender',36]];words.forEach(([word,at],i)=>{const span=document.createElement('span');span.textContent=word;const age=f-at;span.style.opacity=age<0?0:1;span.style.translate='0 '+7*(1-clamp(age/3))+'px';if(age>=0&&(i===words.length-1||f<words[i+1][1]))span.className='current';band.append(span)});zone.append(band);el.append(zone)}else if(id==='passage')title(el,f<64?scenes.left:scenes.right,f<64?f:f-64);else title(el,scenes[id],f)}}
let frame=60,playing=false,started=0,origin=60;
const play=document.querySelector('#play');function pause(){playing=false;play.textContent='Reproduzir'}function tick(now){if(!playing)return;frame=(origin+Math.floor((now-started)*24/1000))%120;render(frame);requestAnimationFrame(tick)}play.addEventListener('click',()=>{if(playing){pause();return}playing=true;origin=frame;started=performance.now();play.textContent='Pausar';requestAnimationFrame(tick)});document.querySelector('#frame').addEventListener('input',e=>{pause();frame=Number(e.target.value);render(frame)});for(const [id,step] of [['back',-1],['next',1]])document.getElementById(id).addEventListener('click',()=>{pause();frame=(frame+step+120)%120;render(frame)});const resize=new ResizeObserver(entries=>{for(const entry of entries)entry.target.querySelector('.stage').style.transform='scale('+entry.contentRect.width/1080+')'});document.querySelectorAll('.viewport').forEach(el=>resize.observe(el));render(frame);
</script></body></html>
```

## projeto/src.jsx

<!-- kit-file: projeto/src.jsx -->
```jsx
import {registerRoot} from 'remotion';
import {RemotionRoot} from './src/Root';

registerRoot(RemotionRoot);
```

## projeto/src/Root.tsx

<!-- kit-file: projeto/src/Root.tsx -->
```tsx
import React from 'react';
import {z} from 'zod';
import {
  AbsoluteFill, Composition, Easing, Sequence, interpolate,
  staticFile, useCurrentFrame, useVideoConfig,
} from 'remotion';
import {Audio, Video} from '@remotion/media';
import captions from '../legendas.json';
import edit from '../montagem.json';
import '../style.css';

const ease = Easing.bezier(0.42, 0, 0.35, 1);
const settle = Easing.bezier(0.17, 0.72, 0.24, 1);
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'};

function Camera({sourceFrame, media, framing, positions, monochrome, closeUp}) {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const times = framing.map(([time]) => time * fps);
  const zoom = interpolate(frame, times, framing.map(([, scale]) => scale), {...clamp, easing: ease});
  const horizontal = interpolate(frame, times, positions, {...clamp, easing: ease});
  const pictureWidth = 1920 * 16 / 9;
  const left = (1080 - pictureWidth) * horizontal / 100;
  const currentSourceFrame = sourceFrame + frame;
  const inCloseUp = closeUp &&
    currentSourceFrame >= toFrame(closeUp.in) &&
    currentSourceFrame < toFrame(closeUp.out);
  const monochromeAmount = monochrome.some(([entry, exit]) =>
    currentSourceFrame >= toFrame(entry) && currentSourceFrame < toFrame(exit)
  ) ? 1 : 0;
  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      <Video
        name="Máster · voz e imagem"
        src={staticFile(media)}
        trimBefore={0}
        objectFit="contain"
        muted
        style={{
          position: 'absolute',
          left,
          width: pictureWidth,
          height: 1920,
          transformOrigin: `${540 - left}px 38%`,
          scale: zoom + (inCloseUp ? closeUp.zoom : 0),
          filter: `saturate(0.94) grayscale(${monochromeAmount}) contrast(${1 + 0.10 * monochromeAmount}) brightness(${1 - 0.03 * monochromeAmount})`,
          opacity: 1 - 0.28 * monochromeAmount,
        }}
      />
    </AbsoluteFill>
  );
}


const fps = 24;
const toFrame = (seconds) => Math.round(seconds * fps);

let duration = 0;
const clips = edit.clips.map((clip) => {
  const start = toFrame(clip.in);
  const length = toFrame(clip.out) - start;
  const from = duration;
  duration += length;
  return {...clip, start, length, from};
});

function sourceToTimeline(seconds) {
  const frame = toFrame(seconds);
  const clip = clips.find(({start, length}) => frame >= start && frame < start + length);
  if (!clip) throw new Error(`Marcador fora de um trecho editado: ${seconds}`);
  return clip.from + frame - clip.start;
}

const titles = edit.titles.map((title) => ({
  ...title,
  from: sourceToTimeline(title.in),
  length: toFrame(title.out) - toFrame(title.in),
}));

const shutterCues = titles.flatMap((title) => {
  const cue = title.lines.find(([, text]) => text === title.shutterOn);
  return cue ? [{text: cue[1], from: title.from + toFrame(title.shutterAt ?? cue[0])}] : [];
});

function Lettering({lines, theme, rule = true, length}) {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill className={`title-scene ${theme}${rule ? '' : ' no-rule'}`}
      style={{opacity: theme === 'cross-card' ? interpolate(frame, [0, 7, length - 7, length - 1], [0, 1, 1, 0], {...clamp, easing: ease}) : 1}}>
      {theme === 'cross-card' && <div className="cross-symbol" aria-hidden="true" />}
      <div className="type-zone" data-safe="lettering">
        {theme !== 'shot' && rule && (
          <div className="title-rule" aria-hidden="true" style={{
            scale: theme === 'ink' ? '1 1' : `${interpolate(frame, [0, 18, 32], [0.13, 0.13, 1], {...clamp, easing: settle})} 1`,
          }} />
        )}
        {lines.map(([at, text, kind], index) => {
          const age = frame - toFrame(at);
          const slide = theme === 'paper' && index === 1 ? -38 : theme === 'ink' && rule ? 28 : 0;
          const x = interpolate(age, [0, 9], [slide, 0], {...clamp, easing: settle});
          const hardEntry = kind.includes('accent');
          const y = slide || hardEntry ? 0 : interpolate(age, [0, 5], [13, 0], {...clamp, easing: settle});
          return (
            <span className={kind} key={text} style={{
              opacity: age < 0 ? 0 : hardEntry ? 1 : interpolate(age, [0, 3], [0, 1], clamp),
              translate: `${x}px ${y}px`,
            }}>{text}</span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function CaptionWords() {
  const frame = useCurrentFrame();
  const clip = clips.find(({from, length}) => frame >= from && frame < from + length);
  const sourceFrame = clip.start + frame - clip.from;
  const wordFrame = (word) => Math.ceil(word.startMs * fps / 1000);
  const cue = captions.find((words) => (
    sourceFrame >= wordFrame(words[0]) &&
    sourceFrame < toFrame(words.at(-1).endMs / 1000)
  ));
  if (!cue) return null;
  return (
    <div className={`caption-zone${cue.some((word) => word.text === 'entender') ? ' single-line' : ''}`} data-safe="caption">
      <div className="caption-band">
        {cue.map((word, index) => {
          const age = sourceFrame - wordFrame(word);
          const active = age >= 0 && (index === cue.length - 1 || sourceFrame < wordFrame(cue[index + 1]));
          return (
            <span
              key={word.startMs}
              className={active ? 'current' : undefined}
              style={{
                opacity: age < 0 ? 0 : 1,
                translate: `0 ${interpolate(age, [0, 3], [7, 0], clamp)}px`,
              }}
            >{word.text}</span>
          );
        })}
      </div>
    </div>
  );
}

const musicDurationSeconds = 447.552;
const cutSettings = z.object({
  trilhaNaTimeline: z.number().min(0).max(57.83).describe('Segundo do vídeo em que a música entra'),
  pontoDaMusica: z.number().min(0).max(447).describe('Segundo da música que será ouvido primeiro'),
  duracaoDaTrilha: z.number().min(0.1).max(57.83).describe('Quantos segundos de música usar'),
  guias: z.boolean(),
});

function Cut({guias, trilhaNaTimeline, pontoDaMusica, duracaoDaTrilha}) {
  const frame = useCurrentFrame();
  const musicStart = toFrame(trilhaNaTimeline);
  const musicOffset = toFrame(pontoDaMusica);
  const musicLength = Math.min(
    toFrame(duracaoDaTrilha),
    duration - musicStart,
    Math.floor(musicDurationSeconds * fps) - musicOffset,
  );
  const onTitle = titles.some(({from, length}) => frame >= from && frame < from + length);
  return (
    <AbsoluteFill style={{backgroundColor: '#141412'}}>
      {clips.map((clip, index) => (
        <Sequence key={clip.start} name={clip.name} from={clip.from} durationInFrames={clip.length} premountFor={fps}>
          <Audio name="Voz contínua" src={staticFile(`audio/voz-${index + 1}.wav`)} volume={1.2} />
          <Camera sourceFrame={clip.start} media={`video/trecho-${index + 1}.mp4`}
            framing={clip.zoom.map((scale, i) => [clip.length * i / (clip.zoom.length - 1) / fps, scale])}
            positions={clip.zoom.map(() => clip.position)}
            monochrome={clip.monochrome}
            closeUp={clip.closeUp}
          />
        </Sequence>
      ))}
      <Sequence name="Legendas · palavra por palavra" layout="none">
        {!onTitle && <CaptionWords />}
      </Sequence>
      {titles.map((title) => (
        <Sequence key={title.name} name={title.name} from={title.from} durationInFrames={title.length} layout="none" premountFor={fps}>
          <Lettering lines={title.lines} theme={title.theme} rule={title.rule} length={title.length} />
        </Sequence>
      ))}
      {musicLength > 0 && (
        <Sequence
          name="Trilha · This Too Shall Pass — Scott Buckley"
          from={musicStart}
          durationInFrames={musicLength}
          layout="none"
          hidden
        >
          <Audio
            src={staticFile('music/this-too-shall-pass.mp3')}
            trimBefore={musicOffset}
            volume={(audioFrame) => {
              const fadeIn = Math.min(1, audioFrame / toFrame(1.25));
              const fadeOut = Math.min(1, Math.max(0, (musicLength - 1 - audioFrame) / toFrame(2.5)));
              return 0.14 * Math.min(fadeIn, fadeOut);
            }}
            premountFor={102}
          />
        </Sequence>
      )}
      {shutterCues.map(({text, from}) => (
        <Sequence key={text} name={`Shutter · ${text}`} from={from} durationInFrames={24} layout="none" premountFor={fps}>
          <Audio src={staticFile('sfx/camera-shutter.wav')} trimBefore={2} volume={(f) => 0.055 * interpolate(f, [0, 1, 12, 21], [0, 1, 1, 0], clamp)} />
        </Sequence>
      ))}
      {guias ? <div className="safe-guide" /> : null}
    </AbsoluteFill>
  );
}


function Moodboard() {
  return (
    <AbsoluteFill className="moodboard">
      <header>
        <span>PodIMEP</span>
        <h1>Direção tipográfica</h1>
        <p>Inter · Baskerville</p>
      </header>
      <div className="mood-grid">
        <article className="mood-card opening">
          <span>foi rasgado</span>
          <strong>no templo?</strong>
        </article>
        <article className="mood-card question">
          <strong>E o que é que é</strong>
          <span>o véu?</span>
        </article>
        <article className="mood-card emphasis-card">
          <strong>não querem</strong>
          <span>morrer</span>
        </article>
        <article className="mood-card answer">
          <strong>O Santo</strong>
          <span>dos Santos</span>
        </article>
      </div>
    </AbsoluteFill>
  );
}

export const RemotionRoot = () => (
  <>
    <Composition id="PodIMEP" component={Cut} durationInFrames={duration} fps={fps}
      width={1080} height={1920} schema={cutSettings}
      defaultProps={{trilhaNaTimeline: 0, pontoDaMusica: 0, duracaoDaTrilha: 57.83, guias: false}} />
    <Composition id="Moodboard" component={Moodboard} durationInFrames={1} fps={fps}
      width={1440} height={1050} />
  </>
);
```

## projeto/style.css

<!-- kit-file: projeto/style.css -->
```css
.caption-zone, .type-zone {
  box-sizing: border-box;
  font-family: Inter, 'Helvetica Neue', sans-serif;
  left: 188px;
  position: absolute;
  width: 704px;
}

.caption-zone {
  color: #fff8ed;
  display: flex;
  font-size: 53px;
  font-weight: 750;
  justify-content: center;
  letter-spacing: -.025em;
  line-height: 1.12;
}

.caption-band {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 12px;
  justify-content: center;
  max-width: 100%;
}

.caption-band .current { color: #f5bf72; }

.type-zone {
  color: #fff8ed;
  display: flex;
  flex-direction: column;
  gap: 4px;
  line-height: .99;
  text-align: center;
}


.title-scene.shot .type-zone {
  flex-flow: row wrap;
  gap: 4px 16px;
  justify-content: center;
}

.title-scene.shot .type-zone span { flex-basis: 100%; }
.title-scene.shot .type-zone .join { flex-basis: auto; }

.title-scene.paper { background: #fff8ed; }
.title-scene.ink { background: #171614; }

.title-scene.paper .type-zone, .title-scene.ink .type-zone {
  gap: 5px;
  padding-top: 42px;
  top: 740px;
}

.title-scene.paper .type-zone { color: #1d1914; }
.title-scene.paper .hero { color: #844814; }

.safe-guide {
  border: 3px dashed #9effbd;
  inset: 260px 185px 535px 92px;
  pointer-events: none;
  position: absolute;
}

.title-rule {
  background: currentColor;
  height: 2px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: left center;
}

:root {
  --cream: #fff8ed;
  --gold: #eed1a2;
  --ink: #171614;
  --editorial-serif: Baskerville, 'Times New Roman', serif;
}

.type-zone .support { font-size: 47px; font-weight: 550; letter-spacing: -.025em; }
.type-zone .small {
  font-size: 44px;
  font-weight: 650;
  letter-spacing: .015em;
  line-height: 1.15;
}
.type-zone .strong { font-size: 58px; font-weight: 680; letter-spacing: -.045em; }
.type-zone .hero {
  color: var(--gold);
  font: italic 500 170px / .89 var(--editorial-serif);
  letter-spacing: -.045em;
}
.caption-zone, .title-scene.shot .type-zone {
  top: 1218px;
  translate: 0 -50%;
}

.title-scene.shot .type-zone { gap: 4px 18px; }
.title-scene.shot .hero { font-size: 164px; }
.title-scene.shot .hero.prominent, .title-scene.shot .hero.accent { font-size: 174px; }
.title-scene.shot .hero.restrained { font-size: 156px; }
.title-scene.ink .hero.restrained { font-size: 168px; }
.title-scene.ink.no-rule .type-zone {
  gap: 4px;
  padding-top: 0;
  top: 820px;
}
.title-scene.ink.no-rule .hero { font-size: 212px; }

.moodboard {
  background: #eee8dd;
  color: #201e1a;
  font-family: Inter, 'Helvetica Neue', sans-serif;
  padding: 56px 70px;
  box-sizing: border-box;
}
.moodboard header {
  position: relative;
  margin-bottom: 36px;
  border-bottom: 1px solid #b3aa9c;
  padding-bottom: 30px;
}
.moodboard header > span { font-weight: 680; font-size: 19px; letter-spacing: .12em; }
.moodboard h1 {
  font: 500 80px / 1 var(--editorial-serif);
  letter-spacing: -.04em;
  margin: 8px 0 0;
}
.moodboard header p { position: absolute; right: 0; bottom: 23px; margin: 0; font-size: 21px; }
.mood-grid { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 352px 352px; gap: 20px; }
.mood-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: var(--cream);
  background: var(--ink);
  text-align: center;
}
.mood-card span { font: italic 500 99px / .9 var(--editorial-serif); letter-spacing: -.042em; color: var(--gold); }
.mood-card strong { font-weight: 650; font-size: 28px; letter-spacing: .02em; }
.mood-card.opening { background: #26313a; }
.mood-card.emphasis-card { background: #342922; }
.mood-card.answer { background: var(--cream); color: var(--ink); }
.mood-card.answer span { color: #844814; font-size: 99px; }
.mood-card.emphasis-card span { font-size: 118px; }

.title-scene.cross-card {
  background: #211b17;
}

.cross-symbol {
  position: absolute;
  left: 188px;
  top: 265px;
  width: 704px;
  height: 1370px;
  background: #5a4535;
  clip-path: polygon(44% 0, 56% 0, 56% 29%, 100% 29%, 100% 36%, 56% 36%, 56% 100%, 44% 100%, 44% 36%, 0 36%, 0 29%, 44% 29%);
}

.title-scene.cross-card .type-zone {
  top: 1000px;
  translate: 0 -50%;
  flex-flow: row wrap;
  gap: 4px 14px;
  justify-content: center;
}

.title-scene.cross-card .type-zone span { flex-basis: 100%; }
.title-scene.cross-card .type-zone .join { flex-basis: auto; }
.title-scene.cross-card .hero.accent { font-size: 188px; }

.title-scene.shot .type-zone:has(.final-word) { top: 1135px; }
.title-scene.shot .final-word {
  font-size: 210px;
  margin-top: -19px;
}

.title-scene.shot .type-zone:has(.opening-line) { row-gap: 2px; }
.title-scene.shot .opening-hero { margin-top: -12px; }

.caption-zone.single-line { font-size: 43px; }
.caption-zone.single-line .caption-band {
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 10px;
}


.title-scene .type-zone > span {
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.38), 0 0 34px rgba(0, 0, 0, 0.16);
}

.title-scene.paper .type-zone > span {
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.10);
}
```

## projeto/montagem.json

<!-- kit-file: projeto/montagem.json -->
```json
{
  "clips": [
    {
      "name": "Do templo ao Santo dos Santos",
      "in": 3997,
      "out": 4048.125,
      "zoom": [
        1.035,
        1.04,
        1.06,
        1.035,
        1.155,
        1.045
      ],
      "position": 57,
      "monochrome": [
        [
          4020.125,
          4021.6666666666665
        ]
      ],
      "closeUp": {
        "in": 4020.125,
        "out": 4021.6666666666665,
        "zoom": 0.24
      }
    },
    {
      "name": "Aplicação e desfecho",
      "in": 4056.25,
      "out": 4062.958333,
      "zoom": [
        1.045,
        1.17
      ],
      "position": 57,
      "monochrome": []
    }
  ],
  "titles": [
    {
      "name": "Quando o véu foi rasgado no templo?",
      "in": 3997,
      "out": 3999.99,
      "theme": "shot",
      "lines": [
        [
          0,
          "Quando o véu",
          "small accent opening-line"
        ],
        [
          0.125,
          "foi rasgado",
          "hero prominent opening-hero"
        ],
        [
          0.29,
          "no templo?",
          "small"
        ]
      ],
      "shutterOn": "foi rasgado",
      "shutterAt": 0.7083333333333334
    },
    {
      "name": "Foi no momento em que Jesus morreu na cruz",
      "in": 4001.81,
      "out": 4003.8,
      "theme": "shot",
      "lines": [
        [
          0,
          "Jesus morreu",
          "small"
        ],
        [
          0.71,
          "na cruz",
          "hero prominent"
        ]
      ]
    },
    {
      "name": "E o que é que é o véu?",
      "in": 4009.33,
      "out": 4011.11,
      "theme": "ink",
      "lines": [
        [
          0,
          "E o que é que é",
          "support"
        ],
        [
          0.73,
          "o véu?",
          "hero"
        ]
      ],
      "rule": false
    },
    {
      "name": "As pessoas não rasgam o véu",
      "in": 4020.125,
      "out": 4021.6666666666665,
      "theme": "shot",
      "lines": [
        [
          0,
          "porque elas",
          "small"
        ],
        [
          0.125,
          "não querem",
          "strong"
        ],
        [
          0.5,
          "morrer",
          "hero final-word"
        ]
      ],
      "shutterOn": "morrer"
    },
    {
      "name": "Permanecer na cegueira",
      "in": 4025.03,
      "out": 4025.75,
      "theme": "shot",
      "lines": [
        [
          0,
          "na cegueira",
          "hero"
        ]
      ]
    },
    {
      "name": "A cruz e o ego",
      "in": 4031.791667,
      "out": 4036.875,
      "theme": "cross-card",
      "lines": [
        [
          0,
          "A CRUZ",
          "hero accent"
        ],
        [
          1.25,
          "é o que vai",
          "support join"
        ],
        [
          3.25,
          "matar",
          "support join"
        ],
        [
          3.833333,
          "o seu ego",
          "hero restrained"
        ]
      ],
      "rule": false,
      "shutterOn": "A CRUZ"
    },
    {
      "name": "O que tinha do outro lado do véu?",
      "in": 4042.66,
      "out": 4046.583333,
      "theme": "paper",
      "lines": [
        [
          0,
          "E o que tinha",
          "support"
        ],
        [
          0.76,
          "do outro lado",
          "strong"
        ],
        [
          1.48,
          "do véu?",
          "hero"
        ]
      ]
    },
    {
      "name": "O Santo dos Santos",
      "in": 4046.583333,
      "out": 4048.125,
      "theme": "ink",
      "lines": [
        [
          0,
          "O Santo",
          "strong"
        ],
        [
          0.416667,
          "dos Santos",
          "hero restrained"
        ]
      ],
      "shutterOn": "dos Santos"
    },
    {
      "name": "A glória de Deus",
      "in": 4060.92,
      "out": 4062.958333,
      "theme": "shot",
      "lines": [
        [
          0,
          "E você vai ver",
          "support"
        ],
        [
          0.69,
          "a glória",
          "hero prominent"
        ],
        [
          1.12,
          "de Deus",
          "strong"
        ]
      ]
    }
  ]
}
```

## projeto/legendas.json

<!-- kit-file: projeto/legendas.json -->
```json
[
  [
    {
      "text": "Foi",
      "startMs": 4001025,
      "endMs": 4001090.0,
      "timestampMs": 4001025,
      "confidence": null
    },
    {
      "text": "no",
      "startMs": 4001090.0,
      "endMs": 4001190.0,
      "timestampMs": 4001090.0,
      "confidence": null
    },
    {
      "text": "momento",
      "startMs": 4001190.0,
      "endMs": 4001570.0,
      "timestampMs": 4001190.0,
      "confidence": null
    },
    {
      "text": "em",
      "startMs": 4001570.0,
      "endMs": 4001730.0,
      "timestampMs": 4001570.0,
      "confidence": null
    },
    {
      "text": "que",
      "startMs": 4001730.0,
      "endMs": 4001810.0,
      "timestampMs": 4001730.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "Quando",
      "startMs": 4005305,
      "endMs": 4005490.0,
      "timestampMs": 4005305,
      "confidence": null
    },
    {
      "text": "ele",
      "startMs": 4005490.0,
      "endMs": 4005710.0,
      "timestampMs": 4005490.0,
      "confidence": null
    },
    {
      "text": "morre,",
      "startMs": 4005710.0,
      "endMs": 4006700.0,
      "timestampMs": 4005710.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "o",
      "startMs": 4006710.0,
      "endMs": 4006810.0,
      "timestampMs": 4006710.0,
      "confidence": null
    },
    {
      "text": "véu",
      "startMs": 4006810.0,
      "endMs": 4007030.0,
      "timestampMs": 4006810.0,
      "confidence": null
    },
    {
      "text": "é",
      "startMs": 4007030.0,
      "endMs": 4007110.0,
      "timestampMs": 4007030.0,
      "confidence": null
    },
    {
      "text": "rasgado",
      "startMs": 4007110.0,
      "endMs": 4007630.0,
      "timestampMs": 4007110.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "de",
      "startMs": 4007630.0,
      "endMs": 4007890.0,
      "timestampMs": 4007630.0,
      "confidence": null
    },
    {
      "text": "cima",
      "startMs": 4007890.0,
      "endMs": 4008190.0,
      "timestampMs": 4007890.0,
      "confidence": null
    },
    {
      "text": "a",
      "startMs": 4008190.0,
      "endMs": 4008350.0,
      "timestampMs": 4008190.0,
      "confidence": null
    },
    {
      "text": "baixo.",
      "startMs": 4008350.0,
      "endMs": 4009160.0,
      "timestampMs": 4008350.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "É",
      "startMs": 4011245,
      "endMs": 4011310.0,
      "timestampMs": 4011245,
      "confidence": null
    },
    {
      "text": "aquilo",
      "startMs": 4011310.0,
      "endMs": 4011550.0,
      "timestampMs": 4011310.0,
      "confidence": null
    },
    {
      "text": "que",
      "startMs": 4011550.0,
      "endMs": 4011750.0,
      "timestampMs": 4011550.0,
      "confidence": null
    },
    {
      "text": "esconde",
      "startMs": 4011750.0,
      "endMs": 4012420.0,
      "timestampMs": 4011750.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "uma",
      "startMs": 4014292,
      "endMs": 4014450,
      "timestampMs": 4014292,
      "confidence": null
    },
    {
      "text": "verdade.",
      "startMs": 4014450,
      "endMs": 4014958.333,
      "timestampMs": 4014450,
      "confidence": null
    }
  ],
  [
    {
      "text": "E",
      "startMs": 4016785,
      "endMs": 4016850.0,
      "timestampMs": 4016785,
      "confidence": null
    },
    {
      "text": "as",
      "startMs": 4016850.0,
      "endMs": 4016950.0,
      "timestampMs": 4016850.0,
      "confidence": null
    },
    {
      "text": "pessoas",
      "startMs": 4016950.0,
      "endMs": 4017400.0,
      "timestampMs": 4016950.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "não",
      "startMs": 4017410.0,
      "endMs": 4017730.0,
      "timestampMs": 4017410.0,
      "confidence": null
    },
    {
      "text": "rasgam",
      "startMs": 4017730.0,
      "endMs": 4018170.0,
      "timestampMs": 4017730.0,
      "confidence": null
    },
    {
      "text": "o",
      "startMs": 4018170.0,
      "endMs": 4018410.0,
      "timestampMs": 4018170.0,
      "confidence": null
    },
    {
      "text": "véu",
      "startMs": 4018410.0,
      "endMs": 4018770,
      "timestampMs": 4018410.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "porque",
      "startMs": 4020130,
      "endMs": 4020210,
      "timestampMs": 4020130,
      "confidence": null
    },
    {
      "text": "elas",
      "startMs": 4020210,
      "endMs": 4020280.0,
      "timestampMs": 4020210,
      "confidence": null
    }
  ],
  [
    {
      "text": "Elas",
      "startMs": 4022785,
      "endMs": 4022990.0,
      "timestampMs": 4022785,
      "confidence": null
    },
    {
      "text": "preferem",
      "startMs": 4022990.0,
      "endMs": 4023650.0,
      "timestampMs": 4022990.0,
      "confidence": null
    },
    {
      "text": "permanecer",
      "startMs": 4023650.0,
      "endMs": 4025030.0,
      "timestampMs": 4023650.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "Mas",
      "startMs": 4028710,
      "endMs": 4028833.333,
      "timestampMs": 4028710,
      "confidence": null
    }
  ],
  [
    {
      "text": "Quando",
      "startMs": 4028810,
      "endMs": 4029080.0,
      "timestampMs": 4028810,
      "confidence": null
    },
    {
      "text": "você",
      "startMs": 4029080.0,
      "endMs": 4029560.0,
      "timestampMs": 4029080.0,
      "confidence": null
    },
    {
      "text": "entender",
      "startMs": 4029560.0,
      "endMs": 4030140.0,
      "timestampMs": 4029560.0,
      "confidence": null
    },
    {
      "text": "que",
      "startMs": 4030140.0,
      "endMs": 4031480,
      "timestampMs": 4030140.0,
      "confidence": null
    },
    {
      "text": "a",
      "startMs": 4031480,
      "endMs": 4031791.667,
      "timestampMs": 4031480,
      "confidence": null
    }
  ],
  [
    {
      "text": "o",
      "startMs": 4037780.0,
      "endMs": 4037920.0,
      "timestampMs": 4037780.0,
      "confidence": null
    },
    {
      "text": "véu",
      "startMs": 4037920.0,
      "endMs": 4038220.0,
      "timestampMs": 4037920.0,
      "confidence": null
    },
    {
      "text": "vai",
      "startMs": 4038220.0,
      "endMs": 4038360.0,
      "timestampMs": 4038220.0,
      "confidence": null
    },
    {
      "text": "ser",
      "startMs": 4038360.0,
      "endMs": 4038540.0,
      "timestampMs": 4038360.0,
      "confidence": null
    },
    {
      "text": "retirado.",
      "startMs": 4038540.0,
      "endMs": 4039510.0,
      "timestampMs": 4038540.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "Você",
      "startMs": 4039955,
      "endMs": 4040160.0,
      "timestampMs": 4039955,
      "confidence": null
    },
    {
      "text": "vai",
      "startMs": 4040160.0,
      "endMs": 4040360.0,
      "timestampMs": 4040160.0,
      "confidence": null
    },
    {
      "text": "ver",
      "startMs": 4040360.0,
      "endMs": 4040640.0,
      "timestampMs": 4040360.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "o",
      "startMs": 4040640.0,
      "endMs": 4040780.0,
      "timestampMs": 4040640.0,
      "confidence": null
    },
    {
      "text": "que",
      "startMs": 4040780.0,
      "endMs": 4040820.0,
      "timestampMs": 4040780.0,
      "confidence": null
    },
    {
      "text": "está",
      "startMs": 4040820.0,
      "endMs": 4041020.0,
      "timestampMs": 4040820.0,
      "confidence": null
    },
    {
      "text": "do",
      "startMs": 4041020.0,
      "endMs": 4041240.0,
      "timestampMs": 4041020.0,
      "confidence": null
    },
    {
      "text": "outro",
      "startMs": 4041240.0,
      "endMs": 4041440.0,
      "timestampMs": 4041240.0,
      "confidence": null
    },
    {
      "text": "lado.",
      "startMs": 4041440.0,
      "endMs": 4042250.0,
      "timestampMs": 4041440.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "Quando",
      "startMs": 4056915,
      "endMs": 4057040.0,
      "timestampMs": 4056915,
      "confidence": null
    },
    {
      "text": "você",
      "startMs": 4057040.0,
      "endMs": 4057420.0,
      "timestampMs": 4057040.0,
      "confidence": null
    },
    {
      "text": "morrer,",
      "startMs": 4057420.0,
      "endMs": 4058620.0,
      "timestampMs": 4057420.0,
      "confidence": null
    }
  ],
  [
    {
      "text": "o",
      "startMs": 4058835,
      "endMs": 4058940.0,
      "timestampMs": 4058835,
      "confidence": null
    },
    {
      "text": "seu",
      "startMs": 4058940.0,
      "endMs": 4059060.0,
      "timestampMs": 4058940.0,
      "confidence": null
    },
    {
      "text": "véu",
      "startMs": 4059060.0,
      "endMs": 4059420.0,
      "timestampMs": 4059060.0,
      "confidence": null
    },
    {
      "text": "vai",
      "startMs": 4059420.0,
      "endMs": 4059580.0,
      "timestampMs": 4059420.0,
      "confidence": null
    },
    {
      "text": "ser",
      "startMs": 4059580.0,
      "endMs": 4059700.0,
      "timestampMs": 4059580.0,
      "confidence": null
    },
    {
      "text": "rasgado.",
      "startMs": 4059700.0,
      "endMs": 4060280.0,
      "timestampMs": 4059700.0,
      "confidence": null
    }
  ]
]
```

## projeto/package.json

<!-- kit-file: projeto/package.json -->
```json
{
  "name": "podimep-rogerio-costa",
  "private": true,
  "scripts": {
    "studio": "node --require ./studio-local.cjs node_modules/@remotion/cli/remotion-cli.js studio src.jsx --no-open --port=3000"
  },
  "dependencies": {
    "@remotion/cli": "4.0.534",
    "@remotion/effects": "^4.0.534",
    "@remotion/media": "4.0.534",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "remotion": "4.0.534",
    "zod": "4.5.4"
  }
}
```

## projeto/studio-local.cjs

<!-- kit-file: projeto/studio-local.cjs -->
```js
const net = require('node:net');

// Bind the project preview to this machine. The Studio CLI binds to all interfaces by default.
const listen = net.Server.prototype.listen;
net.Server.prototype.listen = function (options, ...args) {
  if (options && typeof options === 'object' && options.host === '::') {
    return listen.call(this, {...options, host: '127.0.0.1'}, ...args);
  }
  if (options && typeof options === 'object' && options.host === '0.0.0.0') {
    return listen.call(this, {...options, host: '127.0.0.1'}, ...args);
  }
  return listen.call(this, options, ...args);
};
```

## projeto/LEIA-ME.md

<!-- kit-file: projeto/LEIA-ME.md -->
```markdown
# Corte de referência PodIMEP

Fontes materializados a partir do padrão editorial do ministério. Esta pasta não contém o vídeo, a voz, a trilha, os efeitos, o LUT ou arquivos de fontes.

1. Comece pela galeria `../referencias/index.html`, que funciona sem instalação.
2. Para continuar no Remotion, prepare as dependências de `package.json` em seu ambiente e registre um lockfile local. Esse passo pode baixar pacotes; o materializador não o executa.
3. Vincule mídias autorizadas: `public/video/trecho-1.mp4` (1227 frames), `trecho-2.mp4` (161 frames); `public/audio/voz-1.wav` e `voz-2.wav` com a mesma duração exata dos respectivos vídeos; `public/music/this-too-shall-pass.mp3`; `public/sfx/camera-shutter.wav`.
4. Vídeos estão previamente recortados; o tempo de mídia começa em zero. `montagem.json` e `legendas.json` conservam o relógio do master. Não somar o offset duas vezes.
5. Execute `npm run studio` e abra `PodIMEP`. `Moodboard` funciona sem a mídia do episódio. Verifique as fontes efetivas no computador.
6. Ao reutilizar em outro episódio, troque cortes, legendas, títulos e limites dos controles da trilha. A geometria pressupõe 1080 × 1920 e fonte 16:9 a 24 fps. Não é um modelo automático para qualquer proporção.

A música está em faixa independente. Ajuste `trilhaNaTimeline` (entrada no corte), `pontoDaMusica` (ponto da faixa) e `duracaoDaTrilha` (tempo usado). O ganho fica na função de volume em `src/Root.tsx`. A marcação `hidden` afeta a apresentação da faixa na timeline, não sua independência; remova-a se quiser exibir a trilha na timeline.

O LUT solicitado não está aplicado. Fundos sólidos são a decisão final. Não há cena de The Chosen nem animação figurativa completa do véu.

Esta cópia preserva o código usado, com suas configurações específicas. Ela não contém projeto nativo de outro editor. Novos exports, proxies ou cópias de intercâmbio exigem pedido explícito da saída correspondente.
```
