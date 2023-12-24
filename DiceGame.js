/*
=================
HTML FILE CONTENT
=================
HTML File Should Include the Following. To add more persons, just create another set containing an 'A' suffix, then a 'B' suffix for a third, etc.
<p>
  <div class="imageContainer">
    <!--BOTTOM-->
    <img id="theImageLayer1">
    <img id="theImageLayer2">
    <img id="theImageLayer3">
    <img id="theImageLayer4">
    <img id="theImageLayer5">
    <img id="theImageLayer6">
    <img id="theImageLayer7">
    <img id="theImageLayer8">
    <!--TOP-->
  </div>
</p>

================
CSS FILE CONTENT
================
.imageContainer{
	position:relative;
	width:8vw;
	height:20vh;
}

---------------
Image Container
---------------
.imageContainer img{
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
*/
//=======================
//RANDOM NUMBER GENERATOR
//=======================
function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min)) + min;
}

//=========
//PNG FILES
//=========
//====
//DICE
//====
var diceImages =
[
	"DiceModule/dice_One.png",
	"DiceModule/dice_Two.png",
	"DiceModule/dice_Three.png",
	"DiceModule/dice_Four.png",
	"DiceModule/dice_Five.png",
	"DiceModule/dice_Six.png"
]

var playerDice =
[
	document.getElementById("playerOneDice"),
	document.getElementById("playerTwoDice")
]

var riskToleranceNames=
[
	"Low",
	"Neutral",
	"High"
]

var riskToleranceThresholds=
[
	1,
	5,
	10
]

var playerRiskTolerance=
[
	null,
	""
	//Add more if needed.
]

var playerRiskToleranceIDs=
[
	document.getElementById("playerOneRiskTolerance"),
	document.getElementById("playerTwoRiskTolerance")
]

//===============
//IMAGE VARIABLES
//===============
var images =
[
	//images[0] = background
	[
		{
			Name: "Light Grey Background",
			Image: "PersonMakerModule/Images/Backgrounds/Background_LightGrey.png"
		},
		{
			Name: "Medium Grey Background",
			Image: "PersonMakerModule/Images/Backgrounds/Background_MediumGrey.png"
		}
	],

	//images[1] = Male Torsos
	[
		maleTorso1=
		{
			Name: "Male Torso 1",
			Image: "PersonMakerModule/Images/Torsos/MaleTorso1.png"
		}
	],

	//images[2] = Female Torsos
	[
		femaleTorso1=
		{
			Name: "Female Torso 1",
			Image: "PersonMakerModule/Images/Torsos/FemaleTorso1.png"
		}
	],
	//images[3] = Male Necks
	[
		maleNeck1=
		{
			Name: "Male Neck 1",
			Image: "PersonMakerModule/Images/Necks/MaleNeck1.png"
		}
	],
	//images[4] = Female Necks
	[
		femaleNeck1=
		{
			Name: "Female Neck 1",
			Image: "PersonMakerModule/Images/Necks/FemaleNeck1.png"
		}
	],
	//images[5] = Male Shirts
	[
		maleShirt1=
		{
			Name: "Male Shirt Black",
			Image: "PersonMakerModule/Images/Shirts/MaleShirtBlack.png"
		},
		maleShirt2=
		{
			Name: "Male Shirt Purple",
			Image: "PersonMakerModule/Images/Shirts/MaleShirtPurple.png"
		},
		maleShirt3=
		{
			Name: "Male Shirt Blue",
			Image: "PersonMakerModule/Images/Shirts/MaleShirtBlue.png"
		},
		maleShirt4=
		{
			Name: "Male Shirt Green",
			Image: "PersonMakerModule/Images/Shirts/MaleShirtGreen.png"
		},
		maleShirt5=
		{
			Name: "Male Shirt Brown",
			Image: "PersonMakerModule/Images/Shirts/MaleShirtBrown.png"
		},
		maleShirt6=
		{
			Name: "Male Shirt Red",
			Image: "PersonMakerModule/Images/Shirts/MaleShirtRed.png"
		},
		maleShirt7=
		{
			Name: "Male Shirt White",
			Image: "PersonMakerModule/Images/Shirts/MaleShirtWhite.png"
		}
	],
	//images[6] = Female Shirts
	[
		femaleShirt1=
		{
			Name: "Female Shirt Black",
			Image: "PersonMakerModule/Images/Shirts/FemaleShirtBlack.png"
		},
		femaleShirt2=
		{
			Name: "Female Shirt Aqua",
			Image: "PersonMakerModule/Images/Shirts/FemaleShirtAqua.png"
		},
		femaleShirt3=
		{
			Name: "Female Shirt Red",
			Image: "PersonMakerModule/Images/Shirts/FemaleShirtRed.png"
		},
		femaleShirt4=
		{
			Name: "Female Shirt Green",
			Image: "PersonMakerModule/Images/Shirts/FemaleShirtGreen.png"
		},
		femaleShirt5=
		{
			Name: "Female Shirt Purple",
			Image: "PersonMakerModule/Images/Shirts/FemaleShirtPurple.png"
		},
		femaleShirt6=
		{
			Name: "Female Shirt White",
			Image: "PersonMakerModule/Images/Shirts/FemaleShirtWhite.png"
		},
		femaleShirt7=
		{
			Name: "Female Shirt Blue",
			Image: "PersonMakerModule/Images/Shirts/FemaleShirtBlue.png"
		}
	],
	//Images[7] = Heads
	[
		head1=
		{
			Name: "Head 1",
			Image: "PersonMakerModule/Images/Heads/Head1.png"
		}
	],
	//Images[8] = Male Cranial Hair
	[
		maleCranialHair1=
		{
			Name: "Male Cranial Hair - Blonde",
			Image: "PersonMakerModule/Images/CranialHair/MaleCranialHairBlonde.png"
		},
		maleCranialHair2=
		{
			Name: "Male Cranial Hair - Black",
			Image: "PersonMakerModule/Images/CranialHair/MaleCranialHairBlack.png"
		},
		maleCranialHair3=
		{
			Name: "Male Cranial Hair - Brown",
			Image: "PersonMakerModule/Images/CranialHair/MaleCranialHairBrown.png"
		},
		maleCranialHair4=
		{
			Name: "Bald",
			Image:"PersonMakerModule/Images/CranialHair/Bald.png"
		}
	],
	//Images[9] = Female Cranial Hair Front
	[
		femaleCranialHairFront1=
		{
			Name: "Female Cranial Hair - Red, Front, Short",
			Image: "PersonMakerModule/Images/CranialHair/FemaleCranialHairRedFrontShort.png"
		},
		femaleCranialHairFront2=
		{
			Name: "Female Cranial Hair - Black, Front, Short",
			Image: "PersonMakerModule/Images/CranialHair/FemaleCranialHairBlackFrontShort.png"
		},
		femaleCranialHairFront3=
		{
			Name: "Female Cranial Hair - Brown, Front, Short",
			Image: "PersonMakerModule/Images/CranialHair/FemaleCranialHairBrownFrontShort.png"
		}
	],
	//Images[10] = Female Cranial Hair Back
	[
		femaleCranialHairBack1=
		{
			Name: "Female Cranial Hair - Red, Back, Short",
			Image: "PersonMakerModule/Images/CranialHair/FemaleCranialHairRedBackShort.png"
		},
		femaleCranialHairBack2=
		{
			Name: "Female Cranial Hair - Black, Back, Short",
			Image: "PersonMakerModule/Images/CranialHair/FemaleCranialHairBlackBackShort.png"
		},
		femaleCranialHairBack3=
		{
			Name: "Female Cranial Hair - Brown, Back, Short",
			Image: "PersonMakerModule/Images/CranialHair/FemaleCranialHairBrownBackShort.png"
		}
	],
	//Images[11] = Facial Hair
	[
		facialHair1=
		{
			Name: "Facial Hair - Blonde",
			Image: "PersonMakerModule/Images/FacialHair/FacialHairBlonde.png"
		},
		facialHair2=
		{
			Name: "Facial Hair - Black",
			Image: "PersonMakerModule/Images/FacialHair/FacialHairBlack.png"
		},
		facialHair3=
		{
			Name: "Facial Hair - Brown",
			Image: "PersonMakerModule/Images/FacialHair/FacialHairBrown.png"
		},
		facialHair4=
		{
			Name: "No Facial Hair",
			Image:"PersonMakerModule/Images/FacialHair/FacialHairNone.png"
		}
	]
];

//============
//IMAGE LAYERS
//============
var theLayers=
[
	[
	//"Bottom"

	//theLayers[0] - Background
	document.getElementById("theImageLayer1"),

	//theLayers[1] - Torso
	document.getElementById("theImageLayer2"),

	//theLayers[2] - Hair (Back)
	document.getElementById("theImageLayer3"),

	//theLayers[3] - Neck
	document.getElementById("theImageLayer4"),

	//theLayers[4] - Shirt
	document.getElementById("theImageLayer5"),

	//theLayers[5] - Head
	document.getElementById("theImageLayer6"),

	//theLayers[6] - Hair (Front)
	document.getElementById("theImageLayer7"),

	//theLayers[7] - Facial Hair
	document.getElementById("theImageLayer8"),
	document.getElementById("theImageLayer9")
	//"Top"
	],
	[
		//theLayers[0] - Background
		document.getElementById("theImageLayer1A"),

		//theLayers[1] - Torso
		document.getElementById("theImageLayer2A"),

		//theLayers[2] - Hair (Back)
		document.getElementById("theImageLayer3A"),

		//theLayers[3] - Neck
		document.getElementById("theImageLayer4A"),

		//theLayers[4] - Shirt
		document.getElementById("theImageLayer5A"),

		//theLayers[5] - Head
		document.getElementById("theImageLayer6A"),

		//theLayers[6] - Hair (Front)
		document.getElementById("theImageLayer7A"),

		//theLayers[7] - Facial Hair
		document.getElementById("theImageLayer8A"),
		document.getElementById("theImageLayer9A")
	]
]

var theNamesIDs=
[
	document.getElementById("playerOneName"),
	document.getElementById("playerTwoName")
]

var theOverallScoreIDs=
[
	document.getElementById("playerOneOverallScore"),
	document.getElementById("playerTwoOverallScore")
]

