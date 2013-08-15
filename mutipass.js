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
      var scrollTop = $select.scrollTop();
      $select.scrollTop(scrollTop);    
    }

  };
})();
