import moment from 'moment';

export default class DateTimeUtil {
  static formatDate(date) {
    return moment(date).format('DD/MM/YYYY HH:mm');
  }

  static formatDateToQueryParam(date) {
    return date ? moment(date).format('YYYY-MM-DD') : '';
  }
}
