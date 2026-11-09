import { academy, schedules, products, instructor } from './data'

const wa = (message) => `https://wa.me/${academy.phone}?text=${encodeURIComponent(message)}`
const dayMap = [0, 1, 2, 3, 4, 5, 6]
const slots = [
  [1, 17.5, 18.5], [3, 17.5, 18.5], [1,18.5,19.5], [3,18.5,19.5],
  [1,19.5,21], [3,19.5,21], [5,19.5,21], [2,7.5,9], [4,7.5,9], [6,10,11.5]
]
function currentStatus(){ const d=new Date(), day=dayMap[d.getDay()], now=d.getHours()+d.getMinutes()/60; const open=slots.some(([x,s,e])=>x===day&&now>=s&&now<e); return open ? ['Aberto agora','Treino em andamento'] : ['Fechado agora','Próximo treino conforme a programação']; }
function SectionTitle({eyebrow, children}) { return <div className="section-title"><span>{eyebrow}</span><h2>{children}</h2></div> }
function App(){
 const [status, detail] = currentStatus()
 return <main>
  <header className="topbar"><a href="#inicio" className="brand" aria-label="FCZ Fight School"><img src="/media/logos/fcz-header-horizontal.png" alt="FCZ Fight School"/></a><nav><a href="#horarios">Horários</a><a href="#loja">Loja</a><a href="#contato">Contato</a></nav></header>
  <section id="inicio" className="hero"><div className="hero-copy"><p className="kicker">JIU-JITSU · DEFESA PESSOAL</p><h1><span>Disciplina no tatame.</span><em>Força para a vida.</em></h1><p className="lead">Jiu-Jitsu e Defesa Pessoal.<br/>Para todas as idades.<br/>Na Praia do Francês em Marechal Deodoro/AL.<strong>Afiliada Kimura Team.</strong></p><div className="actions"><a className="button primary" href={wa('Olá! Gostaria de agendar uma aula na FCZ Fight School.')} target="_blank">Falar no WhatsApp</a><a className="button ghost" href="#horarios">Ver horários</a></div><div className="status"><div className="status-summary"><div className="status-icon">◷</div><div><strong>{status}</strong><small>{detail}</small></div></div><div className="status-location"><span>LOCALIZAÇÃO</span><strong>Praia do Francês, AL</strong><small>Rua Guaiamum, nº 31D</small><a href={academy.map} target="_blank">Como chegar ↗</a></div></div></div><figure className="hero-media"><img src="/media/instructors/antonio-rocha-neto.jpeg" alt="Professor Antonio Rocha Neto, faixa preta de Jiu-Jitsu"/><figcaption>Antonio Rocha Neto · Faixa Preta</figcaption></figure></section>
  <section id="horarios"><SectionTitle eyebrow="PROGRAMAÇÃO">Horários de treino</SectionTitle><div className="schedule-grid">{schedules.map(s=><article className="schedule-card" key={`${s.name}-${s.time}`}><div><span className="pill">{s.label}</span><h3>{s.name}</h3></div><strong>{s.time}</strong><p>{s.days.join(' · ')}</p><small>{s.note}</small></article>)}</div></section>
  <section id="loja"><SectionTitle eyebrow="LOJA FCZ">Vista a nossa equipe</SectionTitle><div className="product-grid">{products.map((p,i)=><article className={'product-card '+(i?'light':'')} key={p.id}><div className="shirt">FCZ<br/><small>FIGHT SCHOOL</small></div><div><span className="pill">{p.color}</span><h3>{p.name}</h3><p>{p.description}</p><strong>{p.price}</strong><a href={wa(`Olá! Tenho interesse na ${p.name}.`)} target="_blank" aria-label={'Tenho interesse na '+p.name}>↗</a></div></article>)}</div></section>
  <section id="servicos" className="service"><div><SectionTitle eyebrow="COMUNIDADE FCZ">Jiu-Jitsu é melhor junto:<br/>Mais que treino, pertencimento.</SectionTitle><p>Na FCZ, cada treino é uma oportunidade de evoluir, compartilhar desafios e construir amizades dentro e fora do tatame.</p><a className="button primary" href={wa('Olá! Gostaria de agendar uma aula experimental na FCZ Fight School.')} target="_blank">Agende sua aula experimental</a></div><img src="/media/services/comunidade-fcz.jpg" alt="Comunidade da FCZ Fight School reunida no tatame"/></section>
  <section id="galeria"><SectionTitle eyebrow="NO TATAME">Galeria FCZ</SectionTitle><div className="gallery"><img src="/media/gallery/baby/baby-01.jpeg" alt="Treino Jiu Baby"/><img src="/media/gallery/kids/kids-01.jpeg" alt="Treino Kids"/><video src="/media/gallery/kids/kids-treino.mp4" controls playsInline/></div></section>
  <section id="instrutores"><SectionTitle eyebrow="INSTRUTOR">Quem conduz o treino</SectionTitle><article className="instructor"><img src="/media/instructors/antonio-rocha-neto.jpeg" alt={instructor.name}/><div><span className="pill">{instructor.rank}</span><h3>{instructor.name}</h3><strong>{instructor.specialty}</strong><p>{instructor.description}</p></div></article></section>
  <section id="contato" className="contact"><p className="kicker">FCZ FIGHT SCHOOL</p><h2>Seu próximo treino<br/>começa aqui.</h2><p>{academy.address}</p><div className="actions"><a className="button primary" target="_blank" href={wa('Olá! Gostaria de saber mais sobre a FCZ Fight School.')}>WhatsApp</a><a className="button ghost" target="_blank" href={'https://instagram.com/'+academy.instagram}>Instagram</a></div></section>
  <footer>© {new Date().getFullYear()} FCZ Fight School <a href={academy.map} target="_blank">Praia do Francês, AL</a></footer>
  <a className="whatsapp" href={wa('Olá! Gostaria de saber mais sobre a FCZ Fight School.')} target="_blank" aria-label="Falar no WhatsApp">◔</a>
 </main>
}
export default App