var theSessionScoreIDs=
[
	document.getElementById("playerOneSessionScore"),
	document.getElementById("playerTwoSessionScore")

]
/*
	[
	//"Bottom"

	//theLayers[0] - Background
	document.getElementById("theImageLayer1A"),

	//theLayers[1] - Torso
	document.getElementById("theImageLayer2A"),

	//theLayers[2] - Hair (Back)
	document.getElementById("theImageLayer3A"),

	//theLayers[3] - Neck
	document.getElementById("theImageLayer4A"),

	//theLayers[4] - Shirt
	document.getElementById("theImageLayer5A"),

	//theLayers[5] - Head
	document.getElementById("theImageLayer6A"),

	//theLayers[6] - Hair (Front)
	document.getElementById("theImageLayer7A"),

	//theLayers[7] - Facial Hair
	document.getElementById("theImageLayer8A"),
	document.getElementById("theImageLayer9A")
	//"Top"
	],
	[
	//"Bottom"

	//theLayers[0] - Background
	document.getElementById("theImageLayer1B"),

	//theLayers[1] - Torso
	document.getElementById("theImageLayer2B"),

	//theLayers[2] - Hair (Back)
	document.getElementById("theImageLayer3B"),

	//theLayers[3] - Neck
	document.getElementById("theImageLayer4B"),

	//theLayers[4] - Shirt
	document.getElementById("theImageLayer5B"),

	//theLayers[5] - Head
	document.getElementById("theImageLayer6B"),

	//theLayers[6] - Hair (Front)
	document.getElementById("theImageLayer7B"),

	//theLayers[7] - Facial Hair
	document.getElementById("theImageLayer8B"),
	document.getElementById("theImageLayer9B")
	//"Top"
	],
	[
	//"Bottom"

	//theLayers[0] - Background
	document.getElementById("theImageLayer1C"),

	//theLayers[1] - Torso
	document.getElementById("theImageLayer2C"),

	//theLayers[2] - Hair (Back)
	document.getElementById("theImageLayer3C"),

	//theLayers[3] - Neck
	document.getElementById("theImageLayer4C"),

	//theLayers[4] - Shirt
	document.getElementById("theImageLayer5C"),

	//theLayers[5] - Head
	document.getElementById("theImageLayer6C"),

	//theLayers[6] - Hair (Front)
	document.getElementById("theImageLayer7C"),

	//theLayers[7] - Facial Hair
	document.getElementById("theImageLayer8C"),
	document.getElementById("theImageLayer9C")
	//"Top"
	],
	[
	//"Bottom"

	//theLayers[0] - Background
	document.getElementById("theImageLayer1D"),

	//theLayers[1] - Torso
	document.getElementById("theImageLayer2D"),

	//theLayers[2] - Hair (Back)
	document.getElementById("theImageLayer3D"),

	//theLayers[3] - Neck
	document.getElementById("theImageLayer4D"),

	//theLayers[4] - Shirt
	document.getElementById("theImageLayer5D"),

	//theLayers[5] - Head
	document.getElementById("theImageLayer6D"),

	//theLayers[6] - Hair (Front)
	document.getElementById("theImageLayer7D"),

	//theLayers[7] - Facial Hair
	document.getElementById("theImageLayer8D"),
	document.getElementById("theImageLayer9D")
	//"Top"
	],
	[
	//"Bottom"

	//theLayers[0] - Background
	document.getElementById("theImageLayer1E"),

	//theLayers[1] - Torso
	document.getElementById("theImageLayer2E"),

	//theLayers[2] - Hair (Back)
	document.getElementById("theImageLayer3E"),

	//theLayers[3] - Neck
	document.getElementById("theImageLayer4E"),

	//theLayers[4] - Shirt
	document.getElementById("theImageLayer5E"),

	//theLayers[5] - Head
	document.getElementById("theImageLayer6E"),

	//theLayers[6] - Hair (Front)
	document.getElementById("theImageLayer7E"),

	//theLayers[7] - Facial Hair
	document.getElementById("theImageLayer8E"),
	document.getElementById("theImageLayer9E")
	//"Top"
	]
];
*/

//Variables Re: Images
var genderVar = 0;
var maleColorVar = 0;
var shirtColorVar = getRandomInt(0,7);

//Variables Re: Turns
var turn = 0;
var sessionScore=0;
var playerOverallScores=
[
	0,
	0
];

