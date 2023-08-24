let kevRoster = ("QB: Lamar Jackson" + "<br>" + 
                "RB: Saquon Barkley"+ "<br>" +  
                "RB: Bijan Robinson"+ "<br>" +  
                "WR: Cooper Kupp"+ "<br>" + 
                "WR: Stefon Diggs"+ "<br>" + 
                "WR: Ceedee Lamb"+ "<br>" + 
                "TE: George Kittle"+ "<br>" + 
                "FLEX: Jahmyr Gibbs"+ "<br>" + 
                "FLEX: AJ Brown"+ "<br>" + 
                "SF: Josh Allen")
                   

let randallRoster = ("QB: Desmond Ridder"+ "<br>" +  
                    "RB: Najee Harris"+ "<br>" + 
                    "RB: James Cook"+ "<br>" +  
                    "WR: DJ Moore"+ "<br>" +  
                    "WR: Christian Watson"+ "<br>" + 
                    "WR: Juju Smith-Schuster"+ "<br>" + 
                    "TE: TJ Hockenson"+ "<br>" + 
                    "FLEX: Rachaad White"+ "<br>" + 
                    "FLEX: Rachaad Penny"+ "<br>" + 
                    "SF: Kenny Pickett")
                        
let carterRoster =  ("QB: Bryce Young"+ "<br>" +  
                    "RB: Derrick Henry"+ "<br>" + 
                    "RB: Isiah Pacheco"+ "<br>" + 
                    "WR: Gabriel Davis"+ "<br>" + 
                    "WR: Devonta Smith"+ "<br>" + 
                    "WR: Mike Evans"+ "<br>" + 
                    "TE: Darren Waller"+ "<br>" + 
                    "FLEX: Tyreek Hill"+ "<br>" + 
                    "FLEX: Amari Cooper"+ "<br>" + 
                    "SF: Dak Prescott")
                
let geneRoster =    ("QB: Trevor Lawrence"+ "<br>" +  
                    "RB: Austin Ekeler"+ "<br>" + 
                    "RB: Antonio Gibson"+ "<br>" + 
                    "WR: Amon-Ra St. Brown"+ "<br>" + 
                    "WR: Mike Williams"+ "<br>" + 
                    "WR: Calvin Ridley"+ "<br>" + 
                    "TE: Chig Okonkwo"+ "<br>" + 
                    "FLEX: Kenneth Walker"+ "<br>" + 
                    "FLEX: Dameon Pierce"+ "<br>" + 
                    "SF: Derek Carr")

let gregRoster =    ("QB: Justin Fields"+ "<br>" +  
                    "RB: Christian Mccaffrey"+ "<br>" + 
                    "RB: Josh Jacobs"+ "<br>" + 
                    "WR: Davante Adams"+ "<br>" + 
                    "WR: Garrett Wilson"+ "<br>" + 
                    "WR: Jerry Jeudy"+ "<br>" + 
                    "TE: Evan Engram"+ "<br>" + 
                    "FLEX: Deebo Samuel"+ "<br>" + 
                    "FLEX: Drake London"+ "<br>" + 
                    "SF: Tua Tagovailoa")

let coltonRoster =  ("QB: Joe Burrow"+ "<br>" +  
                    "RB: Nick Chubb"+ "<br>" + 
                    "RB: Joe Mixon"+ "<br>" + 
                    "WR: Tee Higgins"+ "<br>" + 
                    "WR: Tyler Lockett"+ "<br>" + 
                    "WR: Courtland Sutton"+ "<br>" + 
                    "TE: Pat Freiermuth"+ "<br>" + 
                    "FLEX: Nico Collins"+ "<br>" + 
                    "FLEX: Alec Pierce"+ "<br>" + 
                    "SF: Jared Goff")

let franceRoster =   ("QB: Patrick Mahomes"+ "<br>" +  
                    "RB: Jonathan Taylor"+ "<br>" + 
                    "RB: James Conner"+ "<br>" + 
                    "WR: Michael Pittman"+ "<br>" + 
                    "WR: Chris Godwin"+ "<br>" + 
                    "WR: Darnell Mooney"+ "<br>" + 
                    "TE: Travis Kelce"+ "<br>" + 
                    "FLEX: Aaron Jones"+ "<br>" + 
                    "FLEX: Kyle Pitts"+ "<br>" + 
                    "SF: Jalen Hurts")

let brianRoster =   ("QB: Deshaun Watson"+ "<br>" +  
                    "RB: Rhamondre Stevenson"+ "<br>" + 
                    "RB: Pierre Strong"+ "<br>" + 
                    "WR: Keenan Allen"+ "<br>" + 
                    "WR: Brandon Aiyuk"+ "<br>" + 
                    "WR: Kadarius Toney"+ "<br>" + 
                    "TE: David Njoku"+ "<br>" + 
                    "FLEX: Jahan Dotson"+ "<br>" + 
                    "FLEX: Tyler Boyd"+ "<br>" + 
                    "SF: Jordan Love")

let joshRoster =    ("QB: Justin Herbert"+ "<br>" +  
                    "RB: Travis Etienne"+ "<br>" + 
                    "RB: Cam Akers"+ "<br>" + 
                    "WR: Jaylen Waddle"+ "<br>" + 
                    "WR: DK Metcalf"+ "<br>" + 
                    "WR: Terry Mclaurin"+ "<br>" + 
                    "TE: Dalton Schultz"+ "<br>" + 
                    "FLEX: Javonte Williams"+ "<br>" + 
                    "FLEX: Brandin Cooks"+ "<br>" + 
                    "SF: Brock Purdy")

let randyRoster =   ("QB: Kirk Cousins"+ "<br>" +  
                    "RB: Tony Pollard"+ "<br>" + 
                    "RB: Jamaal Williams"+ "<br>" + 
                    "WR: Justin Jefferson"+ "<br>" + 
                    "WR: Jamaar Chase"+ "<br>" + 
                    "WR: Odell Beckham"+ "<br>" + 
                    "TE: Mark Andrews"+ "<br>" + 
                    "FLEX: Deandre Hopkins"+ "<br>" + 
                    "FLEX: Christian Kirk"+ "<br>" + 
                    "SF: Daniel Jones")

function changeKevRoster() {
    document.getElementById("teamsBox").innerHTML = kevRoster;
}

function changeFranceRoster() {
    document.getElementById("teamsBox").innerHTML = franceRoster;
}

function changeBrianRoster() {
    document.getElementById("teamsBox").innerHTML = brianRoster;
}
function changeCarterRoster() {
    document.getElementById("teamsBox").innerHTML = carterRoster;
}
function changeJoshRoster() {
    document.getElementById("teamsBox").innerHTML = joshRoster;
}
function changeRandyRoster() {
    document.getElementById("teamsBox").innerHTML = randyRoster;
}
function changeGregRoster() {
    document.getElementById("teamsBox").innerHTML = gregRoster;
}
function changeColtonRoster() {
    document.getElementById("teamsBox").innerHTML = coltonRoster;
}
function changeRandallRoster() {
    document.getElementById("teamsBox").innerHTML = randallRoster;
}
function changeGeneRoster() {
    document.getElementById("teamsBox").innerHTML = geneRoster;
}

function unDo(){   
    document.getElementById("teamsBox").innerText= "Hover over a team to display here";         
} 


    