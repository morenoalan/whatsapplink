const countries = [
    { "Name": "Afghanistan", "Alpha-2": "AF", "IDD": "+93", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" },
    { "Name": "Åland Islands", "Alpha-2": "AX", "IDD": "+358-18", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg" },
    { "Name": "Albania", "Alpha-2": "AL", "IDD": "+355", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg" },
    { "Name": "Algeria", "Alpha-2": "DZ", "IDD": "+213", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg" },
    { "Name": "American Samoa", "Alpha-2": "AS", "IDD": "+1-684", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg" },
    { "Name": "Andorra", "Alpha-2": "AD", "IDD": "+376", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg" },
    { "Name": "Angola", "Alpha-2": "AO", "IDD": "+244", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg" },
    { "Name": "Anguilla", "Alpha-2": "AI", "IDD": "+1-264", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg" },
    { "Name": "Antarctica", "Alpha-2": "AQ", "IDD": "+", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Proposed_flag_of_Antarctica_(Graham_Bartram).svg" },
    { "Name": "Antigua and Barbuda", "Alpha-2": "AG", "IDD": "+1-268", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg" },
    { "Name": "Argentina", "Alpha-2": "AR", "IDD": "+54", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
    { "Name": "Armenia", "Alpha-2": "AM", "IDD": "+374", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg" },
    { "Name": "Aruba", "Alpha-2": "AW", "IDD": "+297", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg" },
    { "Name": "Australia", "Alpha-2": "AU", "IDD": "+61", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_(converted).svg" },
    { "Name": "Austria", "Alpha-2": "AT", "IDD": "+43", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
    { "Name": "Azerbaijan", "Alpha-2": "AZ", "IDD": "+994", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" },
    { "Name": "Bahamas, The", "Alpha-2": "BS", "IDD": "+1-242", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg" },
    { "Name": "Bahrain", "Alpha-2": "BH", "IDD": "+973", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg" },
    { "Name": "Bangladesh", "Alpha-2": "BD", "IDD": "+880", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" },
    { "Name": "Barbados", "Alpha-2": "BB", "IDD": "+1-246", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg" },
    { "Name": "Belarus", "Alpha-2": "BY", "IDD": "+375", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg" },
    { "Name": "Belgium", "Alpha-2": "BE", "IDD": "+32", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
    { "Name": "Belize", "Alpha-2": "BZ", "IDD": "+501", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg" },
    { "Name": "Benin", "Alpha-2": "BJ", "IDD": "+229", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg" },
    { "Name": "Bermuda", "Alpha-2": "BM", "IDD": "+1-441", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg" },
    { "Name": "Bhutan", "Alpha-2": "BT", "IDD": "+975", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg" },
    { "Name": "Bolivarian Republic of Venezuela", "Alpha-2": "VE", "IDD": "+58", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" },
    { "Name": "Bolivia", "Alpha-2": "BO", "IDD": "+591", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg" },
    { "Name": "Bonaire, Sint Eustatius and Saba", "Alpha-2": "BQ", "IDD": "+599", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
    { "Name": "Bosnia and Herzegovina", "Alpha-2": "BA", "IDD": "+387", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg" },
    { "Name": "Botswana", "Alpha-2": "BW", "IDD": "+267", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg" },
    { "Name": "Bouvet Island", "Alpha-2": "BV", "IDD": "+", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
    { "Name": "Brazil", "Alpha-2": "BR", "IDD": "+55", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" },
    { "Name": "British Indian Ocean Territory", "Alpha-2": "IO", "IDD": "+246", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg" },
    { "Name": "Brunei", "Alpha-2": "BN", "IDD": "+673", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg" },
    { "Name": "Bulgaria", "Alpha-2": "BG", "IDD": "+359", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg" },
    { "Name": "Burkina Faso", "Alpha-2": "BF", "IDD": "+226", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg" },
    { "Name": "Burundi", "Alpha-2": "BI", "IDD": "+257", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg" },
    { "Name": "Cabo Verde", "Alpha-2": "CV", "IDD": "+238", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg" },
    { "Name": "Cambodia", "Alpha-2": "KH", "IDD": "+855", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg" },
    { "Name": "Cameroon", "Alpha-2": "CM", "IDD": "+237", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg" },
    { "Name": "Canada", "Alpha-2": "CA", "IDD": "+1", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_(Pantone).svg" },
    { "Name": "Cayman Islands", "Alpha-2": "KY", "IDD": "+1-345", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg" },
    { "Name": "Central African Republic", "Alpha-2": "CF", "IDD": "+236", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg" },
    { "Name": "Chad", "Alpha-2": "TD", "IDD": "+235", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg" },
    { "Name": "Chile", "Alpha-2": "CL", "IDD": "+56", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" },
    { "Name": "China", "Alpha-2": "CN", "IDD": "+86", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People's_Republic_of_China.svg" },
    { "Name": "Christmas Island", "Alpha-2": "CX", "IDD": "+61", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg" },
    { "Name": "Cocos (Keeling) Islands", "Alpha-2": "CC", "IDD": "+61", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_(Keeling)_Islands.svg" },
    { "Name": "Colombia", "Alpha-2": "CO", "IDD": "+57", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" },
    { "Name": "Comoros", "Alpha-2": "KM", "IDD": "+269", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg" },
    { "Name": "Congo", "Alpha-2": "CG", "IDD": "+242", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg" },
    { "Name": "Congo (DRC)", "Alpha-2": "CD", "IDD": "+243", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg" },
    { "Name": "Cook Islands", "Alpha-2": "CK", "IDD": "+682", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg" },
    { "Name": "Costa Rica", "Alpha-2": "CR", "IDD": "+506", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg" },
    { "Name": "Côte d'Ivoire", "Alpha-2": "CI", "IDD": "+225", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d'Ivoire.svg" },
    { "Name": "Croatia", "Alpha-2": "HR", "IDD": "+385", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" },
    { "Name": "Cuba", "Alpha-2": "CU", "IDD": "+53", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg" },
    { "Name": "Curaçao", "Alpha-2": "CW", "IDD": "+599", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Cura%C3%A7ao.svg" },
    { "Name": "Cyprus", "Alpha-2": "CY", "IDD": "+357", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg" },
    { "Name": "Czech Republic", "Alpha-2": "CZ", "IDD": "+420", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
    { "Name": "Democratic Republic of Timor-Leste", "Alpha-2": "TL", "IDD": "+670", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg" },
    { "Name": "Denmark", "Alpha-2": "DK", "IDD": "+45", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
    { "Name": "Djibouti", "Alpha-2": "DJ", "IDD": "+253", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg" },
    { "Name": "Dominica", "Alpha-2": "DM", "IDD": "+1-767", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg" },
    { "Name": "Dominican Republic", "Alpha-2": "DO", "IDD": "+1-809 and 1-829", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg" },
    { "Name": "Ecuador", "Alpha-2": "EC", "IDD": "+593", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" },
    { "Name": "Egypt", "Alpha-2": "EG", "IDD": "+20", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
    { "Name": "El Salvador", "Alpha-2": "SV", "IDD": "+503", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg" },
    { "Name": "Equatorial Guinea", "Alpha-2": "GQ", "IDD": "+240", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg" },
    { "Name": "Eritrea", "Alpha-2": "ER", "IDD": "+291", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg" },
    { "Name": "Estonia", "Alpha-2": "EE", "IDD": "+372", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" },
    { "Name": "Ethiopia", "Alpha-2": "ET", "IDD": "+251", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg" },
    { "Name": "Falkland Islands (Islas Malvinas)", "Alpha-2": "FK", "IDD": "+500", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg" },
    { "Name": "Faroe Islands", "Alpha-2": "FO", "IDD": "+298", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg" },
    { "Name": "Fiji Islands", "Alpha-2": "FJ", "IDD": "+679", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Fiji_(3-2).svg" },
    { "Name": "Finland", "Alpha-2": "FI", "IDD": "+358", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
    { "Name": "France", "Alpha-2": "FR", "IDD": "+33", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "French Guiana", "Alpha-2": "GF", "IDD": "+594", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "French Polynesia", "Alpha-2": "PF", "IDD": "+689", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg" },
    { "Name": "French Southern and Antarctic Lands", "Alpha-2": "TF", "IDD": "+", "Flag": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_the_French_Southern_and_Antarctic_Lands.svg" },
    { "Name": "Gabon", "Alpha-2": "GA", "IDD": "+241", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Gabon_(3-2).svg" },
    { "Name": "Gambia, The", "Alpha-2": "GM", "IDD": "+220", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg" },
    { "Name": "Georgia", "Alpha-2": "GE", "IDD": "+995", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg" },
    { "Name": "Germany", "Alpha-2": "DE", "IDD": "+49", "Flag": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" },
    { "Name": "Ghana", "Alpha-2": "GH", "IDD": "+233", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg" },
    { "Name": "Gibraltar", "Alpha-2": "GI", "IDD": "+350", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg" },
    { "Name": "Greece", "Alpha-2": "GR", "IDD": "+30", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
    { "Name": "Greenland", "Alpha-2": "GL", "IDD": "+299", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg" },
    { "Name": "Grenada", "Alpha-2": "GD", "IDD": "+1-473", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg" },
    { "Name": "Guadeloupe", "Alpha-2": "GP", "IDD": "+590", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "Guam", "Alpha-2": "GU", "IDD": "+1-671", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg" },
    { "Name": "Guatemala", "Alpha-2": "GT", "IDD": "+502", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg" },
    { "Name": "Guernsey", "Alpha-2": "GG", "IDD": "+44-1481", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg" },
    { "Name": "Guinea", "Alpha-2": "GN", "IDD": "+224", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg" },
    { "Name": "Guinea-Bissau", "Alpha-2": "GW", "IDD": "+245", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg" },
    { "Name": "Guyana", "Alpha-2": "GY", "IDD": "+592", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg" },
    { "Name": "Haiti", "Alpha-2": "HT", "IDD": "+509", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg" },
    { "Name": "Heard Island and McDonald Islands", "Alpha-2": "HM", "IDD": "+ ", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_(converted).svg" },
    { "Name": "Honduras", "Alpha-2": "HN", "IDD": "+504", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg" },
    { "Name": "Hong Kong SAR", "Alpha-2": "HK", "IDD": "+852", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg" },
    { "Name": "Hungary", "Alpha-2": "HU", "IDD": "+36", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" },
    { "Name": "Iceland", "Alpha-2": "IS", "IDD": "+354", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg" },
    { "Name": "India", "Alpha-2": "IN", "IDD": "+91", "Flag": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" },
    { "Name": "Indonesia", "Alpha-2": "ID", "IDD": "+62", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
    { "Name": "Iran", "Alpha-2": "IR", "IDD": "+98", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" },
    { "Name": "Iraq", "Alpha-2": "IQ", "IDD": "+964", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg" },
    { "Name": "Ireland", "Alpha-2": "IE", "IDD": "+353", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
    { "Name": "Israel", "Alpha-2": "IL", "IDD": "+972", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg" },
    { "Name": "Italy", "Alpha-2": "IT", "IDD": "+39", "Flag": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
    { "Name": "Jamaica", "Alpha-2": "JM", "IDD": "+1-876", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg" },
    { "Name": "Jan Mayen", "Alpha-2": "SJ", "IDD": "+47", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
    { "Name": "Japan", "Alpha-2": "JP", "IDD": "+81", "Flag": "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
    { "Name": "Jersey", "Alpha-2": "JE", "IDD": "+44-1534", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg" },
    { "Name": "Jordan", "Alpha-2": "JO", "IDD": "+962", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg" },
    { "Name": "Kazakhstan", "Alpha-2": "KZ", "IDD": "+7", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg" },
    { "Name": "Kenya", "Alpha-2": "KE", "IDD": "+254", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" },
    { "Name": "Kiribati", "Alpha-2": "KI", "IDD": "+686", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg" },
    { "Name": "Korea", "Alpha-2": "KR", "IDD": "+82", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
    { "Name": "Kosovo", "Alpha-2": "XK", "IDD": "+", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg" },
    { "Name": "Kuwait", "Alpha-2": "KW", "IDD": "+965", "Flag": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg" },
    { "Name": "Kyrgyzstan", "Alpha-2": "KG", "IDD": "+996", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg" },
    { "Name": "Laos", "Alpha-2": "LA", "IDD": "+856", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg" },
    { "Name": "Latvia", "Alpha-2": "LV", "IDD": "+371", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg" },
    { "Name": "Lebanon", "Alpha-2": "LB", "IDD": "+961", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg" },
    { "Name": "Lesotho", "Alpha-2": "LS", "IDD": "+266", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg" },
    { "Name": "Liberia", "Alpha-2": "LR", "IDD": "+231", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg" },
    { "Name": "Libya", "Alpha-2": "LY", "IDD": "+218", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg" },
    { "Name": "Liechtenstein", "Alpha-2": "LI", "IDD": "+423", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg" },
    { "Name": "Lithuania", "Alpha-2": "LT", "IDD": "+370", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg" },
    { "Name": "Luxembourg", "Alpha-2": "LU", "IDD": "+352", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg" },
    { "Name": "Macao SAR", "Alpha-2": "MO", "IDD": "+853", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg" },
    { "Name": "Macedonia, Former Yugoslav Republic of", "Alpha-2": "MK", "IDD": "+389", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg" },
    { "Name": "Madagascar", "Alpha-2": "MG", "IDD": "+261", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg" },
    { "Name": "Malawi", "Alpha-2": "MW", "IDD": "+265", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg" },
    { "Name": "Malaysia", "Alpha-2": "MY", "IDD": "+60", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" },
    { "Name": "Maldives", "Alpha-2": "MV", "IDD": "+960", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg" },
    { "Name": "Mali", "Alpha-2": "ML", "IDD": "+223", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg" },
    { "Name": "Malta", "Alpha-2": "MT", "IDD": "+356", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg" },
    { "Name": "Man, Isle of", "Alpha-2": "IM", "IDD": "+44-1624", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg" },
    { "Name": "Marshall Islands", "Alpha-2": "MH", "IDD": "+692", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg" },
    { "Name": "Martinique", "Alpha-2": "MQ", "IDD": "+596", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "Mauritania", "Alpha-2": "MR", "IDD": "+222", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg" },
    { "Name": "Mauritius", "Alpha-2": "MU", "IDD": "+230", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg" },
    { "Name": "Mayotte", "Alpha-2": "YT", "IDD": "+262", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "Mexico", "Alpha-2": "MX", "IDD": "+52", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
    { "Name": "Micronesia", "Alpha-2": "FM", "IDD": "+691", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg" },
    { "Name": "Moldova", "Alpha-2": "MD", "IDD": "+373", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg" },
    { "Name": "Monaco", "Alpha-2": "MC", "IDD": "+377", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg" },
    { "Name": "Mongolia", "Alpha-2": "MN", "IDD": "+976", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg" },
    { "Name": "Montenegro", "Alpha-2": "ME", "IDD": "+382", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg" },
    { "Name": "Montserrat", "Alpha-2": "MS", "IDD": "+1-664", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg" },
    { "Name": "Morocco", "Alpha-2": "MA", "IDD": "+212", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" },
    { "Name": "Mozambique", "Alpha-2": "MZ", "IDD": "+258", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg" },
    { "Name": "Myanmar", "Alpha-2": "MM", "IDD": "+95", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg" },
    { "Name": "Namibia", "Alpha-2": "NA", "IDD": "+264", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg" },
    { "Name": "Nauru", "Alpha-2": "NR", "IDD": "+674", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg" },
    { "Name": "Nepal", "Alpha-2": "NP", "IDD": "+977", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" },
    { "Name": "Netherlands", "Alpha-2": "NL", "IDD": "+31", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
    { "Name": "New Caledonia", "Alpha-2": "NC", "IDD": "+687", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_FLNKS.svg" },
    { "Name": "New Zealand", "Alpha-2": "NZ", "IDD": "+64", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" },
    { "Name": "Nicaragua", "Alpha-2": "NI", "IDD": "+505", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" },
    { "Name": "Niger", "Alpha-2": "NE", "IDD": "+227", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg" },
    { "Name": "Nigeria", "Alpha-2": "NG", "IDD": "+234", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" },
    { "Name": "Niue", "Alpha-2": "NU", "IDD": "+683", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg" },
    { "Name": "Norfolk Island", "Alpha-2": "NF", "IDD": "+672", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg" },
    { "Name": "North Korea", "Alpha-2": "KP", "IDD": "+850", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg" },
    { "Name": "Northern Mariana Islands", "Alpha-2": "MP", "IDD": "+1-670", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg" },
    { "Name": "Norway", "Alpha-2": "NO", "IDD": "+47", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
    { "Name": "Oman", "Alpha-2": "OM", "IDD": "+968", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg" },
    { "Name": "Pakistan", "Alpha-2": "PK", "IDD": "+92", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" },
    { "Name": "Palau", "Alpha-2": "PW", "IDD": "+680", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg" },
    { "Name": "Palestinian Authority", "Alpha-2": "PS", "IDD": "+970", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg" },
    { "Name": "Panama", "Alpha-2": "PA", "IDD": "+507", "Flag": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" },
    { "Name": "Papua New Guinea", "Alpha-2": "PG", "IDD": "+675", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg" },
    { "Name": "Paraguay", "Alpha-2": "PY", "IDD": "+595", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg" },
    { "Name": "Peru", "Alpha-2": "PE", "IDD": "+51", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" },
    { "Name": "Philippines", "Alpha-2": "PH", "IDD": "+63", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" },
    { "Name": "Pitcairn Islands", "Alpha-2": "PN", "IDD": "+870", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg" },
    { "Name": "Poland", "Alpha-2": "PL", "IDD": "+48", "Flag": "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" },
    { "Name": "Portugal", "Alpha-2": "PT", "IDD": "+351", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
    { "Name": "Puerto Rico", "Alpha-2": "PR", "IDD": "+1-787 and 1-939", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg" },
    { "Name": "Qatar", "Alpha-2": "QA", "IDD": "+974", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg" },
    { "Name": "Reunion", "Alpha-2": "RE", "IDD": "+262", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "Romania", "Alpha-2": "RO", "IDD": "+40", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg" },
    { "Name": "Russia", "Alpha-2": "RU", "IDD": "+7", "Flag": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
    { "Name": "Rwanda", "Alpha-2": "RW", "IDD": "+250", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg" },
    { "Name": "Saint Barthélemy", "Alpha-2": "BL", "IDD": "+590", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "Saint Helena, Ascension and Tristan da Cunha", "Alpha-2": "SH", "IDD": "+290", "Flag": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
    { "Name": "Saint Kitts and Nevis", "Alpha-2": "KN", "IDD": "+1-869", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg" },
    { "Name": "Saint Lucia", "Alpha-2": "LC", "IDD": "+1-758", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg" },
    { "Name": "Saint Martin (French part)", "Alpha-2": "MF", "IDD": "+590", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "Saint Pierre and Miquelon", "Alpha-2": "PM", "IDD": "+508", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "Saint Vincent and the Grenadines", "Alpha-2": "VC", "IDD": "+1-784", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg" },
    { "Name": "Samoa", "Alpha-2": "WS", "IDD": "+685", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg" },
    { "Name": "San Marino", "Alpha-2": "SM", "IDD": "+378", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg" },
    { "Name": "São Tomé and Príncipe", "Alpha-2": "ST", "IDD": "+239", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg" },
    { "Name": "Saudi Arabia", "Alpha-2": "SA", "IDD": "+966", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
    { "Name": "Senegal", "Alpha-2": "SN", "IDD": "+221", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg" },
    { "Name": "Serbia", "Alpha-2": "RS", "IDD": "+381", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg" },
    { "Name": "Seychelles", "Alpha-2": "SC", "IDD": "+248", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg" },
    { "Name": "Sierra Leone", "Alpha-2": "SL", "IDD": "+232", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg" },
    { "Name": "Singapore", "Alpha-2": "SG", "IDD": "+65", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" },
    { "Name": "Sint Maarten (Dutch part)", "Alpha-2": "SX", "IDD": "+599", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Sint_Maarten.svg" },
    { "Name": "Slovakia", "Alpha-2": "SK", "IDD": "+421", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg" },
    { "Name": "Slovenia", "Alpha-2": "SI", "IDD": "+386", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg" },
    { "Name": "Solomon Islands", "Alpha-2": "SB", "IDD": "+677", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg" },
    { "Name": "Somalia", "Alpha-2": "SO", "IDD": "+252", "Flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg" },
    { "Name": "South Africa", "Alpha-2": "ZA", "IDD": "+27", "Flag": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
    { "Name": "South Georgia and the South Sandwich Islands", "Alpha-2": "GS", "IDD": "+", "Flag": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg" },
    { "Name": "South Sudan", "Alpha-2": "SS", "IDD": "+211", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg" },
    { "Name": "Spain", "Alpha-2": "ES", "IDD": "+34", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg" },
    { "Name": "Sri Lanka", "Alpha-2": "LK", "IDD": "+94", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg" },
    { "Name": "Sudan", "Alpha-2": "SD", "IDD": "+249", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg" },
    { "Name": "Suriname", "Alpha-2": "SR", "IDD": "+597", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg" },
    { "Name": "Svalbard", "Alpha-2": "SJ", "IDD": "+47", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
    { "Name": "Swaziland", "Alpha-2": "SZ", "IDD": "+268", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg" },
    { "Name": "Sweden", "Alpha-2": "SE", "IDD": "+46", "Flag": "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg" },
    { "Name": "Switzerland", "Alpha-2": "CH", "IDD": "+41", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_(Pantone).svg" },
    { "Name": "Syria", "Alpha-2": "SY", "IDD": "+963", "Flag": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg" },
    { "Name": "Taiwan", "Alpha-2": "TW", "IDD": "+886", "Flag": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg" },
    { "Name": "Tajikistan", "Alpha-2": "TJ", "IDD": "+992", "Flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg" },
    { "Name": "Tanzania", "Alpha-2": "TZ", "IDD": "+255", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg" },
    { "Name": "Thailand", "Alpha-2": "TH", "IDD": "+66", "Flag": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" },
    { "Name": "Togo", "Alpha-2": "TG", "IDD": "+228", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg" },
    { "Name": "Tokelau", "Alpha-2": "TK", "IDD": "+690", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg" },
    { "Name": "Tonga", "Alpha-2": "TO", "IDD": "+676", "Flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg" },
    { "Name": "Trinidad and Tobago", "Alpha-2": "TT", "IDD": "+1-868", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg" },
    { "Name": "Tunisia", "Alpha-2": "TN", "IDD": "+216", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" },
    { "Name": "Turkey", "Alpha-2": "TR", "IDD": "+90", "Flag": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
    { "Name": "Turkmenistan", "Alpha-2": "TM", "IDD": "+993", "Flag": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg" },
    { "Name": "Turks and Caicos Islands", "Alpha-2": "TC", "IDD": "+1-649", "Flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg" },
    { "Name": "Tuvalu", "Alpha-2": "TV", "IDD": "+688", "Flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg" },
    { "Name": "U.S. Minor Outlying Islands", "Alpha-2": "UM", "IDD": "+1", "Flag": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { "Name": "Uganda", "Alpha-2": "UG", "IDD": "+256", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg" },
    { "Name": "Ukraine", "Alpha-2": "UA", "IDD": "+380", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" },
    { "Name": "United Arab Emirates", "Alpha-2": "AE", "IDD": "+971", "Flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" },
    { "Name": "United Kingdom", "Alpha-2": "GB", "IDD": "+44", "Flag": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
    { "Name": "United States", "Alpha-2": "US", "IDD": "+1", "Flag": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { "Name": "Uruguay", "Alpha-2": "UY", "IDD": "+598", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" },
    { "Name": "Uzbekistan", "Alpha-2": "UZ", "IDD": "+998", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" },
    { "Name": "Vanuatu", "Alpha-2": "VU", "IDD": "+678", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_(official).svg" },
    { "Name": "Vatican City", "Alpha-2": "VA", "IDD": "+379", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg" },
    { "Name": "Vietnam", "Alpha-2": "VN", "IDD": "+84", "Flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" },
    { "Name": "Virgin Islands, U.S.", "Alpha-2": "VI", "IDD": "+1-340", "Flag": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg" },
    { "Name": "Virgin Islands, British", "Alpha-2": "VG", "IDD": "+1-284", "Flag": "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_British_Virgin_Islands.svg" },
    { "Name": "Wallis and Futuna", "Alpha-2": "WF", "IDD": "+681", "Flag": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
    { "Name": "Yemen", "Alpha-2": "YE", "IDD": "+967", "Flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg" },
    { "Name": "Zambia", "Alpha-2": "ZM", "IDD": "+260", "Flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg" },
    { "Name": "Zimbabwe", "Alpha-2": "ZW", "IDD": "+263", "Flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg" }
]