//--------
//Surnames
//--------
var surnames = [
	{ Name: "Smith", Frequency:129 },
	{ Name: "Johnson", Frequency:156 },
	{ Name: "Williams", Frequency:172 },
	{ Name: "Brown", Frequency:183 },
	{ Name: "Jones", Frequency:193 },
	{ Name: "Davis", Frequency:220 },
	{ Name: "Miller", Frequency:226 },
	{ Name: "Anderson", Frequency:289 },
	{ Name: "Wilson", Frequency:300 },
	{ Name: "Garcia", Frequency:319 },
	{ Name: "Taylor", Frequency:322 },
	{ Name: "Thomas", Frequency:330 },
	{ Name: "Moore", Frequency:334 },
	{ Name: "Rodriguez", Frequency:336 },
	{ Name: "Lee", Frequency:341 },
	{ Name: "Jackson", Frequency:344 },
	{ Name: "Martin", Frequency:348 },
	{ Name: "White", Frequency:352 },
	{ Name: "Martinez", Frequency:354 },
	{ Name: "Thompson", Frequency:361 },
	{ Name: "Harris", Frequency:368 },
	{ Name: "Clark", Frequency:390 },
	{ Name: "Hernandez", Frequency:395 },
	{ Name: "Lopez", Frequency:420 },
	{ Name: "Lewis", Frequency:431 },
	{ Name: "Walker", Frequency:438 },
	{ Name: "Robinson", Frequency:442 },
	{ Name: "Allen", Frequency:445 },
	{ Name: "Gonzalez", Frequency:445 },
	{ Name: "Hall", Frequency:447 },
	{ Name: "Young", Frequency:461 },
	{ Name: "King", Frequency:490 },
	{ Name: "Wright", Frequency:494 },
	{ Name: "Adams", Frequency:495 },
	{ Name: "Hill", Frequency:504 },
	{ Name: "Baker", Frequency:507 },
	{ Name: "Green", Frequency:509 },
	{ Name: "Scott", Frequency:510 },
	{ Name: "Nelson", Frequency:510 },
	{ Name: "Perez", Frequency:513 },
	{ Name: "Campbell", Frequency:552 },
	{ Name: "Carter", Frequency:559 },
	{ Name: "Roberts", Frequency:573 },
	{ Name: "Sanchez", Frequency:574 },
	{ Name: "Mitchell", Frequency:593 },
	{ Name: "Evans", Frequency:596 },
	{ Name: "Phillips", Frequency:614 },
	{ Name: "Turner", Frequency:629 },
	{ Name: "Edwards", Frequency:633 },
	{ Name: "Collins", Frequency:642 },
	{ Name: "Parker", Frequency:645 },
	{ Name: "Ramirez", Frequency:651 },
	{ Name: "Nguyen", Frequency:665 },
	{ Name: "Stewart", Frequency:667 },
	{ Name: "Morris", Frequency:669 },
	{ Name: "Cook", Frequency:677 },
	{ Name: "Rogers", Frequency:694 },
	{ Name: "Murphy", Frequency:695 },
	{ Name: "Peterson", Frequency:730 },
	{ Name: "Morgan", Frequency:732 },
	{ Name: "Cooper", Frequency:733 },
	{ Name: "Bell", Frequency:1004 },
	{ Name: "Flores", Frequency:1009 },
	{ Name: "Bailey", Frequency:1012 },
	{ Name: "Torres", Frequency:1012 },
	{ Name: "Reed", Frequency:1044 },
	{ Name: "Cox", Frequency:1055 },
	{ Name: "Rivera", Frequency:1065 },
	{ Name: "Wood", Frequency:1078 },
	{ Name: "Howard", Frequency:1089 },
	{ Name: "Ward", Frequency:1098 },
	{ Name: "Kelly", Frequency:1100 },
	{ Name: "Brooks", Frequency:1107 },
	{ Name: "Bennett", Frequency:1115 },
	{ Name: "Gray", Frequency:1129 },
	{ Name: "Watson", Frequency:1135 },
	{ Name: "Richardson", Frequency:1156 },
	{ Name: "Hughes", Frequency:1190 },
	{ Name: "James", Frequency:1202 },
	{ Name: "Ross", Frequency:1228 },
	{ Name: "Foster", Frequency:1232 },
	{ Name: "Gomez", Frequency:1233 },
	{ Name: "Sullivan", Frequency:1235 },
	{ Name: "Myers", Frequency:1236 },
	{ Name: "Diaz", Frequency:1238 },
	{ Name: "Price", Frequency:1242 },
	{ Name: "Long", Frequency:1265 },
	{ Name: "Butler", Frequency:1280 },
	{ Name: "Barnes", Frequency:1292 },
	{ Name: "Sanders", Frequency:1293 },
	{ Name: "Kim", Frequency:1298 },
	{ Name: "Coleman", Frequency:1298 },
	{ Name: "Cruz", Frequency:1300 },
	{ Name: "Fisher", Frequency:1308 },
	{ Name: "Russell", Frequency:1309 },
	{ Name: "Reyes", Frequency:1317 },
	{ Name: "Powell", Frequency:1318 },
	{ Name: "Perry", Frequency:1320 },
	{ Name: "Henderson", Frequency:1322 },
	{ Name: "Jenkins", Frequency:1322 },
	{ Name: "Alexander", Frequency:1383 },
	{ Name: "Hamilton", Frequency:1393 },
	{ Name: "Graham", Frequency:1402 },
	{ Name: "West", Frequency:1414 },
	{ Name: "Reynolds", Frequency:1417 },
	{ Name: "Simmons", Frequency:1422 },
	{ Name: "Patterson", Frequency:1422 },
	{ Name: "Jordan", Frequency:1428 },
	{ Name: "Cole", Frequency:1428 },
	{ Name: "Wallace", Frequency:1429 },
	{ Name: "Griffin", Frequency:1434 },
	{ Name: "Morales", Frequency:1460 },
	{ Name: "Ortiz", Frequency:1467 },
	{ Name: "Hayes", Frequency:1473 },
	{ Name: "Ellis", Frequency:1482 },
	{ Name: "Bryant", Frequency:1495 },
	{ Name: "Gibson", Frequency:1512 },
	{ Name: "Gonzales", Frequency:1513 },
	{ Name: "Stevens", Frequency:1532 },
	{ Name: "Harrison", Frequency:1533 },
	{ Name: "Ford", Frequency:1538 },
	{ Name: "McDonald", Frequency:1546 },
	{ Name: "Patel", Frequency:1567 },
	{ Name: "Murray", Frequency:1569 },
	{ Name: "Ramos", Frequency:1586 },
	{ Name: "Gutierrez", Frequency:1587 },
	{ Name: "Owens", Frequency:1592 },
	{ Name: "Marshall", Frequency:1592 },
	{ Name: "Kennedy", Frequency:1596 },
	{ Name: "Wells", Frequency:1629 },
	{ Name: "Burns", Frequency:1636 },
	{ Name: "Woods", Frequency:1641 },
	{ Name: "Freeman", Frequency:1675 },
	{ Name: "Crawford", Frequency:1682 },
	{ Name: "Olson", Frequency:1683 },
	{ Name: "Gordon", Frequency:1686 },
	{ Name: "Webb", Frequency:1710 },
	{ Name: "Henry", Frequency:1723 },
	{ Name: "Wagner", Frequency:1726 },
	{ Name: "Tucker", Frequency:1727 },
	{ Name: "Ruiz", Frequency:1729 },
	{ Name: "Meyer", Frequency:1735 },
	{ Name: "Shaw", Frequency:1736 },
	{ Name: "Snyder", Frequency:1742 },
	{ Name: "Black", Frequency:1763 },
	{ Name: "Washington", Frequency:1766 },
	{ Name: "Fox", Frequency:1768 },
	{ Name: "Dixon", Frequency:1771 },
	{ Name: "Simpson", Frequency:1781 },
	{ Name: "Chavez", Frequency:1782 },
	{ Name: "Mason", Frequency:1793 },
	{ Name: "Hunt", Frequency:1796 },
	{ Name: "Porter", Frequency:1799 },
	{ Name: "Boyd", Frequency:1802 },
	{ Name: "Castillo", Frequency:1809 },
	{ Name: "Rose", Frequency:1809 },
	{ Name: "Stone", Frequency:1823 },
	{ Name: "Hunter", Frequency:1830 },
	{ Name: "Palmer", Frequency:1834 },
	{ Name: "Schmidt", Frequency:1834 },
	{ Name: "Hicks", Frequency:1843 },
	{ Name: "Vasquez", Frequency:1851 },
	{ Name: "Robertson", Frequency:1879 },
	{ Name: "Mendoza", Frequency:1881 },
	{ Name: "Warren", Frequency:1881 },
	{ Name: "Ferguson", Frequency:1884 },
	{ Name: "Alvarez", Frequency:1890 },
	{ Name: "Holmes", Frequency:1891 },
	{ Name: "Rice", Frequency:1901 },
	{ Name: "Ryan", Frequency:1902 },
	{ Name: "Mills", Frequency:1903 },
	{ Name: "Dunn", Frequency:1905 },
	{ Name: "Gardner", Frequency:1921 },
	{ Name: "Hansen", Frequency:1927 },
	{ Name: "Arnold", Frequency:1933 },
	{ Name: "Chen", Frequency:1940 },
	{ Name: "Nichols", Frequency:1950 },
	{ Name: "Hoffman", Frequency:1964 },
	{ Name: "Daniels", Frequency:1965 },
	{ Name: "Stephens", Frequency:1976 },
	{ Name: "Romero", Frequency:1999 },
	{ Name: "Hawkins", Frequency:1999 },
	{ Name: "Grant", Frequency:2001 },
	{ Name: "Carroll", Frequency:2003 },
	{ Name: "Kelley", Frequency:2009 },
	{ Name: "Hart", Frequency:2016 },
	{ Name: "Duncan", Frequency:2019 },
	{ Name: "Bradley", Frequency:2022 },
	{ Name: "Elliott", Frequency:2027 },
	{ Name: "Andrews", Frequency:2034 },
	{ Name: "Payne", Frequency:2040 },
	{ Name: "Berry", Frequency:2049 },
	{ Name: "Johnston", Frequency:2054 },
	{ Name: "Tran", Frequency:2057 },
	{ Name: "Weaver", Frequency:2059 },
	{ Name: "Armstrong", Frequency:2062 },
	{ Name: "Cunningham", Frequency:2064 },
	{ Name: "Peters", Frequency:2070 },
	{ Name: "Pierce", Frequency:2071 },
	{ Name: "Fernandez", Frequency:2073 },
	{ Name: "Spencer", Frequency:2089 },
	{ Name: "Ray", Frequency:2097 },
	{ Name: "Hudson", Frequency:2099 },
	{ Name: "Jimenez", Frequency:2107 },
	{ Name: "Moreno", Frequency:2112 },
	{ Name: "Knight", Frequency:2114 },
	{ Name: "Carlson", Frequency:2140 },
	{ Name: "Lane", Frequency:2144 },
	{ Name: "Riley", Frequency:2144 },
	{ Name: "Greene", Frequency:2150 },
	{ Name: "Matthews", Frequency:2153 },
	{ Name: "Carpenter", Frequency:2156 },
	{ Name: "Larson", Frequency:2157 },
	{ Name: "Burke", Frequency:2164 },
	{ Name: "Chapman", Frequency:2173 },
	{ Name: "Willis", Frequency:2179 },
	{ Name: "Richards", Frequency:2179 },
	{ Name: "Medina", Frequency:2186 },
	{ Name: "Garza", Frequency:2193 },
	{ Name: "Herrera", Frequency:2197 },
	{ Name: "Watkins", Frequency:2222 },
	{ Name: "George", Frequency:2240 },
	{ Name: "Castro", Frequency:2241 },
	{ Name: "Harper", Frequency:2241 },
	{ Name: "Wheeler", Frequency:2247 },
	{ Name: "Perkins", Frequency:2252 },
	{ Name: "Lawrence", Frequency:2256 },
	{ Name: "Jacobs", Frequency:2291 },
	{ Name: "Jensen", Frequency:2299 },
	{ Name: "Carr", Frequency:2304 },
	{ Name: "Morrison", Frequency:2307 },
	{ Name: "Silva", Frequency:2351 },
	{ Name: "Austin", Frequency:2357 },
	{ Name: "Bishop", Frequency:2361 },
	{ Name: "Dean", Frequency:2364 },
	{ Name: "Lynch", Frequency:2368 },
	{ Name: "Wong", Frequency:2371 },
	{ Name: "Franklin", Frequency:2409 },
	{ Name: "Montgomery", Frequency:2423 },
	{ Name: "Harvey", Frequency:2428 },
	{ Name: "Gilbert", Frequency:2429 },
	{ Name: "Hanson", Frequency:2430 },
	{ Name: "Williamson", Frequency:2441 },
	{ Name: "Weber", Frequency:2442 },
	{ Name: "Lawson", Frequency:2474 },
	{ Name: "Vargas", Frequency:2495 },
	{ Name: "Cohen", Frequency:2501 },
	{ Name: "Howell", Frequency:2501 },
	{ Name: "Aguilar", Frequency:2527 },
	{ Name: "Garrett", Frequency:2530 },
	{ Name: "Walsh", Frequency:2532 },
	{ Name: "Reid", Frequency:2534 },
	{ Name: "Burton", Frequency:2538 },
	{ Name: "Wang", Frequency:2541 },
	{ Name: "Oliver", Frequency:2554 },
	{ Name: "Day", Frequency:2555 },
	{ Name: "Welch", Frequency:2555 },
	{ Name: "Schneider", Frequency:2555 },
	{ Name: "Fuller", Frequency:2556 },
	{ Name: "McCoy", Frequency:2562 },
	{ Name: "Davidson", Frequency:2571 },
	{ Name: "Schultz", Frequency:2592 },
	{ Name: "Newman", Frequency:2602 },
	{ Name: "Sims", Frequency:2621 },
	{ Name: "Fowler", Frequency:2633 },
	{ Name: "Salazar", Frequency:2634 },
	{ Name: "Bowman", Frequency:2636 },
	{ Name: "Walters", Frequency:2641 },
	{ Name: "Holland", Frequency:2658 },
	{ Name: "May", Frequency:2659 },
	{ Name: "Brewer", Frequency:2691 },
	{ Name: "Barrett", Frequency:2693 },
	{ Name: "Singh", Frequency:2709 },
	{ Name: "Keller", Frequency:2711 },
	{ Name: "Guzman", Frequency:2718 },
	{ Name: "Little", Frequency:2726 },
	{ Name: "Fields", Frequency:2729 },
	{ Name: "Banks", Frequency:2733 },
	{ Name: "Pearson", Frequency:2738 },
	{ Name: "Curtis", Frequency:2741 },
	{ Name: "Munoz", Frequency:2747 },
	{ Name: "Beck", Frequency:2751 },
	{ Name: "Douglas", Frequency:2772 },
	{ Name: "Lucas", Frequency:2809 },
	{ Name: "Pena", Frequency:2856 },
	{ Name: "Wade", Frequency:2857 },
	{ Name: "Becker", Frequency:2878 },
	{ Name: "Barnett", Frequency:2879 },
	{ Name: "Soto", Frequency:2894 },
	{ Name: "Mendez", Frequency:2895 },
	{ Name: "Park", Frequency:2896 },
	{ Name: "Chambers", Frequency:2909 },
	{ Name: "Powers", Frequency:2923 },
	{ Name: "Bates", Frequency:2939 },
	{ Name: "Caldwell", Frequency:2941 },
	{ Name: "Schwartz", Frequency:2944 },
	{ Name: "Hopkins", Frequency:2963 },
	{ Name: "Craig", Frequency:2977 },
	{ Name: "Byrd", Frequency:2990 },
	{ Name: "Valdez", Frequency:2995 },
	{ Name: "Leonard", Frequency:3011 },
	{ Name: "Fleming", Frequency:3021 },
	{ Name: "Gregory", Frequency:3049 },
	{ Name: "Stanley", Frequency:3054 },
	{ Name: "Delgado", Frequency:3065 },
	{ Name: "Lowe", Frequency:3072 },
	{ Name: "Benson", Frequency:3081 },
	{ Name: "Frazier", Frequency:3084 },
	{ Name: "Lambert", Frequency:3086 },
	{ Name: "Klein", Frequency:3090 },
	{ Name: "Jennings", Frequency:3091 },
	{ Name: "Shelton", Frequency:3096 },
	{ Name: "Barker", Frequency:3122 },
	{ Name: "Rhodes", Frequency:3127 },
	{ Name: "Obrien", Frequency:3129 },
	{ Name: "Sutton", Frequency:3133 },
	{ Name: "Norris", Frequency:3133 },
	{ Name: "McDaniel", Frequency:3162 },
	{ Name: "Watts", Frequency:3166 },
	{ Name: "McCarthy", Frequency:3169 },
	{ Name: "Hale", Frequency:3172 },
	{ Name: "Mann", Frequency:3176 },
	{ Name: "Holt", Frequency:3178 },
	{ Name: "Neal", Frequency:3190 },
	{ Name: "Steele", Frequency:3200 },
	{ Name: "Vaughn", Frequency:3205 },
	{ Name: "Erickson", Frequency:3211 },
	{ Name: "Guerrero", Frequency:3220 },
	{ Name: "Santos", Frequency:3225 },
	{ Name: "Parks", Frequency:3228 },
	{ Name: "Love", Frequency:3246 },
	{ Name: "Wolfe", Frequency:3247 },
	{ Name: "Zimmerman", Frequency:3250 },
	{ Name: "Chang", Frequency:3269 },
	{ Name: "Haynes", Frequency:3279 },
	{ Name: "Warner", Frequency:3281 },
	{ Name: "Bush", Frequency:3282 },
	{ Name: "Sandoval", Frequency:3295 },
	{ Name: "Fletcher", Frequency:3295 },
	{ Name: "Horton", Frequency:3305 },
	{ Name: "Dawson", Frequency:3306 },
	{ Name: "Graves", Frequency:3311 },
	{ Name: "Miles", Frequency:3313 },
	{ Name: "Joseph", Frequency:3321 },
	{ Name: "Terry", Frequency:3327 },
	{ Name: "Rios", Frequency:3334 },
	{ Name: "Lyons", Frequency:3336 },
	{ Name: "Alvarado", Frequency:3337 },
	{ Name: "Ortega", Frequency:3349 },
	{ Name: "Baldwin", Frequency:3356 },
	{ Name: "Bowen", Frequency:3362 },
	{ Name: "Estrada", Frequency:3365 },
	{ Name: "Page", Frequency:3369 },
	{ Name: "McKinney", Frequency:3391 },
	{ Name: "Swanson", Frequency:3395 },
	{ Name: "Chandler", Frequency:3405 },
	{ Name: "Griffith", Frequency:3413 },
	{ Name: "Quinn", Frequency:3439 },
	{ Name: "Reeves", Frequency:3441 },
	{ Name: "Li", Frequency:3443 },
	{ Name: "Higgins", Frequency:3447 },
	{ Name: "Santiago", Frequency:3447 },
	{ Name: "Daniel", Frequency:3451 },
	{ Name: "Contreras", Frequency:3462 },
	{ Name: "Vega", Frequency:3466 },
	{ Name: "Simon", Frequency:3485 },
	{ Name: "Robbins", Frequency:3489 },
	{ Name: "Ball", Frequency:3490 },
	{ Name: "Blair", Frequency:3491 },
	{ Name: "Hardy", Frequency:3492 },
	{ Name: "Gross", Frequency:3502 },
	{ Name: "Christensen", Frequency:3507 },
	{ Name: "Cummings", Frequency:3508 },
	{ Name: "FitzGerald", Frequency:3512 },
	{ Name: "Sharp", Frequency:3513 },
	{ Name: "Chan", Frequency:3533 },
	{ Name: "Nunez", Frequency:3534 },
	{ Name: "Doyle", Frequency:3538 },
	{ Name: "Moran", Frequency:3545 },
	{ Name: "Maldonado", Frequency:3548 },
	{ Name: "Thornton", Frequency:3551 },
	{ Name: "Fischer", Frequency:3565 },
	{ Name: "Liu", Frequency:3574 },
	{ Name: "McLaughlin", Frequency:3583 },
	{ Name: "Cross", Frequency:3583 },
	{ Name: "Ramsey", Frequency:3584 },
	{ Name: "Barber", Frequency:3588 },
	{ Name: "Wolf", Frequency:3590 },
	{ Name: "Dennis", Frequency:3599 },
	{ Name: "Paul", Frequency:3608 },
	{ Name: "Francis", Frequency:3609 },
	{ Name: "Goodman", Frequency:3619 },
	{ Name: "Brady", Frequency:3621 },
	{ Name: "Moss", Frequency:3622 },
	{ Name: "Sherman", Frequency:3684 },
	{ Name: "Manning", Frequency:3686 },
	{ Name: "Padilla", Frequency:3688 },
	{ Name: "Garner", Frequency:3699 },
	{ Name: "Dominguez", Frequency:3713 },
	{ Name: "Gill", Frequency:3714 },
	{ Name: "Harmon", Frequency:3731 },
	{ Name: "Curry", Frequency:3748 },
	{ Name: "Newton", Frequency:3757 },
	{ Name: "Yang", Frequency:3757 },
	{ Name: "Burgess", Frequency:3761 },
	{ Name: "Stevenson", Frequency:3761 },
	{ Name: "Webster", Frequency:3776 },
	{ Name: "Luna", Frequency:3776 },
	{ Name: "McGee", Frequency:3781 },
	{ Name: "Rodgers", Frequency:3799 },
	{ Name: "Walton", Frequency:3800 },
	{ Name: "Reese", Frequency:3805 },
	{ Name: "Acosta", Frequency:3810 },
	{ Name: "Clarke", Frequency:3816 },
	{ Name: "Todd", Frequency:3823 },
	{ Name: "Blake", Frequency:3829 },
	{ Name: "Goodwin", Frequency:3829 },
	{ Name: "Gallagher", Frequency:3836 },
	{ Name: "Frank", Frequency:3843 },
	{ Name: "Cannon", Frequency:3843 },
	{ Name: "Waters", Frequency:3875 },
	{ Name: "Mueller", Frequency:3893 },
	{ Name: "Potter", Frequency:3895 },
	{ Name: "Saunders", Frequency:3905 },
	{ Name: "Malone", Frequency:3907 },
	{ Name: "Schroeder", Frequency:3909 },
	{ Name: "Barton", Frequency:3916 },
	{ Name: "Marquez", Frequency:3916 },
	{ Name: "Hodges", Frequency:3923 },
	{ Name: "Farmer", Frequency:3953 },
	{ Name: "Lin", Frequency:3959 },
	{ Name: "Bauer", Frequency:3963 },
	{ Name: "Espinoza", Frequency:3964 },
	{ Name: "Hines", Frequency:3975 },
	{ Name: "Rowe", Frequency:3979 },
	{ Name: "Mack", Frequency:3987 },
	{ Name: "Vazquez", Frequency:3999 },
	{ Name: "Cortez", Frequency:4007 },
	{ Name: "Wise", Frequency:4008 },
	{ Name: "Hammond", Frequency:4012 },
	{ Name: "Kramer", Frequency:4022 },
	{ Name: "Hubbard", Frequency:4023 },
	{ Name: "Casey", Frequency:4031 },
	{ Name: "Bowers", Frequency:4040 },
	{ Name: "Navarro", Frequency:4048 },
	{ Name: "Logan", Frequency:4056 },
	{ Name: "Maxwell", Frequency:4064 },
	{ Name: "Adkins", Frequency:4066 },
	{ Name: "Tate", Frequency:4068 },
	{ Name: "Ingram", Frequency:4090 },
	{ Name: "Cobb", Frequency:4096 },
	{ Name: "Buchanan", Frequency:4100 },
	{ Name: "Rojas", Frequency:4102 },
	{ Name: "Townsend", Frequency:4102 },
	{ Name: "Hartman", Frequency:4102 },
	{ Name: "Harrington", Frequency:4104 },
	{ Name: "Hampton", Frequency:4142 },
	{ Name: "Le", Frequency:4146 },
	{ Name: "Flynn", Frequency:4161 },
	{ Name: "McCormick", Frequency:4161 },
	{ Name: "Mullins", Frequency:4174 },
	{ Name: "Patton", Frequency:4188 },
	{ Name: "McGuire", Frequency:4197 },
	{ Name: "Osborne", Frequency:4198 },
	{ Name: "Weiss", Frequency:4198 },
	{ Name: "Norman", Frequency:4200 },
	{ Name: "Figueroa", Frequency:4202 },
	{ Name: "Parsons", Frequency:4208 },
	{ Name: "Molina", Frequency:4220 },
	{ Name: "Conner", Frequency:4223 },
	{ Name: "Floyd", Frequency:4228 },
	{ Name: "Glover", Frequency:4236 },
	{ Name: "Wu", Frequency:4236 },
	{ Name: "Owen", Frequency:4246 },
	{ Name: "Lloyd", Frequency:4247 },
	{ Name: "Strickland", Frequency:4267 },
	{ Name: "French", Frequency:4289 },
	{ Name: "Roth", Frequency:4296 },
	{ Name: "Pope", Frequency:4299 },
	{ Name: "Lang", Frequency:4323 },
	{ Name: "Gibbs", Frequency:4337 },
	{ Name: "Hogan", Frequency:4343 },
	{ Name: "Miranda", Frequency:4354 },
	{ Name: "Duran", Frequency:4361 },
	{ Name: "Norton", Frequency:4367 },
	{ Name: "Tyler", Frequency:4382 },
	{ Name: "McBride", Frequency:4396 },
	{ Name: "Marsh", Frequency:4407 },
	{ Name: "Sparks", Frequency:4412 },
	{ Name: "Pham", Frequency:4417 },
	{ Name: "Yates", Frequency:4425 },
	{ Name: "Campos", Frequency:4426 },
	{ Name: "Cain", Frequency:4428 },
	{ Name: "Morton", Frequency:4429 },
	{ Name: "Khan", Frequency:4431 },
	{ Name: "Brock", Frequency:4436 },
	{ Name: "Olsen", Frequency:4456 },
	{ Name: "Moody", Frequency:4457 },
	{ Name: "Drake", Frequency:4461 },
	{ Name: "Ballard", Frequency:4479 },
	{ Name: "Huang", Frequency:4487 },
	{ Name: "Cochran", Frequency:4490 },
	{ Name: "Burnett", Frequency:4516 },
	{ Name: "Avila", Frequency:4541 },
	{ Name: "Pratt", Frequency:4546 },
	{ Name: "Bryan", Frequency:4547 },
	{ Name: "Petersen", Frequency:4552 },
	{ Name: "Lindsey", Frequency:4555 },
	{ Name: "Salinas", Frequency:4567 },
	{ Name: "Meyers", Frequency:4572 },
	{ Name: "Lamb", Frequency:4595 },
	{ Name: "Larsen", Frequency:4598 },
	{ Name: "Stokes", Frequency:4613 },
	{ Name: "Zhang", Frequency:4616 },
	{ Name: "Ayala", Frequency:4620 },
	{ Name: "Shah", Frequency:4629 },
	{ Name: "Hess", Frequency:4631 },
	{ Name: "Bass", Frequency:4634 },
	{ Name: "McKenzie", Frequency:4663 },
	{ Name: "Carson", Frequency:4666 },
	{ Name: "Greer", Frequency:4703 },
	{ Name: "Shaffer", Frequency:4725 },
	{ Name: "Nash", Frequency:4731 },
	{ Name: "Carey", Frequency:4738 },
	{ Name: "Briggs", Frequency:4750 },
	{ Name: "Morrow", Frequency:4762 },
	{ Name: "Wall", Frequency:4769 },
	{ Name: "Patrick", Frequency:4771 },
	{ Name: "Collier", Frequency:4773 },
	{ Name: "Shepherd", Frequency:4778 },
	{ Name: "Leon", Frequency:4779 },
	{ Name: "Wilkins", Frequency:4806 },
	{ Name: "Copeland", Frequency:4808 },
	{ Name: "Summers", Frequency:4812 },
	{ Name: "Decker", Frequency:4817 },
	{ Name: "Nicholson", Frequency:4823 },
	{ Name: "Clayton", Frequency:4841 },
	{ Name: "Davenport", Frequency:4867 },
	{ Name: "Oconnor", Frequency:4873 },
	{ Name: "Mejia", Frequency:4892 },
	{ Name: "Houston", Frequency:4895 },
	{ Name: "Carrillo", Frequency:4902 },
	{ Name: "Whitaker", Frequency:4907 },
	{ Name: "Wilcox", Frequency:4936 },
	{ Name: "Wilkinson", Frequency:4949 },
	{ Name: "Holloway", Frequency:4949 },
	{ Name: "Robles", Frequency:4953 },
	{ Name: "Underwood", Frequency:4959 },
	{ Name: "Atkinson", Frequency:4984 },
	{ Name: "Bradford", Frequency:4984 },
	{ Name: "Short", Frequency:4990 },
	{ Name: "Farrell", Frequency:4991 },
	{ Name: "Guerra", Frequency:5005 },
	{ Name: "Bridges", Frequency:5006 },
	{ Name: "Anthony", Frequency:5009 },
	{ Name: "Hoover", Frequency:5014 },
	{ Name: "Cameron", Frequency:5019 },
	{ Name: "Poole", Frequency:5020 },
	{ Name: "Charles", Frequency:5021 },
	{ Name: "Conley", Frequency:5034 },
	{ Name: "Massey", Frequency:5043 },
	{ Name: "Trujillo", Frequency:5058 },
	{ Name: "Chase", Frequency:5060 },
	{ Name: "Callahan", Frequency:5063 },
	{ Name: "Abbott", Frequency:5065 },
	{ Name: "Monroe", Frequency:5066 },
	{ Name: "Pacheco", Frequency:5069 },
	{ Name: "Foley", Frequency:5071 },
	{ Name: "Boone", Frequency:5071 },
	{ Name: "Huff", Frequency:5078 },
	{ Name: "Allison", Frequency:5094 },
	{ Name: "Hood", Frequency:5094 },
	{ Name: "Deleon", Frequency:5106 },
	{ Name: "Horn", Frequency:5108 },
	{ Name: "Kane", Frequency:5114 },
	{ Name: "Lara", Frequency:5121 },
	{ Name: "Randall", Frequency:5124 },
	{ Name: "Bond", Frequency:5126 },
	{ Name: "Wyatt", Frequency:5129 },
	{ Name: "Sweeney", Frequency:5133 },
	{ Name: "Cabrera", Frequency:5134 },
	{ Name: "Bruce", Frequency:5134 },
	{ Name: "Kirk", Frequency:5135 },
	{ Name: "Richard", Frequency:5138 },
	{ Name: "Montoya", Frequency:5149 },
	{ Name: "Gates", Frequency:5158 },
	{ Name: "Kirby", Frequency:5180 },
	{ Name: "Roberson", Frequency:5183 },
	{ Name: "Juarez", Frequency:5192 },
	{ Name: "Fuentes", Frequency:5193 },
	{ Name: "Aguirre", Frequency:5199 },
	{ Name: "Phelps", Frequency:5206 },
	{ Name: "Skinner", Frequency:5210 },
	{ Name: "Dickerson", Frequency:5213 },
	{ Name: "Berg", Frequency:5240 },
	{ Name: "Heath", Frequency:5244 },
	{ Name: "Brennan", Frequency:5251 },
	{ Name: "York", Frequency:5255 },
	{ Name: "Dalton", Frequency:5255 },
	{ Name: "Koch", Frequency:5262 },
	{ Name: "Roy", Frequency:5268 },
	{ Name: "Combs", Frequency:5285 },
	{ Name: "Ochoa", Frequency:5290 },
	{ Name: "Pittman", Frequency:5306 },
	{ Name: "Roman", Frequency:5308 },
	{ Name: "Garrison", Frequency:5314 },
	{ Name: "Boyer", Frequency:5314 },
	{ Name: "Atkins", Frequency:5318 },
	{ Name: "Glenn", Frequency:5325 },
	{ Name: "Franco", Frequency:5331 },
	{ Name: "Harrell", Frequency:5339 },
	{ Name: "Baxter", Frequency:5341 },
	{ Name: "Mathews", Frequency:5342 },
	{ Name: "Rich", Frequency:5342 },
	{ Name: "Solis", Frequency:5349 },
	{ Name: "Hancock", Frequency:5368 },
	{ Name: "Flowers", Frequency:5376 },
	{ Name: "Vincent", Frequency:5391 },
	{ Name: "Singleton", Frequency:5391 },
	{ Name: "Mathis", Frequency:5393 },
	{ Name: "Shields", Frequency:5399 },
	{ Name: "Russo", Frequency:5404 },
	{ Name: "Huffman", Frequency:5407 },
	{ Name: "Stein", Frequency:5416 },
	{ Name: "Grimes", Frequency:5432 },
	{ Name: "Marks", Frequency:5437 },
	{ Name: "Parrish", Frequency:5440 },
	{ Name: "Golden", Frequency:5446 },
	{ Name: "Cline", Frequency:5451 },
	{ Name: "Savage", Frequency:5455 },
	{ Name: "Christian", Frequency:5460 },
	{ Name: "Gallegos", Frequency:5470 },
	{ Name: "Booth", Frequency:5473 },
	{ Name: "Hodge", Frequency:5475 },
	{ Name: "Velasquez", Frequency:5475 },
	{ Name: "Dyer", Frequency:5479 },
	{ Name: "Stephenson", Frequency:5482 },
	{ Name: "Dillon", Frequency:5487 },
	{ Name: "Wiggins", Frequency:5488 },
	{ Name: "Jacobson", Frequency:5521 },
	{ Name: "Walter", Frequency:5537 },
	{ Name: "Cardenas", Frequency:5544 },
	{ Name: "Berger", Frequency:5554 },
	{ Name: "David", Frequency:5559 },
	{ Name: "Wiley", Frequency:5559 },
	{ Name: "Rivas", Frequency:5574 },
	{ Name: "Serrano", Frequency:5578 },
	{ Name: "Beard", Frequency:5579 },
	{ Name: "Melton", Frequency:5582 },
	{ Name: "Lam", Frequency:5586 },
	{ Name: "McClure", Frequency:5586 },
	{ Name: "Jefferson", Frequency:5600 },
	{ Name: "Barry", Frequency:5601 },
	{ Name: "Sawyer", Frequency:5624 },
	{ Name: "Eaton", Frequency:5658 },
	{ Name: "Trevino", Frequency:5663 },
	{ Name: "Gilmore", Frequency:5664 },
	{ Name: "McDowell", Frequency:5665 },
	{ Name: "Beasley", Frequency:5678 },
	{ Name: "Blackwell", Frequency:5710 },
	{ Name: "Ware", Frequency:5711 },
	{ Name: "Solomon", Frequency:5716 },
	{ Name: "Preston", Frequency:5720 },
	{ Name: "Hensley", Frequency:5723 },
	{ Name: "Keith", Frequency:5724 },
	{ Name: "Hutchinson", Frequency:5733 },
	{ Name: "Friedman", Frequency:5736 },
	{ Name: "Tanner", Frequency:5738 },
	{ Name: "Yu", Frequency:5746 },
	{ Name: "Humphrey", Frequency:5771 },
	{ Name: "Johns", Frequency:5776 },
	{ Name: "Hobbs", Frequency:5780 },
	{ Name: "Small", Frequency:5794 },
	{ Name: "Snow", Frequency:5795 },
	{ Name: "Pitts", Frequency:5795 },
	{ Name: "English", Frequency:5801 },
	{ Name: "Colon", Frequency:5810 },
	{ Name: "Henson", Frequency:5812 },
	{ Name: "Cervantes", Frequency:5813 },
	{ Name: "Barr", Frequency:5813 },
	{ Name: "Clay", Frequency:5818 },
	{ Name: "Suarez", Frequency:5834 },
	{ Name: "Kerr", Frequency:5844 },
	{ Name: "MacDonald", Frequency:5858 },
	{ Name: "Calderon", Frequency:5872 },
	{ Name: "Wilkerson", Frequency:5878 },
	{ Name: "Conway", Frequency:5893 },
	{ Name: "Kline", Frequency:5910 },
	{ Name: "Villarreal", Frequency:5930 },
	{ Name: "Merritt", Frequency:5933 },
	{ Name: "Nolan", Frequency:5948 },
	{ Name: "Prince", Frequency:5960 },
	{ Name: "Shannon", Frequency:5963 },
	{ Name: "McCullough", Frequency:5966 },
	{ Name: "McKee", Frequency:5970 },
	{ Name: "Levy", Frequency:5982 },
	{ Name: "Vance", Frequency:5982 },
	{ Name: "Ho", Frequency:5983 },
	{ Name: "Stafford", Frequency:6002 },
	{ Name: "McClain", Frequency:6011 },
	{ Name: "Dorsey", Frequency:6048 },
	{ Name: "Bartlett", Frequency:6106 },
	{ Name: "Woodard", Frequency:6113 },
	{ Name: "Sloan", Frequency:6114 },
	{ Name: "Barron", Frequency:6114 },
	{ Name: "Kemp", Frequency:6116 },
	{ Name: "Roach", Frequency:6121 },
	{ Name: "Winters", Frequency:6127 },
	{ Name: "McLean", Frequency:6130 },
	{ Name: "Bullock", Frequency:6152 },
	{ Name: "Hurst", Frequency:6157 },
	{ Name: "Michael", Frequency:6166 },
	{ Name: "Buck", Frequency:6168 },
	{ Name: "Browning", Frequency:6174 },
	{ Name: "Strong", Frequency:6181 },
	{ Name: "Gentry", Frequency:6183 },
	{ Name: "Kent", Frequency:6188 },
	{ Name: "Durham", Frequency:6199 },
	{ Name: "Choi", Frequency:6219 },
	{ Name: "Moon", Frequency:6222 },
	{ Name: "Schaefer", Frequency:6233 },
	{ Name: "Reilly", Frequency:6247 },
	{ Name: "Salas", Frequency:6250 },
	{ Name: "Hahn", Frequency:6251 },
	{ Name: "Knox", Frequency:6251 },
	{ Name: "Orr", Frequency:6261 },
	{ Name: "Nielsen", Frequency:6264 },
	{ Name: "McIntyre", Frequency:6265 },
	{ Name: "Castaneda", Frequency:6270 },
	{ Name: "Camacho", Frequency:6277 },
	{ Name: "Whitehead", Frequency:6279 },
	{ Name: "Chung", Frequency:6296 },
	{ Name: "Hull", Frequency:6303 },
	{ Name: "Ali", Frequency:6319 },
	{ Name: "Herman", Frequency:6320 },
	{ Name: "Rosales", Frequency:6324 },
	{ Name: "Leach", Frequency:6327 },
	{ Name: "Mayer", Frequency:6334 },
	{ Name: "Gillespie", Frequency:6342 },
	{ Name: "Hendricks", Frequency:6348 },
	{ Name: "Weeks", Frequency:6354 },
	{ Name: "Stark", Frequency:6358 },
	{ Name: "Mercado", Frequency:6365 },
	{ Name: "Stout", Frequency:6367 },
	{ Name: "Meadows", Frequency:6388 },
	{ Name: "Bradshaw", Frequency:6388 },
	{ Name: "Glass", Frequency:6390 },
	{ Name: "Levine", Frequency:6395 },
	{ Name: "Mosley", Frequency:6404 },
	{ Name: "Buckley", Frequency:6414 },
	{ Name: "Morse", Frequency:6417 },
	{ Name: "Donovan", Frequency:6426 },
	{ Name: "Valencia", Frequency:6433 },
	{ Name: "Zamora", Frequency:6444 },
	{ Name: "Gaines", Frequency:6444 },
	{ Name: "Knapp", Frequency:6450 },
	{ Name: "McCall", Frequency:6452 },
	{ Name: "Frost", Frequency:6456 },
	{ Name: "Calhoun", Frequency:6458 },
	{ Name: "Conrad", Frequency:6462 },
	{ Name: "Villanueva", Frequency:6465 },
	{ Name: "Lester", Frequency:6469 },
	{ Name: "Howe", Frequency:6473 },
	{ Name: "Mahoney", Frequency:6478 },
	{ Name: "Hardin", Frequency:6483 },
	{ Name: "John", Frequency:6494 },
	{ Name: "Livingston", Frequency:6497 },
	{ Name: "Blankenship", Frequency:6512 },
	{ Name: "Peck", Frequency:6522 },
	{ Name: "Sellers", Frequency:6524 },
	{ Name: "Ellison", Frequency:6532 },
	{ Name: "Pruitt", Frequency:6538 },
	{ Name: "Lozano", Frequency:6553 },
	{ Name: "Lynn", Frequency:6565 },
	{ Name: "McIntosh", Frequency:6590 },
	{ Name: "McFarland", Frequency:6590 },
	{ Name: "FitzPatrick", Frequency:6596 },
	{ Name: "McConnell", Frequency:6622 },
	{ Name: "Noble", Frequency:6626 },
	{ Name: "Boyle", Frequency:6628 },
	{ Name: "McMahon", Frequency:6639 },
	{ Name: "Case", Frequency:6675 },
	{ Name: "Middleton", Frequency:6681 },
	{ Name: "Leblanc", Frequency:6681 },
	{ Name: "Lowery", Frequency:6684 },
	{ Name: "Crosby", Frequency:6687 },
	{ Name: "Bender", Frequency:6687 },
	{ Name: "Frederick", Frequency:6688 },
	{ Name: "Randolph", Frequency:6697 },
	{ Name: "Vaughan", Frequency:6714 },
	{ Name: "Bentley", Frequency:6728 },
	{ Name: "Gould", Frequency:6736 },
	{ Name: "Duffy", Frequency:6736 },
	{ Name: "Pace", Frequency:6736 },
	{ Name: "Pennington", Frequency:6740 },
	{ Name: "Sexton", Frequency:6749 },
	{ Name: "Cantu", Frequency:6757 },
	{ Name: "Huynh", Frequency:6773 },
	{ Name: "Macias", Frequency:6776 },
	{ Name: "Hurley", Frequency:6791 },
	{ Name: "Andrade", Frequency:6803 },
	{ Name: "Harding", Frequency:6809 },
	{ Name: "Everett", Frequency:6813 },
	{ Name: "Crane", Frequency:6823 },
	{ Name: "Velez", Frequency:6853 },
	{ Name: "Giles", Frequency:6858 },
	{ Name: "Ayers", Frequency:6866 },
	{ Name: "Santana", Frequency:6867 },
	{ Name: "Woodward", Frequency:6873 },
	{ Name: "McMillan", Frequency:6873 },
	{ Name: "Kaufman", Frequency:6882 },
	{ Name: "Dougherty", Frequency:6892 },
	{ Name: "Escobar", Frequency:6899 },
	{ Name: "Clements", Frequency:6913 },
	{ Name: "Brandt", Frequency:6917 },
	{ Name: "Hickman", Frequency:6920 },
	{ Name: "Krueger", Frequency:6926 },
	{ Name: "Dunlap", Frequency:6945 },
	{ Name: "Walls", Frequency:6950 },
	{ Name: "Katz", Frequency:6950 },
	{ Name: "Barrera", Frequency:6964 },
	{ Name: "Valentine", Frequency:6972 },
	{ Name: "Hebert", Frequency:6981 },
	{ Name: "Rocha", Frequency:6986 },
	{ Name: "Shepard", Frequency:6987 },
	{ Name: "Landry", Frequency:7003 },
	{ Name: "Spears", Frequency:7005 },
	{ Name: "Rush", Frequency:7009 },
	{ Name: "Avery", Frequency:7023 },
	{ Name: "House", Frequency:7041 },
	{ Name: "Blanchard", Frequency:7041 },
	{ Name: "Best", Frequency:7043 },
	{ Name: "Dodson", Frequency:7049 },
	{ Name: "Benton", Frequency:7054 },
	{ Name: "Hanna", Frequency:7062 },
	{ Name: "McKay", Frequency:7065 },
	{ Name: "Blackburn", Frequency:7068 },
	{ Name: "Pugh", Frequency:7080 },
	{ Name: "Fry", Frequency:7104 },
	{ Name: "Huber", Frequency:7123 },
	{ Name: "Orozco", Frequency:7125 },
	{ Name: "Mora", Frequency:7141 },
	{ Name: "Bean", Frequency:7143 },
	{ Name: "Bernard", Frequency:7170 },
	{ Name: "Hayden", Frequency:7171 },
	{ Name: "Raymond", Frequency:7174 },
	{ Name: "Andersen", Frequency:7200 },
	{ Name: "Goldstein", Frequency:7204 },
	{ Name: "Kaplan", Frequency:7218 },
	{ Name: "Goldberg", Frequency:7222 },
	{ Name: "Sampson", Frequency:7238 },
	{ Name: "Mays", Frequency:7245 },
	{ Name: "Ashley", Frequency:7252 },
	{ Name: "Stuart", Frequency:7256 },
	{ Name: "Valenzuela", Frequency:7261 },
	{ Name: "Finley", Frequency:7264 },
	{ Name: "Rasmussen", Frequency:7273 },
	{ Name: "Haas", Frequency:7274 },
	{ Name: "Haley", Frequency:7277 },
	{ Name: "Oneill", Frequency:7280 },
	{ Name: "Novak", Frequency:7295 },
	{ Name: "Mullen", Frequency:7303 },
	{ Name: "McCarty", Frequency:7309 },
	{ Name: "Dickson", Frequency:7329 },
	{ Name: "Ibarra", Frequency:7331 },
	{ Name: "Waller", Frequency:7334 },
	{ Name: "Farley", Frequency:7335 },
	{ Name: "Donaldson", Frequency:7336 },
	{ Name: "Benjamin", Frequency:7337 },
	{ Name: "Duke", Frequency:7346 },
	{ Name: "Rangel", Frequency:7346 },
	{ Name: "Estes", Frequency:7349 },
	{ Name: "Herring", Frequency:7359 },
	{ Name: "Moses", Frequency:7377 },
	{ Name: "Faulkner", Frequency:7387 },
	{ Name: "Schmitt", Frequency:7387 },
	{ Name: "Braun", Frequency:7394 },
	{ Name: "Nixon", Frequency:7397 },
	{ Name: "Hays", Frequency:7410 },
	{ Name: "Baird", Frequency:7422 },
	{ Name: "Burch", Frequency:7424 },
	{ Name: "Costa", Frequency:7425 },
	{ Name: "Melendez", Frequency:7428 },
	{ Name: "Oneal", Frequency:7429 },
	{ Name: "Sheppard", Frequency:7437 },
	{ Name: "Werner", Frequency:7442 },
	{ Name: "Richmond", Frequency:7446 },
	{ Name: "Horne", Frequency:7458 },
	{ Name: "Potts", Frequency:7473 },
	{ Name: "Moyer", Frequency:7493 },
	{ Name: "Krause", Frequency:7515 },
	{ Name: "McCann", Frequency:7516 },
	{ Name: "Blevins", Frequency:7521 },
	{ Name: "Spence", Frequency:7522 },
	{ Name: "Good", Frequency:7532 },
	{ Name: "Stanton", Frequency:7534 },
	{ Name: "Irwin", Frequency:7539 },
	{ Name: "McGrath", Frequency:7546 },
	{ Name: "Coffey", Frequency:7559 },
	{ Name: "Dudley", Frequency:7563 },
	{ Name: "Compton", Frequency:7577 },
	{ Name: "Davies", Frequency:7580 },
	{ Name: "Whitney", Frequency:7584 },
	{ Name: "Sanford", Frequency:7588 },
	{ Name: "Proctor", Frequency:7589 },
	{ Name: "Frye", Frequency:7592 },
	{ Name: "Maddox", Frequency:7612 },
	{ Name: "McPherson", Frequency:7622 },
	{ Name: "Joyce", Frequency:7631 },
	{ Name: "Shea", Frequency:7632 },
	{ Name: "Cantrell", Frequency:7636 },
	{ Name: "Archer", Frequency:7668 },
	{ Name: "Acevedo", Frequency:7673 },
	{ Name: "Arias", Frequency:7693 },
	{ Name: "Bird", Frequency:7703 },
	{ Name: "Rowland", Frequency:7711 },
	{ Name: "Madden", Frequency:7718 },
	{ Name: "Ritter", Frequency:7730 },
	{ Name: "Cherry", Frequency:7747 },
	{ Name: "Kaiser", Frequency:7762 },
	{ Name: "Church", Frequency:7797 },
	{ Name: "Rivers", Frequency:7801 },
	{ Name: "Frey", Frequency:7831 },
	{ Name: "Yoder", Frequency:7835 },
	{ Name: "Cheng", Frequency:7841 },
	{ Name: "Mercer", Frequency:7845 },
	{ Name: "Cooke", Frequency:7855 },
	{ Name: "Downs", Frequency:7863 },
	{ Name: "Pineda", Frequency:7868 },
	{ Name: "Hendrix", Frequency:7873 },
	{ Name: "Fritz", Frequency:7877 },
	{ Name: "Forbes", Frequency:7886 },
	{ Name: "Winter", Frequency:7893 },
	{ Name: "Galloway", Frequency:7894 },
	{ Name: "Petty", Frequency:7895 },
	{ Name: "Hester", Frequency:7896 },
	{ Name: "Ewing", Frequency:7898 },
	{ Name: "Mooney", Frequency:7911 },
	{ Name: "Booker", Frequency:7913 },
	{ Name: "Daugherty", Frequency:7921 },
	{ Name: "Sosa", Frequency:7927 },
	{ Name: "Maynard", Frequency:7929 },
	{ Name: "Hooper", Frequency:7941 },
	{ Name: "Cowan", Frequency:7965 },
	{ Name: "Holden", Frequency:7986 },
	{ Name: "Galvan", Frequency:7989 },
	{ Name: "Riggs", Frequency:8009 },
	{ Name: "Terrell", Frequency:8027 },
	{ Name: "Pollard", Frequency:8027 },
	{ Name: "Arroyo", Frequency:8034 },
	{ Name: "Rollins", Frequency:8037 },
	{ Name: "Bray", Frequency:8052 },
	{ Name: "Mayo", Frequency:8057 },
	{ Name: "Carney", Frequency:8058 },
	{ Name: "Jarvis", Frequency:8062 },
	{ Name: "Cordova", Frequency:8077 },
	{ Name: "Merrill", Frequency:8093 },
	{ Name: "Daly", Frequency:8095 },
	{ Name: "Cooley", Frequency:8121 },
	{ Name: "Vogel", Frequency:8123 },
	{ Name: "Hinton", Frequency:8127 },
	{ Name: "Kuhn", Frequency:8146 },
	{ Name: "Lim", Frequency:8147 },
	{ Name: "Ferrell", Frequency:8154 },
	{ Name: "Chaney", Frequency:8159 },
	{ Name: "Holder", Frequency:8160 },
	{ Name: "Haney", Frequency:8162 },
	{ Name: "Hatfield", Frequency:8179 },
	{ Name: "Lindsay", Frequency:8181 },
	{ Name: "McGowan", Frequency:8199 },
	{ Name: "Travis", Frequency:8208 },
	{ Name: "Delaney", Frequency:8210 },
	{ Name: "Bright", Frequency:8219 },
	{ Name: "Bolton", Frequency:8221 },
	{ Name: "Witt", Frequency:8227 },
	{ Name: "Lancaster", Frequency:8227 },
	{ Name: "Branch", Frequency:8240 },
	{ Name: "Rubio", Frequency:8242 },
	{ Name: "Donnelly", Frequency:8245 },
	{ Name: "Snider", Frequency:8259 },
	{ Name: "Gamble", Frequency:8260 },
	{ Name: "Gorman", Frequency:8263 },
	{ Name: "Zuniga", Frequency:8263 },
	{ Name: "Donahue", Frequency:8268 },
	{ Name: "McNeil", Frequency:8273 },
	{ Name: "Bonner", Frequency:8278 },
	{ Name: "Byers", Frequency:8287 },
	{ Name: "Costello", Frequency:8288 },
	{ Name: "McKnight", Frequency:8289 },
	{ Name: "Key", Frequency:8290 },
	{ Name: "Crowley", Frequency:8315 },
	{ Name: "Bautista", Frequency:8320 },
	{ Name: "Riddle", Frequency:8321 },
	{ Name: "Pearce", Frequency:8328 },
	{ Name: "Maloney", Frequency:8329 },
	{ Name: "Albert", Frequency:8332 },
	{ Name: "Lake", Frequency:8361 },
	{ Name: "Carver", Frequency:8370 },
	{ Name: "Guthrie", Frequency:8380 },
	{ Name: "Lehman", Frequency:8386 }
	];

