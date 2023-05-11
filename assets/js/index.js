$(function(){

    /**글씨효과 */
    const headTxt = new SplitType('.sc-intro .word-wrap', { types: 'words, chars', });
    gsap.from(headTxt.chars,{
      // scrollTrigger:{
      //   trigger:".word-wrap",
      //   start:"0% 65%",
      //   end:"100% 100%",
      //   markers:true,
      //   scrub:1
      //   },
      yPercent:200,
      rotation:35,
      stagger:0.03,
    })

    const title1Txt = new SplitType('.sc-project .word-wrap', { types: 'words, chars', });
    gsap.from(title1Txt.chars,{
      scrollTrigger:{
        trigger:".sc-project .word-wrap",
        start:"0% 90%",
        end:"100% 100%",
        // markers:true,
        scrub:1
        },
      yPercent:200,
      rotation:35,
      stagger:0.03,
    })

    const title2Txt = new SplitType('.sc-features .word-wrap', { types: 'words, chars', });
    gsap.from(title2Txt.chars,{
      scrollTrigger:{
        trigger:".sc-features .word-wrap",
        start:"0% 90%",
        end:"100% 100%",
        // markers:true,
        scrub:1
        },
      yPercent:200,
      rotation:35,
      stagger:0.03,
    })

    /**(mobile 포함)main tab 스크롤 기능 */ 
    $('.header .nav').click(function(e){
      e.preventDefault();
      curr = $(window).scrollTop();
      tab = $(this).data('tab');
      tabmove = $(tab).offset().top;
      window.scrollTo({top:tabmove,behavior:"smooth"});
    })

    /**m-gnb 열고닫기 기능 */
    $('.m-gnb .btn-menu').click(function(e){
      e.preventDefault();
      $(this).addClass('on').siblings('.btn-close').addClass('on');
      $('.m-list').slideDown();
      $('.m-area').addClass('on');
      $('body').addClass('.m-hide');
    })
    $('.m-gnb .btn-close').click(function(e){
      e.preventDefault();
      $(this).removeClass('on').siblings('.btn-menu').removeClass('on');
      $('.m-list').slideUp();
      $('.m-area').removeClass('on');
      $('body').removeClass('.m-hide');
    })

    /**btn-pro 스크롤 기능 */
    $('.btn-pro').click(function(){
      move = $(this).data('move');
      scrollmove = $(move).offset().top;
      window.scrollTo({top:scrollmove, behavior:'smooth'});
    })


    /**btn-top 위로 올리기 기능 */
    $('.footer .btn-top').click(function(e){
      e.preventDefault();
      window.scrollTo({top:0,behavior:"smooth"});
    })


    ScrollTrigger.matchMedia({
      // large
      "(min-width: 768px)": function() {

      /**sc-visual 스크롤기능 */
        gsap.to('.plus1',{
          scrollTrigger:{
            trigger:".visual-wrap",
            start:"0% 40%",
            end:"80% 100%",
            // markers:true,
            scrub:1
            },
            opacity:1,
            yPercent:-100
        })
        gsap.to('.plus2',{
          scrollTrigger:{
            trigger:".visual-wrap",
            start:"0% 30%",
            end:"100% 100%",
            // markers:true,
            scrub:1
            },
            opacity:1,
            yPercent:-100
        })

      },
      // small
      "(max-width: 767px)": function() {
          
      },
      // all
      "all": function() {

      }
          
  })




})