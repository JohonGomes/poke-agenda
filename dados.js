const dados = [
    {
      "titulo": "Bulbasaur",
      "numero": "001",
      "tipo": "Planta/Venenoso",
      "descricao": "Bulbasaur é um Pokémon de Planta e Venenoso que possui uma semente em suas costas. Ele absorve nutrientes e cresce ao longo do tempo.",
      "link": "https://www.pokemon.com/br/pokedex/bulbasaur",
      "tags": "Grama, Venenoso, Kanto, 1"
    },
    {
      "titulo": "Ivysaur",
      "numero": "002",
      "tipo": "Planta/Venenoso",
      "descricao": "Ivysaur é a evolução de Bulbasaur. A flor em suas costas começa a crescer e se desenvolver à medida que ele ganha experiência.",
      "link": "https://www.pokemon.com/br/pokedex/ivysaur",
      "tags": "Grama, Venenoso, Kanto, 2"
    },
    {
      "titulo": "Venusaur",
      "numero": "003",
      "tipo": "Planta/Venenoso",
      "descricao": "Venusaur é a forma final de Bulbasaur. A flor nas costas floresce totalmente e pode liberar fragrâncias calmantes.",
      "link": "https://www.pokemon.com/br/pokedex/venusaur",
      "tags": "Grama, Venenoso, Kanto, 3"
    },
    {
      "titulo": "Charmander",
      "numero": "004",
      "tipo": "Fogo",
      "descricao": "Charmander é um Pokémon de Fogo. A chama na ponta de sua cauda reflete sua saúde e emoções.",
      "link": "https://www.pokemon.com/br/pokedex/charmander",
      "tags": "Fogo, Kanto, 4"
    },
    {
      "titulo": "Charmeleon",
      "numero": "005",
      "tipo": "Fogo",
      "descricao": "Charmeleon é a evolução de Charmander. Ele é mais agressivo e sua chama fica mais intensa quando está furioso.",
      "link": "https://www.pokemon.com/br/pokedex/charmeleon",
      "tags": "Fogo, Kanto, 5"
    },
    {
      "titulo": "Charizard",
      "numero": "006",
      "tipo": "Fogo/Voador",
      "descricao": "Charizard é a forma final de Charmander. Ele pode voar e lançar chamas poderosas que podem derreter praticamente qualquer coisa.",
      "link": "https://www.pokemon.com/br/pokedex/charizard",
      "tags": "Fogo, Voador, Kanto, 6"
    },
    {
      "titulo": "Squirtle",
      "numero": "007",
      "tipo": "Água",
      "descricao": "Squirtle é um Pokémon de Água. Ele pode retrair-se em sua concha para proteção e atirar água pelos canhões.",
      "link": "https://www.pokemon.com/br/pokedex/squirtle",
      "tags": "Água, Kanto, 7"
    },
    {
      "titulo": "Wartortle",
      "numero": "008",
      "tipo": "Água",
      "descricao": "Wartortle é a evolução de Squirtle. Suas orelhas grandes e cauda são símbolos de longevidade e resistência.",
      "link": "https://www.pokemon.com/br/pokedex/wartortle",
      "tags": "Água, Kanto, 8"
    },
    {
      "titulo": "Blastoise",
      "numero": "009",
      "tipo": "Água",
      "descricao": "Blastoise é a forma final de Squirtle. Ele possui canhões de água poderosos em sua concha que podem atingir alvos com precisão.",
      "link": "https://www.pokemon.com/br/pokedex/blastoise",
      "tags": "Água, Kanto, 9"
    },
    {
      "titulo": "Caterpie",
      "numero": "010",
      "tipo": "Inseto",
      "descricao": "Caterpie é um Pokémon Inseto. Ele pode liberar um cheiro desagradável de suas antenas para afastar predadores.",
      "link": "https://www.pokemon.com/br/pokedex/caterpie",
      "tags": "Inseto, Kanto, 10"
    },
    {
      "titulo": "Metapod",
      "numero": "011",
      "tipo": "Inseto",
      "descricao": "Metapod é a evolução de Caterpie. Ele está em um estado de transição e usa sua dura carapaça para se proteger enquanto se prepara para evoluir.",
      "link": "https://www.pokemon.com/br/pokedex/metapod",
      "tags": "Inseto, Kanto, 11"
    },
    {
      "titulo": "Butterfree",
      "numero": "012",
      "tipo": "Inseto/Voador",
      "descricao": "Butterfree é a forma final de Caterpie. Ele usa suas asas para espalhar pós que podem paralisar ou envenenar inimigos.",
      "link": "https://www.pokemon.com/br/pokedex/butterfree",
      "tags": "Inseto, Voador, Kanto, 12"
    },
    {
      "titulo": "Weedle",
      "numero": "013",
      "tipo": "Inseto/Venenoso",
      "descricao": "Weedle é um Pokémon Inseto e Venenoso. Ele possui um ferrão em sua cabeça que contém veneno para se proteger.",
      "link": "https://www.pokemon.com/br/pokedex/weedle",
      "tags": "Inseto, Venenoso, Kanto, 13"
    },
    {
      "titulo": "Kakuna",
      "numero": "014",
      "tipo": "Inseto/Venenoso",
      "descricao": "Kakuna é a evolução de Weedle. Ele está em um estado de transição, se preparando para evoluir e usa sua casca resistente para proteção.",
      "link": "https://www.pokemon.com/br/pokedex/kakuna",
      "tags": "Inseto, Venenoso, Kanto, 14"
    },
    {
      "titulo": "Beedrill",
      "numero": "015",
      "tipo": "Inseto/Venenoso",
      "descricao": "Beedrill é a forma final de Weedle. Ele possui ferrões afiados em suas patas e cauda, que usa para atacar inimigos rapidamente.",
      "link": "https://www.pokemon.com/br/pokedex/beedrill",
      "tags": "Inseto, Venenoso, Kanto, 15"
    },
    {
      "titulo": "Pidgey",
      "numero": "016",
      "tipo": "Normal/Voador",
      "descricao": "Pidgey é um Pokémon comum encontrado em florestas e cidades. Ele usa suas asas para criar rajadas de vento que afastam inimigos.",
      "link": "https://www.pokemon.com/br/pokedex/pidgey",
      "tags": "Normal, Voador, Kanto, 16"
    },
    {
      "titulo": "Pidgeotto",
      "numero": "017",
      "tipo": "Normal/Voador",
      "descricao": "Pidgeotto é a evolução de Pidgey. Ele usa suas garras afiadas para capturar presas e suas asas para voos rápidos.",
      "link": "https://www.pokemon.com/br/pokedex/pidgeotto",
      "tags": "Normal, Voador, Kanto, 17"
    },
    {
      "titulo": "Pidgeot",
      "numero": "018",
      "tipo": "Normal/Voador",
      "descricao": "Pidgeot é a forma final de Pidgey. Suas asas poderosas permitem voar a velocidades incríveis.",
      "link": "https://www.pokemon.com/br/pokedex/pidgeot",
      "tags": "Normal, Voador, Kanto, 18"
    },
    {
      "titulo": "Rattata",
      "numero": "019",
      "tipo": "Normal",
      "descricao": "Rattata é um Pokémon de Normal que se adapta a diversos ambientes. Ele tem dentes afiados que crescem constantemente.",
      "link": "https://www.pokemon.com/br/pokedex/rattata",
      "tags": "Normal, Kanto, 19"
    },
    {
      "titulo": "Raticate",
      "numero": "020",
      "tipo": "Normal",
      "descricao": "Raticate é a evolução de Rattata. Seus dentes são fortes o suficiente para roer praticamente qualquer coisa.",
      "link": "https://www.pokemon.com/br/pokedex/raticate",
      "tags": "Normal, Kanto, 20"
    },
    {
      "titulo": "Spearow",
      "numero": "021",
      "tipo": "Normal/Voador",
      "descricao": "Spearow é um Pokémon Voador que é agressivo e tem um grito estridente que usa para afastar ameaças.",
      "link": "https://www.pokemon.com/br/pokedex/spearow",
      "tags": "Normal, Voador, Kanto, 21"
    },
    {
      "titulo": "Fearow",
      "numero": "022",
      "tipo": "Normal/Voador",
      "descricao": "Fearow é a evolução de Spearow. Ele é rápido e pode voar longas distâncias sem se cansar.",
      "link": "https://www.pokemon.com/br/pokedex/fearow",
      "tags": "Normal, Voador, Kanto, 22"
    },

  {
    "titulo": "Ekans",
    "numero": "023",
    "tipo": "Venenoso",
    "descricao": "Ekans é um Pokémon de tipo Venenoso que pode se enrolar em volta de sua presa e imobilizá-la.",
    "link": "https://www.pokemon.com/br/pokedex/ekans",
    "tags": "Venenoso, Kanto, 23"
  },
  {
    "titulo": "Arbok",
    "numero": "024",
    "tipo": "Venenoso",
    "descricao": "Arbok é a evolução de Ekans. Suas presas e o padrão em seu corpo podem intimidar inimigos.",
    "link": "https://www.pokemon.com/br/pokedex/arbok",
    "tags": "Venenoso, Kanto, 24"
  },
  {
    "titulo": "Pikachu",
    "numero": "025",
    "tipo": "Elétrico",
    "descricao": "Pikachu é um Pokémon do tipo Elétrico que armazena eletricidade em suas bochechas. Ele libera descargas elétricas quando ameaçado.",
    "link": "https://www.pokemon.com/br/pokedex/pikachu",
    "tags": "Elétrico, Kanto, 25"
  },
  {
    "titulo": "Raichu",
    "numero": "026",
    "tipo": "Elétrico",
    "descricao": "Raichu é a evolução de Pikachu. Ele pode liberar grandes quantidades de eletricidade de sua cauda.",
    "link": "https://www.pokemon.com/br/pokedex/raichu",
    "tags": "Elétrico, Kanto, 26"
  },
  {
    "titulo": "Sandshrew",
    "numero": "027",
    "tipo": "Terra",
    "descricao": "Sandshrew é um Pokémon do tipo Terra que pode se enrolar para se proteger de ataques e desastres naturais.",
    "link": "https://www.pokemon.com/br/pokedex/sandshrew",
    "tags": "Terra, Kanto, 27"
  },
  {
    "titulo": "Sandslash",
    "numero": "028",
    "tipo": "Terra",
    "descricao": "Sandslash é a evolução de Sandshrew. Suas garras afiadas permitem escavar e atacar com rapidez.",
    "link": "https://www.pokemon.com/br/pokedex/sandslash",
    "tags": "Terra, Kanto, 28"
  },
  {
    "titulo": "Nidoran♀",
    "numero": "029",
    "tipo": "Venenoso",
    "descricao": "Nidoran♀ é um Pokémon Venenoso que usa os espinhos em seu corpo para se proteger.",
    "link": "https://www.pokemon.com/br/pokedex/nidoranf",
    "tags": "Venenoso, Kanto, 29"
  },
  {
    "titulo": "Nidorina",
    "numero": "030",
    "tipo": "Venenoso",
    "descricao": "Nidorina é a evolução de Nidoran♀. Seus espinhos tornam-se menos afiados após evoluir, mas ela permanece protetora.",
    "link": "https://www.pokemon.com/br/pokedex/nidorina",
    "tags": "Venenoso, Kanto, 30"
  },
  {
    "titulo": "Nidoqueen",
    "numero": "031",
    "tipo": "Venenoso/Terra",
    "descricao": "Nidoqueen é a forma final de Nidoran♀. Ela é poderosa e usa sua força para proteger seus filhotes.",
    "link": "https://www.pokemon.com/br/pokedex/nidoqueen",
    "tags": "Venenoso, Terra, Kanto, 31"
  },
  {
    "titulo": "Nidoran♂",
    "numero": "032",
    "tipo": "Venenoso",
    "descricao": "Nidoran♂ é um Pokémon Venenoso que usa seus chifres para se defender e atacar inimigos.",
    "link": "https://www.pokemon.com/br/pokedex/nidoranm",
    "tags": "Venenoso, Kanto, 32"
  },
  {
    "titulo": "Nidorino",
    "numero": "033",
    "tipo": "Venenoso",
    "descricao": "Nidorino é a evolução de Nidoran♂. Seus chifres crescem e se tornam mais venenosos após a evolução.",
    "link": "https://www.pokemon.com/br/pokedex/nidorino",
    "tags": "Venenoso, Kanto, 33"
  },
  {
    "titulo": "Nidoking",
    "numero": "034",
    "tipo": "Venenoso/Terra",
    "descricao": "Nidoking é a forma final de Nidoran♂. Ele usa sua força física e seus chifres venenosos para dominar oponentes.",
    "link": "https://www.pokemon.com/br/pokedex/nidoking",
    "tags": "Venenoso, Terra, Kanto, 34"
  },
  {
    "titulo": "Clefairy",
    "numero": "035",
    "tipo": "Fada",
    "descricao": "Clefairy é um Pokémon do tipo Fada que adora a luz da lua. Ele ganha energia ao banhar-se no luar.",
    "link": "https://www.pokemon.com/br/pokedex/clefairy",
    "tags": "Fada, Kanto, 35"
  },
  {
    "titulo": "Clefable",
    "numero": "036",
    "tipo": "Fada",
    "descricao": "Clefable é a evolução de Clefairy. Seus poderes mágicos são intensos, e ele é conhecido por sua capacidade de flutuar.",
    "link": "https://www.pokemon.com/br/pokedex/clefable",
    "tags": "Fada, Kanto, 36"
  },
  {
    "titulo": "Vulpix",
    "numero": "037",
    "tipo": "Fogo",
    "descricao": "Vulpix é um Pokémon do tipo Fogo que possui várias caudas, e elas ficam mais longas conforme ele cresce.",
    "link": "https://www.pokemon.com/br/pokedex/vulpix",
    "tags": "Fogo, Kanto, 37"
  },
  {
    "titulo": "Ninetales",
    "numero": "038",
    "tipo": "Fogo",
    "descricao": "Ninetales é a evolução de Vulpix. Suas caudas possuem poderes místicos e é dito que podem trazer má sorte a quem as tocar.",
    "link": "https://www.pokemon.com/br/pokedex/ninetales",
    "tags": "Fogo, Kanto, 38"
  },
  {
    "titulo": "Jigglypuff",
    "numero": "039",
    "tipo": "Normal/Fada",
    "descricao": "Jigglypuff é um Pokémon que usa sua canção para fazer seus inimigos adormecerem. Seu corpo elástico permite inchar-se sem limites.",
    "link": "https://www.pokemon.com/br/pokedex/jigglypuff",
    "tags": "Normal, Fada, Kanto, 39"
  },
  {
    "titulo": "Wigglytuff",
    "numero": "040",
    "tipo": "Normal/Fada",
    "descricao": "Wigglytuff é a evolução de Jigglypuff. Seu corpo elástico pode expandir tanto que parece inflar como um balão.",
    "link": "https://www.pokemon.com/br/pokedex/wigglytuff",
    "tags": "Normal, Fada, Kanto, 40"
  },
  {
    "titulo": "Zubat",
    "numero": "041",
    "tipo": "Venenoso/Voador",
    "descricao": "Zubat é um Pokémon Venenoso e Voador que usa ecolocalização para se guiar em ambientes escuros.",
    "link": "https://www.pokemon.com/br/pokedex/zubat",
    "tags": "Venenoso, Voador, Kanto, 41"
  },
  {
    "titulo": "Golbat",
    "numero": "042",
    "tipo": "Venenoso/Voador",
    "descricao": "Golbat é a evolução de Zubat. Ele usa suas presas afiadas para sugar o sangue de suas vítimas.",
    "link": "https://www.pokemon.com/br/pokedex/golbat",
    "tags": "Venenoso, Voador, Kanto, 42"
  },
  {
    "titulo": "Oddish",
    "numero": "043",
    "tipo": "Planta/Venenoso",
    "descricao": "Oddish é um Pokémon de tipo Planta e Venenoso que esconde-se no solo durante o dia e absorve luz da lua à noite.",
    "link": "https://www.pokemon.com/br/pokedex/oddish",
    "tags": "Planta, Venenoso, Kanto, 43"
  },


    {
      "titulo": "Oddish",
      "numero": "043",
      "tipo": "Planta/Venenoso",
      "descricao": "Oddish é um Pokémon de tipo Planta e Venenoso que esconde-se no solo durante o dia e absorve luz da lua à noite.",
      "link": "https://www.pokemon.com/br/pokedex/oddish",
      "tags": "Planta, Venenoso, Kanto, 44"
    },
    {
      "titulo": "Gloom",
      "numero": "044",
      "tipo": "Planta/Venenoso",
      "descricao": "Gloom é a evolução de Oddish. Ele exala um cheiro forte de suas flores para se proteger de predadores.",
      "link": "https://www.pokemon.com/br/pokedex/gloom",
      "tags": "Planta, Venenoso, Kanto, 45"
    },
    {
      "titulo": "Vileplume",
      "numero": "045",
      "tipo": "Planta/Venenoso",
      "descricao": "Vileplume é a forma final de Oddish. Suas pétalas liberam pólen tóxico, usado para paralisar seus inimigos.",
      "link": "https://www.pokemon.com/br/pokedex/vileplume",
      "tags": "Planta, Venenoso, Kanto, 46"
    },
    {
      "titulo": "Paras",
      "numero": "046",
      "tipo": "Inseto/Planta",
      "descricao": "Paras é um Pokémon Inseto e Planta que possui fungos em suas costas, que ajudam a controlar seu comportamento.",
      "link": "https://www.pokemon.com/br/pokedex/paras",
      "tags": "Inseto, Planta, Kanto, 47"
    },
    {
      "titulo": "Parasect",
      "numero": "047",
      "tipo": "Inseto/Planta",
      "descricao": "Parasect é a evolução de Paras. Os fungos em seu corpo assumiram o controle total, tornando-o um parasita zumbi.",
      "link": "https://www.pokemon.com/br/pokedex/parasect",
      "tags": "Inseto, Planta, Kanto, 48"
    },
    {
      "titulo": "Venonat",
      "numero": "048",
      "tipo": "Inseto/Venenoso",
      "descricao": "Venonat é um Pokémon Inseto e Venenoso que usa seus olhos compostos para detectar alvos no escuro.",
      "link": "https://www.pokemon.com/br/pokedex/venonat",
      "tags": "Inseto, Venenoso, Kanto, 49"
    },
    {
      "titulo": "Venomoth",
      "numero": "049",
      "tipo": "Inseto/Venenoso",
      "descricao": "Venomoth é a evolução de Venonat. Ele espalha poeira venenosa de suas asas durante o voo.",
      "link": "https://www.pokemon.com/br/pokedex/venomoth",
      "tags": "Inseto, Venenoso, Kanto, 50"
    },
    {
      "titulo": "Diglett",
      "numero": "050",
      "tipo": "Terra",
      "descricao": "Diglett é um Pokémon do tipo Terra que vive no subsolo. Ele é conhecido por ser um excelente escavador.",
      "link": "https://www.pokemon.com/br/pokedex/diglett",
      "tags": "Terra, Kanto"
    },
    {
      "titulo": "Dugtrio",
      "numero": "051",
      "tipo": "Terra",
      "descricao": "Dugtrio é a evolução de Diglett. Ele possui três cabeças que trabalham juntas para cavar de forma mais eficiente.",
      "link": "https://www.pokemon.com/br/pokedex/dugtrio",
      "tags": "Terra, Kanto"
    },
    {
      "titulo": "Meowth",
      "numero": "052",
      "tipo": "Normal",
      "descricao": "Meowth é um Pokémon do tipo Normal, famoso por sua capacidade de andar sobre duas patas e sua obsessão por moedas brilhantes.",
      "link": "https://www.pokemon.com/br/pokedex/meowth",
      "tags": "Normal, Kanto"
    },
    {
      "titulo": "Persian",
      "numero": "053",
      "tipo": "Normal",
      "descricao": "Persian é a evolução de Meowth. Ele é ágil, elegante e usa suas garras afiadas para atacar seus inimigos.",
      "link": "https://www.pokemon.com/br/pokedex/persian",
      "tags": "Normal, Kanto"
    },
    {
      "titulo": "Psyduck",
      "numero": "054",
      "tipo": "Água",
      "descricao": "Psyduck é um Pokémon do tipo Água que sofre de dores de cabeça constantes, o que aumenta seus poderes psíquicos.",
      "link": "https://www.pokemon.com/br/pokedex/psyduck",
      "tags": "Água, Kanto"
    },
    {
      "titulo": "Golduck",
      "numero": "055",
      "tipo": "Água",
      "descricao": "Golduck é a evolução de Psyduck. Ele nada a altas velocidades e é conhecido por seus poderes psíquicos.",
      "link": "https://www.pokemon.com/br/pokedex/golduck",
      "tags": "Água, Kanto"
    },
    {
      "titulo": "Mankey",
      "numero": "056",
      "tipo": "Lutador",
      "descricao": "Mankey é um Pokémon Lutador conhecido por sua natureza temperamental e por atacar com chutes e socos.",
      "link": "https://www.pokemon.com/br/pokedex/mankey",
      "tags": "Lutador, Kanto"
    },
    {
      "titulo": "Primeape",
      "numero": "057",
      "tipo": "Lutador",
      "descricao": "Primeape é a evolução de Mankey. Ele é ainda mais agressivo e não recua em uma luta até derrotar seu oponente.",
      "link": "https://www.pokemon.com/br/pokedex/primeape",
      "tags": "Lutador, Kanto"
    },
    {
      "titulo": "Growlithe",
      "numero": "058",
      "tipo": "Fogo",
      "descricao": "Growlithe é um Pokémon do tipo Fogo leal e corajoso. Ele protege seu território com ferocidade.",
      "link": "https://www.pokemon.com/br/pokedex/growlithe",
      "tags": "Fogo, Kanto"
    },
    {
      "titulo": "Arcanine",
      "numero": "059",
      "tipo": "Fogo",
      "descricao": "Arcanine é a evolução de Growlithe. Ele é majestoso e pode correr grandes distâncias a velocidades extremas.",
      "link": "https://www.pokemon.com/br/pokedex/arcanine",
      "tags": "Fogo, Kanto"
    },
    {
      "titulo": "Poliwag",
      "numero": "060",
      "tipo": "Água",
      "descricao": "Poliwag é um Pokémon do tipo Água com uma pele fina, que permite ver suas entranhas. Ele nada muito bem.",
      "link": "https://www.pokemon.com/br/pokedex/poliwag",
      "tags": "Água, Kanto"
    },
    {
      "titulo": "Poliwhirl",
      "numero": "061",
      "tipo": "Água",
      "descricao": "Poliwhirl é a evolução de Poliwag. Ele usa suas mãos para emitir ondas de água e atacar seus inimigos.",
      "link": "https://www.pokemon.com/br/pokedex/poliwhirl",
      "tags": "Água, Kanto"
    },
    {
      "titulo": "Poliwrath",
      "numero": "062",
      "tipo": "Água/Lutador",
      "descricao": "Poliwrath é a evolução final de Poliwag. Ele combina sua força física com sua habilidade de nadar para dominar oponentes.",
      "link": "https://www.pokemon.com/br/pokedex/poliwrath",
      "tags": "Água, Lutador, Kanto"
    },
    {
      "titulo": "Abra",
      "numero": "063",
      "tipo": "Psíquico",
      "descricao": "Abra é um Pokémon Psíquico que passa a maior parte do tempo dormindo, mas pode se teletransportar enquanto descansa.",
      "link": "https://www.pokemon.com/br/pokedex/abra",
      "tags": "Psíquico, Kanto"
    },
    
        {
          "titulo": "Kadabra",
          "numero": "064",
          "tipo": "Psíquico",
          "descricao": "Kadabra é a evolução de Abra. Seus poderes psíquicos são mais fortes e ele é conhecido por dobrar colheres com sua mente.",
          "link": "https://www.pokemon.com/br/pokedex/kadabra",
          "tags": "Psíquico, Kanto"
        },
        {
          "titulo": "Alakazam",
          "numero": "065",
          "tipo": "Psíquico",
          "descricao": "Alakazam é a forma final de Abra. Sua inteligência é extraordinária, e ele é capaz de cálculos complexos com facilidade.",
          "link": "https://www.pokemon.com/br/pokedex/alakazam",
          "tags": "Psíquico, Kanto"
        },
        {
          "titulo": "Machop",
          "numero": "066",
          "tipo": "Lutador",
          "descricao": "Machop é um Pokémon Lutador conhecido por sua força física, treinando constantemente para melhorar seu poder.",
          "link": "https://www.pokemon.com/br/pokedex/machop",
          "tags": "Lutador, Kanto"
        },
        {
          "titulo": "Machoke",
          "numero": "067",
          "tipo": "Lutador",
          "descricao": "Machoke é a evolução de Machop. Ele possui uma força incrível, sendo capaz de levantar grandes pesos facilmente.",
          "link": "https://www.pokemon.com/br/pokedex/machoke",
          "tags": "Lutador, Kanto"
        },
        {
          "titulo": "Machamp",
          "numero": "068",
          "tipo": "Lutador",
          "descricao": "Machamp é a forma final de Machop. Com seus quatro braços, ele pode realizar múltiplas tarefas e ataques ao mesmo tempo.",
          "link": "https://www.pokemon.com/br/pokedex/machamp",
          "tags": "Lutador, Kanto"
        },
        {
          "titulo": "Bellsprout",
          "numero": "069",
          "tipo": "Planta/Venenoso",
          "descricao": "Bellsprout é um Pokémon Planta e Venenoso que ataca seus inimigos com cipós e absorve nutrientes do solo.",
          "link": "https://www.pokemon.com/br/pokedex/bellsprout",
          "tags": "Planta, Venenoso, Kanto"
        },
        {
          "titulo": "Weepinbell",
          "numero": "070",
          "tipo": "Planta/Venenoso",
          "descricao": "Weepinbell é a evolução de Bellsprout. Ele usa seu corpo em forma de sino para capturar presas e dissolvê-las com seu veneno.",
          "link": "https://www.pokemon.com/br/pokedex/weepinbell",
          "tags": "Planta, Venenoso, Kanto"
        },
        {
          "titulo": "Victreebel",
          "numero": "071",
          "tipo": "Planta/Venenoso",
          "descricao": "Victreebel é a forma final de Bellsprout. Ele atrai presas com um cheiro doce antes de engoli-las inteiras.",
          "link": "https://www.pokemon.com/br/pokedex/victreebel",
          "tags": "Planta, Venenoso, Kanto"
        },
        {
          "titulo": "Tentacool",
          "numero": "072",
          "tipo": "Água/Venenoso",
          "descricao": "Tentacool é um Pokémon do tipo Água e Venenoso que usa seus tentáculos para envenenar seus inimigos.",
          "link": "https://www.pokemon.com/br/pokedex/tentacool",
          "tags": "Água, Venenoso, Kanto"
        },
        {
          "titulo": "Tentacruel",
          "numero": "073",
          "tipo": "Água/Venenoso",
          "descricao": "Tentacruel é a evolução de Tentacool. Ele possui tentáculos poderosos que pode usar para capturar e envenenar suas presas.",
          "link": "https://www.pokemon.com/br/pokedex/tentacruel",
          "tags": "Água, Venenoso, Kanto"
        },
        {
          "titulo": "Geodude",
          "numero": "074",
          "tipo": "Pedra/Terra",
          "descricao": "Geodude é um Pokémon Pedra e Terra que vive nas montanhas. Ele usa seu corpo rochoso para se camuflar em terrenos rochosos.",
          "link": "https://www.pokemon.com/br/pokedex/geodude",
          "tags": "Pedra, Terra, Kanto"
        },
        {
          "titulo": "Graveler",
          "numero": "075",
          "tipo": "Pedra/Terra",
          "descricao": "Graveler é a evolução de Geodude. Ele rola por encostas íngremes e usa seu peso para esmagar qualquer obstáculo em seu caminho.",
          "link": "https://www.pokemon.com/br/pokedex/graveler",
          "tags": "Pedra, Terra, Kanto"
        },
        {
          "titulo": "Golem",
          "numero": "076",
          "tipo": "Pedra/Terra",
          "descricao": "Golem é a forma final de Geodude. Sua carapaça rochosa é extremamente dura, e ele pode explodir como uma bomba em batalhas.",
          "link": "https://www.pokemon.com/br/pokedex/golem",
          "tags": "Pedra, Terra, Kanto"
        },
        {
          "titulo": "Ponyta",
          "numero": "077",
          "tipo": "Fogo",
          "descricao": "Ponyta é um Pokémon do tipo Fogo que possui uma crina feita de chamas. Ele é rápido e ágil, correndo em alta velocidade.",
          "link": "https://www.pokemon.com/br/pokedex/ponyta",
          "tags": "Fogo, Kanto"
        },
        {
          "titulo": "Rapidash",
          "numero": "078",
          "tipo": "Fogo",
          "descricao": "Rapidash é a evolução de Ponyta. Ele corre a velocidades incríveis, com sua crina de fogo queimando intensamente.",
          "link": "https://www.pokemon.com/br/pokedex/rapidash",
          "tags": "Fogo, Kanto"
        },
        {
          "titulo": "Slowpoke",
          "numero": "079",
          "tipo": "Água/Psíquico",
          "descricao": "Slowpoke é um Pokémon do tipo Água e Psíquico que é notoriamente lento, tanto fisicamente quanto mentalmente.",
          "link": "https://www.pokemon.com/br/pokedex/slowpoke",
          "tags": "Água, Psíquico, Kanto"
        },
        {
          "titulo": "Slowbro",
          "numero": "080",
          "tipo": "Água/Psíquico",
          "descricao": "Slowbro é a evolução de Slowpoke. Ele ganha sua forma após ser mordido por um Shellder em sua cauda.",
          "link": "https://www.pokemon.com/br/pokedex/slowbro",
          "tags": "Água, Psíquico, Kanto"
        },
        {
          "titulo": "Magnemite",
          "numero": "081",
          "tipo": "Elétrico/Metálico",
          "descricao": "Magnemite é um Pokémon do tipo Elétrico e Metálico que flutua usando seu campo magnético e ataca com eletricidade.",
          "link": "https://www.pokemon.com/br/pokedex/magnemite",
          "tags": "Elétrico, Metálico, Kanto"
        },
        {
          "titulo": "Magneton",
          "numero": "082",
          "tipo": "Elétrico/Metálico",
          "descricao": "Magneton é a evolução de Magnemite. Ele é composto por três Magnemite e emite ondas eletromagnéticas poderosas.",
          "link": "https://www.pokemon.com/br/pokedex/magneton",
          "tags": "Elétrico, Metálico, Kanto"
        },
        {
          "titulo": "Farfetch'd",
          "numero": "083",
          "tipo": "Normal/Voador",
          "descricao": "Farfetch'd é um Pokémon Normal e Voador que carrega um talo de alho-poró como arma. Ele é conhecido por ser raro.",
          "link": "https://www.pokemon.com/br/pokedex/farfetchd",
          "tags": "Normal, Voador, Kanto"
        },

            {
              "titulo": "Doduo",
              "numero": "084",
              "tipo": "Normal/Voador",
              "descricao": "Doduo é um Pokémon de duas cabeças que corre a grandes velocidades, apesar de não poder voar.",
              "link": "https://www.pokemon.com/br/pokedex/doduo",
              "tags": "Normal, Voador, Kanto"
            },
            {
              "titulo": "Dodrio",
              "numero": "085",
              "tipo": "Normal/Voador",
              "descricao": "Dodrio é a evolução de Doduo, com três cabeças que trabalham juntas para aumentar a coordenação e a agilidade.",
              "link": "https://www.pokemon.com/br/pokedex/dodrio",
              "tags": "Normal, Voador, Kanto"
            },
            {
              "titulo": "Seel",
              "numero": "086",
              "tipo": "Água",
              "descricao": "Seel é um Pokémon do tipo Água que vive em mares gelados. Ele usa sua camada de gordura para se manter aquecido.",
              "link": "https://www.pokemon.com/br/pokedex/seel",
              "tags": "Água, Kanto"
            },
            {
              "titulo": "Dewgong",
              "numero": "087",
              "tipo": "Água/Gelo",
              "descricao": "Dewgong é a evolução de Seel. Ele é ágil nadando em águas geladas e ataca com seu poderoso corpo congelado.",
              "link": "https://www.pokemon.com/br/pokedex/dewgong",
              "tags": "Água, Gelo, Kanto"
            },
            {
              "titulo": "Grimer",
              "numero": "088",
              "tipo": "Venenoso",
              "descricao": "Grimer é um Pokémon de lodo tóxico que polui tudo o que toca. Ele absorve sujeira para se alimentar.",
              "link": "https://www.pokemon.com/br/pokedex/grimer",
              "tags": "Venenoso, Kanto"
            },
            {
              "titulo": "Muk",
              "numero": "089",
              "tipo": "Venenoso",
              "descricao": "Muk é a evolução de Grimer. Seu corpo é composto de lodo altamente venenoso, tornando-o perigoso ao toque.",
              "link": "https://www.pokemon.com/br/pokedex/muk",
              "tags": "Venenoso, Kanto"
            },
            {
              "titulo": "Shellder",
              "numero": "090",
              "tipo": "Água",
              "descricao": "Shellder é um Pokémon do tipo Água que vive dentro de uma concha dura e se fecha para se proteger de inimigos.",
              "link": "https://www.pokemon.com/br/pokedex/shellder",
              "tags": "Água, Kanto"
            },
            {
              "titulo": "Cloyster",
              "numero": "091",
              "tipo": "Água/Gelo",
              "descricao": "Cloyster é a evolução de Shellder. Ele é protegido por uma concha extremamente dura e ataca com picos gelados.",
              "link": "https://www.pokemon.com/br/pokedex/cloyster",
              "tags": "Água, Gelo, Kanto"
            },
            {
              "titulo": "Gastly",
              "numero": "092",
              "tipo": "Fantasma/Venenoso",
              "descricao": "Gastly é um Pokémon Fantasma e Venenoso que flutua como uma bola de gás venenoso, atacando seus oponentes com substâncias tóxicas.",
              "link": "https://www.pokemon.com/br/pokedex/gastly",
              "tags": "Fantasma, Venenoso, Kanto"
            },
            {
              "titulo": "Haunter",
              "numero": "093",
              "tipo": "Fantasma/Venenoso",
              "descricao": "Haunter é a evolução de Gastly. Ele é conhecido por suas brincadeiras assustadoras e por seu toque paralisante.",
              "link": "https://www.pokemon.com/br/pokedex/haunter",
              "tags": "Fantasma, Venenoso, Kanto"
            },
            {
              "titulo": "Gengar",
              "numero": "094",
              "tipo": "Fantasma/Venenoso",
              "descricao": "Gengar é a evolução final de Gastly. Ele se esconde nas sombras para atacar seus oponentes e absorver sua força vital.",
              "link": "https://www.pokemon.com/br/pokedex/gengar",
              "tags": "Fantasma, Venenoso, Kanto"
            },
            {
              "titulo": "Onix",
              "numero": "095",
              "tipo": "Pedra/Terra",
              "descricao": "Onix é um Pokémon enorme feito de pedras. Ele cava grandes túneis subterrâneos e é conhecido por sua resistência.",
              "link": "https://www.pokemon.com/br/pokedex/onix",
              "tags": "Pedra, Terra, Kanto"
            },
            {
              "titulo": "Drowzee",
              "numero": "096",
              "tipo": "Psíquico",
              "descricao": "Drowzee é um Pokémon do tipo Psíquico que hipnotiza seus oponentes e se alimenta de seus sonhos.",
              "link": "https://www.pokemon.com/br/pokedex/drowzee",
              "tags": "Psíquico, Kanto"
            },
            {
              "titulo": "Hypno",
              "numero": "097",
              "tipo": "Psíquico",
              "descricao": "Hypno é a evolução de Drowzee. Ele balança seu pêndulo para induzir o sono em seus oponentes e controlá-los.",
              "link": "https://www.pokemon.com/br/pokedex/hypno",
              "tags": "Psíquico, Kanto"
            },
            {
              "titulo": "Krabby",
              "numero": "098",
              "tipo": "Água",
              "descricao": "Krabby é um Pokémon do tipo Água que usa suas grandes pinças para lutar e se defender de predadores.",
              "link": "https://www.pokemon.com/br/pokedex/krabby",
              "tags": "Água, Kanto"
            },
            {
              "titulo": "Kingler",
              "numero": "099",
              "tipo": "Água",
              "descricao": "Kingler é a evolução de Krabby. Suas pinças são tão fortes que podem esmagar até os mais duros objetos.",
              "link": "https://www.pokemon.com/br/pokedex/kingler",
              "tags": "Água, Kanto"
            },
            {
              "titulo": "Voltorb",
              "numero": "100",
              "tipo": "Elétrico",
              "descricao": "Voltorb é um Pokémon que se parece com uma Pokébola. Ele explode quando sente perigo.",
              "link": "https://www.pokemon.com/br/pokedex/voltorb",
              "tags": "Elétrico, Kanto"
            },
            {
              "titulo": "Electrode",
              "numero": "101",
              "tipo": "Elétrico",
              "descricao": "Electrode é a evolução de Voltorb. Ele é conhecido por sua natureza explosiva e rápida movimentação.",
              "link": "https://www.pokemon.com/br/pokedex/electrode",
              "tags": "Elétrico, Kanto"
            },
            {
              "titulo": "Exeggcute",
              "numero": "102",
              "tipo": "Planta/Psíquico",
              "descricao": "Exeggcute é um Pokémon composto por vários ovos que trabalham juntos para pensar e atacar.",
              "link": "https://www.pokemon.com/br/pokedex/exeggcute",
              "tags": "Planta, Psíquico, Kanto"
            },
            {
              "titulo": "Exeggutor",
              "numero": "103",
              "tipo": "Planta/Psíquico",
              "descricao": "Exeggutor é a evolução de Exeggcute. Suas várias cabeças permitem que ele pense em várias estratégias ao mesmo tempo.",
              "link": "https://www.pokemon.com/br/pokedex/exeggutor",
              "tags": "Planta, Psíquico, Kanto"
            },
            {
              "titulo": "Cubone",
              "numero": "104",
              "tipo": "Terra",
              "descricao": "Cubone é um Pokémon do tipo Terra que usa o crânio de sua mãe como capacete.",
              "link": "https://www.pokemon.com/br/pokedex/cubone",
              "tags": "Terra, Kanto"
            },
            {
              "titulo": "Marowak",
              "numero": "105",
              "tipo": "Terra",
              "descricao": "Marowak é a evolução de Cubone. Ele é um guerreiro habilidoso que usa ossos para lutar.",
              "link": "https://www.pokemon.com/br/pokedex/marowak",
              "tags": "Terra, Kanto"
            },

                {
                  "titulo": "Hitmonlee",
                  "numero": "106",
                  "tipo": "Lutador",
                  "descricao": "Hitmonlee é um Pokémon especialista em chutes. Suas pernas são elásticas e podem se estender para realizar ataques a longa distância.",
                  "link": "https://www.pokemon.com/br/pokedex/hitmonlee",
                  "tags": "Lutador, Kanto"
                },
                {
                  "titulo": "Hitmonchan",
                  "numero": "107",
                  "tipo": "Lutador",
                  "descricao": "Hitmonchan é especialista em socos. Seus punhos rápidos o tornam um adversário formidável em combate corpo a corpo.",
                  "link": "https://www.pokemon.com/br/pokedex/hitmonchan",
                  "tags": "Lutador, Kanto"
                },
                {
                  "titulo": "Lickitung",
                  "numero": "108",
                  "tipo": "Normal",
                  "descricao": "Lickitung é conhecido por sua longa língua, que ele usa para capturar alimentos e atacar seus inimigos.",
                  "link": "https://www.pokemon.com/br/pokedex/lickitung",
                  "tags": "Normal, Kanto"
                },
                {
                  "titulo": "Koffing",
                  "numero": "109",
                  "tipo": "Venenoso",
                  "descricao": "Koffing é um Pokémon que flutua enquanto libera gases venenosos de seu corpo inflamado.",
                  "link": "https://www.pokemon.com/br/pokedex/koffing",
                  "tags": "Venenoso, Kanto"
                },
                {
                  "titulo": "Weezing",
                  "numero": "110",
                  "tipo": "Venenoso",
                  "descricao": "Weezing é a evolução de Koffing. Ele tem duas cabeças que exalam vapores tóxicos ainda mais perigosos.",
                  "link": "https://www.pokemon.com/br/pokedex/weezing",
                  "tags": "Venenoso, Kanto"
                },
                {
                  "titulo": "Rhyhorn",
                  "numero": "111",
                  "tipo": "Terra/Pedra",
                  "descricao": "Rhyhorn é um Pokémon forte e resistente que usa seu corpo robusto para colidir com os oponentes.",
                  "link": "https://www.pokemon.com/br/pokedex/rhyhorn",
                  "tags": "Terra, Pedra, Kanto"
                },
                {
                  "titulo": "Rhydon",
                  "numero": "112",
                  "tipo": "Terra/Pedra",
                  "descricao": "Rhydon é a evolução de Rhyhorn. Sua carapaça dura como pedra o protege de ataques, e ele pode derrubar construções com facilidade.",
                  "link": "https://www.pokemon.com/br/pokedex/rhydon",
                  "tags": "Terra, Pedra, Kanto"
                },
                {
                  "titulo": "Chansey",
                  "numero": "113",
                  "tipo": "Normal",
                  "descricao": "Chansey é um Pokémon conhecido por sua natureza cuidadosa e pelos ovos que carrega, que são altamente nutritivos.",
                  "link": "https://www.pokemon.com/br/pokedex/chansey",
                  "tags": "Normal, Kanto"
                },
                {
                  "titulo": "Tangela",
                  "numero": "114",
                  "tipo": "Planta",
                  "descricao": "Tangela é coberto por vinhas grossas e flexíveis, que usa tanto para se proteger quanto para atacar os oponentes.",
                  "link": "https://www.pokemon.com/br/pokedex/tangela",
                  "tags": "Planta, Kanto"
                },
                {
                  "titulo": "Kangaskhan",
                  "numero": "115",
                  "tipo": "Normal",
                  "descricao": "Kangaskhan é um Pokémon maternal que protege ferozmente seu filhote. Ele luta com grande força para defender sua cria.",
                  "link": "https://www.pokemon.com/br/pokedex/kangaskhan",
                  "tags": "Normal, Kanto"
                },
                {
                  "titulo": "Horsea",
                  "numero": "116",
                  "tipo": "Água",
                  "descricao": "Horsea é um Pokémon do tipo Água que dispara jatos de água para se defender. Ele vive em águas tranquilas.",
                  "link": "https://www.pokemon.com/br/pokedex/horsea",
                  "tags": "Água, Kanto"
                },
                {
                  "titulo": "Seadra",
                  "numero": "117",
                  "tipo": "Água",
                  "descricao": "Seadra é a evolução de Horsea. Seus espinhos e sua habilidade de nadar rapidamente fazem dele um adversário perigoso.",
                  "link": "https://www.pokemon.com/br/pokedex/seadra",
                  "tags": "Água, Kanto"
                },
                {
                  "titulo": "Goldeen",
                  "numero": "118",
                  "tipo": "Água",
                  "descricao": "Goldeen é um Pokémon gracioso que nada com elegância. Ele usa seu chifre afiado para se defender de predadores.",
                  "link": "https://www.pokemon.com/br/pokedex/goldeen",
                  "tags": "Água, Kanto"
                },
                {
                  "titulo": "Seaking",
                  "numero": "119",
                  "tipo": "Água",
                  "descricao": "Seaking é a evolução de Goldeen. Ele nada com força e graça, e seu chifre é uma arma formidável.",
                  "link": "https://www.pokemon.com/br/pokedex/seaking",
                  "tags": "Água, Kanto"
                },
                {
                  "titulo": "Staryu",
                  "numero": "120",
                  "tipo": "Água",
                  "descricao": "Staryu é um Pokémon em forma de estrela que pode regenerar seus membros perdidos. Ele absorve energia estelar para se fortalecer.",
                  "link": "https://www.pokemon.com/br/pokedex/staryu",
                  "tags": "Água, Kanto"
                },
                {
                  "titulo": "Starmie",
                  "numero": "121",
                  "tipo": "Água/Psíquico",
                  "descricao": "Starmie é a evolução de Staryu. Seu núcleo brilhante emite raios poderosos de energia psíquica.",
                  "link": "https://www.pokemon.com/br/pokedex/starmie",
                  "tags": "Água, Psíquico, Kanto"
                },
                {
                  "titulo": "Mr. Mime",
                  "numero": "122",
                  "tipo": "Psíquico/Fada",
                  "descricao": "Mr. Mime é um Pokémon habilidoso em criar barreiras invisíveis e ilusões. Ele é conhecido por seus truques de mímica.",
                  "link": "https://www.pokemon.com/br/pokedex/mr-mime",
                  "tags": "Psíquico, Fada, Kanto"
                },
                {
                  "titulo": "Scyther",
                  "numero": "123",
                  "tipo": "Inseto/Voador",
                  "descricao": "Scyther é um Pokémon veloz e mortal que ataca com lâminas afiadas. Ele é um lutador habilidoso em combate corpo a corpo.",
                  "link": "https://www.pokemon.com/br/pokedex/scyther",
                  "tags": "Inseto, Voador, Kanto"
                },
                {
                  "titulo": "Jynx",
                  "numero": "124",
                  "tipo": "Gelo/Psíquico",
                  "descricao": "Jynx é um Pokémon que usa suas danças e sons para hipnotizar seus oponentes. Seus poderes psíquicos são formidáveis.",
                  "link": "https://www.pokemon.com/br/pokedex/jynx",
                  "tags": "Gelo, Psíquico, Kanto"
                },
                {
                  "titulo": "Electabuzz",
                  "numero": "125",
                  "tipo": "Elétrico",
                  "descricao": "Electabuzz é um Pokémon do tipo Elétrico que gera eletricidade poderosa em seu corpo. Ele é rápido e perigoso em batalhas.",
                  "link": "https://www.pokemon.com/br/pokedex/electabuzz",
                  "tags": "Elétrico, Kanto"
                },

                    {
                      "titulo": "Magmar",
                      "numero": "126",
                      "tipo": "Fogo",
                      "descricao": "Magmar é um Pokémon de fogo que vive em ambientes vulcânicos. Suas chamas podem queimar tudo o que tocam.",
                      "link": "https://www.pokemon.com/br/pokedex/magmar",
                      "tags": "Fogo, Kanto"
                    },
                    {
                      "titulo": "Pinsir",
                      "numero": "127",
                      "tipo": "Inseto",
                      "descricao": "Pinsir é um Pokémon forte que usa suas pinças para esmagar seus oponentes com força esmagadora.",
                      "link": "https://www.pokemon.com/br/pokedex/pinsir",
                      "tags": "Inseto, Kanto"
                    },
                    {
                      "titulo": "Tauros",
                      "numero": "128",
                      "tipo": "Normal",
                      "descricao": "Tauros é um Pokémon agressivo que usa seus chifres para atacar. Ele é conhecido por sua natureza feroz.",
                      "link": "https://www.pokemon.com/br/pokedex/tauros",
                      "tags": "Normal, Kanto"
                    },
                    {
                      "titulo": "Magikarp",
                      "numero": "129",
                      "tipo": "Água",
                      "descricao": "Magikarp é um Pokémon conhecido por sua fraqueza e inutilidade, mas pode evoluir para o poderoso Gyarados.",
                      "link": "https://www.pokemon.com/br/pokedex/magikarp",
                      "tags": "Água, Kanto"
                    },
                    {
                      "titulo": "Gyarados",
                      "numero": "130",
                      "tipo": "Água/Voador",
                      "descricao": "Gyarados é a evolução de Magikarp. Este Pokémon poderoso é temido por sua fúria e ataques devastadores.",
                      "link": "https://www.pokemon.com/br/pokedex/gyarados",
                      "tags": "Água, Voador, Kanto"
                    },
                    {
                      "titulo": "Lapras",
                      "numero": "131",
                      "tipo": "Água/Gelo",
                      "descricao": "Lapras é um Pokémon gentil que adora transportar pessoas em seu casco. Ele é muito inteligente e comunicativo.",
                      "link": "https://www.pokemon.com/br/pokedex/lapras",
                      "tags": "Água, Gelo, Kanto"
                    },
                    {
                      "titulo": "Ditto",
                      "numero": "132",
                      "tipo": "Normal",
                      "descricao": "Ditto é capaz de se transformar em qualquer Pokémon ou objeto que vê, copiando até mesmo suas habilidades.",
                      "link": "https://www.pokemon.com/br/pokedex/ditto",
                      "tags": "Normal, Kanto"
                    },
                    {
                      "titulo": "Eevee",
                      "numero": "133",
                      "tipo": "Normal",
                      "descricao": "Eevee é conhecido por sua capacidade de evoluir para várias formas diferentes, dependendo do ambiente em que vive.",
                      "link": "https://www.pokemon.com/br/pokedex/eevee",
                      "tags": "Normal, Kanto"
                    },
                    {
                      "titulo": "Vaporeon",
                      "numero": "134",
                      "tipo": "Água",
                      "descricao": "Vaporeon é uma das evoluções de Eevee. Ele se adapta bem à água e pode se misturar completamente com ela.",
                      "link": "https://www.pokemon.com/br/pokedex/vaporeon",
                      "tags": "Água, Kanto"
                    },
                    {
                      "titulo": "Jolteon",
                      "numero": "135",
                      "tipo": "Elétrico",
                      "descricao": "Jolteon é uma das evoluções de Eevee. Ele gera eletricidade em seu corpo e ataca com relâmpagos rápidos.",
                      "link": "https://www.pokemon.com/br/pokedex/jolteon",
                      "tags": "Elétrico, Kanto"
                    },
                    {
                      "titulo": "Flareon",
                      "numero": "136",
                      "tipo": "Fogo",
                      "descricao": "Flareon é uma das evoluções de Eevee. Ele pode armazenar calor intenso em seu corpo e liberar chamas poderosas.",
                      "link": "https://www.pokemon.com/br/pokedex/flareon",
                      "tags": "Fogo, Kanto"
                    },
                    {
                      "titulo": "Porygon",
                      "numero": "137",
                      "tipo": "Normal",
                      "descricao": "Porygon é um Pokémon artificial que pode entrar em sistemas computacionais e interagir com dados.",
                      "link": "https://www.pokemon.com/br/pokedex/porygon",
                      "tags": "Normal, Kanto"
                    },
                    {
                      "titulo": "Omanyte",
                      "numero": "138",
                      "tipo": "Pedra/Água",
                      "descricao": "Omanyte é um Pokémon fóssil que foi ressuscitado. Ele usa seus tentáculos para se locomover e capturar presas.",
                      "link": "https://www.pokemon.com/br/pokedex/omanyte",
                      "tags": "Pedra, Água, Kanto"
                    },
                    {
                      "titulo": "Omastar",
                      "numero": "139",
                      "tipo": "Pedra/Água",
                      "descricao": "Omastar é a evolução de Omanyte. Ele usa seus tentáculos e sua mandíbula forte para atacar inimigos.",
                      "link": "https://www.pokemon.com/br/pokedex/omastar",
                      "tags": "Pedra, Água, Kanto"
                    },
                    {
                      "titulo": "Kabuto",
                      "numero": "140",
                      "tipo": "Pedra/Água",
                      "descricao": "Kabuto é outro Pokémon fóssil ressuscitado. Ele vive no fundo do mar, protegido por sua concha dura.",
                      "link": "https://www.pokemon.com/br/pokedex/kabuto",
                      "tags": "Pedra, Água, Kanto"
                    },
                    {
                      "titulo": "Kabutops",
                      "numero": "141",
                      "tipo": "Pedra/Água",
                      "descricao": "Kabutops é a evolução de Kabuto. Ele é um caçador rápido e mortal, com lâminas afiadas em seus braços.",
                      "link": "https://www.pokemon.com/br/pokedex/kabutops",
                      "tags": "Pedra, Água, Kanto"
                    },
                    {
                      "titulo": "Aerodactyl",
                      "numero": "142",
                      "tipo": "Pedra/Voador",
                      "descricao": "Aerodactyl é um Pokémon fóssil voador que foi ressuscitado. Ele é um predador feroz com dentes afiados.",
                      "link": "https://www.pokemon.com/br/pokedex/aerodactyl",
                      "tags": "Pedra, Voador, Kanto"
                    },
                    {
                      "titulo": "Snorlax",
                      "numero": "143",
                      "tipo": "Normal",
                      "descricao": "Snorlax é conhecido por seu apetite voraz e por passar a maior parte do tempo dormindo. Ele é incrivelmente forte.",
                      "link": "https://www.pokemon.com/br/pokedex/snorlax",
                      "tags": "Normal, Kanto"
                    },
                    {
                      "titulo": "Articuno",
                      "numero": "144",
                      "tipo": "Gelo/Voador",
                      "descricao": "Articuno é um dos lendários pássaros de Kanto. Ele controla o gelo e pode criar tempestades de neve.",
                      "link": "https://www.pokemon.com/br/pokedex/articuno",
                      "tags": "Gelo, Voador, Lendário, Kanto"
                    },
                    {
                      "titulo": "Zapdos",
                      "numero": "145",
                      "tipo": "Elétrico/Voador",
                      "descricao": "Zapdos é outro dos pássaros lendários de Kanto. Ele controla raios e pode criar tempestades elétricas.",
                      "link": "https://www.pokemon.com/br/pokedex/zapdos",
                      "tags": "Elétrico, Voador, Lendário, Kanto"
                    },
                    {
                      "titulo": "Moltres",
                      "numero": "146",
                      "tipo": "Fogo/Voador",
                      "descricao": "Moltres é o terceiro dos pássaros lendários de Kanto. Ele controla o fogo e é conhecido por suas asas flamejantes.",
                      "link": "https://www.pokemon.com/br/pokedex/moltres",
                      "tags": "Fogo, Voador, Lendário, Kanto"
                    },
                    {
                      "titulo": "Dratini",
                      "numero": "147",
                      "tipo": "Dragão",
                      "descricao": "Dratini é um Pokémon do tipo Dragão que vive em mares profundos. Ele está sempre em crescimento.",
                      "link": "https://www.pokemon.com/br/pokedex/dratini",
                      "tags": "Dragão, Kanto"
                    },

                    {
                        "titulo": "Dragonair",
                        "numero": "148",
                        "tipo": "Dragão",
                        "descricao": "Dragonair é um Pokémon serpenteante que vive em lagos e rios tranquilos. Ele é conhecido por sua beleza e graça.",
                        "link": "https://www.pokemon.com/br/pokedex/dragonair",
                        "tags": "Dragão, Kanto"
                      },
                      {
                        "titulo": "Dragonite",
                        "numero": "149",
                        "tipo": "Dragão, Voo",
                        "descricao": "Dragonite é um Pokémon que pode voar a grandes velocidades e é conhecido por sua natureza amigável e protetora.",
                        "link": "https://www.pokemon.com/br/pokedex/dragonite",
                        "tags": "Dragão, Voo, Kanto"
                      },
                      {
                        "titulo": "Mewtwo",
                        "numero": "150",
                        "tipo": "Psíquico",
                        "descricao": "Mewtwo é um Pokémon de grande poder que foi criado a partir de experimentos genéticos. Ele busca entender seu propósito e lugar no mundo.",
                        "link": "https://www.pokemon.com/br/pokedex/mewtwo",
                        "tags": "Psíquico, Kanto"
                      },
                      {
                        "titulo": "Mew",
                        "numero": "151",
                        "tipo": "Psíquico",
                        "descricao": "Mew é um Pokémon raro e misterioso que possui a habilidade de aprender qualquer movimento. Dizem que ele tem o poder de criar o mundo.",
                        "link": "https://www.pokemon.com/br/pokedex/mew",
                        "tags": "Psíquico, Kanto"
                      }
                    
]















