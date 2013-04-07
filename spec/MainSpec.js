describe("Loop - Count Even ", function() {
  var cmds;
  var animateDone;  

  
  beforeEach(function(){
    $('#output').css('background','white');
    $('#output').html('');
    
    clearItems();
    clearCommands();
    init();
    animateDone  = false;
    cmds = getCommands();
  })

 

  it('have input ', function(){
    expect($('#input-a').css('display')).toBe('block');
  });

  it('count from 1 to input', function(){
    $('#input-a input').val('10');
    onSubmit();
    var count = 0;
    for(var i = 1; i <= 10 ;i++)
    {
      if(i%2 ==0)
      {
        expect($('#item'+count).html()).toEqual(''+i);
        count++;
      }
    }
  });

  it('should display "{input} is not a number" if input isNaN',function(){
    $('#input-a input').val('kk');
    onSubmit();
    expect($('#item0').html()).toEqual('"kk" is not a number');
  })

it('should clearAll() after display',function(){
    $('#input-a input').val('kk');
    onSubmit();
    var def = $('#item0').html();
    expect($('#item0').length).toEqual(1);
   
    $('#input-a input').val('12');
     onSubmit();
    var after = $('#item0').html();
    expect($('#item0').length).toEqual(1);
    expect(def).not.toEqual(after);
  })


it('should clearInput after press',function(){
    $('#input-a input').val('kk');
    onSubmit();

    expect($('#input-a input').val()).toEqual('');
  })



});