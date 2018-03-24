function dodano () {


	$.notify({
		// options
		message: 'Jelo je uspješno dodano u košaricu',
		url: 'https://github.com/mouse0270/bootstrap-notify',
		target: '_blank'
	}, {
		// settings
		element: 'body',
		position: null,
		type: "info",
		allow_dismiss: false,
		newest_on_top: true,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "center"
		},
		offset: 20,
		spacing: 10,
		z_index: 1031,
		delay: 500,
		timer: 100,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-3 col-sm-3 col-lg-3 width:50% alert alert-{0}" role="alert" style="text-align:center;">' +
			'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
			'<span data-notify="icon"></span> ' +
			'<span data-notify="title">{1}</span> ' +
			'<span data-notify="message">{2}</span>' +
			'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
			'</div>' +
			'<a href="{3}" target="{4}" data-notify="url"></a>' +
			'</div>'
	});

};


function poslano () {


	$.notify({
		// options
		message: 'Vaša narudžba je poslana',
		url: 'https://github.com/mouse0270/bootstrap-notify',
		target: '_blank'
	}, {
		// settings
		element: 'body',
		position: null,
		type: "success",
		allow_dismiss: false,
		newest_on_top: true,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "center"
		},
		offset: 20,
		spacing: 10,
		z_index: 1500,
		delay: 500,
		timer: 100,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-3 col-sm-3 col-lg-3 width:50% alert alert-{0}" role="alert" style="text-align:center;">' +
			'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
			'<span data-notify="icon"></span> ' +
			'<span data-notify="title">{1}</span> ' +
			'<span data-notify="message">{2}</span>' +
			'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
			'</div>' +
			'<a href="{3}" target="{4}" data-notify="url"></a>' +
			'</div>'
	});

};


function nijePoslano () {


	$.notify({
		// options
		message: 'Vaša narudžba je nije poslana',
		url: 'https://github.com/mouse0270/bootstrap-notify',
		target: '_blank'
	}, {
		// settings
		element: 'body',
		position: null,
		type: "danger",
		allow_dismiss: false,
		newest_on_top: true,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "center"
		},
		offset: 20,
		spacing: 10,
		z_index: 1500,
		delay: 500,
		timer: 100,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-3 col-sm-3 col-lg-3 width:50% alert alert-{0}" role="alert" style="text-align:center;">' +
			'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
			'<span data-notify="icon"></span> ' +
			'<span data-notify="title">{1}</span> ' +
			'<span data-notify="message">{2}</span>' +
			'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
			'</div>' +
			'<a href="{3}" target="{4}" data-notify="url"></a>' +
			'</div>'
	});

};


function loginFail () {


	$.notify({
		// options
		message: 'Login nije uspješan!!!',
		url: 'https://github.com/mouse0270/bootstrap-notify',
		target: '_blank'
	}, {
		// settings
		element: 'body',
		position: null,
		type: "danger",
		allow_dismiss: false,
		newest_on_top: true,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "center"
		},
		offset: 20,
		spacing: 10,
		z_index: 1500,
		delay: 500,
		timer: 100,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-3 col-sm-3 col-lg-3 width:50% alert alert-{0}" role="alert" style="text-align:center;">' +
			'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
			'<span data-notify="icon"></span> ' +
			'<span data-notify="title">{1}</span> ' +
			'<span data-notify="message">{2}</span>' +
			'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
			'</div>' +
			'<a href="{3}" target="{4}" data-notify="url"></a>' +
			'</div>'
	});

};



function registracijaFail () {


	$.notify({
		// options
		message: 'Registracija nije uspješna!!!',
		url: 'https://github.com/mouse0270/bootstrap-notify',
		target: '_blank'
	}, {
		// settings
		element: 'body',
		position: null,
		type: "danger",
		allow_dismiss: false,
		newest_on_top: true,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "center"
		},
		offset: 20,
		spacing: 10,
		z_index: 1500,
		delay: 500,
		timer: 100,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-3 col-sm-3 col-lg-3 width:50% alert alert-{0}" role="alert" style="text-align:center;">' +
			'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
			'<span data-notify="icon"></span> ' +
			'<span data-notify="title">{1}</span> ' +
			'<span data-notify="message">{2}</span>' +
			'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
			'</div>' +
			'<a href="{3}" target="{4}" data-notify="url"></a>' +
			'</div>'
	});

};


function registracijaSuccess () {


	$.notify({
		// options
		message: 'Registracija je uspješna. Možete se prijaviti.',
		url: 'https://github.com/mouse0270/bootstrap-notify',
		target: '_blank'
	}, {
		// settings
		element: 'body',
		position: null,
		type: "success",
		allow_dismiss: false,
		newest_on_top: true,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "center"
		},
		offset: 20,
		spacing: 10,
		z_index: 1500,
		delay: 500,
		timer: 100,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-3 col-sm-3 col-lg-3 width:50% alert alert-{0}" role="alert" style="text-align:center;">' +
			'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
			'<span data-notify="icon"></span> ' +
			'<span data-notify="title">{1}</span> ' +
			'<span data-notify="message">{2}</span>' +
			'<div class="progress" data-notify="progressbar">' +
			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
			'</div>' +
			'<a href="{3}" target="{4}" data-notify="url"></a>' +
			'</div>'
	});

};