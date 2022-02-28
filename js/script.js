$(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      // Variables privadas
      var links = this.el.find(".link");
      // Evento
      links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
    };
  
    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      ($this = $(this)), ($next = $this.next());
  
      $next.slideToggle();
      $this.parent().toggleClass("open");
  
      if (!e.data.multiple) {
        $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
      }
    };
  
    var accordion = new Accordion($("#accordion"), false);
  });
  
var StickyElement = function(node){
    var doc = $(document), 
    fixed = false,
    anchor = node.find('.sticky-anchor'),
    content = node.find('.sticky-content'); 
    var onScroll = function(e){
        var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
        if(docTop > anchorTop){
            if(!fixed){
                anchor.height(content.outerHeight());
                content.addClass('fixed');        
                fixed = true;
            }
            } else {
            if(fixed){
                anchor.height(0);
                content.removeClass('fixed'); 
                fixed = false;
            }
        }
    };
    $(window).on('scroll', onScroll);
};
var sticky = new StickyElement($('.sticky-element'));
console.log("sdadasdasdasd")