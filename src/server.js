const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(11)98754-3289",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química", 
        cost: "20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },

    {
        name: "Danielle Maciel", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(11)98754-8989",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química", 
        cost: "20,00",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
    
]

const subjects = [ 
"Artes",    
"Biologia",    
"Ciências",    
"Educação física",    
"Física",    
"Geografia",    
"Matemática",    
"Português",    
"Química",    
]


const weekdays = [
    
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


function getSubject(subjectNumber) {
    const position = +subjectNumber - 1

    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req, res){
    const dados = req.query
    
    const isNotEmpty = Object.keys(dados).length > 0
        if (isNotEmpty) {

            dados.subject = getSubject(dados.subject)

            //adicionar dados a lista de proffys
            proffys.push(dados)
            console.log(dados)
               
            // return res.redirect("/study")
        }
    
    // se não mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}



const express = require('express')
const server = express()

const nunjucks = require ('nunjucks')

//configurar o nunjucks 
nunjucks.configure('src/views',{
    express: server,
    noCache:true,
})

//

//tudo que for .use é uma configuracao do servidor
server
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public")) 
//rotas das aplicacao
.get("/", pageLanding)

.get("/study",pageStudy)

.get("/give-classes",pageGiveClasses)

.listen(5500)

