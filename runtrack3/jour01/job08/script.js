function sommenombrespremiers(nbr){
        for(var i = 2; i < nbr; i++)
          if(nbr%i === 0) return  i , "n'est pas un nombre premier";
        return   nbr , "est un nombre premier";
} sommenombrespremiers()
console.log(sommenombrespremiers(4));