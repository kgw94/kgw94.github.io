$(document).ready(function(){

    Kcategory['English'] = [
        new Cipher('English Ordinal',
        {
            'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,
            'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,
            's':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26
        },"#00e600"),
    
        new Cipher('English reduction',
        {
            'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,
            'j':1,'k':2,'l':3,'m':4,'n':5,'o':6,'p':7,'q':8,'r':9,
            's':1,'t':2,'u':3,'v':4,'w':5,'x':6,'y':7,'z':8,'&':9
        },"#0066ff"),

        /* new Cipher('Pythagoras Atbash',
        {
            'a':9,'b':8,'c':7,'d':6,'e':5,'f':4,'g':3,'h':2,'i':1,
            'j':9,'k':8,'l':7,'m':6,'n':5,'o':4,'p':3,'q':2,'r':1,
            's':9,'t':8,'u':7,'v':6,'w':5,'x':4,'y':3,'z':2

        },"#00e600"),*/

        new Cipher('English Atbash',
        {
            'a':26,'b':25,'c':24,'d':23,'e':22,'f':21,'g':20,'h':19,'i':18,
            'j':17,'k':16,'l':15,'m':14,'n':13,'o':12,'p':11,'q':10,'r':9,
            's':8,'t':7,'u':6,'v':5,'w':4,'x':3,'y':2,'z':1
        },"#1aff1a"),

        new Cipher('Agrippa Key',
        {
            'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,
            'k':10,'l':20,'m':30,'n':40,'o':50,'p':60,'q':70,'r':80,
            's':90,'t':100,'u':200,'x':300,'y':400,'z':500,'j':600,'v':700,'w':900,'&':800
        },"#99ffff"),
        
        new Cipher('English Sumerian',
        {
            'a':6,'b':12,'c':18,'d':24,'e':30,'f':36,'g':42,'h':48,'i':54,
            'j':60,'k':66,'l':72,'m':78,'n':84,'o':90,'p':96,'q':102,'r':108,
            's':114,'t':120,'u':126,'v':132,'w':138,'x':144,'y':150,'z':156
        },"#9494b8"),

        new Cipher("English Standard ",
        {
            'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,
            'j':10,'k':20,'l':30,'m':40,'n':50,'o':60,'p':70,'q':80,'r':90,
            's':100,'t':200,'u':300,'v':400,'w':500,'x':600,'y':700,'z':800,'&':900
        },"#ff4000"),
/*
        new Cipher('PV',
        {
            'a':34,'b':58,'c':56,'d':60,'e':42,'f':52,'g':65,'h':49,'i':42,'j':39,
            'k':63,'l':87,'m':99,'n':104,'o':65,'p':96,'q':109,'r':73,
            's':86,'t':107,'u':141,'v':165,'w':163,'x':167,'y':149,'z':159

        },"#99ffff")*/

    ];
    
    Kcategory['Mathematical'] = [
    
        new Cipher('Primes',
        {
            'a':2,'b':3,'c':5,'d':7,'e':11,'f':13,'g':17,'h':19,'i':23,
            'j':29,'k':31,'l':37,'m':41,'n':43,'o':47,'p':53,'q':59,'r':61,
            's':67,'t':71,'u':73,'v':79,'w':83,'x':89,'y':97,'z':101
        },"#b2b266"),
            
        new Cipher('Squares',
        {
            'a':1,'b':4,'c':9,'d':16,'e':25,'f':36,'g':49,'h':64,'i':81,
            'j':100,'k':121,'l':144,'m':169,'n':196,'o':225,'p':256,'q':289,'r':324,
            's':361,'t':400,'u':441,'v':484,'w':529,'x':576,'y':625,'z':676
        }),
        new Cipher('Trigonal',
        {
            'a':1,'b':3,'c':6,'d':10,'e':15,'f':21,'g':28,'h':36,'i':45,
            'j':55,'k':66,'l':78,'m':91,'n':105,'o':120,'p':136,'q':153,'r':171,
            's':190,'t':210,'u':231,'v':253,'w':276,'x':300,'y':325,'z':351
        }),
        
        new Cipher('Pentagonal',
        {
            'a':1,'b':5,'c':12,'d':22,'e':35,'f':51,'g':70,'h':92,'i':117,
            'j':145,'k':176,'l':210,'m':247,'n':287,'o':330,'p':376,'q':425,'r':477,
            's':532,'t':590,'u':651,'v':715,'w':782,'x':852,'y':925,'z':1001
        }),
        new Cipher('Fibonacci',
        {
                'a':1,'b':1,'c':2,'d':3,'e':5,'f':8,'g':13,'h':21,'i':34,
                'j':55,'k':89,'l':144,'m':233,'n':233,'o':144,'p':89,'q':55,'r':34,
                's':21,'t':13,'u':8,'v':5,'w':3,'x':2,'y':1,'z':1
        })
    ];
    /*
    Kcategory["Greek"] = [
        new Cipher('Greek Isopsephy Latin',{
            'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':3,'h':8,'i':10,
            'j':10,'k':20,'l':30,'m':40,'n':50,'o':70,'p':80,'q':90,'r':100,
            's':200,'t':300,'u':400,'v':400,'w':6,'x':600,'y':400,'z':7
        }),
        new Cipher('Greek Isopsephy',{
            'Α':1,'α':1,'Β':2,'β':2,'Γ':3,'γ':3,'Δ':4,'δ':4,'Ε':5,'ε':5,'Ϝ':6,'ϝ':6,'Ϛ':6,'ϛ':6
        },'#b2b266',true)
    ];
*/
    Kcategory['Other'] = [
        new Cipher('Latin Qabalah Simplex',
        {
            'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,
            'j':9,'l':10,'m':11,'n':12,'o':13,'p':14,'q':15,'r':16,
            's':17,'t':18,'u':18,'v':19,'x':20,'y':21,'z':22
        }),
        new Cipher('Knights Kadosh',
        {
            'a':70,'b':2,'c':3,'d':12,'e':15,'f':20,'g':30,'h':33,'i':38,
            'k':9,'l':10,'m':40,'n':60,'o':80,'p':81,'q':82,'r':83,
            's':84,'t':85,'u':86,'v':90,'x':91,'y':94,'z':95
        }),
        new Cipher('English Qaballa',{
            'a':1,'n':14,
            'b':20,'o':7,
            'c':13,'p':26,
            'd':6,'q':19,
            'e':25,'r':12,
            'f':18,'s':5,
            'g':11,'t':24,
            'h':4,'u':17,
            'i':23,'v':10,
            'j':16,'w':3,
            'k':9,'x':22,
            'l':2,'y':15,
            'm':21,'z':8
        },"#ffa31a"),
        new Cipher('Chaldean',{
            'a':1,'n':5,
            'b':2,'o':7,
            'c':3,'p':8,
            'd':4,'q':1,
            'e':5,'r':2,
            'f':8,'s':3,
            'g':3,'t':4,
            'h':5,'u':6,
            'i':1,'v':6,
            'j':1,'w':6,
            'k':2,'x':5,
            'l':3,'y':1,
            'm':4,'z':7
        },"#ffa31a")
    ];
    Kcategory["Experimental"] = [
        /*    new Cipher('Gematria Primus(CICADA 3301)',
            {
                'a':97,'b':61,'c':13,'d':89,'e':67,'f':2,'g':17,'h':23,'i':31,
                'j':37,'k':13,'l':73,'m':71,'n':29,'o':7,'p':43,'q':16,'r':11,
                's':53,'t':59,'u':3,'v':3,'w':19,'x':47,'y':103,'z':53,
                'Æ':33,'æ':33,'Œ':83,'œ':83,

            }),
            new Cipher('Primes full reduction',
            {
                'a':2,'b':3,'c':5,'d':7,'e':2,'f':4,'g':8,'h':1,'i':5,
                'j':2,'k':4,'l':1,'m':5,'n':7,'o':2,'p':8,'q':5,'r':7,
                's':4,'t':8,'u':1,'v':7,'w':2,'x':8,'y':7,'z':2
            }),*/
            new Cipher('Pythagorean(n-2 mod 9)',
            {
                'a':7,'b':8,'c':1,'d':2,'e':3,'f':4,'g':5,'h':6,'i':7,
                'j':8,'k':9,'l':1,'m':2,'n':3,'o':4,'p':5,'q':6,'r':7,
                's':8,'t':9,'u':1,'v':2,'w':3,'x':4,'y':5,'z':6
            })
        ]
/*
        new Cipher('Base 3',
        {
            'a':3,'b':6,'c':9,'d':12,'e':15,'f':18,'g':21,'h':24,'i':27,
            'j':30,'k':33,'l':36,'m':39,'n':42,'o':45,'p':48,'q':51,'r':54,
            's':57,'t':60,'u':63,'v':66,'w':69,'x':72,'y':75,'z':78
        })
    ];*/
   // calc.init( Kcategory );
    calc.category = Kcategory;

    calc.setActive({ "cipher":"English Ordinal","category":"English"});
    calc.setActive({ "cipher":"English reduction","category":"English"});
    calc.setActive({ "cipher":"English Atbash","category":"English"});
    buildCategory();

    $(".tablinks").each(function(index){
        $(this).on("mouseover",function(e){
            openCity(e,$(this).attr("data-tabcontent"));
        });
    });
    
    $("#phraseForm input:text").on("blur change keyup keydown",function(){
        $("#result").html(makeTable( $(this).val() ));
    });

    $("#addHistory").on("click",function(){
        var phrase = $("#phraseForm input:text").val();
    
        if( !calc.db.historyHasValue( phrase ))
            calc.db.setHistory(phrase);
        uiHistorytab();
        
    });

    $("input.ciphers").each(function(){
        $(this).on("change",function(){
            

            if(  $(this).prop("checked")  && calc.getActive().indexOf( $(this).val() ) == -1)
            {
                var found = false;

                for( let [ n ,m ] of calc.getActive().entries()){
                    if( m.cipher == $(this).val())
                         found = true;
                }

                if( !found )
                    calc.setActive( {"cipher":$(this).val(),"category":$(this).attr("data-ciphers")} );
               
            }
            else if( !$(this).prop("checked"))
            {
                for( let [ n ,m ] of calc.getActive().entries()){
                      if( m.cipher == $(this).val())
                          calc.getActive().splice(n,1);
                }
            }
        });
        
}); 

});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function overviewTable(cat,cipher){
   
    cipherTable = getCipherTable( cat ,cipher );
    cols = Object.keys(cipherTable);

    half = Math.round(cols.length/2);
    i = 0;
    j = 0;

    tab = `<table>`;
    tab += `<caption><span style="color:#fff;"> ${cipher} </span></caption>`;
    tab += `<thead>`;
    tab += `<tr>`;

    for( i = 0; i < half; i++)
    {
        tab += `<th>${cols[i]}</th>`;
    }
    tab +=`</tr>`;
    tab += `</thead>`;
    tab += `<tbody>`;

    tab +=`<tr>`;   

    for( j = 0; j < half; j++)
    {
        tab += `<td>${cipherTable[cols[j]]}</td>`;
    }

    tab += `</tr>`;
    tab += `</tbody>`;
    i = j = half;
    tab += `<tbody>`;
    tab += `<tr>`;

    for( i = half; i < cols.length; i++ )
    {
        tab += `<th>${cols[i]}</th>`;
    }

    tab += `</tr>`;
    tab += `<tr>`;

    for( j = half; j < cols.length; j++ )
    {
        tab += `<td>${cipherTable[cols[j]]}</td>`;
    }

    tab += `</tr>`;
    tab += `</tbody>`;
    tab += `</table>`;
    
    document.querySelector("#overview").innerHTML = tab;
   
}

