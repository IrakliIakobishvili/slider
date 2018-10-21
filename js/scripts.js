const Slider = {
    sliderCont  : document.getElementById("sliderContainer"),
    preview     : document.getElementById("preview"),
    next        : document.getElementById("next"),
    list        : document.getElementById("images__list"),
    images      : ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"],
    $width      : document.getElementById("images__list").offsetWidth,
    move        : 0,
    previewFun  : function () {  
        (this.move === 0) ? this.move = -(this.list.offsetWidth) : true;
        this.move += this.sliderCont.clientWidth;
        this.list.style.left = this.move+"px";
    },
    nextFun: function () {
        this.move -= this.sliderCont.clientWidth;
        (this.move === -(this.list.offsetWidth)) ? this.move = 0 : true;
        this.list.style.left = this.move+"px";
    },
    loadImg: function() {
        let i = 0;
        let $length = this.images.length;
        this.list.style.width = ($length * this.$width)+"px";
        while($length) {
            let li =  document.createElement("li");
            li.style.width = this.$width+"px";
            let img = document.createElement("img");
            img.setAttribute("src","images/"+this.images[i]);
            li.appendChild(img);
            this.list.appendChild(li);
            $length--;
            i++;
        }//while
    }
}//Slider 
Slider.loadImg();
