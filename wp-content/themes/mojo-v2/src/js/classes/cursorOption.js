let options = {
    selector: '.cursor',
    focusElements: [
        {
            elements: '.menu__mainItem', // Can be nodelist or selector
            focusClass: 'cursor--menuItem',
        },

        {
            elements: '.serviceCard', // Can be nodelist or selector
            focusClass: 'cursor--service',
        },
        'button',
        'a',
        {
            elements: '.header--light', // Can be nodelist or selector
            focusClass: 'cursor--dark'
        },
        {
            elements: '#purposeSensible', // Can be nodelist or selector
            focusClass: 'cursor--big'
        },
        {
            elements: '.darkSection', // Can be nodelist or selector
            focusClass: 'cursor--dark'
        },
        {
            elements: '.footer', // Can be nodelist or selector
            focusClass: 'cursor--below',
        },
        {
            elements: '.homePurpose', // Can be nodelist or selector
            focusClass: 'cursor--below',
        },
        {
            elements: '.menu', // Can be nodelist or selector
            focusClass: 'cursor--menu',
        }
    ]
};

export default options;