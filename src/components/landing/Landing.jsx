import React from 'react';
import './Landing.scss';
import N4FLayout from '../layout/N4FLayout';

function Landing() {
  return (
    <div>
      <N4FLayout>
        <article className="n4f-highlight">
          <p className="n4f-highlight__intro-text">Super-Hyperion er det nasjonale forbundet for fantastiske fritidsinteresser.</p>
        </article>
        <article className="n4f-hightlight">
          <p className="n4f-highlight_membership">Som medlemsforening i Hyperion får du en rekke medlemsfordeler.</p>
          <div className="n4f-membership__benefits">
            <p className="n4f-membership__benefits-title">Økonomisk støtte</p>
            <p className="n4f-membership__benefits-text">Medlemsforeninger mottar Frifond osv.</p>
          </div>
        </article>
        <article className="n4f-mainarticlebox">
          <img src="https://via.placeholder.com/690x304" alt="" />
          <p className="n4f-articlebox__article-title">Overskrift</p>
          <div className="n4f-article__excerpt">Her står ingressen</div>
        </article>
        <article className="n4f-articlebox">
          <img src="https://via.placeholder.com/690x304" alt="" />
          <p className="n4f-articlebox__article-title">Overskrift</p>
          <div className="n4f-article__excerpt">Her står ingressen. les mer</div>
        </article>
      </N4FLayout>
    </div>
  );
}
export default Landing;
