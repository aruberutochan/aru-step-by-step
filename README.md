# aruStepByStep

A jQuery plugin which make really simple the creation of step by step forms

## Basic usage

Include `aru-step-by-step.js` after jQuery and Boostrap
```html
<script src="src/aru-step-by-step.js"></script>
```

Template example
```html
<div id="multistep-header"> </div>
<div class="tab-content aru-step-content">
    <div id="menu1">     
        <p>First tab content</p>
    </div>
    <div id="menu2">
        <p>Second tab content</p>
    </div>
    <div id="menu3">
    <p>Third tab content</p>
    </div>
    <!-- (...) -->
</div>
<script>
$('#multistep-header').aruStepByStep({
    container: '#multistep-container',
    steps: [{
        stepName: 'Basic Information',
        btnStyle: 'default',
        target: '#menu1'
    },
    {
        stepName: 'Advanced Settings',
        stepIcon: 'glyphicon glyphicon-question-sign',
        btnStyle: 'btn-circle',
        target: '#menu2'
    },
    {
        stepName: 'Other relevant information',
        target: '#menu3',
        submitId: 'submit-location-button',
    },
    ],
})
</script>

```

It will generate all the html markup and functions to create an step by step content. 
