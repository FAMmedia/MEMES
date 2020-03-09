
function showText(text, id) {
    let element = document.getElementById(id);
    element.textContent = text;
}

let a="";
let b="";
let c="";
let d="";
let e="";
let p="";


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
showText(today,"date");

function applySettings(e) {
    e.preventDefault(); //Zorg dat de standaard form actie niet wordt uitgevoerd
    let settingsFormData = new FormData(e.target); //Haal de data uit de form die je uit het event haalt
    if (settingsFormData.get("backgroundColor")=="blauw") {
        b="Exclusief: ";

    };
    if (settingsFormData.get("backgroundColor")=="bruin") {
        b="LIVE: ";

    }; 
    if (settingsFormData.get("backgroundColor")=="groen") {
        b="Bizar: ";

    }; 
    if (settingsFormData.get("backgroundColor")=="ander") {
        b="Breaking: ";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="a"|| settingsFormData.get("eersteLetterVoornaam")=="A") {
        c="Kim Clijsters";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="b"|| settingsFormData.get("eersteLetterVoornaam")=="B") {
        c="Vladimir Putin";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="c"|| settingsFormData.get("eersteLetterVoornaam")=="C") {
        c="Antwerpse maffia";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="d"|| settingsFormData.get("eersteLetterVoornaam")=="D") {
        c="Maggie De Block";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="e"|| settingsFormData.get("eersteLetterVoornaam")=="E") {
        c="Delphine Boël";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="f"|| settingsFormData.get("eersteLetterVoornaam")=="F") {
        c="Chinese overheid";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="g"|| settingsFormData.get("eersteLetterVoornaam")=="G") {
        c="Jani Kazaltzis";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="h"|| settingsFormData.get("eersteLetterVoornaam")=="H") {
        c="Anonieme BV";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="i"|| settingsFormData.get("eersteLetterVoornaam")=="I") {
        c="Man uit Aalst";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="j"|| settingsFormData.get("eersteLetterVoornaam")=="J") {
        c="Trump";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="k"|| settingsFormData.get("eersteLetterVoornaam")=="K") {
        c="Mechelaar";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="l"|| settingsFormData.get("eersteLetterVoornaam")=="L") {
        c="Groep vluchtelingen";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="m"|| settingsFormData.get("eersteLetterVoornaam")=="M") {
        c="Poolse bouwvakker";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="n"|| settingsFormData.get("eersteLetterVoornaam")=="N") {
        c="Bart De Wever";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="o"|| settingsFormData.get("eersteLetterVoornaam")=="O") {
        c="Man onder invloed";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="p"|| settingsFormData.get("eersteLetterVoornaam")=="P") {
        c="Koppel uit blind getrouwd";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="z"|| settingsFormData.get("eersteLetterVoornaam")=="Z") {
        c="Amerikaanse rapper";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="q"|| settingsFormData.get("eersteLetterVoornaam")=="Q") {
        c="Prins Laurent";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="r"|| settingsFormData.get("eersteLetterVoornaam")=="R") {
        c="Geheime weldoener";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="s"|| settingsFormData.get("eersteLetterVoornaam")=="S") {
        c="Adil El Arbi";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="t"|| settingsFormData.get("eersteLetterVoornaam")=="T") {
        c="Losgeslagen bever";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="u"|| settingsFormData.get("eersteLetterVoornaam")=="U") {
        c="Tim Verheyden";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="v"|| settingsFormData.get("eersteLetterVoornaam")=="V") {
        c="Elon Musk";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="w"|| settingsFormData.get("eersteLetterVoornaam")=="W") {
        c="Boze buurtbewoner";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="x"|| settingsFormData.get("eersteLetterVoornaam")=="X") {
        c=" Leuvense huisjesmelker";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="y"|| settingsFormData.get("eersteLetterVoornaam")=="Y") {
        c="Dries Van Langenhove";
    };


    if (settingsFormData.get("maand")=="januari") {
        d="spant rechtzaak aan tegen";
    };
    if (settingsFormData.get("maand")=="februari") {
        d="opgepakt tijdens dronken uitje met ";
    };

    if (settingsFormData.get("maand")=="maart") {
        d="trotse ouder van";
    };

    if (settingsFormData.get("maand")=="april") {
        d="brengt donker geheim aan het licht over";
    };

    if (settingsFormData.get("maand")=="mei") {
        d="op straat doodgeschoten door";
    };

    if (settingsFormData.get("maand")=="juni") {
        d="overvalt huis van";
    };
    if (settingsFormData.get("maand")=="juli") {
        d="net getrouwd met";
    };
    if (settingsFormData.get("maand")=="augustus") {
        d="betaalde gigantische dwangsom aan ";
    };

    if (settingsFormData.get("maand")=="september") {
        d="houdt trauma over aan incident met";
    };

    if (settingsFormData.get("maand")=="oktober") {
        d="draagt coronavirus over aan";
    };

    if (settingsFormData.get("maand")=="november") {
        d="ging deze zomer vreemd met";
    };

    if (settingsFormData.get("maand")=="december") {
        d="slaat voorruit in van auto";
    };






   
if (settingsFormData.get("eersteLetterAchter")=="a"|| settingsFormData.get("eersteLetterAchter")=="A") {
    e="Philippe Geubels";
};
if (settingsFormData.get("eersteLetterAchter")=="b"|| settingsFormData.get("eersteLetterAchter")=="B") {
    e="Kevin De Bruyne";
};
if (settingsFormData.get("eersteLetterAchter")=="c"|| settingsFormData.get("eersteLetterAchter")=="C") {
    e="Anuna De Wever";
};
if (settingsFormData.get("eersteLetterAchter")=="d"|| settingsFormData.get("eersteLetterAchter")=="D") {
    e="Koning Filip";
};
if (settingsFormData.get("eersteLetterAchter")=="e"|| settingsFormData.get("eersteLetterAchter")=="E") {
    e="buurvrouw";
};
if (settingsFormData.get("eersteLetterAchter")=="f"|| settingsFormData.get("eersteLetterAchter")=="F") {
    e="Radja Nainggolan";
};
if (settingsFormData.get("eersteLetterAchter")=="g"|| settingsFormData.get("eersteLetterAchter")=="G") {
    e="treinconducteur";
};
if (settingsFormData.get("eersteLetterAchter")=="h"|| settingsFormData.get("eersteLetterAchter")=="H") {
    e="vriendin";
};
if (settingsFormData.get("eersteLetterAchter")=="i"|| settingsFormData.get("eersteLetterAchter")=="I") {
    e="plastische chirurg";
};
if (settingsFormData.get("eersteLetterAchter")=="j"|| settingsFormData.get("eersteLetterAchter")=="J") {
    e="Patrick Lefevre";
};
if (settingsFormData.get("eersteLetterAchter")=="k"|| settingsFormData.get("eersteLetterAchter")=="K") {
    e="Tom waes ";
};
if (settingsFormData.get("eersteLetterAchter")=="l"|| settingsFormData.get("eersteLetterAchter")=="L") {
    e="eigenaar methlab";
};
if (settingsFormData.get("eersteLetterAchter")=="m"|| settingsFormData.get("eersteLetterAchter")=="M") {
    e="Marc Coucke";
};
if (settingsFormData.get("eersteLetterAchter")=="n"|| settingsFormData.get("eersteLetterAchter")=="N") {
    e="Club Brugge hooligan";
};
if (settingsFormData.get("eersteLetterAchter")=="o"|| settingsFormData.get("eersteLetterAchter")=="O") {
    e="Joke Schauvliege";
};
if (settingsFormData.get("eersteLetterAchter")=="p"|| settingsFormData.get("eersteLetterAchter")=="P") {
    e="lijnbus chauffeur";
};
if (settingsFormData.get("eersteLetterAchter")=="q"|| settingsFormData.get("eersteLetterAchter")=="Q") {
    e="Bernie Sanders";
};
if (settingsFormData.get("eersteLetterAchter")=="r"|| settingsFormData.get("eersteLetterAchter")=="R") {
    e="schoonmoeder";
};
if (settingsFormData.get("eersteLetterAchter")=="s"|| settingsFormData.get("eersteLetterAchter")=="S") {
    e="kat van Karl Lagerfeld";
};
if (settingsFormData.get("eersteLetterAchter")=="t"|| settingsFormData.get("eersteLetterAchter")=="T") {
    e="Billie Eilish";
};
if (settingsFormData.get("eersteLetterAchter")=="u"|| settingsFormData.get("eersteLetterAchter")=="U") {
    e="Ben Weyts";
};
if (settingsFormData.get("eersteLetterAchter")=="v"|| settingsFormData.get("eersteLetterAchter")=="V") {
    e="Niels Destadsbader";
};
if (settingsFormData.get("eersteLetterAchter")=="w"|| settingsFormData.get("eersteLetterAchter")=="W") {
    e="die delle van Café Sport";
};
if (settingsFormData.get("eersteLetterAchter")=="x"|| settingsFormData.get("eersteLetterAchter")=="X") {
    e="uitbater lokale broodjeszaak";
};
if (settingsFormData.get("eersteLetterAchter")=="y"|| settingsFormData.get("eersteLetterAchter")=="Y") {
    e="Roemeense huurmoordenaar";
};
if (settingsFormData.get("eersteLetterAchter")=="z"|| settingsFormData.get("eersteLetterAchter")=="Z") {
    e="BTS";
};


    if (settingsFormData.get("eersteLetterVoornaam")=="a" || settingsFormData.get("eersteLetterVoornaam")=="A") {
        p="https://i.imgur.com/NJVr7BI.jpg";
    };

    if (settingsFormData.get("eersteLetterVoornaam")=="b"|| settingsFormData.get("eersteLetterVoornaam")=="B") {
        p="https://i.imgur.com/TomnHFR.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="c"|| settingsFormData.get("eersteLetterVoornaam")=="C") {
        p="https://i.imgur.com/8qylvrQ.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="d"|| settingsFormData.get("eersteLetterVoornaam")=="D") {
        p="https://i.imgur.com/BqIlhvo.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="e"|| settingsFormData.get("eersteLetterVoornaam")=="E") {
        p="https://i.imgur.com/80VP6Yr.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="f"|| settingsFormData.get("eersteLetterVoornaam")=="F") {
        p="https://i.imgur.com/eZolCbt.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="g"|| settingsFormData.get("eersteLetterVoornaam")=="G") {
        p="https://i.imgur.com/eHbI2if.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="h"|| settingsFormData.get("eersteLetterVoornaam")=="H") {
        p="https://i.imgur.com/4cw3rua.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="i"|| settingsFormData.get("eersteLetterVoornaam")=="I") {
        p="https://i.imgur.com/TLguxH1.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="j"|| settingsFormData.get("eersteLetterVoornaam")=="J") {
        p="https://i.imgur.com/vZ89YKt.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="k"|| settingsFormData.get("eersteLetterVoornaam")=="K") {
        p="https://i.imgur.com/BNOEB9T.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="l"|| settingsFormData.get("eersteLetterVoornaam")=="L") {
        p="https://i.imgur.com/ujyf88Q.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="m"|| settingsFormData.get("eersteLetterVoornaam")=="M") {
        p="https://i.imgur.com/pV8vxTD.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="n"|| settingsFormData.get("eersteLetterVoornaam")=="N") {
        p="https://i.imgur.com/2ChjucZ.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="o"|| settingsFormData.get("eersteLetterVoornaam")=="O") {
        p="https://i.imgur.com/n84M2bh.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="p"|| settingsFormData.get("eersteLetterVoornaam")=="P") {
        p="https://i.imgur.com/SpYgHBO.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="q"|| settingsFormData.get("eersteLetterVoornaam")=="Q") {
        p="https://i.imgur.com/MgVZ2zc.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="r"|| settingsFormData.get("eersteLetterVoornaam")=="R") {
        p="https://i.imgur.com/yvUWFVC.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="s"|| settingsFormData.get("eersteLetterVoornaam")=="S") {
        p="https://i.imgur.com/WU85wMT.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="t"|| settingsFormData.get("eersteLetterVoornaam")=="T") {
        p="https://i.imgur.com/KVKyhDa.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="u"|| settingsFormData.get("eersteLetterVoornaam")=="U") {
        p="https://i.imgur.com/oEBtEMI.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="v"|| settingsFormData.get("eersteLetterVoornaam")=="V") {
        p="https://i.imgur.com/BA8y2VU.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="w"|| settingsFormData.get("eersteLetterVoornaam")=="W") {
        p="https://i.imgur.com/WMLFQh6.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="x"|| settingsFormData.get("eersteLetterVoornaam")=="X") {
        p="https://i.imgur.com/oT6yw9f.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="y"|| settingsFormData.get("eersteLetterVoornaam")=="Y") {
        p="https://i.imgur.com/4V3nTHX.jpg";
    };
    if (settingsFormData.get("eersteLetterVoornaam")=="z"|| settingsFormData.get("eersteLetterVoornaam")=="Z") {
        p="https://i.imgur.com/yJNT7uP.jpg";
    };
    console.log(document.getElementById('pic').setAttribute('src',p));
    
    
    


    showText(b + c + " " + d + " " + e, "WelcomeMessage");
}

document.getElementById("settingsForm").addEventListener("submit", applySettings);



