import barba     from '@barba/core';
import inview    from "../classes/InView";
import wait      from "../utils/wait";


export default class casesGrid {

    static get selector() {
        return '.casesGrid';
    }

    constructor(el) {
        this.el         = el;
        this.filters    = this.getFilters();
        this.form       = this.el.querySelector('.casesGrid__form');
        this.cases      = this.el.querySelectorAll('.caseCard');
        
        let fadeTransition = document.querySelector('.fadeTransitionEntered');

        if(fadeTransition){
            Array.from(this.cases).forEach((item) => {
                inview.addElement(item);
            });        
        }
        else{
            wait(400).then(() => {
                Array.from(this.cases).forEach((item) => {
                    inview.addElement(item);
                });
            });

            wait(800).then(() => {
                inview.addElement(this.form);
            })
        }

        this.setEvents();
    }

    getFilters() {
        let elements = this.el.querySelectorAll('.casesGrid__filter')
        let filters = [];
        Array.from(elements).forEach(element => {
            let filter = {};
                filter.el = element;
                filter.label = element.querySelector('.casesGrid__filterLabel');
                filter.select = element.querySelector('.casesGrid__filterSelect');
                filter.ddLinks = this.getDDLinks(filter);
                filter.isShow = false;
            filters.push(filter);
        });

        return filters;
    }

    getDDLinks(filter) {
        let links = [];
        let elements = filter.el.querySelectorAll('.casesGrid__dropDownLink');
        elements.forEach(el => {
            let link = {};
                link.isActive = false;
                link.el = el;
                link.slug = el.dataset.slug;
                link.filter = filter;

                if(link.slug === filter.select.value){
                    link.el.classList.add('casesGrid__dropDownLink--active');
                }

            links.push(link);
        });
        return links;
    }

    getFormUrl() {
        let params = new URLSearchParams(new FormData(this.form)).toString()
        let actionUrl = this.form.getAttribute('action');
        return actionUrl + '?' + params;
    }

    refreshPage() {
        barba.go(this.getFormUrl());
    }

    toggleLink(link){
        if(link.isActive) this.desactiveLink(link);
        else this.activeLink(link);
        this.refreshPage();
    }

    activeLink(link){
        if(link.isActive) return;
        this.desactiveAllLink(link.filter);
        link.isActive = true;
        link.el.classList.add('casesGrid__dropDownLink--active');
        link.filter.select.value = link.slug;
    }

    desactiveLink(link){
        if(!link.isActive) return;
        link.isActive = false;
        link.el.classList.remove('casesGrid__dropDownLink--active');
        link.filter.select.value = '';
    }

    desactiveAllLink(filter){
        filter.ddLinks.forEach(link => {
            if(link.isActive) this.desactiveLink(link, filter);
        })
    }


    /**
     * Events
     */

    setEvents() {
        this.filters.forEach(filter => {
            filter.label.addEventListener('click', (e) => {
                this.e_clickLabel(e, filter);
            });
            filter.ddLinks.forEach(link => {
                link.el.addEventListener('click', (e) => {
                    this.e_clickDDLink(e, link, filter);
                })
            });

            filter.select.addEventListener('change', this.e_selectChange.bind(this));
        });

        this.form.addEventListener('submit', this.e_submit.bind(this));
        this.form.addEventListener('inView', this.e_inviewForm.bind(this));


    }

    e_clickLabel(e, filter) {
        console.log(filter);
    }

    e_clickDDLink(e, link, filter) {
        e.preventDefault();
        this.toggleLink(link, filter);
    }

    e_selectChange(e) {
        //this.form.submit();
        this.refreshPage();
    }

    e_submit(e) {
        e.preventDefault();
        this.refreshPage();
    }

    e_inviewForm(e) {
        this.form.classList.add('casesGrid__form--inview');
    }

}