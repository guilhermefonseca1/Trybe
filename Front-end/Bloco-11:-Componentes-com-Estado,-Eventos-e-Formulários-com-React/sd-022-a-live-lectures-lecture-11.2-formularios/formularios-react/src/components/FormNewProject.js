import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/FormNewProject.css';

class FormNewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      level: 0,
      thumbnail: '',
      projectFinished: false,
      errors: {},

    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Passar o state inteiro para o componente Pai
    const { add } = this.props;
    // valida os campos title e level, se tudo estiver certo aí sim faz o add
    if (this.validateForm()) {
      add(this.state);

      // reset state depois de enviar
      this.setState({
        title: '',
        level: 0,
        thumbnail: '',
        projectFinished: false,
      });
    }
  }

  // validacao simples de formulário
  validateForm = () => {
    const { title, level } = this.state;
    const erros = {};
    let formIsValid = true;

    if (!title.length) {
      formIsValid = false;
      erros.title = '*Preencha o título do projeto';
    }

    if (level > 5) {
      formIsValid = false;
      erros.level = '*Apenas números de 1 a 5 suportados';
    }

    this.setState({
      errors: erros,
    });

    return formIsValid;
  }

  render() {
    const { title, level, thumbnail, projectFinished, errors } = this.state;
    return (
      <form className="new-topic-form" onSubmit={ this.handleSubmit }>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <span className="danger">{errors.title}</span>

        <label htmlFor="level">
          Level:
          <input
            type="number"
            // min="1"
            // max="5"
            name="level"
            value={ level }
            onChange={ this.handleChange }
          />
        </label>
        <span className="danger">{errors.level}</span>
        <label htmlFor="thumbnail">
          Image url:
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            value={ thumbnail }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="projectFinished">
          Projeto foi finalizado?
          <input
            id="projectFinished"
            type="checkbox"
            name="projectFinished"
            checked={ projectFinished }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="submit"
          // disabled
        >
          Adicionar tópico

        </button>
      </form>
    );
  }
}
FormNewProject.propTypes = {

};

export default FormNewProject;
