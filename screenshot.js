//preview

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


document.addEventListener('click', function(e){
fetch("https://api.browshot.com/api/v1/simple?url=http://mobilito.net/&instance_id=12&width=640&height=480&key=my_api_key",
{mode : 'no-cors'})
.then(response => {
    console.log(response);
})
.then(json => {
    console.log(json);
});
});



//https://api.browshot.com/api/v1/simple?url=http://mobilito.net/&instance_id=12&width=640&height=480&key=my_api_key
//https://api.site-shot.com/?url=www.com&userkey=HQKRAKBKRARAAJBKYEIAAQ