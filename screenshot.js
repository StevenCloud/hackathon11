//preview.js

/*
def get_screenshot(params):
    headers = {"Content-type": "application/x-www-form-urlencoded",
               "Accept": "text/plain",
               "userkey": "HQKRAKBKRARAAJBKYEIAAQ"}

    try:
        r = requests.post('https://api.site-shot.com/', headers=headers, data=params)

        if (r.status_code == requests.codes.ok):
            return r.json()
        elif (r.status_code == 404):
            print("Screenshot hasn't been generated. The error: " + r.json().error)
        elif (r.status_code == 401):
            print("Invalid authentication token")
        elif (r.status_code == 403):
            print("Active subscription hasn't been found")

    except requests.exceptions.RequestException as e:
        print('Screenshot generation has failed, the error: ' + str(e))


def main():
    screenshot = get_screenshot(
        {'url': 'https://site-shot.com/',
         'width': 1280,
         'height': 1280,
         'format': 'png',
         'response_type': 'json',
         'delay_time': 2000,
         'timeout': 60000})

    if screenshot is not None:
        base64_image = screenshot['image'].split(',', maxsplit=1)[1]
        image_file = open('screenshot.png', 'wb')
        image_file.write(base64.b64decode(base64_image))
        image_file.close()


main()


NEW--------- 


var params = {'url': 'https://site-shot.com/',
         'width': 1280,
         'height': 1280,
         'format': 'png',
         'response_type': 'json',
         'delay_time': 2000,
         'timeout': 60000}
var headers = {"Content-type": "application/x-www-form-urlencoded",
                "Accept": "text/plain",
                "userkey": "HQKRAKBKRARAAJBKYEIAAQ"}


requests.post('https://api.site-shot.com/', headers=headers, data=params)

if (r.status_code == requests.codes.ok)
            return r.json()
else("tough look")

var elems = document.getElementsByTagName('a');
       
for (const [key, value] of Object.entries(elems))
{

}

DONT FORGET: change screenshot.js to content.js in manifest.json

*/
/*

document.addEventListener('click', function(e){

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    console.log(request);
    if(request.status === 200){
        console.log("hey");
    }
    else{
        console.log("b r u h")
    }
}
});
*/

/*
document.addEventListener('click', function(e){
fetch("https://api.site-shot.com/?url=www.com&userkey=HQKRAKBKRARAAJBKYEIAAQ")
.then(response => {
    return response.jpeg();
})
.then(users => {
    console.log(users);
});
});
*/

var container = document.getElementById("htmltoimage"); // full page 

document.addEventListener('click', function(e){

html2canvas(container,{allowTaint : true}).then(function(canvas) {

    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.png";
    link.href = canvas.toDataURL("image/png");
    link.target = '_blank';
    link.click();
});
});


//https://api.site-shot.com/?url=www.com&userkey=HQKRAKBKRARAAJBKYEIAAQ