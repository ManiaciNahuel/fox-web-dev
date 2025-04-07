import React, { useEffect, useRef, useState } from 'react';
import '../styles/contact.scss';

const Contact = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className={`section contact-section ${visible ? 'visible' : ''}`}>
      <h2 className="slide-in-left">Contacto</h2>
      <p className="slide-in-right">¿Tenés un proyecto en mente o necesitás una solución a medida?<br />Escribinos y te acompañamos en todo el proceso 🚀</p>
      <form>
        <input type="text" placeholder="Nombre" required  className="slide-in-left" />
        <input type="email" placeholder="Correo" required className="slide-in-right" />
        <textarea placeholder="Mensaje" required className="slide-in-left"></textarea>
        <button type="submit" className="slide-in-right">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
