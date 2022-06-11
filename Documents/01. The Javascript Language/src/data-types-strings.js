function ucFirst(str) {
    if(str){
        str = str[0].toUpperCase() + str.slice(1);
        alert(str)
    } else {
        alert('No string passed')
    }
    
}
const word = prompt('Enter the word');
ucFirst(word);

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );


  function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
  }

  function extractCurrencyValue(str) {
    return +str.slice(1);
  }