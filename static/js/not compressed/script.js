

$(document).ready(function() {
					// Custom
					var stickyToggle = function(sticky, stickyWrapper,
							scrollElement) {
						var stickyHeight = sticky.outerHeight();
						var stickyTop = stickyWrapper.offset().top;
						if (scrollElement.scrollTop() >= stickyTop) {
							stickyWrapper.height(stickyHeight);
							sticky.addClass("is-sticky");
						} else {
							sticky.removeClass("is-sticky");
							stickyWrapper.height('auto');
						}
					};

					// Find all data-toggle="sticky-onscroll" elements
					$('[data-toggle="sticky-onscroll"]')
							.each(
									function() {
										var sticky = $(this);
										var stickyWrapper = $('<div>')
												.addClass('sticky-wrapper'); // insert
										// hidden
										// element
										// to
										// maintain
										// actual
										// top
										// offset
										// on
										// page
										sticky.before(stickyWrapper);
										sticky.addClass('sticky');

										// Scroll & resize events
										$(window)
												.on(
														'scroll.sticky-onscroll resize.sticky-onscroll',
														function() {
															stickyToggle(
																	sticky,
																	stickyWrapper,
																	$(this));
														});

										// On page load
										stickyToggle(sticky, stickyWrapper,
												$(window));
									});
				});

$(document).on("scroll", function() {
	if ($(document).scrollTop() > 200) {
		$('#myCarousel').carousel('pause');
	} else {
		$('#myCarousel').carousel('cycle');
	}
});

function trySubmit(bool) {
	if (bool == true) {
		document.getElementById("reg").type = "submit";
	} else if (bool == false) {
		document.getElementById("reg").type = "button";
	}
}
$(document)
		.ready(
				function() {

					var regexpMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					var regName = /[а-яА-ЯЁё-і]/;
					var regLog = /^\w+$/;

					$("#name")
							.change(
									function() {
										var name = $("#name").val();
										if (name.length < 2) {
											$("#name")
													.css("borderColor", "red");
											$("#errorName")
													.text(
															"Имя не может быть меньше 2 символов");
											trySubmit(false);
										} else if (!regName.test(name)) {
											$("#name")
													.css("borderColor", "red");
											$("#errorName")
													.text(
															"Имя должно быть на русском языке");
											trySubmit(false);
										} else {
											$("#name").css("borderColor",
													"green");
											$("#errorName").text("");
											trySubmit(true);
										}
									});
					$("#surname")
							.change(
									function() {
										var surname = $("#surname").val();
										if (surname.length < 3) {
											$("#surname").css("borderColor",
													"red");
											$("#errorSurname")
													.text(
															"Фамилия не может быть меньше 3 символов");
											trySubmit(false);
										} else if (!regName.test(surname)) {
											$("#surname").css("borderColor",
													"red");
											$("#errorSurname")
													.text(
															"Фамилия должна быть на русском языке");
											trySubmit(false);
										} else {
											$("#surname").css("borderColor",
													"green");
											$("#errorSurname").text("");
											trySubmit(true);
										}
									});
					$("#loginReg")
							.change(
									function() {
										var login = $("#loginReg").val();
										if (login.length < 2) {
											$("#loginReg").css("borderColor",
													"red");
											$("#errorLogin")
													.text(
															"Логин не может быть меньше 2 символов");
											trySubmit(false);
										} else if (!regLog.test(login)) {
											$("#loginReg").css("borderColor",
													"red");
											$("#errorLogin")
													.text(
															"Логин должен быть на английском языке");
											trySubmit(false);
										} else {
											$("#loginReg").css("borderColor",
													"green");
											$("#errorLogin").text("");
											trySubmit(true);
										}
									});
					$("#password")
							.change(
									function() {
										var pass = $("#password").val();
										if (pass.length < 8) {
											$("#password").css("borderColor",
													"red");
											$("#errorPass")
													.text(
															"Пароль не может быть меньше 8 символов");
											trySubmit(false);
										} else if (pass.length > 20) {
											$("#password").css("borderColor",
													"red");
											$("#errorPass")
													.text(
															"Пароль не может быть больше 20 символов");
											trySubmit(false);
										} else {
											$("#password").css("borderColor",
													"green");
											$("#errorPass").text("");
											trySubmit(true);
										}
									});
					$("#number")
							.change(
									function() {
										var phone = $("#number").val();
										if (isNaN(phone)) {
											$("#number").css("borderColor",
													"red");

											$("#errorNum")
													.text(
															"Телефон должен быть числом");
											trySubmit(false);

										} else if (!(/^(\+?375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/
												.test(phone))) {
											$("#number").css("borderColor",
													"red");
											$("#errorNum")
													.text(
															"Запишите телефон в формате +375/80291234567");
											trySubmit(false);
										} else {
											$("#number").css("borderColor",
													"green");
											$("#errorNum").text("");
											trySubmit(true);
										}
									});
					$("#email")
							.change(
									function() {
										var email = $("#email").val();
										if (!(regexpMail.test(email))) {
											$("#errorEmail")
													.text(
															"Email должен быть в формате qwe123@gmail.com");
											$("#email").css("borderColor",
													"red");
											trySubmit(false);
										} else {
											$("#email").css("borderColor",
													"green");
											$("#errorEmail").text("");
											trySubmit(true);
										}
									});

				});
$(document)
		.ready(
				function() {
					$("#numberCheck")
							.change(
									function() {
										var phone = $("#numberCheck").val();
										if (isNaN(phone)) {
											$("#numberCheck").css(
													"borderColor", "red");

											$("#errorNumСheck")
													.text(
															"Телефон должен быть числом");
											trySubmit(false);

										} else if (!(/^(\+?375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/
												.test(phone))) {
											$("#numberCheck").css(
													"borderColor", "red");
											$("#errorNumСheck")
													.text(
															"Запишите телефон в формате +375/80291234567");
											trySubmit(false);
										} else {
											$("#numberCheck").css(
													"borderColor", "green");
											$("#errorNumСheck").text("");
											trySubmit(true);
										}
									});
				});
function getId(id) {
    var uId = id;
    document.getElementById('hiddenId').value = uId;
}
function getBenefitIdDelete(id) {
    var uId = id;
    document.getElementById('hiddenBenefitIdDelete').value = uId;
}
function getBenefitIdAdd(id) {
    var uId = id;
    document.getElementById('hiddenBenefitIdAdd').value = uId;
}