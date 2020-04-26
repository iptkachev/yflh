const AdCabinet = 1605708204;
const VK = require('vksdk');
const vk = new VK({
  'appId': 7425087,
  'appSecret': 'GS1GA6zWxDg2RelKymRp',
  'language': 'ru',
});

/**
 * Request server methods
 */


function renderCityCount(props) {
  console.log(props.response.audience_count);
}

function getCitySize() {
  for (let cityId = 1; cityId < 2; cityId++) {
    console.log(cityId);
    vk.request('ads.getTargetingStats',
      {
        'access_token': 'b60dda1130db9efee1fed0cac2c1aed24e1cbe4869fa7f5d5b8b0e65cfbd5a7ea2a1b752db6c710a65843', 'account_id': AdCabinet,
        'link_url': 'https://www.google.ru/', 'link_domain': 'www.google.ru',
        'criteria': `{\"country\": \"1\", \"cities\": "${cityId}"}`,
      }, renderCityCount
    )
  }
}

getCitySize();