function getCipherTable( cat ,cipher )
{
    var ciphers = calc.category[cat];
    ciphers.forEach((t) => {
        if( t.getName() == cipher)
            ciphers = t.getCipher();
    });
        
    return ciphers;
}

function getCipherTheme( cat,cipher )
{
    var ciphers = calc.category[cat];
    ciphers.forEach((t) => {
        if( t.getName() == cipher)
            ciphers = t.getTheme();
    });
        
    return ciphers;

}

function uiHistorytab(){

    if( !calc.db.historyEmpty())
    {
        var active = calc.getActive();

        var tab = `<table id="historyTab">`;
        var j = 0;
        tab += '<tr>';
        tab += `<th> ${calColorMe("Phrase or Word","Phrase")} </th>`;

        for( j =0; j < active.length; j++ )
        {
            tab += `<th>${calColorMe(active[j].cipher,active[j].cipher)}</th>`;
        }

        tab += '</tr>';

        var rows = 0;
        var k = 0;
        var i = 0;
        var six_rows = 6;

        var history = calc.db.getAllhistory(); 
        
        for( k = 0; k < history.length; k++ )
        {
            

            if( k == six_rows)
            {
                tab += `<tbody>`;
                var j = 0;
                tab += '<tr>';
                tab += `<th> Phrase or Word </th>`;
                for( j =0; j < active.length; j++ )
                {
                    tab += `<th> <span style="${ active[j].theme }">${active[j].cipher}</span></th>`;
                }
                tab += '</tr>';
                tab += `</tbody>`;
                six_rows += 6;
            }

            tab += '<tr>';
            tab += `<td>${ history[k] }</td>`;

            for( rows = 0; rows < active.length; rows++)
            {
                tab += `<td><a onclick="this.style.display='none';" data-cipher="${active[rows].cipher}" href="#">${ calColorMe(calc.calculate(history[k],active[rows].cipher,active[rows].category),active[rows].cipher)}</a></td>`;
            }
            tab += '</tr>';
        }
       
        tab += '</table>';

        document.querySelector("#history").innerHTML = tab;
    }
}

