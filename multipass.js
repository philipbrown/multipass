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

  var s;

  return {
    settings: {
      select: $(".multipass"),
    },

    init: function(json) {
      s = this.settings;
      s.json = json;
      this.setOptions(s.json);
      this.update(s.json);
    },

    setOptions: function(json) {
      $.each(json, function(i, obj) {
        s.select.append('<option value="' + obj.value + '">' + obj.value + '</option>');
      });
    },
    
    update: function(json) {
      var self = this;
      $('.search').keyup(function() {
        var input = $(this).val();
        $.each(json, function(i, v) {
          if (v.value.search(new RegExp("\^" + input + "", "i")) != -1) {
            self.selectOption($('select.multipass')[0], $('.multipass option[value="'+ v.value +'"]')[0]);
            return false;
          }
        });
      });
    },
    
    selectOption: function(select, option) {
      $select = $(select);
      option.selected = true;
      select.selectedIndex = option.index;       
      var scrollHeight = $select[0].scrollHeight;      
      var noOfitems = $select.children().length;        
      var rowHeight = Math.round(((scrollHeight) / noOfitems));
      var position = rowHeight * option.index;
      $select.scrollTop(position);   
    }

  };
})();
