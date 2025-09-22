let diaSemana = 'sexta';

switch (diaSemana) {
    case 'segunda' :    //if (diaSemana == 'segunda')
        console.log('Hoje tem SENAI');
        break;
    case 'terça':       //else if (diaSemana == 'terça')
        console.log('Hoje tem SENAI');
        break;
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log('Hoje tem aula do SESI');
        break;
    default:    //else
        console.log('Hoje não tem aula');
}