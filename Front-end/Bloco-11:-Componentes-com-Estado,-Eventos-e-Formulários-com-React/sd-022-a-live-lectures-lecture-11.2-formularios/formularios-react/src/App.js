import React from 'react';
import FormNewProject from './components/FormNewProject';
import Header from './components/Header';
import data from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: data,
    };
  }

  addNewProject = (projeto) => {
    this.setState((prevState) => ({
      projects: [projeto, ...prevState.projects],
    }));
  }

  // remover um item
    removeProject = (title) => {
      const { projects } = this.state;
      // this.setState(() => ({ projects: projects.filter((item) => item.title !== title) }));
      this.setState({
        projects: projects.filter((item) => item.title !== title),
      });
    }

    render() {
      const { projects } = this.state;

      return (
        <>
          <Header qtd={ projects.length } />
          <FormNewProject add={ this.addNewProject } />
          <div className="container">
            {
              projects.map((project) => (
                <div className="Project__content" key={ project.title }>
                  {project.title}
                  {' '}
                  <button
                    type="button"
                    onClick={ () => this.removeProject(project.title) }
                  >
                    REMOVER

                  </button>
                  <p>
                    {`Dificuldade  ${project.level}`}
                  </p>
                  <img src={ project.thumbnail } alt="" width={ 100 } />
                </div>
              ))
            }
          </div>
        </>
      );
    }
}
export default App;
