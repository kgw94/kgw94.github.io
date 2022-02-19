var category = {}
var active = [];
var history = [];


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



function buildCategory()
{
    if(Object.keys(category).length > 0 )
    {
        
        var div = `<div class="tab">`;

        for( let n  of  Object.keys(category))
        {
          
           div += `<button class="tablinks" data-tabcontent="${n}"> ${n}</button>`;

        }
        div += `</div>`;

        // tab content 
        div += `<form action="#">`
        for( let n  of  Object.keys(category))
        {
            div += `<div id="${n}" class="tabcontent">`;
            div += `<h3 style="color:#101820FF;text-decoration:underline;"> ${n} ciphers </h3>`;
            category[n].forEach(element => {
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

function calculate( word,cipher,cat)
{
        var total = 0;
        let Kcipher;
       
        cat = category[cat];
        
        cat.forEach((Tcipher) =>{
            if( Tcipher.getName() == cipher )
                Kcipher = Tcipher;
        });

        if(!Kcipher.caseSentive)
            word = word.toLocaleLowerCase();

        Kcipher = Kcipher.getCipher();

        /*
        Array.from(word).forEach((letter) => {
            
            if( letter >= '0' && letter <= '9')
                total += parseInt(letter);
          
            if(Kcipher.hasOwnProperty(letter))
            {
                total += Kcipher[letter];
            }
           
        });
        */

        word = word.trim();
        var i = 0;
        var num = "";
        //var ch = '';
        while( i < word.length )
        {
          //  ch = word.charAt(i);

            if(Kcipher.hasOwnProperty(word[i]))
            {
                total += Kcipher[word[i]];

            }else if( word[i] >= '0' && word[i] <= '9' )
            {
                do
                {
                    num = num.concat(word[i]);
                    i++;
                }while(word[i] >= '0' && word[i] <= '9');
            }
        
            i++;
        }
      
       if( num.length > 0 )
           total += parseInt(num);
       return total;
}

function getCipherTable( cat ,cipher )
{
    ciphers = category[cat];
    ciphers.forEach((t) => {
        if( t.getName() == cipher)
            ciphers = t.getCipher();
    });
        
    return ciphers;
}

function getCipherTheme( cat,cipher )
{
    ciphers = category[cat];
    ciphers.forEach((t) => {
        if( t.getName() == cipher)
            ciphers = t.getTheme();
    });
        
    return ciphers;

}
function overviewTable(cat,cipher)
{
   
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

function historyTable()
{
        if( history.length > 0 )
        {
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
                        tab += `<th> ${calColorMe(active[j].cipher,active[j].cipher)}</th>`;
                    }
                    tab += '</tr>';
                    tab += `</tbody>`;
                    six_rows += 6;
                }

                tab += '<tr>';
                tab += `<td>${history[k]}</td>`;
                for( rows = 0; rows < active.length; rows++)
                {
                    tab += `<td><a onclick="this.style.display='none';" data-cipher="${active[rows].cipher}" href="#">${ calColorMe(calculate(history[k],active[rows].cipher,active[rows].category),active[rows].cipher)}</a></td>`;
                }
                tab += '</tr>';
            }
           
            tab += '</table>';
    
            document.querySelector("#history").innerHTML = tab;
        }
}

function addEvents()
{

    $("button").on("click",function(e){
        if($(this).hasClass("activate")){
          var cat = $(this).data("btn");
          cat = `#${cat}`;
          $(cat).find("input[type='checkbox']").each(function(elChild){
                var found = false;
                if( $(this).checked("checked")){
                    for( let [ n ,m ] of active.entries()){
                        if( m.cipher == $(this).val())
                             found = true;
                    }
                    if( !found )
                        active.push({"cipher":$(this).val(),"category":$(this).attr("data-ciphers")})
                }
                    
               
                   //alert( act$(this).val())
           /*   
            if(  $(this).prop("checked")  && active.indexOf( $(this).val() ) == -1)
            {
                active.push( { "cipher":$(this).val(),"category":$(this).attr("data-ciphers")});
            }
            else if( !$(this).prop("checked"))
            {
                for( let [ n ,m ] of active.entries()){
                      if( m.cipher == $(this).val())
                           active.splice(n,1);
                }
            }
            */
            // $(this).prop("checked",!$(this).checked);
           // active.push({"cipher":$(this).val(),"category":$(this).data("ciphers")});

          });
    
        }
           
    });

    $("input.ciphers").each(function(){

        $(this).on("change",function(){
         
            if(  $(this).prop("checked")  && active.indexOf( $(this).val() ) == -1)
            {
                var found = false;

                for( let [ n ,m ] of active.entries()){
                    if( m.cipher == $(this).val())
                         found = true;
                }

                if( !found )
                    active.push({"cipher":$(this).val(),"category":$(this).attr("data-ciphers")})
               
            }
            else if( !$(this).prop("checked"))
            {
                for( let [ n ,m ] of active.entries()){
                      if( m.cipher == $(this).val())
                           active.splice(n,1);
                }
            }
        });
        
    }); 
    

    $("#phraseForm input:text").on("blur change keyup keydown",function(){
        $("#result").html(makeTable( $(this).val() ));
    });
    
    $("#addHistory").on("click",function(){
        var phrase = $("#phraseForm input:text").val();

        if( history.indexOf(phrase) == -1 )
            history.push(phrase);
        historyTable();
    });

     document.querySelector("body").addEventListener('click',function(e){
            console.log(this.className);
     });
     
    
    /*
    document.each(function(i,j){

        console.log(`${i} + ${j}`);
        
      //  var tar = event.target;
       // alert(tar);
        
        alert(tar.classList.contains("cipherSel") + `${$(this).hasClass("cipherSel")}`);
        if( tar.classList.contains("cipherSel"))
        {
            alert('success!');
            let oCipher = tar.getAttribute("data-cipher");

            if( oCipher != null )
            {
                let oArray = oCipher.split("-");
                overviewTable(oArray[1],oArray[0]);
            }
        }
          
    });*/
    
    $(".tablinks").each(function(index){
        $(this).on("mouseover",function(e){
            openCity(e,$(this).attr("data-tabcontent"));
        });
    });

   
}

function  makeTable(oPhrase){
    /*
    var table = `<table id="resultsTab">`;
    var j = 0;
    table += `<tr>`;
    for( j =0; j < active.length; j++ )
    {
        table += `<th>${ calColorMe(active[j].cipher,active[j].cipher) }</th>`;
    }
    table += `</tr>`;
    var rows = 0;

    table += '<tr>';
    for( rows = 0; rows < active.length; rows++)
    {
        table += `<td><a class="cipherSel" data-cipher="${active[rows].cipher}-${active[rows].category}" href="#">${calColorMe(calculate(oPhrase,active[rows].cipher,active[rows].category),active[rows].cipher)}</a></td>`;
    }
    table += '</tr>';
    table += '</table>';

    return table;
    */

    var tab = `<div class="cipher-container">`;
   
    for( let [i,j] of active.entries())
    {
    
       let oTheme = getCipherTheme(j.category,j.cipher)
      
       tab += `<div class="cipher-box">`;
       tab += `<h3><span style="color:${oTheme };">${j.cipher}</span></h3>`;
       tab += '<span class="cipherSel" onmouseover=\"overviewTable(\''+j.category+'\',\''+j.cipher+'\');\" data-cipher="${j.cipher}-${j.category}"><span style="color:'+oTheme+'">'+calculate(oPhrase,j.cipher,j.category)+'</span></span>';
     
       tab += `</div>`;
    }
    tab += `</div>`;
    return tab;
}
