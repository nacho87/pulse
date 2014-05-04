var $form = $('#form'),
		$title = $('#title_form'),
		$url = $('#url_form'),
		$button = $('#show_form'),
		$list = $('#content'),
		$post = $('.item').first();


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