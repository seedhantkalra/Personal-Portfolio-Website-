import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Have any questions or would like to get in touch?<br className="sm:block hidden" />
        Click here to contact me!</p>
        <Link to="/contact" className="btn">
            Contact
        </Link>
    </section>
  );
}

export default CTA;
