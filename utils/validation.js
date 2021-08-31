import {validationConfig} from './validationConfig';

export default function validation(name, value) {
  const config = validationConfig[name];
  let error = '';

  /** Required */
  if (config.required.rule && value.trim().length === 0) {
    error += config.required.error;
  } else {
    /** Minlength */
    if (config.minLength && value.trim().length < config.minLength.rule) {
      error += config.minLength.error;
    }

    /** Maxlength */
    if (config.maxLength && value.trim().length > config.maxLength.rule) {
      error += config.maxLength.error;
    }

    /**Regex */
    if (config.regex && !config.regex.rule.test(value.trim())) {
      error += config.regex.error;
    }
  }

  return error;
}
