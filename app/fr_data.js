
/** A number of important pieces of data about Flight Rising's breeding mechanics.*/
var FRdata = FRdata || (function(){
	
	
	return {
		// The average number of eggs per nest when the parents are
		// ancient breeds OR different modern breeds
		avgEggsDiffBreed: 2.7,
		// The average number of eggs per nest when the parents are
		// the same modern breed.
		avgEggsSameBreed: 2.54,
		
		// Data from: https://www1.flightrising.com/forums/gde/2866445#post_43461539
		rarity_table: {
			plentiful: {
				plentiful: [0.5,0.5], common: [0.7,0.3], uncommon: [0.85,0.15],
				limited: [0.97,0.03], rare: [0.99,0.01],
			},
			common: {
				plentiful: [0.3,0.7], common: [0.5,0.5], uncommon: [0.75,0.25],
				limited: [0.9,0.1], rare: [0.99,0.01],
			},
			uncommon: {
				plentiful: [0.15,0.85], common: [0.25,0.75], uncommon: [0.5,0.5],
				limited: [0.85,0.15], rare: [0.98,0.02],
			},
			limited: {
				plentiful: [0.03,0.97], common: [0.1,0.9], uncommon: [0.15,0.85],
				limited: [0.5,0.5], rare: [0.97,0.03],
			},
			rare: {
				plentiful: [0.01,0.99], common: [0.01,0.99], uncommon: [0.02,0.98],
				limited: [0.03,0.97], rare: [0.5,0.5],
			},
		},
		
		// Data from: https://www1.flightrising.com/wiki/wiki
		breeds: {
			modern: [
				"bogsneak", "coatl", "fae", "guardian", "imperial", "mirror",
				"nocturne", "pearlcatcher", "ridgeback", "skydancer", "snapper",
				"spiral", "tundra", "wildclaw"
			],
			ancient: [
				"gaoler", "banescale", "veilspun"
			],
			rarities: {
				bogsneak: "uncommon",
				coatl: "rare",
				fae: "plentiful",
				guardian: "plentiful",
				imperial: "limited",
				mirror: "plentiful",
				nocturne: "limited",
				pearlcatcher: "common",
				ridgeback: "common",
				skydancer: "uncommon",
				snapper: "common",
				spiral: "common",
				tundra: "plentiful",
				wildclaw: "rare",
				
				gaoler: "common",
				banescale: "common",
				veilspun: "common"
			}
		},
		
		// TODO the FR modern genes + their rarities
		// TODO the FR gaoler genes + their rarities
		// TODO the FR banescale genes + their rarities
		// TODO the FR veilspun genes + their rarities
		/*
		genes: {
			modern: [],
			gaoler: [],
			banescale: [],
			veilspun: [],
			rarities: {
				
			},
		}, /**/
		
		// The game's colour wheel - each index holds a colour name
		// alongside its hex code. This is a circular array.
		colours: [
			["Maize", "fffdea"],
			["Cream", "ffefdc"],
			["Antique", "d8d6cd"],
			["White", "ffffff"],
			["Moon", "d8d7d8"],
			["Ice", "ebefff"],
			["Orca", "e0dfff"],
			["Platinum", "c8bece"],
			["Silver", "bbbabf"],
			["Dust", "9c9c9e"],
			["Grey", "808080"],
			["Smoke", "9494a9"],
			["Gloom", "535264"],
			["Lead", "413c3f"],
			["Shale", "4d4850"],
			["Flint", "626268"],
			["Charcoal", "545454"],
			["Coal", "4b4946"],
			["Oilslick", "342b25"],
			["Black", "333333"],
			["Obsidian", "1d2224"],
			["Eldritch", "252a25"],
			["Midnight", "252735"],
			["Shadow", "3a2e44"],
			["Blackberry", "4b294f"],
			["Mulberry", "6e235d"],
			["Plum", "853390"],
			["Wisteria", "724e7b"],
			["Thistle", "8f7c8b"],
			["Fog", "a593b0"],
			["Mist", "e1ceff"],
			["Lavender", "cca4e0"],
			["Heather", "9777bd"],
			["Purple", "a261cf"],
			["Orchid", "d950ff"],
			["Amethyst", "993bd0"],
			["Nightshade", "782eb2"],
			["Violet", "643f9c"],
			["Grape", "570fc0"],
			["Royal", "4d2c89"],
			["Eggplant", "332b65"],
			["Iris", "535195"],
			["Storm", "757adb"],
			["Twilight", "474aa0"],
			["Indigo", "2d237a"],
			["Sapphire", "0d095b"],
			["Navy", "212b5f"],
			["Cobalt", "003484"],
			["Ultramarine", "1c51e7"],
			["Blue", "324ba9"],
			["Periwinkle", "4866d5"],
			["Lapis", "2b84ff"],
			["Splash", "6392df"],
			["Cornflower", "75a8ff"],
			["Sky", "aec8ff"],
			["Stonewash", "7895c1"],
			["Overcast", "444f69"],
			["Steel", "556979"],
			["Denim", "2f4557"],
			["Abyss", "0d1e24"],
			["Phthalo", "0b2d46"],
			["Azure", "0a3d67"],
			["Caribbean", "0086ce"],
			["Teal", "2b768f"],
			["Cerulean", "00b4d6"],
			["Cyan", "00fff0"],
			["Robin", "9aeaef"],
			["Aqua", "72c4c4"],
			["Turquoise", "3aa0a1"],
			["Spruce", "8bbbb2"],
			["Pistachio", "e2ffe6"],
			["Seafoam", "b2e2bd"],
			["Mint", "9affc7"],
			["Jade", "61ab89"],
			["Spearmint", "148e67"],
			["Thicket", "005e48"],
			["Peacock", "1f4739"],
			["Emerald", "20603f"],
			["Shamrock", "236925"],
			["Jungle", "1e361a"],
			["Hunter", "1d2715"],
			["Forest", "425035"],
			["Camo", "51684c"],
			["Algae", "97af8b"],
			["Swamp", "687f67"],
			["Avocado", "567c34"],
			["Green", "629c3f"],
			["Fern", "7ece73"],
			["Mantis", "99ff9c"],
			["Pear", "8ecd55"],
			["Leaf", "a5e32d"],
			["Radioactive", "c6ff00"],
			["Honeydew", "d0e672"],
			["Peridot", "e8ffb5"],
			["Chartreuse", "b4cd3c"],
			["Spring", "a9a832"],
			["Crocodile", "828335"],
			["Olive", "697135"],
			["Murk", "4b4420"],
			["Moss", "7e7745"],
			["Goldenrod", "bea55d"],
			["Amber", "c18e1b"],
			["Honey", "d1b300"],
			["Lemon", "ffe63b"],
			["Yellow", "f9e255"],
			["Grapefruit", "f7ff6f"],
			["Banana", "ffec80"],
			["Sanddollar", "ebe7ae"],
			["Flaxen", "fde9ae"],
			["Ivory", "ffd297"],
			["Buttercup", "f6bf6b"],
			["Gold", "e8af49"],
			["Metals", "d1b046"],
			["Marigold", "ffb43b"],
			["Sunshine", "fa912b"],
			["Saffron", "ff8400"],
			["Sunset", "ffa248"],
			["Peach", "ffb576"],
			["Cantaloupe", "ff984f"],
			["Orange", "d5602b"],
			["Bronze", "b2560d"],
			["Terracotta", "b23b07"],
			["Carrot", "ff5500"],
			["Fire", "ef5c23"],
			["Pumpkin", "ff6840"],
			["Tangerine", "ff7360"],
			["Cinnamon", "c05a39"],
			["Caramel", "c67047"],
			["Sand", "b27749"],
			["Tan", "c49a70"],
			["Beige", "cabba2"],
			["Stone", "827a64"],
			["Taupe", "6d665a"],
			["Slate", "564d48"],
			["Driftwood", "766359"],
			["Latte", "977b6c"],
			["Dirt", "76483f"],
			["Clay", "603f3d"],
			["Sable", "57372c"],
			["Umber", "2f1e1a"],
			["Soil", "5a4534"],
			["Hickory", "725639"],
			["Tarnish", "855c32"],
			["Ginger", "90532b"],
			["Brown", "8e5b3f"],
			["Chocolate", "563012"],
			["Auburn", "7b3c1d"],
			["Copper", "a44b28"],
			["Rust", "8b3220"],
			["Tomato", "ba311c"],
			["Vermilion", "e22d17"],
			["Ruby", "cd000e"],
			["Cherry", "aa0024"],
			["Crimson", "850012"],
			["Garnet", "5b0f14"],
			["Sanguine", "2e0002"],
			["Blood", "451717"],
			["Maroon", "652127"],
			["Berry", "8b272c"],
			["Red", "c1272d"],
			["Strawberry", "de3235"],
			["Cerise", "a22929"],
			["Carmine", "b13a3a"],
			["Brick", "9a534d"],
			["Coral", "cc6f6f"],
			["Blush", "ffa2a2"],
			["Cottoncandy", "eb7997"],
			["Watermelon", "db518d"],
			["Magenta", "e934aa"],
			["Fuchsia", "ec0089"],
			["Raspberry", "8a0249"],
			["Wine", "4d0f28"],
			["Mauve", "9c4875"],
			["Pink", "e77fbf"],
			["Bubblegum", "eaa9ff"],
			["Rose", "ffd6f6"],
			["Pearl", "fbe9f8"]
		]
		
	};
	
}());


