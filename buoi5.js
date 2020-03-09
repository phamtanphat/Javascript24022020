var mouse = {
    name : 'Mickey',
    sayhi : function() {
      console.log('Hi, my name is' , this.name)
    }
  }
const coppy = mouse.sayhi
coppy.bind({name : "Chuot"})()