import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contacto</h2>
      <p>¿Tenés un proyecto en mente o necesitás una solución a medida?</p>
      <p>Escribinos y te acompañamos en todo el proceso 🚀</p>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
