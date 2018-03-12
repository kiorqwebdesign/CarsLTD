//= require jquery

$(document).ready(() => {
    $(".sub-box [type=submit]").click(() => {
        var email_address = $("[name=subscriber-email]").val()
        var xtra_field = $("[name=b_83935b21a8e870792585178a7_dc2c494b84]").val()
        $.ajax({
            url: "//designerlas.us15.list-manage.com/subscribe/post?u=83935b21a8e870792585178a7&amp;id=dc2c494b84",
            data: {
                "EMAIL": email_address,
                "b_83935b21a8e870792585178a7_dc2c494b84" : xtra_field
            },
            dataType: "jsonp",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            success: function(response){
                console.log(response)
        }})
        $(".notification-text").html("Thank You, Please check your email and verify your subscription.");
        $(".sub-box").animate({opacity: 0, height: 0}, 700)
    })
});

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-91015069-1', 'auto');
ga('send', 'pageview');