var $form = $('#form'),
		$title = $('#title_form'),
		$url = $('#url_form'),
		$button = $('#show_form'),
		$list = $('#content'),
		$post = $('.item').first();

//test sessionStorage and localStorage
//set console localStorage.autosave ="1"

if(localStorage.getItem('autosave')) {
	$title.val(sessionStorage.getItem('title'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('title', $title.val());
	sessionStorage.setItem('url', $url.val());

},100);



function showForm() {
	$form.slideToggle();
	$list.slideToggle();
	return false;
} //showForm

function addPost(){
	var url = $url.val(),
			title = $title.val(),
			$clone = $post.clone();

		$clone.find('.title_item a')
			.text(title)
			.attr('href', url);

		$clone.hide();

		$list.prepend($clone);
		showForm();
		$clone.fadeIn();
		$title.val('');
		$url.val('');
		return false;

}//addPost



//Event

$button.click( showForm );
$form.on('submit', addPost );
