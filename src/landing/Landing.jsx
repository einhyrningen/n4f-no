import React from 'react';
import './Landing.scss';
import N4FLayout from '../layout/N4FLayout';

function Landing() {
  return (
    <div>
      <N4FLayout>
        <article class="n4f-highlight">
          <p class="n4f-highlight__intro-text">Super-Hyperion er det nasjonale forbundet for fantastiske fritidsinteresser.</p>
        </article>
        <article class="n4f-hightlight">
          <p class="n4f-highlight_membership">Som medlemsforening i Hyperion får du en rekke medlemsfordeler.</p>
          <div class="n4f-membership__benefits">
            <p class="n4f-membership__benefits-title">Økonomisk støtte</p>
            <p class="n4f-membership__benefits-text">Medlemsforeninger mottar Frifond osv.</p>
          </div>
        </article>
        <article class="n4f-mainarticlebox">
          <img src="https://via.placeholder.com/690x304" alt="" />
          <p class="n4f-articlebox__article-title">Overskrift</p>
          <div class="n4f-article__excerpt">Her står ingressen</div>
        </article>
        <article class="n4f-articlebox">
          <img src="https://via.placeholder.com/690x304" alt="" />
          <p class="n4f-articlebox__article-title">Overskrift</p>
          <div class="n4f-article__excerpt">Her står ingressen. les mer</div>
        </article>
      </N4FLayout>
    </div>
  );
}
export default Landing;
