let professionap = { id: '1', nome: 'Fabrine Macedo', foto: "/equipe/fabrine.jpeg", especialidade: "Nanopigmentação", procedimentos: [{ nome: 'Design de Sobrancelhas', description: 'Estamos atualizando os textos aguarde, por favor entre em contato no whatsApp e veja nosso catalogo:', fotos: [] }, { nome: 'Depilação Linha', description: 'Estamos atualizando os textos aguarde, por favor entre em contato no whatsApp e veja nosso catalogo:', fotos: [] }, { nome: 'Avaliação Fabrine', description: 'Estamos atualizando os textos aguarde, por favor entre em contato no whatsApp e veja nosso catalogo:', fotos: [] }, { nome: 'Micropigmentação Allure Brows', description: 'Estamos atualizando os textos aguarde, por favor entre em contato no whatsApp e veja nosso catalogo:', fotos: [] }] }

let procedimentosTitles = professionap.procedimentos.map((procedimento) =>
  procedimento.nome
).toString()
console.log(procedimentosTitles)