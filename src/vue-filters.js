import moment from 'moment';

Vue.filter('readableDate', function (value, format) {
    let readableFormat = format || 'DD/MM/Y';
    if (!value) return '';
    return moment(value).format(readableFormat);
});

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
});
