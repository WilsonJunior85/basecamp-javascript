function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;

}
const usuarios = new Map();

usuarios.set('Bruna', 'Admin');
usuarios.set('Junior', 'Admin');
usuarios.set('Viviane', 'User');
usuarios.set('Wilson', 'Admin');

console.log(getAdmins(usuarios));


const meuArray = [10, 20, 45, 80, 70, 20, 45];
function valorUnico(arr){
    const mySet = new Set(meuArray);
    return [...mySet];
}

console.log(valorUnico(meuArray));