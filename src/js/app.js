import Greeting from './modules/greeting'

const hello = Greeting('🍩');

const outputNode = document.querySelector('.output__greeting');
outputNode.innerHTML = hello;

