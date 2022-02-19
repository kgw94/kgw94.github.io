
class HistoryDatabase
{
   constructor()
   {
      this.historyCookie = [];
   }
  

   setHistory(value)
   {
      if( this.historyCookie.indexOf( value ) == -1)
          this.historyCookie.splice(0,0,value);
   }
   
   historyHasValue( value )
   {
      return this.historyCookie.indexOf(value) > -1 ? true : false;
   }

   getAllhistory()
   {
      return this.historyCookie;
   }

   historyEmpty()
   {
      return this.historyCookie.length == 0 ? true : false;
   }

   clear()
   {
      this.historyCookie = [];
   }

   historyCookiePersist()
   {

   }

   historyReadPersistant()
   {

   }
}


class Cipher
{
   constructor(name,cipher = {},theme="#d2d22d",caseSentive=false)
   {
      this.name = name;
      this.cipher = cipher;
      this.theme = theme;
      this.caseSentive = caseSentive;
   }

   getName()
   {
      return this.name;
   }

   getCipher()
   {
      return this.cipher;
   }

   getTheme()
   {
      return this.theme;
   }
}

class  Calc 
{
   constructor( dbObject )
   {
      this.db = dbObject;
      this.category = {};
      this.active = [];
   }


   calculate( word,cipher,cat )
   {
      var total = 0;
      var Kcipher;
       
      cat = this.category[cat];
        
      cat.forEach((Tcipher) =>{
         if( Tcipher.getName() == cipher )
            Kcipher = Tcipher;
      });

      if(!Kcipher.caseSentive)
         word = word.toLocaleLowerCase();

      Kcipher = Kcipher.getCipher();

      var word = word.trim();
      var i = 0;
      var num = "";
        
      while( i < word.length )
      {
          
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

   getActive()
   {
      return this.active;
   }

   setActive( activeObj = {} )
   {
      this.active.push( activeObj );
   }

   categoryEmpty()
   {
      return this._category.length > 1;
   }

   get category()
   {
      //console.log(this._category);
      return this._category;
   }

   set category( cipherMap )
   {
      this._category = Object.assign({},cipherMap);
   }

   init( cipherMap = {} )
   {
      console.log("assigning!");
      this.category = Object.assign({},cipherMap);
      console.log(this.category);
   }


}


var calc = new Calc(new HistoryDatabase());
var Kcategory = {};

/*
Kcategory['English'] = [
   new Cipher('English Ordinal',
   {
       'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,
       'j':10,'k':11,'l':12,'m':13,'n':14,'o':15,'p':16,'q':17,'r':18,
       's':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26
   },"#00e600")
];

calc.category = Kcategory;

var k = 0;
for( k=0; k < calc.category.length; k++ ){
   console.log(calc.category[k].cipher);
}
*/
//console.log(`${calc.category}`);
//export { HistoryDatabase ,Cipher,Calc };