console.log('background ok');


chrome.runtime.onMessage.addListener(message);
window.definition = "test";
window.word = "test"
function message(request, sender, response) {
    if (request.id === 'selected_word') {
        console.log(request);
        window.word = request.text;
    }
    if (request.id === 'dictionary_raw_info') {
        console.log(request.text);
        raw_txt = request.text;
        def_idx = raw_txt.search('{"definition":')
        def_txt = ''

        for (var i=def_idx; i < raw_txt.length; i++) {
            if (raw_txt[i] == ']') { break }
            def_txt += raw_txt[i];

        }
        console.log(def_txt);
    }

}

