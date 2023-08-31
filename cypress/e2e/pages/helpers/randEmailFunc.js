// const randEmailGenerator = () => 
function  randEmailGenerator(){
    return Math.floor(Math.random() * Date.now()).toString(36);
  };


  module.exports = randEmailGenerator;