console.log('background ok');


chrome.runtime.onMessage.addListener(message);
window.definition = "test";
window.word = "test"
def_txt = ''
var test_txt
function message(request, sender, response) {
    if (request.id === 'selected_word') {
        console.log(request);
        window.word = request.text;
    }
    if (request.id === 'dictionary_raw_info') {
        console.log(request.text);
        raw_txt = request.text;
        //def_idx = raw_txt.search('{"definition":')
        //def_end_idx = raw_txt.search('","synonyms')
        def_txt = ''
        var regex1 = /{"definition"/gi, result, indices = [];
        while ( (result = regex1.exec(raw_txt)) ) {
            indices.push(result.index);
        }

        var regex2 = /","synonyms/gi, result2, indix = [];
        while ( (result2 = regex2.exec(raw_txt)) ) {
            indix.push(result2.index);
        }
        /*
        for (var i=def_idx; i < (raw_txt.length+2); i++) {
            if (i == def_end_idx) { break }
            def_txt += raw_txt[i];

        }
        */
        let def_idxn = (indices.length);
        let def_idxnn = indix.length;

        var difference = [];
        counter = 0;
        
        while (counter < def_idxn) {
            minux = indix[counter] - indices[counter];
            difference.push(minux);
            console.log(minux);
            counter += 1;
        }

        counter2 = 0;
        counter3 = 0;
        x=0;
        y=0;

        while (counter2 < def_idxn) {  
            x = indices[counter2];
            y = indix[counter2];
                while (x < y) {
                    def_txt += raw_txt[x];
                    x += 1;
                    if (x == y) {
                        def_txt += '."';
                        def_txt += "<br><br>";
                    }
                }
            counter2 += 1;
            
        }

        k = 0
        test_txt = def_txt.replace('{"definition"', "Definition");
        while (k < def_idxn) {
            if (k != 0) {
                test_txt = test_txt.replace('{"definition"', "\n Definition");
            }
            k += 1
            test_txt = test_txt.replace('{"definition"', "Definition");
        }
        console.log(test_txt);
        final_definitions = {
            text : test_txt,
            id : 'def_ready'
        }
        chrome.runtime.sendMessage(final_definitions);
        
    }
}

