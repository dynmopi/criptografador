const validateText = (text) => { 
    // Retorna true se a string contiver apenas letras minúsculas e números
    return /^[a-z]+$/.test(text); 
  };
  
  // Exemplos de uso
  console.log(validateText("teste123")); // true
  console.log(validateText("Teste123")); // false
  console.log(validateText("teste@123")); // false
  console.log(validateText("téstê123")); // false
  console.log(validateText("teste")); // true
  console.log(validateText("12345")); // true