/* @flow */

import moment from 'moment';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { toast } from 'react-toastify';
import { matchPath } from 'react-router';
import axios from 'axios';

const getCurrencyBaseAmount = async (source, target) => {
  return await axios
    .get(`https://api.exchangeratesapi.io/latest?base=${source}`)
    .then(response => {
      return response.data.rates[target];
    })
    .catch(() => {
      return 0;
    });
};

let validateABN = (ABNNumber: any = '') => {
  let _ABNNumber = ABNNumber.replace(/ /g, '').toString() || '';
  let WeightArr: Array<number> = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  if (
    !_ABNNumber ||
    _ABNNumber.toString().length !== 11 ||
    isNaN(parseInt(_ABNNumber))
  ) {
    return false;
  }
  let sum = 0;
  for (let i in _ABNNumber) {
    let digit = parseInt(_ABNNumber[i]);
    if (i === '0') {
      digit = parseInt(_ABNNumber[i]) - 1;
    }
    sum += digit * WeightArr[parseInt(i)];
  }
  return sum % 89 === 0;
};

let mobileAndTabletcheck = () => {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    ) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

let isURLMatching = (route: string, browserUrl?: string, exact?: boolean) => {
  if (location.hash) {
    browserUrl = location.hash.slice(1).split('?')[0];
  } else if (!browserUrl) {
    browserUrl = location.pathname;
  }
  return Boolean(
    matchPath(browserUrl, {
      path: route,
      exact: exact,
    })
  );
};

const getFirstLetters = (name: string) => {
  const splitWords = name.split(' ');
  return (
    get(splitWords, ['0', '0'], '').toUpperCase() +
    get(splitWords, ['1', '0'], '').toUpperCase()
  );
};

let getRangeDates = (startDate: string, endDate: string) => {
  let dates = [],
    currentDate = startDate,
    addDays = (date, days) => {
      return moment(date)
        .add(days, 'days')
        .format();
    };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  return dates;
};

let showToast = (error: string | null, success?: string) => {
  if (error) {
    toast.error(error);
  } else if (success) {
    toast.success(success);
  }
};

let handleMutationResponse = (res: Object, key: string) => {
  const errors: any = get(res, `errors`, []);
  if (errors && errors.length > 0) {
    const str = errors.map(msg => `${msg.message}`) || [];
    return { error: str, success: false, result: null };
  }
  const result: any = get(res, `data.${key}`, null);
  if (result) {
    return { error: null, success: true, result };
  }
};

let isExternalUrl = (url: string) => {
  try {
    let host = window.location.hostname;
    let linkHost = url => {
      if (/^https?:\/\//.test(url)) {
        // Absolute URL.
        // The easy way to parse an URL, is to create <a> element.
        // @see: https://gist.github.com/jlong/2428561
        let parser = document.createElement('a');
        parser.href = url;

        return parser.hostname;
      }
      // Relative URL.
      return window.location.hostname;
    };

    return host !== linkHost(url);
  } catch (e) {
    return null;
  }
};

let isFormDirty = form => {
  const oldValue = get(form, 'initialValues') || {};
  const newValue = get(form, 'state.values') || {};
  return !isEqual(oldValue, newValue);
};

let randomNumber = (digit: number = 5) => {
  let min = Math.pow(10, digit - 1);
  let max = Math.pow(10, digit) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numberWithCommas = (x = '') => {
  let parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const utils = {
  getCurrencyBaseAmount,
  validateABN,
  mobileAndTabletcheck,
  isURLMatching,
  getRangeDates,
  getFirstLetters,
  showToast,
  isExternalUrl,
  handleMutationResponse,
  isFormDirty,
  randomNumber,
  numberWithCommas,
};
export {
  getCurrencyBaseAmount,
  validateABN,
  mobileAndTabletcheck,
  isURLMatching,
  getRangeDates,
  getFirstLetters,
  showToast,
  isExternalUrl,
  handleMutationResponse,
  isFormDirty,
  randomNumber,
  numberWithCommas,
};
export default utils;
