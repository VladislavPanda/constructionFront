const HelloVueApp = {
    data() {
      return {
        message: 'ОАО "Строитель"'
      }
    }
  }
  
  Vue.createApp(HelloVueApp).mount('#hello-vue')

const url = 'http://construction/bid/create';
const infoWindow = document.getElementById('info');

async function handler() {
  const inputData = Array.from(document.querySelectorAll('input, select, textarea'))
    .map(element  => element.value)
    
  const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(inputData),
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    }).catch((e) => {
      infoWindow.innerText = 'Ошибка запроса: \n' + e;
      throw e;
    });
    
    try {
      const data = await response.text();
      infoWindow.innerText = `Ответ сервера:\n${data}`;
    } catch(e) {
      infoWindow.innerText = 'Ошибка обработки ответа с сервера: \n' + e;
      throw e;
    }			
}