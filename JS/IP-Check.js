/*
* 感谢由@congcong0806大佬编写的js，原脚本地址：https://github.com/congcong0806/surge-list/blob/master/Script/ipcheck.js

let url = "http://ip-api.com/json"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    let ip = jsonData.query
  body = {
    title: "节点信息",
    content: `IP信息：${ip}\n运营商：${isp}\n所在地：${emoji}${country} - ${city}`,
    icon: "globe.asia.australia.fill"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
