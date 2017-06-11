var cols = rows = 2;

play(cols, rows);

function play(cols, rows){
	var i = 0;
	$('.container').animate({
	width: '200px',
	height: '200px',
	},function(){
	while(i != cols*rows)
	{
		$('.container').append($('<div>').addClass('circuit'));
		i++;
	}
	var a = [], count = Math.ceil(cols*rows/3), max = cols*rows, j = 0;
	console.log(count);
	console.log(max);
	console.log(a.length);
	while(j < count)
	{
		a[j] = Math.ceil(Math.random()*max);
		for(var k = 0; k <= (j - 1); k++)
		{
			if(a[k]==a[j])
				j = j-1;
		}
		j++;
	}
	for(j = 0; j < count; j++)
		$('.circuit:nth-child('+a[j]+')').addClass('choosed');
	console.log(a);
	setTimeout(clean, 2000);
	function clean(){
		$('.circuit').fadeIn("5000", function(){
			$(this).css('background', 'white')});
	};
	$('.circuit').click(function(){
		if($(this).hasClass('choosed'))
			$(this).css('background', 'blue');
		else
			$(this).addClass('wrong').css('background', 'red');
	});
});
};
