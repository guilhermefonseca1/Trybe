import React from 'react';
import PropTypes from 'prop-types';
import './Serie.css';

class Serie extends React.Component {
  render() {
    const { name, genre, image, characters, nota } = this.props.dataItem;
    return (
      <section>
        <h1>{name}</h1>
        <p>
          <span>{genre}</span>
          <span>
            {' '}
            {'⭐️'.repeat(nota)}
          </span>
        </p>
        <img src={ image } alt="" />
        <h2>Personagens</h2>
        <ul>
          {
            characters.map((character) => <li key={ character }>{character}</li>)
          }
        </ul>

      </section>
    );
  }
}

Serie.propTypes = {
  dataItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
export default Serie;
