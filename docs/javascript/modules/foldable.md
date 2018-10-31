# Foldable.js

* [Foldable.js](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/js/modules/Foldable.js)

**Config:**
```js
{
  eventType: 'click', // string, possible value click or change
  trigger: [], // HTMLElement[] || NodeList
  target: null, // HTMLElement
  breakpoint: {
    min: 0, // number
    max: 0 // number
  },
  openCallback: null, // null || Function,
  closeCallback: null, // null || Function,
}
```

## Basic
No animation, just add attribute style with ``display: none|block`` on the target.
<br>
<br>
<Foldable-basic></Foldable-basic>

## Animation
if you want to animated the target, Foldable provide **openCallback** and **closeCallback**.  
You can access to ``trigger, target, done`` Foldable instance with destructuring args:  
- **trigger** HTMLElement || [...NodeList]  
- **target** HTMLElement  
- **done** Function
```js
openCallback({trigger, target, done}) => {}
```

::: warning
Once your animation completed you must call done().
:::

In some cases you can triggered many triggers to open one target :grin:
<br>
<br>
<Foldable-animation></Foldable-animation>

**Example with Velocity.js**
```js
import {Foldable} from 'path/to/Foldable';
import Velocity from 'velocity-animate';

const foldableAnimated = new Foldable({
  trigger: document.querySelectorAll('.js-trigger-animated'),
  target: document.getElementById('js-target-animated'),
  openCallback: ({trigger, target, done}) => {
    Velocity(target, 'slideDown', {
      complete: () => done()
    })
  },
  closeCallback: ({trigger, target, done}) => {
    Velocity(target, 'slideUp', {
      complete: () => done()
    })
  }
});
```

## Change event
You can use Foldable to toggle an element in forms if you need it.  
<br>
<br>
<Foldable-change-event></Foldable-change-event>

**Example with Velocity.js**  
In this example we use [setRequiredFields()](../utils/setRequiredFields.html) to manage required fields.
```js {6,13}
const foldableChange = new Foldable({
	eventType: 'change',
	trigger: document.querySelectorAll('.js-trigger-checkbox'),
	target: document.getElementById('js-target-checkbox'),
	openCallback: ({trigger, target, done}) => {
	  if (trigger.checked) {
	  
	  	// Mangage required fields
	  	const labelsRequired = target.querySelectorAll('label.is-required');
	  	setRequiredFields(labelsRequired, true);
      
	    Velocity(target, 'slideDown', {
	      complete: () => done()
	    });
	  }
	},
	closeCallback: ({trigger, target, done}) => {
	  if (!trigger.checked) {
	  
	  	// Mangage required fields
	  	const labelsRequired = target.querySelectorAll('label.is-required');
	  	setRequiredFields(labelsRequired, true);
	  	
	    Velocity(target, 'slideDown', {
	      complete: () => done()
	    });
	  }
	}
});
```