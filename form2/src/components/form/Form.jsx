import { useState } from "react";
import './Form.css';
const Form = () => {
  //useState per le Form
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [button, setButton] = useState("");

  //useState per le funzioni
  const [ageIsValid, setAgeIsValid] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");
  const [emailIsValid1, setEmailIsValid1] = useState("");
  const [dateIsValid, setDateIsValid] = useState("");
  const [pswIsValid, setPswIsValid] = useState("");
  const [pswIsValid2, setPswIsValid2] = useState("");
  const [nameIsValid, setNameIsValid] = useState("");
  const [abilitaButton, setAbilitaButton] = useState("");

  //Funzioni --> questa funzione va messa 1 volta e va importata nella form
  const formSubmissionHandler = (event) => {
    //Questo serve per bloccare l'invio della form
    event.prevEventDefault();
  };

  //Funzione controllo AGE
  const controlAge = (e) => {
    const todaysDate = new Date();
    const valAge = e.target.value; //prendo il valore dell'evento e
    setAge(valAge);
    if (todaysDate.getFullYear() - valAge.split("-")[0] >= 18) {
      setAgeIsValid(true);
    } else setAgeIsValid(false);
  };

  //Funzione controllo EMAIL
  const controlEmail = (e) => {
    const valEmail = e.target.value;
    setEmail(valEmail);
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(valEmail)) {
      //Questa è regex o regular expression, serve per verificare correttezza di email
      setEmailIsValid(true);
    } else setEmailIsValid(false);
  };

  //Funzione controllo EMAIL UGUALI
  const controlEmail1 = (e) => {
    const valEmail = e.target.value;
    setEmail1(valEmail);
    if (email === valEmail) {
      //Controlla che questa email corrisponda alla mail scritta sopra
      setEmailIsValid1(true);
    } else setEmailIsValid1(false);
  };

  //Funzione controllo DATE
  const controlDate = (e) => {
    const valDate = e.targer.value;
    setDate(valDate);
    const today = new Date(); //Mi serve per fare il confronto
    if (new Date(valDate).getTime() <= today.getTime()) {
      //getTime trasforma la data per fare il confronto
      setDateIsValid(false);
    } else setDateIsValid(true);
  };

  //Funzione controllo PASSWORD
  const controlPassword = (e) => {
    const valuePassword = e.target.value;
    setPassword(valuePassword);
    if (
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/.test(
        valuePassword
      )
    ) {
      setPswIsValid(true);
    } else setPswIsValid(false);
  };

  //Funzione controllo PASSWORD uguali
  const controlPassword2 = (e) => {
    const valuePassword2 = e.target.value;
    setPassword2(valuePassword2);
    if (password === password2) {
      setPswIsValid2(true);
    } else setPswIsValid2(false);
  };

  //Funzione controllo NAME
  const controlName = (e) => {
    const valueName = e.target.value;
    setName(valueName);
    if (/^[a-z]{4,}$/.test(valueName)) {
      setNameIsValid(true);
    } else setNameIsValid(false);
  };

  //Funzione controllo BUTTON
  const controlButton = (e) => {
    const valueButton = e.target.value;
    setButton(valueButton);
    if (
      setAgeIsValid &&
      setEmailIsValid &&
      setDateIsValid &&
      setEmailIsValid1 &&
      setPswIsValid &&
      setPswIsValid2 &&
      setNameIsValid
    ) {
      setAbilitaButton(false);
    } else setAbilitaButton(true);
  };

  return (
    <form onSubmit = {formSubmissionHandler}>

         <div className = 'div'>
        <label className = 'label' htmlFor="">Name</label>
        <br />
        <input type="text" name="name" value={name} onChange={controlName} />
        {name.length > 1 && !nameIsValid && <span>Wrong name!</span>}
      </div>

      <div className = 'div'>
        <label className = 'label'>Age</label>
        <br />
        <input type="date" name="age" value={age} onChange={controlAge} />
        {age.length > 1 && !ageIsValid && (
          <span>You must be of legal age!</span>
        )}
      </div>

      <div className = 'div'>
        <label className = 'label'>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={controlEmail}
        />
        {email.length > 1 && !emailIsValid && <span>Wrong email!</span>}
      </div>

      <div className = 'div'>
        <label className = 'label'>Confirm Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={email1}
          onChange={controlEmail1}
        />
        {email1.length > 1 && !emailIsValid1 && <span>Wrong email!</span>}
      </div>

      <div className = 'div'>
        <label className = 'label'>Booking Date</label>
        <br />
        <input type="date" name="date" value={date} onChange={controlDate} />
        {date.length > 1 && !dateIsValid && (
          <span>The date entered is incorrect!</span>
        )}
      </div>

      <div className = 'div'>
        <label className = 'label' htmlFor="">Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={controlPassword}
          placeholder="Write your password here!"
        />
        {password.length > 1 && !pswIsValid && <span>Wrong password!</span>}
      </div>

      <div className = 'div'>
        <label className = 'label' htmlFor="">Confirm Password</label>
        <br />
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={controlPassword2}
        />
        {password2.length > 1 && !pswIsValid2 && (
          <span>Password doesn't match!</span>
        )}
      </div>

     
      <br />
      <button className = 'button' disabled={abilitaButton}>Send</button>
    </form>
  )
};
export { Form };