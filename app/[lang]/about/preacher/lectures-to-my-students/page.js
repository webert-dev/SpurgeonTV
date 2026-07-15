import Link from 'next/link';

export const metadata = {
  title: "Lectures to My Students | Charles Spurgeon",
  description: "Explore os conselhos incisivos e hilários de Charles Spurgeon sobre a vida pastoral e pregação no Pastors' College.",
  keywords: ["Charles Spurgeon", "Lectures to My Students", "Pastors' College", "Humor", "Pastoral Training", "Homiletics", "Calling", "preacher"],
};

export default function LecturesToMyStudentsPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/en/about/preacher" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to The Preacher & His Work
      </Link>
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            May 3, 2026 • 5 min read
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Lectures to My Students: Conselhos Incisivos e Hilários Sobre a Vida Pastoral e Pregação
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Sala de Aula nas Tardes de Sexta-feira</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Charles Haddon Spurgeon não era apenas o pastor de uma megaigreja vitoriana; ele era também o afetuoso presidente e principal instrutor do <em>Pastors' College</em> (Colégio dos Pastores). Todas as sextas-feiras à tarde, ele se reunia com seus alunos para ministrar palestras sobre os aspectos mais práticos, teológicos e cotidianos do ministério cristão. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Essas conversas informais foram posteriormente compiladas e publicadas sob o título <em>Lectures to My Students</em> (Lições Aos Meus Alunos), com o objetivo primário de instruir estudantes e iniciantes na pregação. O próprio Spurgeon reconheceu que o tom de suas palestras poderia soar impertinente se direcionado a mestres e veteranos de Israel, mas era exatamente o tipo de exortação honesta que os jovens recrutas precisavam ouvir antes de assumirem seus próprios púlpitos.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>O Riso Como Ferramenta Pedagógica e Corretiva</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Uma das características mais marcantes dessas aulas era o uso deliberado do humor e do sarcasmo. Ao dedicar capítulos inteiros a tópicos como "Postura, Gesto e Ação", Spurgeon sabia que alguns críticos o julgariam por gastar tempo com assuntos secundários e fazer piadas à custa de homens bons. No entanto, ele argumentava que era uma tragédia ver a mensagem do Senhor sendo arruinada por um mensageiro que chamava mais atenção para si mesmo através de maneirismos grotescos e desajeitados do que para o Cristo que pregava. Spurgeon acreditava firmemente que certos vícios e bizarrices de púlpito não poderiam ser curados de outra forma senão expondo-os ao ridículo.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Ele instruía seus alunos com ilustrações hilárias para corrigir maus hábitos. Por exemplo, para alertar contra sermões com introduções excessivamente longas, ele comparava a prática a construir um "grande pórtico para uma casa pequena". Ele contava a história de uma excelente mulher cristã que, após ouvir um pregador gastar uma hora inteira apenas em seu prefácio, comentou que o bom homem demorou tanto tempo "arrumando a toalha da mesa" que ela acabou perdendo o apetite e achou que, afinal, não haveria jantar algum.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>Conselhos Práticos e Inusitados: O Ar Fresco e a Acústica</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            A preocupação de Spurgeon com a eficácia da pregação envolvia até mesmo o ambiente físico da igreja. Ele ensinava que um ambiente abafado e sem ventilação era inimigo do Evangelho, confessando que o "ar viciado me deixa letárgico, e aos meus ouvintes também". Para ilustrar a importância da ventilação, ele relatou um episódio de seus primeiros dias na Capela de New Park Street, onde as janelas haviam sido construídas de forma a não abrirem. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Após pedir aos diáconos várias vezes que resolvessem o problema e ser ignorado, alguém, misteriosamente, quebrou a maioria dos vidros superiores em uma segunda-feira. Diante do choque dos oficiais, Spurgeon sugeriu oferecer uma recompensa para encontrar o "culpado". Aos seus alunos, ele confessou o segredo com sagacidade: <em style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', display: 'block', margin: '1rem 0' }}>"Espero que nenhum de vocês suspeite de mim, pois se o fizerem, terei de confessar que andei por ali com a bengala que deixou o oxigênio entrar naquela estrutura sufocante"</em>. Para ele, uma lufada de ar fresco em um prédio abafado era a segunda melhor coisa depois do próprio Evangelho.
          </p>

          <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>A Solenidade e a Exigência do Chamado</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Apesar das muitas risadas arrancadas sob o "Carvalho das Perguntas" e nas salas de aula, Spurgeon era inflexível e mortalmente sério quanto à sagrada vocação pastoral. Ele alertava seus alunos a fugirem, como se foge de uma víbora, de qualquer tentativa de forjar um "fervor espúrio" (falso) durante os cultos. Ele os proibia de imitar os gemidos ou a voz esganiçada de outros pregadores famosos apenas para parecerem zelosos, declarando que "o ardor simulado é uma forma vergonhosa de mentira".
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Spurgeon também abominava a preguiça intelectual. Embora defendesse a entrega extemporânea das palavras (sem a leitura de manuscritos), ele era um crítico feroz do <em>pensamento</em> extemporâneo. Ele classificava o discurso de um pregador que subia ao púlpito sem ter estudado profundamente o assunto como "um absurdo alongado", "platitude parafraseada" e um "dom fatal", prejudicial tanto ao pastor quanto ao rebanho. O Príncipe dos Pregadores exigia o máximo de seus alunos, cimentando em suas mentes a convicção absoluta de que "Jesus Cristo merece os melhores homens para pregar a sua cruz, e não os de cabeça vazia e os preguiçosos".
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />

          {/* BIBLIOGRAPHY */}
          <details className="sermon-tags-details" style={{ marginBottom: '1.5rem' }}>
            <summary className="sermon-tags-summary" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>Bibliography & Sources</span>
              <span className="sermon-tags-icon">▼</span>
            </summary>
            <div className="sermon-tags-content" style={{ marginTop: '1rem' }}>
              <ol style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 1</em>. London: Passmore and Alabaster, 1875. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Spurgeon, Charles H. <em>Lectures To My Students Vol. 2</em>. London: Passmore and Alabaster. [PDF Document].</li>
                <li style={{ marginBottom: '0.5rem' }}>Matos, Alderi Souza de. "Tesouro em vaso de barro: Charles Spurgeon e a palavra encarnada, escrita e proclamada." <em>Fides Reformata</em> 26, no. 2 (2021): 9-25.</li>
                <li style={{ marginBottom: '0.5rem' }}>Kruppa, Patricia Stallings. "The Life & Times of Charles H. Spurgeon." <em>Christian History Magazine</em>, Issue 29 (1991).</li>
                <li style={{ marginBottom: '0.5rem' }}>Editora Mundo Cristão. "Quem foi Charles H. Spurgeon?" <em>Blog Editora Mundo Cristão</em>, August 5, 2020.</li>
                <li style={{ marginBottom: '0.5rem' }}>The Spurgeon Library. "About Spurgeon." <em>Midwestern Baptist Theological Seminary</em>.</li>
              </ol>
            </div>
          </details>

          {/* TAGS */}
          <details className="sermon-tags-details" style={{ marginBottom: '2rem' }}>
            <summary className="sermon-tags-summary" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              <span>Article Tags</span>
              <span className="sermon-tags-icon">▼</span>
            </summary>
            <div className="sermon-tags-content" style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["Lectures to My Students", "Pastors' College", "Humor", "Pastoral Training", "Homiletics", "Calling"].map((tag) => (
                <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </details>

          {/* PAGINATION */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <Link href="/en/about/preacher/the-institutional-machinery" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; Previous Article</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Institutional Machinery</span>
            </Link>
            <Link href="/en/about/preacher/the-treasury-of-david" style={{ textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>Next Article &rarr;</span>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }}>The Treasury of David</span>
            </Link>
          </div>

        </div>
      </article>
    </div>
  );
}
