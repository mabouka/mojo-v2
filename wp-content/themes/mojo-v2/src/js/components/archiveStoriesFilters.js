import barba from '@barba/core';

export default class archiveStoriesFilters {

    static get selector() {
        return '.archiveStories__filtersSelect';
    }

    constructor(el) {
        this.select = el.querySelector('.archiveStories__select');
        this.setEvents();
    }

    setEvents() {
        this.select.addEventListener('change', (e) => {
            barba.go(e.target.value);
        });
    }
}