//===========
//FIRST NAMES
//===========

	//------------------
	//Female First Names
	//------------------
	femaleFirstNames=[
	'Mary','Patricia','Linda',
	'Barbara',
	'Elizabeth',
	'Jennifer',
	'Maria',
	'Susan',
	'Margaret',
	'Dorothy',
	'Lisa',
	'Nancy',
	'Karen',
	'Betty',
	'Helen',
	'Sandra',
	'Donna',
	'Carol',
	'Ruth',
	'Sharon',
	'Michelle',
	'Laura',
	'Sarah',
	'Kimberly',
	'Deborah',
	'Jessica',
	'Shirley',
	'Cynthia',
	'Angela',
	'Melissa',
	'Brenda',
	'Amy',
	'Anna',
	'Rebecca',
	'Virginia',
	'Kathleen',
	'Pamela',
	'Martha',
	'Debra',
	'Amanda',
	'Stephanie',
	'Carolyn',
	'Christine',
	'Marie',
	'Janet',
	'Catherine',
	'Frances',
	'Ann',
	'Joyce',
	'Diane',
	'Alice',
	'Julie',
	'Heather',
	'Teresa',
	'Doris',
	'Gloria',
	'Evelyn',
	'Jean',
	'Cheryl',
	'Mildred',
	'Katherine',
	'Joan',
	'Ashley',
	'Judith',
	'Rose',
	'Janice',
	'Kelly',
	'Nicole',
	'Judy',
	'Christina',
	'Kathy',
	'Theresa',
	'Beverly',
	'Denise',
	'Tammy',
	'Irene',
	'Jane',
	'Lori',
	'Rachel',
	'Marilyn',
	'Andrea',
	'Kathryn',
	'Louise',
	'Sara',
	'Anne',
	'Jacqueline',
	'Wanda',
	'Bonnie',
	'Julia',
	'Ruby',
	'Lois',
	'Tina',
	'Phyllis',
	'Norma',
	'Paula',
	'Diana',
	'Annie',
	'Lillian',
	'Emily'
	];

	//----------------
	//Male First Names
	//----------------
	maleFirstNames=[
	'James',
	'John',
	'Robert',
	'Michael',
	'William',
	'David',
	'Richard',
	'Charles',
	'Joseph',
	'Thomas',
	'Christopher',
	'Daniel',
	'Paul',
	'Mark',
	'Donald',
	'George',
	'Kenneth',
	'Steven',
	'Edward',
	'Brian',
	'Ronald',
	'Anthony',
	'Kevin',
	'Jason',
	'Matthew',
	'Gary',
	'Timothy',
	'Jose',
	'Larry',
	'Jeffrey',
	'Frank',
	'Scott',
	'Eric',
	'Stephen',
	'Andrew',
	'Raymond',
	'Gregory',
	'Joshua',
	'Jerry',
	'Dennis',
	'Walter',
	'Patrick',
	'Peter',
	'Harold',
	'Douglas',
	'Henry',
	'Carl',
	'Arthur',
	'Ryan',
	'Roger',
	'Joe',
	'Juan',
	'Jack',
	'Albert',
	'Jonathan',
	'Justin',
	'Terry',
	'Gerald',
	'Keith',
	'Samuel',
	'Willie',
	'Ralph',
	'Lawrence',
	'Nicholas',
	'Roy',
	'Benjamin',
	'Bruce',
	'Brandon',
	'Adam',
	'Harry',
	'Fred',
	'Wayne',
	'Billy',
	'Steve',
	'Louis',
	'Jeremy',
	'Aaron',
	'Randy',
	'Howard',
	'Eugene',
	'Carlos',
	'Russell',
	'Bobby',
	'Victor',
	'Martin',
	'Ernest',
	'Phillip',
	'Todd',
	'Jesse',
	'Craig',
	'Alan',
	'Shawn',
	'Clarence',
	'Sean',
	'Philip',
	'Chris',
	'Johnny',
	'Earl',
	'Jimmy',
	'Antonio'
	];

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//Functions to Flash Color in Responses
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	function flashColor(thePlayer, type, duration)
		{

			//Create the Private Variables
			var theDuration = duration;
			var start = 0;
			var end = 10;

			//Check the Flash Type
			if(type=="++sessionScore")
			{
				target = theSessionScoreIDs[thePlayer];
				flashColor = 'green';
				returnColor = 'white';
			}
			else if(type=="++overallScore")
			{
				target = theOverallScoreIDs[thePlayer];
				flashColor='purple'
				returnColor = 'white';
			}
			else if(type=="rolledOne")
			{
				target = theSessionScoreIDs[thePlayer];
				flashColor='tomato'
				returnColor = 'white';
			}
			else if(type=="startTurn")
			{
				target = theNamesIDs[thePlayer];
				flashColor='green'
				returnColor = 'darkgreen';
			}
			else if(type=="endTurn")
			{
				target = theNamesIDs[thePlayer];
				flashColor='darkGreen'
				returnColor = 'white';
			}

			//Set the Interval
			var id = setInterval(frame, 100);

			//Now Fire the Function
			function frame() {
			if (start >= end) {
				clearInterval(id);
				start = 0;
				target.style.backgroundColor = returnColor;
				target.style.color = "black";
				target.style.borderRadius = "0px";
				target.style.boxShadow = "none";
				target.style.margin="1px";
				target.style.padding="1px";
				target.style.transitionDuration = theDuration;
			} else {
				start++;
				target.style.borderRadius = "60px";
				target.style.backgroundColor = flashColor;
				target.style.color = 'white';
				target.style.boxShadow = "5px 10px 15px grey";
				//target.style.margin = ".5%"
			 // target.style.padding = ".5%"
				target.style.transitionDuration = theDuration;
			}
			}
		//Last Bracket Parenthesis
		}

		//Slide the Dice FORGET THIS
		function slideDice(thePlayer){
			image = playerDice[thePlayer];
			//Apply the 'Slide' CSS class to the first dice to trigger the transition.
			playerDice[0].classList.add('diceSlide')
			image.style.left = '100px'
			setTimeout(() => {
				playerDice[0].classList.remove('diceSlide');
			}, 100)
		}