function buildCategory(){

    
    if(!calc.categoryEmpty() )
    {
        
        var div = `<div class="tab">`;

        var  c = calc.category;
        
        for( let n  of Object.keys( c ) )
        {
          
           div += `<button class="tablinks" data-tabcontent="${n}"> ${n}</button>`;

        }
        div += `</div>`;

        // tab content 
        div += `<form action="#">`
        for( let n  of  Object.keys( c ) )
        {

            div += `<div id="${n}" class="tabcontent">`;
            div += `<h3> ${n} ciphers </h3>`;
            calc.category[n].forEach(element => {
                div += `<ul class="cipher-list">`;
                div += `<li><label for="${element.name}"><input data-ciphers="${n}" class="ciphers" type="checkbox" value="${element.name}"></label>&nbsp;${element.name} </li>`;
                div += `</ul>`;
                
            });
            div+= `<button class="activate" data-btn="${n}" type="button"> Activate all </button>`;
            div += `</div>`;
        }
        div += `</div>`;
        div += `</div>`;
        
        
    }

    document.querySelector("#ciphers").innerHTML = div;
}

function  makeTable(oPhrase){

    var tab = `<div class="cipher-container">`;
   
    var active = calc.getActive();


    for( let [i,j] of active.entries())
    {
        
    
       let oTheme = getCipherTheme(j.category,j.cipher)
      
       tab += `<div class="cipher-box">`;
       tab += `<h3><span style="color:${oTheme };">${j.cipher}</span></h3>`;
       tab += '<span class="cipherSel" onmouseover=\"overviewTable(\''+j.category+'\',\''+j.cipher+'\');\" data-cipher="${j.cipher}-${j.category}"><span style="color:'+oTheme+'">'+calc.calculate(oPhrase,j.cipher,j.category)+'</span></span>';
     
       tab += `</div>`;
    }

    tab += `</div>`;
    return tab;
}

