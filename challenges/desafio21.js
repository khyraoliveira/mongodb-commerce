db.produtos.updateOne(
  { nome: "Cheddar McMelt" }, 
  { $pop: 
    { ingredientes: 1 }, // igual a questão 20, só muda do -1 pro 1 kakaka
  },
);

db.produtos.find({}, 
  { 
    nome: 1,
    ingredientes: 1,
    _id: 0,
  },
);