//---------------------------
//Functions Re: Player Images
//---------------------------
function generateImage(gender, person)
{
	function calculateColorVar()
	{
		maleColorVar = getRandomInt(0,4);
		maleFacialColorVar = getRandomInt(0,4);
		shirtColorVar = getRandomInt(0,7);
		femaleColorVar = getRandomInt(0,3);
	}
	var thePerson = person;
	calculateBackground();
	calculateColorVar();

	//Background
	function calculateBackground()
	{
		var backgroundVar = getRandomInt(0,2);
		//theLayers[0] = Background
		theLayers[thePerson][0].src=images[0][backgroundVar].Image;
		//theLayers[5] = Head
		theLayers[thePerson][5].src=images[7][0].Image;
	}

	//Other Elements
	if(gender==2)
	{
		//theLayers[1]Torso
		theLayers[thePerson][1].src=images[1][0].Image;
		//theLayers[2]HairBack
		//theLayers[3]Neck
		theLayers[thePerson][3].src=images[3][0].Image;
		//theLayers[4]Shirt
		theLayers[thePerson][4].src=images[5][shirtColorVar].Image;
		//theLayers[5]Head - Covered Above
		//theLayers[6]HairFront
		theLayers[thePerson][6].src=images[8][maleColorVar].Image;
		//theLayers[7]FacialHair
			//Bald With Facial Hair
			if(maleColorVar==3 && maleFacialColorVar != 3)
			{
				var altColorVar = getRandomInt(0,2);
				theLayers[thePerson][7].src=images[11][altColorVar].Image;
			}
			//Not Bald, With Facial Hair
			else if(maleColorVar!=3 && maleFacialColorVar != 3)
			{
			theLayers[thePerson][7].src=images[11][maleColorVar].Image;
			}
			//Not Bald, No Facial Hair
			else if(maleColorVar!=3 && maleFacialColorVar == 3)
			{
			theLayers[thePerson][7].src=images[11][maleFacialColorVar].Image;
		}
	}
	else if(gender==1)
	{
		//theLayers[1]Torso
		theLayers[thePerson][1].src=images[2][0].Image;
		//theLayers[2]Hair(Back)
		theLayers[thePerson][2].src=images[10][femaleColorVar].Image;
		//theLayers[3]Neck
		theLayers[thePerson][3].src = images[4][0].Image;
		//theLayers[4]Shirt
		theLayers[thePerson][4].src=images[6][shirtColorVar].Image;
		//theLayers[5] - Covered Above
		//theLayers[6]HairFront
		theLayers[thePerson][6].src=images[9][femaleColorVar].Image;
	}
}

