$ = jQuery;
$.fn.aruStepByStep = function(options) {

    var defaults = { 
        steps:[], 
        container: '#multistep-container',
    };
    var settings = $.extend({}, defaults, options);
    for (var i = 0; i < settings.steps.length; i++) {
        step = i +1;
        nextStep = step + 1;
        prevStep = step - 1;
        var def = {
            stepName: 'Paso-' + step, // TODO: Localize names and strings
            stepIcon: 'glyphicon glyphicon-menu-right',
            btnStyle: '',
            liClass: i == 0 ? 'active' : '',
            target: '#menu' + step,
            prevStepTarget: '',
            // nextStepTarget: '',
            nextButton: i == (settings.steps.length - 1) ? 'submit' : 'default',
            prevButton: i == 0 ? '' : 'default',
            submitId: '',
        };

        if (i != 0 ) {

            def.prevStepTarget = settings.steps[i-1].target;
        } 

        settings.steps[i] =  $.extend({}, def, settings.steps[i]);			
    }

    for (var i = 0; i < settings.steps.length; i++) {
        var def = {
            nextStepTarget: ''
        };			
        if ( i != (settings.steps.length - 1) ) {

            def.nextStepTarget = settings.steps[i+1].target;				
        }
        settings.steps[i] =  $.extend({}, def, settings.steps[i]);			
    }
    function printButtonsOnBotton( stepSettings ) {

        
        
        var Header = '<ul class="list-unstyled list-inline pull-right">';
        var Content = '';
        if (stepSettings.prevButton == 'default') {
            Content +=  '<li><button type="button" class="btn btn-default prev-step" href="' + stepSettings.prevStepTarget + '"><i class="fa fa-chevron-left"> </i> Atrás </button> </li> ';
        } else {
            Content += stepSettings.prevButton;
        }

        if (stepSettings.nextButton == 'default') {
            Content +=  '<li><button type="button" class="btn btn-primary next-step" href="#menu2">Siguiente <i class="fa fa-chevron-right"></i></button></li>';
        } else if (stepSettings.nextButton == 'submit') {
            Content += '<li><input type="submit" id="' + stepSettings.submitId + '" class="btn btn-success" value="Publicar" /></li>';
        } else {
            Content += stepSettings.nextButton;
        }
        
        var Footer = '';
        var Clousure = '</ul>';
        var Total = Header + Content + Footer + Clousure ;
        $(stepSettings.target).append(Total);
    }

    function addClasses( settings ) {
        for (var i = 0; i < settings.steps.length; i++) {
            var element = settings.steps[i];
            $(element.target).addClass('tab-pane fade');
            if (i == 0 ) {
                $(element.target).addClass('active in');
            }           
        }

    }

    function printHeaderSteps ( obj, settings ) {
        var Header = '<dv class="process"> <ul class="process-row nav nav-tabs nav-justified">';
        var Content = '';
        for (var i = 0; i < settings.steps.length; i++) {
            var element = settings.steps[i];
            step = i+1;
            Content += '<li class="process-step ' + element.liClass + '">';
            Content += '<a class="aru-step-btn btn-default ' +  element.btnStyle + '" data-toggle="tab" href="' + element.target + '">';
            Content += '<span class="' + element.stepIcon + '"> </span><p><small> ' + element.stepName + '</small></p></a>';
            Content += '</li>';            
            printButtonsOnBotton(element);            
        }        
        var Footer = '';
        var Clousure = '</ul></li>';
        var Total = Header + Content + Footer + Clousure ;
        obj.append(Total);
        addClasses(settings);                

    }    
    return printHeaderSteps( this , settings );

};

jQuery('.aru-step-content').on('click', '.next-step, .prev-step', function (e) {
   
    var activeTab = jQuery('.tab-pane.active');

    if (jQuery(e.target).hasClass('next-step')) {
        var nextTab = activeTab.next('.tab-pane').attr('id');
        jQuery('[href="#' + nextTab + '"]').tab('show');
    } else {
        var prevTab = activeTab.prev('.tab-pane').attr('id');
        jQuery('[href="#' + prevTab + '"]').tab('show');
    }
    jQuery(window).scrollTop(0);
});
    




