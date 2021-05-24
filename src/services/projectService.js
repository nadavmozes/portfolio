export const projectService = {
    query,
}

var projects = [
    { id: 'p101', name: 'Pic&Art', desc: 'Modern Marketplace for Landscape Pictures and Art', technologies: 'React,Redux,NodeJS/Express', img: require("../assets/picnart.png"), link: 'https://picnart.herokuapp.com/#/store' },
    { id: 'p102', name: 'Gamedir', desc: '', technologies: 'Vue,Vuex', img: '', link: '' },
    { id: 'p103', name: 'Sprintt', desc: '', technologies: 'React', img: '', link: '' },
];

function query() {
    return Promise.resolve(projects)
}
