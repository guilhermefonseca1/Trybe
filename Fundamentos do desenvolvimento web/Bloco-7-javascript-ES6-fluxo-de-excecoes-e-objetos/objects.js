// Object.keys
// Object.values
// Object.entries
// Object.assign
 
const quadrinho1 = {
    collection: 'Superman',
    title: 'A morte do Superman',
 };
 // console.log(Object.keys(quadrinho1));
 // console.log(Object.values(quadrinho1));
 // console.log(Object.entries(quadrinho1));
  
 // console.log(`Coleção: ${quadrinho1.collection}`);
 // console.log(`Título: ${quadrinho1.title}`);
  
 // console.table(Object.entries(quadrinho1));
  
 // console.log(Object.keys(quadrinho1).includes('title'));
  
 quadrinho1.numPags = 200;
 quadrinho1['editora'] = 'abril';
  
  
 const outraRevsta = { editora: 'panini', ano: 1985 };
  
 Object.assign(quadrinho1, outraRevsta);
  
 console.log(quadrinho1);
 // console.log(outraRevsta);
  
 // const quadrinho2 = quadrinho1
  
 // const quadrinho2 = {};
 // Object.assign(quadrinho2, quadrinho1);
  
 const quadrinho2 = Object.assign({}, quadrinho1);
  
  
 console.log(quadrinho2);
  
 quadrinho2.title = 'turma da mônica';
  
 console.log(quadrinho1);
 console.log(quadrinho2);
  
  
 
 
 