/**
 * Execute the callback after the delay
 * @param {Function} callback
 * @param {Number} delay
 * @returns {Function}
 */
export function debounce (callback, delay){
  let timer;
  return function(){
    let args = arguments;
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(function(){
      callback.apply(context, args);
    }, delay)
  }
}