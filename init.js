$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.main_summary_head');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.main_summary_body').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.main_summary'), false);
});

$('.js_go_top').click(function(){
  $('html, body').animate({scrollTop: 0 + 'px'}, 1000)
});