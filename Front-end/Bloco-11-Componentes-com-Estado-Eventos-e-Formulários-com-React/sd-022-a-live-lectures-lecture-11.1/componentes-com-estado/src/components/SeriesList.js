import React from 'react';
import Serie from './Serie';
import series from '../data';

class SeriesList extends React.Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
    };

    this.handleSearchValue = this.handleSearchValue.bind(this);
  }

  handleSearchValue({ target }) {
    const { searchValue } = this.state;
    const { value } = target;
    this.setState({
      searchValue: value,
    }, () => console.log(searchValue));
  }

  render() {
    const { searchValue } = this.state;
    const teste = searchValue.length <= 0;
    return (
      <>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            onChange={ this.handleSearchValue }
            value={ searchValue }
          />
          <div>
            {/* Esse é o desafio do botao, quem tentou posta no slack la pra gente discutir */}
            <button
              type="button"
              disabled={ teste }
              style={ { marginBottom: '16px' } }
            >
              BOTAO ALEATORIO

            </button>
          </div>
        </div>
        <article>

          {
            series
              .filter((serie) => serie.name.toLowerCase().startsWith(searchValue))
              .map((serie) => (
                <Serie dataItem={ serie } key={ serie.id } />
              ))
          }

        </article>
      </>

    );
  }
}

export default SeriesList;