function generateName(gender, person)
{
	var firstName
	if(gender==1)
	{
		firstName= femaleFirstNames[getRandomInt(0,femaleFirstNames.length)]
	}
	else
	{
		firstName = maleFirstNames[getRandomInt(0,maleFirstNames.length)]
	}
	var surName = surnames[getRandomInt(0,surnames.length)].Name
	if(person==0)
	{
		theNamesIDs[person].innerHTML = firstName + " " + surName;
	}
	else
	{
		theNamesIDs[person].innerHTML = firstName + " " + surName;
	}
}

function generateAI(person)
{
	if(person==0)
	{

	}
	else
	{
		riskCalc=getRandomInt(0,3)
		playerRiskTolerance[person]=riskToleranceThresholds[riskCalc]
		playerRiskToleranceIDs[person].innerHTML=riskToleranceNames[riskCalc] + " ("+playerRiskTolerance[person]+")"
	}
}

function generatePersons()
{
	for(var t=0; t<theLayers.length; t++)
	{
		genderVar = getRandomInt(1,3);
		generateImage(genderVar, t);
		generateName(genderVar, t);
		generateAI(t)
	}
}

//--------------------------
//Functions Re: Dice Rolling
//--------------------------
function startTurn(player)
{
	if(player==0)
	{
		//Illuminate the Player's Square
		theNamesIDs[player].style.backgroundColor="green"
		theNamesIDs[player].style.color="white"
		//Display the Player's Button
		//Wait for the Player to Roll or Bank
	}
	//=====
	//If AI
	//=====
	else
	{
		sessionScore=0
		//Illuminate the Player's Square
		theNamesIDs[player].style.backgroundColor="green";
		theNamesIDs[player].style.color="white";
		roll = rollDice(player)

		//If it doesn't a 1, do this
		if(roll>1)
		{
			//If the roll exceeds the AI's risk tolerance, then do this:
			if(roll>=playerRiskTolerance[player])
			{
				setTimeout(bankScore,3000,player)
			}
			else
			{
				//Create the sessionScore and add the roll value.

				//Increment from 0 to the Roll 1.5 seconds after the roll begins.
				setTimeout(incrementNumber,1500,0,roll,0,"diceRoll",player)
				//Continue the Turn 4 Seconds after the turn begins
				setTimeout(continueTurn,4000,player,sessionScore)
			}
		}
		//If Roll == 1 Then EndTurn in 3 Seconds
		else
		{
				setTimeout(endTurn,3000,player)
		}

		//setTimeout(endTurn,1000,player)
		//Wait for the AI to Roll or Bank
	}
}

