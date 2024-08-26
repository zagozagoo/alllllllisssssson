show databases 

use ('db_aula') //entra no banco ou cria se nao existir

db.people.insertOne({
    name:"Vitoria",
    lastname:"Zago",
    salary:10
})

//colocando varios elementos:
use ('db_aula')

db.people.insertMany([
    {
        name:"Duda",
        lastname:"Silva",
        salary:10
    },
    {
        name:"Luiz",
        lastname:"Blank",
        salary:10
    }
])

db.people.find()

db.people.find({ name:"Duda"})
db.people.find({name: /a/ }) // busca o que tem 'a'

db.people.find({ $and: [{ name: "Duda"}, {lastnam  ,
    0e:"Silva"}]})

use ('db_aula')
db.people.updateOne(
    { _id: ObjectId("66cc85561965701f2f51939f")},
    {$set: { name: "Duda Nova"}}
)

use ('db_aula')
db.people.updateMany(
    { salary: 10 },
    {$set: { salary: 9999}}
)

use ('db_aula')
db.people.deleteOne({
    name: "Vitoria Zago"
})

//----------desafio-----------
//crie um catalogo de produtos que de p adicionar, atualizar e excluir informacoes sobre os produtos
//cada produto tem nome, descricao, preco, categoria e quantidade em estoque

show databases   

use ('db_catalogo') 
db.product.insertMany([
    {
        name:"Glasses",
        description:"Green glasses for women",
        category:"fashion",
        quantity: 20,
        price:100
    },
    {
        name:"Headphone",
        description:"White Headphone",
        category:"eletronics",
        quantity: 5,
        price:180
    }
])

use ('db_catalogo')
db.product.deleteOne({
    name:"Headphone"
})








