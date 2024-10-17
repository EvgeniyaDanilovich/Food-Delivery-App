import LocalizedStrings, {
  LocalizedStringsMethods,
} from 'react-native-localization';
import enUS from './en-US';
import en from './en';
import it from './it';

let strings: LocalizedStringsMethods = new LocalizedStrings({
  'en-US': enUS,
  en: en,
  it: it,
});

export {strings};