function continueTurn(player, tempSessionScore)
{
	roll = rollDice(player)
	if(sessionScore>0)
	{
		if(sessionScore>=playerRiskTolerance[player])
		{
			setTimeout(bankScore,3000,player)
		}
		else
		{
			tempSessionScore=0
			setTimeout(continueTurn,3000,player,sessionScore)
		}
	}
	else
	{
			setTimeout(endTurn,3000,player)
	}
}

function endTurn(player)
{
	theSessionScoreIDs[player].style.backgroundColor="white";
	theSessionScoreIDs[player].style.color="black";
	theNamesIDs[player].style.backgroundColor="green";
	theNamesIDs[player].style.color="white";
	//flashColor(player,"endTurn",'2s');
	theNamesIDs[player].style.backgroundColor="white";
	theNamesIDs[player].style.color="black";
	if(player==theLayers.length-1)
	{
		player=0
	}
	else
	{
		player++
	}
	//flashColor(player,"startTurn",'2s');
	setTimeout(startTurn,1000,player)
}

function incrementNumber(x,y,z,type,player)
{

	//---------
	//Dice Roll
	//---------
	if(type=="diceRoll")
	{
		var currentValue=x;
		var displayedValue=theSessionScoreIDs[player];
		var incrementInterval=setInterval(() =>
		{
			if(currentValue <= y)
			{
				console.log(currentValue + " and y = " + y)
				displayedValue.textContent=currentValue;
				currentValue++;
			}
			else
			{
				clearInterval(incrementInterval);
			}
		}, 50);
	}

	//---------------
	//End Turn (Bank)
	//---------------
	else if(type=="bankScore")
	{
		var currentValue=x;
		var displayedValue=theSessionScoreIDs[player];
		var overallScoreValue=theOverallScoreIDs[player];
		var incrementInterval=setInterval(() =>
		{
			if(currentValue > y)
			{
				console.log("Going Down: " + currentValue + " and y = " + y);
				currentValue--;
				console.log("Time to write 'currentValue:' " + currentValue + " " + Date);
				displayedValue.textContent=currentValue;
				playerOverallScores[player]++;
				overallScoreValue.textContent=playerOverallScores[player];
			}
			else
			{
				clearInterval(incrementInterval);
			}
		}, 50);
	}

	//---------------------
	//End Turn (Rolled One)
	//---------------------
	else if(type=="rolledOne")
	{
		var currentValue=x;
		var displayedValue=theSessionScoreIDs[player];
		var overallScoreValue=theOverallScoreIDs[player];
		var incrementInterval=setInterval(() =>
		{
			if(currentValue > y)
			{
				console.log("Rolled One. Going Down: " + currentValue + " and y = " + y);
				currentValue--;
				console.log("Time to write 'currentValue:' " + currentValue);
				displayedValue.textContent=currentValue;
			}
			else
			{
				clearInterval(incrementInterval);
			}
		}, 50);
	}

}

