# Browser's Access Key Activators detector (jQuery plugin)

## Description

This jQuery plugin retrieves the keys that activate the access-key of the HTML elements which have it defined.

It currently supports Linux, Mac and Windows OS and Chrome, Firefox, Opera and IE. It uses some of the mapping info from https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey 

## Dependencies

Requires jQuery >=1.5 and https://github.com/bestiejs/platform.js/blob/master/platform.js

## Usage

1. Include jQuery & platform.js:

	```html
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.5/platform.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script type="text/javascript" src="../Jquery.accessKeysActivators.js"></script>
	```

3. Call the plugin:

	```javascript
	$(function() {
		var keys = $.getAccessKeyActivators();
		console.log(keys);
		$("div").html(keys.toString());
	});
	```