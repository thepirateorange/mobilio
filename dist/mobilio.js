var mobilio = {
    
    analyze: function(input) {
        
        // Sanitize Numeric Input
        input = this.clean(input);
        
        // Search Network
        var result = this.search(input);
        
        // Return Result
        return result;
        
    },
    
    clean: function(input) {
        
        // Sanitize Numeric Input
        input = input.replace(/[^0-9]/, '');
        
        // Return Sanitized Input
        return input;
            
    },
    
    search: function(input) {
        
        // Prepare Input Data
        var length = input.length;
        
        // Check Input Length (Must Not Exceed 11 Characters)
        if(length > 11) {
            
            // Return Length Alert
            return this.alert("length");
            
        }
        
        // Check Input Length (Must be 1 or greater)
        else if(length < 1) {
            
            // Return Default Alert
            return this.alert();
            
        }
        
        // If Input Doesn't Exceed 11 Characters
        else {
            
            // Get Input Prefix
            var passOne = input.substr(0, 5); // Get First 5 Digits
            var passTwo = input.substr(0, 4); // Get First 4 Digits
                
            // Check Prefix For 0925 (Special Case For 0925).
            if(passTwo == "0925") {
                
                // Prepare Variable
                var n_0925;
                
                // Check If Length Is Greater Than 5
                if(length >= 5) {
                    
                    switch(passOne) {
                        case '09253':
                            n_0925 = 'Globe';
                            break;
                        case '09255':
                            n_0925 = 'Sun Cellular';
                            break;
                        case '09256':
                            n_0925 = 'Globe';
                            break;
                        case '09257':
                            n_0925 = 'Globe';
                            break;
                        case '09258':
                            n_0925 = 'Sun Cellular';
                            break;
                        default:
                            n_0925 = 'Sun Cellular';
                    }
                    
                    // Return
                    return n_0925;
                    
                }
                
                else return this.alert();
                
            }
            
            // If Prefix Doesn't Start With 0925, Proceed.
            else {
                
                if(length >= 4) {
                    
                    // Check If Prefix Exists In Database
                    if(passTwo in this.database) {
                        
                        // Return Value
                        return this.database[passTwo];
                        
                    }
                    
                    // Prefix Doesn't Exist
                    else {
                        
                        // Return Alert
                        return this.alert("unknown");
                        
                    }
                    
                }
                
                else return this.alert();
                
            }            
            
        }
        
    },
    
    alert: function(type) {
        
        // Prepare Variables
        var string;
        
        // Determine Alert Type
        switch(type) {
            
            // Input Exceeded 11 Characters
            case "length":
                string = "Entered number is too long. Please input a number that is 11 digits or less.";
                break;
                
            // Input Can't Be Found In Database
            case "unknown":
                string = "No results found for that number.";
                break;
                
            // No Input
            default:
                string = "YOUR NETWORK IS: . . .";
            
        }
        
        // Return String
        return string;
        
    },
    
    database: {
        "0813": "Smart",
        "0817": "Globe (V.O.I.P.)",
        "0905": "Globe or Touch Mobile",
        "0906": "Globe or Touch Mobile",
        "0907": "Smart or Talk N Text",
        "0908": "Smart",
        "0909": "Smart or Talk N Text",
        "0910": "Smart or Talk N Text",
        "0911": "Smart",
        "0912": "Smart or Talk N Text",
        "0913": "Smart",
        "0914": "Smart",
        "0915": "Globe",
        "0916": "Globe or Touch Mobile",
        "0917": "Globe",
        "0918": "Smart",
        "0919": "Smart or Talk N Text",
        "0920": "Smart, Talk N Text, Addict Mobile",
        "0921": "Smart or Talk N Text",
        "0922": "Sun Cellular",
        "0923": "Sun Cellular",
        "0924": "Sun Cellular",
        "0925": "Unavailable",
        "0926": "Globe or Touch Mobile",
        "0927": "Globe or Touch Mobile",
        "0928": "Smart",
        "0929": "Smart or Talk N Text",
        "0930": "Smart, Talk N Text, Red Mobile",
        "0932": "Sun Cellular",
        "0933": "Sun Cellular",
        "0934": "Sun Cellular",
        "0935": "Touch Mobile",
        "0936": "Globe or Touch Mobile",
        "0937": "ABS-CBN (Globe) – Not part of unli call or text promos",
        "0938": "Smart, Talk N Text, Red Mobile",
        "0939": "Smart, Talk N Text, Red Mobile",
        "0942": "Sun Cellular",
        "0943": "Sun Cellular",
        "0945": "Globe",
        "0946": "Talk N Text",
        "0947": "Smart",
        "0948": "Talk N Text",
        "0949": "Smart",
        "0950": "Talk N Text",
        "0956": "Globe",
        "0970": "Smart",
        "0973": "Extelcom",
        "0974": "Extelcom",
        "0975": "Touch Mobile",
        "0976": "Globe or Touch Mobile (TM)",
        "0977": "Globe",
        "0978": "Next Mobile",
        "0979": "Next Mobile",
        "0981": "Smart",
        "0989": "Smart or Talk N Text",
        "0994": "Globe",
        "0995": "Globe",
        "0996": "Cherry Prepaid (Globe) – Not part of unli call or text promos",
        "0997": "Globe or Touch Mobile",
        "0998": "Smart",
        "0999": "Smart"
    }
    
}