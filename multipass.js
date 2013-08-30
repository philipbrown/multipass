/* ========================================================================
 * MultiPass
 * https://github.com/philipbrown/multipass
 * ========================================================================
 * Copyright 2013, Philip Brown
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

var MultiPass = (function () {

  /* Settings alias */
  var s;

  return {
    /* Default settings */
    settings: {
      multiselect: '.multipass',
      inputBox: '.search',
      json: null,
      options: null,
    },

    /* Kick things off */
    init: function(options) {

      // Settings
      s = this.settings;

      // Set options
      for(var prop in options) {
        if(options.hasOwnProperty(prop)){
          s[prop] = options[prop];
        }
      }
      
      // Cache selectors
      s.select = $(s.multiselect);
      s.search = $(s.inputBox);
      
      // Set JSON options
      if(s.json){
        // Set HTML options
        this.setOptions(s.json);
        // Set Options
        s.options = s.json;
      }else{
        // Create array from static options
        s.options = this.getOptions();
      }
      
      // Listen for updates
      this.update(s.options);
    },

    /* Set the HTML options */
    setOptions: function(json) {
      // Cycle through json
      $.each(json, function(i, v) {
        // Append option
        s.select.append('<option value="' + v + '">' + v + '</option>');
      });
    },
    
    /* Get the HTML options as an array */
    getOptions: function() {
      // Map the options to an array
      return $('option', s.multiselect).map(function() {
        // Set the text as the value
        return $(this).text();
      }).get();
    },
    
    /* Update as the user types */
    update: function(options) {
      // Alias
      var self = this;
      // Listen for keyups
      s.search.keyup(function() {
        // Grab the input
        var input = $(this).val();
        // Cycle through the options
        $.each(options, function(i, v) {
          // Use a regex to find the closest match
          if (v.search(new RegExp("\^" + input + "", "i")) != -1) {
            // Pass the select box and the option
            self.selectOption($('select' + s.multiselect)[0], $(s.multiselect + ' option[value="'+ v +'"]')[0]);
            return false;
          }
        });
      });
    },     
    
    /* Set the option */
    selectOption: function(select, option) {
      // Get Select
      $select = $(select);
      // Set selected
      option.selected = true;
      // Set the selected index
      select.selectedIndex = option.index;
      // Get the scrollHeight property
      var scrollHeight = $select[0].scrollHeight;
      // Count the number of items in the list
      var noOfItems = $select.children().length;
      // Find the row height of each item
      var rowHeight = Math.round((scrollHeight / noOfItems));
      // Find the position of the selected item
      var position = rowHeight * option.index;
      // Set the position
      $select.scrollTop(position);
    }
  };
})();

