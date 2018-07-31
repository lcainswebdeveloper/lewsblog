export default class {
    constructor() {
        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    get(field) {
        if (this.errors[field]) {
            if (typeof this.errors[field] == 'string') {
                return this.errors[field];
            }
            return this.errors[field][0];
        }
        return '';
    }

    record(errors) {
        this.errors = errors.errors;
    }

    clear(field) {
        if (field) {
            delete this.errors[field];
        } else {
            this.errors = {};
        }

    }

}