function calColorMe(phrase , cipher )
{
        var phraseText = "";
        
        switch(cipher)
        {
            case "Phrase":case "Word":
                phraseText = `<span style="color:#cc5200;">${phrase}</span>`;
                break;
            case "Pythagoras":case "Full reduction":
                phraseText = `<span style="color:#3385ff;">${phrase}</span>`;
                break;
            case "English Ordinal":
                phraseText = `<span style="color:#00e600;">${phrase}</span>`;
                break;
            case "English Qaballa":
                phraseText = `<span style="color:#b35900;">${phrase}</span>`;
                break;
            case "Reverse English Ordinal":
                phraseText = `<span style="color:#009900;">${phrase}</span>`;
                break;
            case "Primes":
                phraseText = `<span style="color:#b2b266;">${phrase}</span>`;
                break;
            case "Squares":
                phraseText = `<span style="color:#b300b3;">${phrase}</span>`;
                break;
            case "English Sumerian":
                phraseText = `<span style="color:#e69900;">${phrase}</span>`;
                break;
            case "KeyPad":
                phraseText = `<span style="color:#ff4d4d;">${phrase}</span>`;
                break;
            default:
                phraseText = `<span style="color:#3385ff;">${phrase}</span>`;
                break;

        }

        return phraseText;
}
