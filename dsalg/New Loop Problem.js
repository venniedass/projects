// New Loop Problem

// Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as space-separated strings on a single line (see the Sample below for more detail).


    for(i = 1; i < input.length; i++){
        var splitWord = input[i].split("")
        
        var even = ""
        var odd = ""
        
        for(x = 0; x < splitWord.length; x++){
            if(x%2 === 0){
                even = even + splitWord[x];              
            }else{
                odd = odd + splitWord[x];
            }
        }
        
        console.log(even+" "+odd)
    }

    