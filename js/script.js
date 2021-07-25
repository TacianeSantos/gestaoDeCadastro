const formCadastro = document.getElementById('formCadastro');

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('txtNome').value;
    let email = document.getElementById('txtEmail').value;
    let end = document.getElementById('txtEnd').value;
    let data = {
        nome,
        email,
        end,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);     

});


function checa_formulario(formCadastro)
{
    if (formCadastro.nome.value == "")
        {
            alert("Digite o seu nome!");
            formCadastro.nome.focus();
            return(false); 
        }
    
    if(formCadastro.email.value == "")
        {
            alert("O campo e-mail está vazio!");
            formCadastro.email.focus();
            return(false);
        }
    if(formCadastro.email.value.indexOf('@', 0) == -1)
        {
            alert("O e-mail é inválido!")
            formCadastro.email.focus();
            return(false);
        }                                  
} 