function animateDice(roll, player)
{
var currentValue = 0;
displayedDiceImage=playerDice[player];
var incrementInterval=setInterval(() =>
{
	if (currentValue <= 5)
	{
		displayedDiceImage.src=diceImages[getRandomInt(0,6)];
		currentValue++;
	}
	else
	{
			displayedDiceImage.src=diceImages[roll-1];
			clearInterval(incrementInterval)
	}
	}, 100);
}

function rollDice(player)
{
	//Player Rolls
	if(player==0)
	{
			roll=getRandomInt(1,7);
			if(roll<=1)
			{
				animateDice(roll,player)
				setTimeout(flashColor,800,player,'rolledOne','5s')
				setTimeout(incrementNumber,1000,sessionScore,0,0,"rolledOne",player);
				sessionScore=0;
				//playerDice[player].src=diceImages[roll-1]
				setTimeout(endTurn,4000,player)
			}
			else
			{
				animateDice(roll,player)
				setTimeout(flashColor,800,player,'++sessionScore','5s')
				setTimeout(incrementNumber,1500,sessionScore,sessionScore+roll,0,"diceRoll",player)
				sessionScore+=roll;
				//theSessionScoreIDs[player].innerHTML=sessionScore
				playerDice[player].src=diceImages[roll-1]
			}
	}
	//AI Rolls
	else
	{
		roll=getRandomInt(1,7);
		console.log("AI Rolled " + roll)
		if(roll==1)
		{
			setTimeout(flashColor,800,player,'rolledOne','5s')
			setTimeout(incrementNumber,1500,sessionScore,0,0,"rolledOne",player);
			sessionScore=0;
			animateDice(roll,player)
			playerDice[player].src=diceImages[roll-1]
			return sessionScore;
		}
		else
		{
			animateDice(roll,player)
			setTimeout(flashColor,800,player,'++sessionScore','5s')
			setTimeout(incrementNumber,1500,sessionScore,sessionScore+roll,0,"diceRoll",player)
			sessionScore+=roll;
			//theSessionScoreIDs[player].innerHTML=sessionScore
			playerDice[player].src=diceImages[roll-1]
			return sessionScore;
		}
	}
}

//-------------------
//Bank Player's Score
//-------------------
function bankScore(player)
{
	setTimeout(incrementNumber,1500,sessionScore,0,0,"bankScore",player);
	sessionScore=0;
	setTimeout(endTurn,3000,player);
}

//--------------
//Call Functions
//--------------
generatePersons();
startTurn(0);
//generateImage();
