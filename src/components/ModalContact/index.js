import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import { Button, Modal, Form, Input } from 'antd';
import { timeout } from 'd3';

// const layout = {
//   labelCol: { span: 5 },
//   wrapperCol: { span: 16 },
// };
// const validateMessages = {
//   required: '${label} é obrigatório!',
//   types: {
//     email: '${label} não é um email válido!',
//   },
// };
// const onFinish = (values) => {
//   console.log(values);
// };

function validacaoEmail(field) {

  const usuario = field.value.substring(0, field.value.indexOf("@"));
  const dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

  const erro = document.querySelector('#erro')
  if ((usuario.length >= 1) &&
    (dominio.length >= 3) &&
    (usuario.search("@") == -1) &&
    (dominio.search("@") == -1) &&
    (usuario.search(" ") == -1) &&
    (dominio.search(" ") == -1) &&
    (dominio.search(".") != -1) &&
    (dominio.indexOf(".") >= 1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("erro").innerHTML = "";
  }
  else {
    document.getElementById("erro").innerHTML = "<font color='red'>Email inválido </font>";
  }
}

function validarEmail() {
  const email = document.querySelector('#email');
  console.log(email.value)

  validacaoEmail(email)

}

function clearErro() {
  const erro = document.querySelector('#erro')
  if (erro.innerHTML == "Email invalido!") {
    erro.innerHTML = ""
  }
}

function direction() {
  timeout(() => {
    document.location.reload(true);
  }, 1000)

}

class ModalContact extends React.Component {
  render() {
    return (
      <div>

        <form className='gform' name='feedback' method='POST' action='https://script.google.com/macros/s/AKfycbyw730nRQWuM5F4dTCkYN4th_uDjKeH356BLeKXWg/exec'>

          <div>

            <label for='name'> Nome: </label>
            <input id='name' name='nome' required ></input>
          </div>

          <div>
            <label for='email' > Email: </label>
            <input id='email' name='email' required onBlur={() => { validarEmail() }}></input>

            <span id='erro'></span>
          </div>
          <div>
            <label for='assunto' > Assunto: </label>
            <input id='assunto' name='assunto' required></input>
          </div>
          <div>
            <label for='text' > Mensagem: </label>
            <textarea id='text' name='mensagem' required></textarea>
          </div>
          <div className='submit'>

            <input type='submit' onClick={() => { direction() }} ></input>

          </div>



        </form>
      </div>
    );
  }
}
export default ModalContact