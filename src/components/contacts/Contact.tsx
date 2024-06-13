
import ContactFormStyled from './contactStyle';

const ContactForm = () => {
  return (
    <ContactFormStyled>
      <h1>Fale comigo</h1>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="btn">Enviar</button>
        <button type="reset" className="btn btn-reset">Limpar</button>
      </form>
      
    </ContactFormStyled>
  );
};

export default ContactForm;
