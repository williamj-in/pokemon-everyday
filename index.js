var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
  jsdom = require("jsdom");
  mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3000, function() {
  console.log("Gotta catch'em all");
  console.log(Math.floor(Math.random()*teams.length));
});
var usedTeams = [];

app.get("/", function(req, res) {
  
  var index = Math.floor(Math.random()*teams.length);
  res.render("index", {
    team: teams[index],
  });
  
  
  if(teams.length === 1) {  
    var temp = teams;
    teams = usedTeams;
    usedTeams = temp;
    return;
  }
  usedTeams.push(teams[index]);
  teams.splice(index,1);
  
});
var pokemons = [
  {
    name: "Hatterene",
    sex: "Female",
    ability: "Magic Mirror",
    item: "Psychic Seed",
    lv: 100,
    type1: "Psychic",
    type2: "Fairy",
    skills: [
      {
        name: "Dazzling Gleam",
        type: "Fairy"
      },
      {
        name: "Psychic",
        type: "Psychic"
      },
      {
        name: "Trick Room",
        type: "Psychic"
      },
      {
        name: "Protect",
        type: "Normal"
      }
    ]
  },
  {
    name: "Indeedee-Female",
    sex: "Female",
    ability: "Psychic Surge",
    item: "Focus Sash",
    lv: 100,
    type1: "Psychic",
    type2: "Normal",
    skills: [
      {
        name: "Light Screen",
        type: "Psychic"
      },
      {
        name: "Psychic",
        type: "Psychic"
      },
      {
        name: "Reflect",
        type: "Psychic"
      },
      {
        name: "Follow Me",
        type: "Normal"
      }
    ]
  },
  {
    name: "Torkoal",
    sex: "Male",
    ability: "Drought",
    item: "Charcoal",
    lv: 100,
    type1: "Fire",
    type2: "None",
    skills: [
      {
        name: "Eruption",
        type: "Fire"
      },
      {
        name: "Heat Wave",
        type: "Fire"
      },
      {
        name: "Solar Beam",
        type: "Grass"
      },
      {
        name: "Protect",
        type: "Normal"
      }
    ]
  },
  {
    name: "Oranguru",
    sex: "Male",
    ability: "Inner Focus",
    item: "Mental Herb",
    lv: 100,
    type1: "Psychic",
    type2: "Normal",
    skills: [
      {
        name: "Trick Room",
        type: "Psychic"
      },
      {
        name: "Psychic",
        type: "Psychic"
      },
      {
        name: "Ally Switch",
        type: "Psychic"
      },
      {
        name: "Protect",
        type: "Normal"
      }
    ]
  },
  {
    name: "Ferrothorn",
    sex: "Male",
    ability: "Iron Barbs",
    item: "Choice Band",
    lv: 100,
    type1: "Grass",
    type2: "Steel",
    skills: [
      {
        name: "Power Whip",
        type: "Grass"
      },
      {
        name: "Gyro Ball",
        type: "Steel"
      },
      {
        name: "Knock Off",
        type: "Dark"
      },
      {
        name: "Body Press",
        type: "Fighting"
      }
    ]
  },
  {
    name: "Copperajah",
    sex: "Male",
    ability: "Sheer Force",
    item: "Life Orb",
    lv: 100,
    type1: "Steel",
    type2: "None",
    skills: [
      {
        name: "Iron Head",
        type: "Steel"
      },
      {
        name: "Play Rough",
        type: "Fairy"
      },
      {
        name: "Power Whip",
        type: "Grass"
      },
      {
        name: "Super Horsepower",
        type: "Ground"
      }
    ]
  }
];
var teams = [
  {
    pokemons: pokemons,
    teamId: "0000 0005 2RYD C0",
    url: "https://zhuanlan.zhihu.com/p/94893189",
    tags: ["Trick Room", "Hatterene"]
  }
];
teams.push({
  pokemons: [
    {
      name: "Togekiss",
      sex: "Male",
      ability: "Serene Grace",
      item: "Weakness Policy",
      lv: 50,
      type1: "Fairy",
      type2: "Flying",
      skills: [
        {
          name: "Dazzling Gleam",
          type: "Fairy"
        },
        {
          name: "Air Slash",
          type: "Flying"
        },
        {
          name: "Heat Wave",
          type: "Fire"
        },
        {
          name: "Follow Me",
          type: "Normal"
        }
      ]
    },
    {
      name: "Rotom",
      sex: "",
      ability: "Levitate",
      item: "Wiki Berry",
      lv: 50,
      type1: "Electric",
      type2: "Water",
      skills: [
        {
          name: "Thunderbolt",
          type: "Electric"
        },
        {
          name: "Hydro Pump",
          type: "Water"
        },
        {
          name: "Nasty Plot",
          type: "Dark"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Mimikyu",
      sex: "Female",
      ability: "Disguise",
      item: "Lum Berry",
      lv: 100,
      type1: "Ghost",
      type2: "Fairy",
      skills: [
        {
          name: "Phantom Force",
          type: "Ghost"
        },
        {
          name: "Play Rough",
          type: "Fairy"
        },
        {
          name: "Wood Hammer",
          type: "Grass"
        },
        {
          name: "Swords Dance",
          type: "Normal"
        }
      ]
    },
    {
      name: "Durant",
      sex: "Male",
      ability: "Hustle",
      item: "Life Orb",
      lv: 100,
      type1: "Bug",
      type2: "Steel",
      skills: [
        {
          name: "Iron Head",
          type: "Steel"
        },
        {
          name: "Stomping Tantrum",
          type: "Ground"
        },
        {
          name: "Rock Slide",
          type: "Rock"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Raichu",
      sex: "Male",
      ability: "Lightning Rod",
      item: "Focus Sash",
      lv: 50,
      type1: "Electric",
      type2: "None",
      skills: [
        {
          name: "Volt Switch",
          type: "Electric"
        },
        {
          name: "Fake Out",
          type: "Normal"
        },
        {
          name: "Nuzzle",
          type: "Electric"
        },
        {
          name: "Eerie Impulse",
          type: "Electric"
        }
      ]
    },
    {
      name: "Incineroar",
      sex: "Male",
      ability: "Intimidate",
      item: "Aguav Berry",
      lv: 50,
      type1: "Fire",
      type2: "Dark",
      skills: [
        {
          name: "Flare Blitz",
          type: "Fire"
        },
        {
          name: "Fake Out",
          type: "Normal"
        },
        {
          name: "Parting Shot",
          type: "Dark"
        },
        {
          name: "Taunt",
          type: "Dark"
        }
      ]
    }
  ],
  teamId: "0000 0006 8D4P HM",
  url:
    "https://www.reddit.com/r/VGC/comments/fjidk2/took_this_stupid_team_to_1_on_the_in_game_ladder/",
  tags: ["Togekiss", "Incineroar"]
});
teams.push({
  pokemons: [
    {
      name: "Sableye",
      sex: "Female",
      ability: "Prankster",
      item: "Roseli Berry",
      lv: 33,
      type1: "Dark",
      type2: "Ghost",
      skills: [
        {
          name: "Fake Out",
          type: "Normal"
        },
        {
          name: "Will-O-Wisp",
          type: "Fire"
        },
        {
          name: "Quash",
          type: "Dark"
        },
        {
          name: "Knock Off",
          type: "Dark"
        }
      ]
    },
    {
      name: "Lapras",
      sex: "Male",
      ability: "Hydration",
      item: "Light Clay",
      lv: 100,
      type1: "Water",
      type2: "Ice",
      skills: [
        {
          name: "Freeze-Dry",
          type: "Ice"
        },
        {
          name: "Hydro Pump",
          type: "Water"
        },
        {
          name: "Thunder",
          type: "Electric"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Whimsicott",
      sex: "Male",
      ability: "Prankster",
      item: "Focus Sash",
      lv: 43,
      type1: "Grass",
      type2: "Fairy",
      skills: [
        {
          name: "Tailwind",
          type: "Flying"
        },
        {
          name: "Fake Tears",
          type: "Dark"
        },
        {
          name: "Moonblast",
          type: "Fairy"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Chandelure",
      sex: "Female",
      ability: "Infiltrator",
      item: "Choice Scarf",
      lv: 100,
      type1: "Ghost",
      type2: "Fire",
      skills: [
        {
          name: "Shadow Ball",
          type: "Ghost"
        },
        {
          name: "Heat Wave",
          type: "Fire"
        },
        {
          name: "Energy Ball",
          type: "Grass"
        },
        {
          name: "Clear Smog",
          type: "Poison"
        }
      ]
    },
    {
      name: "Conkeldurr",
      sex: "Female",
      ability: "Guts",
      item: "Flame Orb",
      lv: 42,
      type1: "Fighting",
      type2: "None",
      skills: [
        {
          name: "Drain Punch",
          type: "Fighting"
        },
        {
          name: "Rock Slide",
          type: "Rock"
        },
        {
          name: "Mach Punch",
          type: "Fighting"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Roserade",
      sex: "Male",
      ability: "Natural Cure",
      item: "Wide Lens",
      lv: 1,
      type1: "Grass",
      type2: "Poison",
      skills: [
        {
          name: "Sleep Powder",
          type: "Grass"
        },
        {
          name: "Leaf Storm",
          type: "Grass"
        },
        {
          name: "Sludge Bomb",
          type: "Poison"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    }
  ],
  teamId: "0000 0007 9M0X WW",
  url:
    "https://www.reddit.com/r/VGC/comments/fj2a3z/team_report_and_pokepaste_in_comments_master_ball/",
  tags: ["Roserade", "Top 16","Lapras"]
});
teams.push({
  pokemons: [
    {
      name: "Lapras",
      sex: "Female",
      ability: "Shell Armor",
      item: "Light Clay",
      lv: 100,
      type1: "Water",
      type2: "Ice",
      skills: [
        {
          name: "Hydro Pump",
          type: "Water"
        },
        {
          name: "Freeze-Dry",
          type: "Ice"
        },
        {
          name: "Protect",
          type: "Normal"
        },
        {
          name: "Perish Song",
          type: "Normal"
        }
      ]
    },
    {
      name: "Alcremie",
      sex: "Female",
      ability: "Sweet Veil",
      item: "Focus Sash",
      lv: 100,
      type1: "Fairy",
      type2: "None",
      skills: [
        {
          name: "Decorate",
          type: "Fairy"
        },
        {
          name: "Dazzling Gleam",
          type: "Fairy"
        },
        {
          name: "Fake Tears",
          type: "Dark"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Incineroar",
      sex: "Male",
      ability: "Intimidate",
      item: "Figy Berry",
      lv: 50,
      type1: "Fire",
      type2: "Dark",
      skills: [
        {
          name: "Fake out",
          type: "Normal"
        },
        {
          name: "Flare Blitz",
          type: "Fire"
        },
        {
          name: "Throat Chop",
          type: "Dark"
        },
        {
          name: "Parting Shot",
          type: "Dark"
        }
      ]
    },
    {
      name: "Togekiss",
      sex: "Male",
      ability: "Serene Grace",
      item: "Weakness Policy",
      lv: 50,
      type1: "Fairy",
      type2: "Flying",
      skills: [
        {
          name: "Follow Me",
          type: "Normal"
        },
        {
          name: "Dazzling Gleam",
          type: "Fairy"
        },
        {
          name: "Air Slash",
          type: "Flying"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Dusclops",
      sex: "Male",
      ability: "Frisk",
      item: "Eviolite",
      lv: 50,
      type1: "Ghost",
      type2: "None",
      skills: [
        {
          name: "Night Shade",
          type: "Ghost"
        },
        {
          name: "Trick Room",
          type: "Psychic"
        },
        {
          name: "Haze",
          type: "Ice"
        },
        {
          name: "Pain Split",
          type: "Normal"
        }
      ]
    },
    {
      name: "Conkeldurr",
      sex: "Male",
      ability: "Iron Fist",
      item: "Life Orb",
      lv: 50,
      type1: "Fighting",
      type2: "None",
      skills: [
        {
          name: "Detect",
          type: "Fighting"
        },
        {
          name: "Drain Punch",
          type: "Fighting"
        },
        {
          name: "Thunder Punch",
          type: "Electric"
        },
        {
          name: "Mach Punch",
          type: "Fighting"
        }
      ]
    }
  ],
  teamId: "0000 0008 05LW 4B",
  url:
    "https://pokepast.es/fc2cebbc055f68b8",
  tags: ["VGC","Dusclops","G-Max Lapras"]
});
teams.push({

  pokemons: [
    {
      name: "Excadrill",
      sex: "Male",
      ability: "Sand Rush",
      item: "Focus Sash",
      lv: 100,
      type1: "Ground",
      type2: "Steel",
      skills: [
        {
          name: "Iron Head",
          type: "Steel"
        },
        {
          name: "Earthquake",
          type: "Ground"
        },
        {
          name: "Rock Slide",
          type: "Rock"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Togekiss",
      sex: "Female",
      ability: "Super Luck",
      item: "Scope Lens",
      lv: 100,
      type1: "Fairy",
      type2: "Flying",
      skills: [
        {
          name: "Dazzling Gleam",
          type: "Fairy"
        },
        {
          name: "Air Slash",
          type: "Flying"
        },
        {
          name: "Heat Wave",
          type: "Fire"
        },
        {
          name: "Follow Me",
          type: "Normal"
        }
      ]
    },
    {
      name: "Tyranitar",
      sex: "Female",
      ability: "Sand Stream",
      item: "Weakness Policy",
      lv: 100,
      type1: "Rock",
      type2: "Dark",
      skills: [
        {
          name: "Rock Slide",
          type: "Rock"
        },
        {
          name: "Crunch",
          type: "Dark"
        },
        {
          name: "Protect",
          type: "Normal"
        },
        {
          name: "Brick Break",
          type: "Fighting"
        }
      ]
    },
    {
      name: "Rotom",
      sex: "None",
      ability: "Levitate",
      item: "Life Orb",
      lv: 100,
      type1: "Electric",
      type2: "Water",
      skills: [
        {
          name: "Thunderbolt",
          type: "Electric"
        },
        {
          name: "Hydro Pump",
          type: "Water"
        },
        {
          name: "Dark Pulse",
          type: "Dark"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Arcanine",
      sex: "Male",
      ability: "Intimidate",
      item: "Figy Berry",
      lv: 100,
      type1: "Fire",
      type2: "None",
      skills: [
        {
          name: "Heat Wave",
          type: "Fire"
        },
        {
          name: "Snarl",
          type: "Dark"
        },
        {
          name: "Safeguard",
          type: "Normal"
        },
        {
          name: "Protect",
          type: "Normal"
        }
      ]
    },
    {
      name: "Tsareena",
      sex: "Female",
      ability: "Queenly Majesty",
      item: "Coba Berry",
      lv: 50,
      type1: "Grass",
      type2: "None",
      skills: [
        {
          name: "Power Whip",
          type: "Grass"
        },
        {
          name: "High Jump Kick",
          type: "Fighting"
        },
        {
          name: "U-turn",
          type: "Bug"
        },
        {
          name: "Helping Hand",
          type: "Normal"
        }
      ]
    }
  ],
  teamId: "0000 0006 7DWB 3T",
  url:
    "https://pokepast.es/ca9ccf93c8a43b26",
  tags: ["VGC", "Season 3","Tsareena"]
});
teams.push({
  pokemons: [
    {
      name: "Whimsicott",
      sex: "Male",
      ability: "Prankster",
      item: "Focus Sash",
      lv: 50,
      type1: "Grass",
      type2: "Fairy",
      skills: [
        {
          name: "Moonblast",
          type: "Fairy"
        },
        {
          name: "Charm",
          type: "Fairy"
        },
        {
          name: "Tailwind",
          type: "Flying"
        },
        {
          name: "Fake Tears",
          type: "Dark"
        }
      ]
    },
    {
      name: "Duraludon",
      sex: "Male",
      ability: "Stalwart",
      item: "Life Orb",
      lv: 50,
      type1: "Steel",
      type2: "Dragon",
      skills: [
        {
          name: "Flash Cannon",
          type: "Steel"
        },
        {
          name: "Draco Meteor",
          type: "Dragon"
        },
        {
          name: "Protect",
          type: "Normal"
        },
        {
          name: "Thunderbolt",
          type: "Electric"
        }
      ]
    },
    {
      name: "Incineroar",
      sex: "Male",
      ability: "Intimidate",
      item: "Figy Berry",
      lv: 50,
      type1: "Fire",
      type2: "Dark",
      skills: [
        {
          name: "Fake Out",
          type: "Normal"
        },
        {
          name: "Snarl",
          type: "Dark"
        },
        {
          name: "Flare Blitz",
          type: "Fire"
        },
        {
          name: "Parting Shot",
          type: "Dark"
        }
      ]
    },
    {
      name: "Milotic",
      sex: "Male",
      ability: "Competitive",
      item: "Leftovers",
      lv: 100,
      type1: "Water",
      type2: "None",
      skills: [
        {
          name: "Coil",
          type: "Poison"
        },
        {
          name: "Muddy Water",
          type: "Water"
        },
        {
          name: "Recover",
          type: "Normal"
        },
        {
          name: "Hypnosis",
          type: "Psychic"
        }
      ]
    },
    {
      name: "Charizard",
      sex: "Male",
      ability: "Solar Power",
      item: "Charti Berry",
      lv: 100,
      type1: "Fire",
      type2: "Flying",
      skills: [
        {
          name: "Blast Burn",
          type: "Fire"
        },
        {
          name: "Air Slash",
          type: "Flying"
        },
        {
          name: "Protect",
          type: "Normal"
        },
        {
          name: "Solar Beam",
          type: "Grass"
        }
      ]
    },
    {
      name: "Conkeldurr",
      sex: "Male",
      ability: "Iron Fist",
      item: "Assault Vest",
      lv: 100,
      type1: "Fighting",
      type2: "None",
      skills: [
        {
          name: "Drain Punch",
          type: "Fighting"
        },
        {
          name: "Mach Punch",
          type: "Fighting"
        },
        {
          name: "Thunder Punch",
          type: "Electric"
        },
        {
          name: "Rock Slide",
          type: "Rock"
        }
      ]
    }
  ],
  teamId: "0000 0008 MMG9 1J",
  url:
    "https://pokepast.es/66b846e3650113a0",
  tags: ["VGC","G-Max Charizard","Milotic"]
});




