import Airtable from "airtable";

const API_KEY = 'keyTFnrOIUfJgvQKL';
const BASE_ID = 'appn1KYB11PwcypMF';
const base    = new Airtable({apiKey: API_KEY}).base(BASE_ID);

export default base;