import react, {useState} from "react";

function ContactForm() {
    const {formState, setFormState} = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
      }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
       [// name input]
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
        </div>
        [// email input]
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
        </div>
        [// message text area]
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
        </div>

        <button type="submit" onSubmit={handleSubmit}>Submit</button>

      </form>
    </section>
  );
}

export default ContactForm;
