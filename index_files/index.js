(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.as2 = function() {
	this.initialize(img.as2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,149);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.bukanmain = function() {
	this.initialize(img.bukanmain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.goahead = function() {
	this.initialize(img.goahead);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.goahead();
	this.instance.parent = this;
	this.instance.setTransform(-160,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-25,320,50);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,50);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bukanmain();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,50);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,50);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,50);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(-160,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-370,320,149);


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ghw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ghw
	this.instance = new lib.ghw();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_banner2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner2
	this.instance = new lib.as2();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).wait(38));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160,240);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},15).wait(116));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160,240);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},17).wait(128));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(251.4,31.65,2.5549,2.5549,0,0,0,91.3,-208.5);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({regY:-208.6,scaleX:1,scaleY:1,rotation:360,x:251.3,y:31.4,alpha:1},13).wait(71));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(196.4,22.4,2.2836,2.2836,0,0,0,36.3,-217.5);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({regX:36.2,scaleX:0.9069,scaleY:0.9069,x:196.25,y:22.5,alpha:1},5).to({regX:36.3,regY:-217.4,scaleX:0.9422,scaleY:0.9422,x:196.3,y:22.55},2).to({regY:-217.5,scaleX:1,scaleY:1,y:22.5},1).wait(90));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).to({alpha:1},12).wait(62));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(161.4,370.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:163.75,y:297.05},95).wait(50));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_144 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// ghw_obj_
	this.ghw = new lib.Scene_1_ghw();
	this.ghw.name = "ghw";
	this.ghw.parent = this;
	this.ghw.setTransform(160,25,1,1,0,0,0,160,25);
	this.ghw.depth = 0;
	this.ghw.isAttachedToCamera = 0
	this.ghw.isAttachedToMask = 0
	this.ghw.layerDepth = 0
	this.ghw.layerIndex = 0
	this.ghw.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ghw).wait(145));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 1
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(145));

	// Layer_8_obj_
	this.Layer_8 = new lib.Scene_1_Layer_8();
	this.Layer_8.name = "Layer_8";
	this.Layer_8.parent = this;
	this.Layer_8.depth = 0;
	this.Layer_8.isAttachedToCamera = 0
	this.Layer_8.isAttachedToMask = 0
	this.Layer_8.layerDepth = 0
	this.Layer_8.layerIndex = 2
	this.Layer_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(145));

	// banner2_obj_
	this.banner2 = new lib.Scene_1_banner2();
	this.banner2.name = "banner2";
	this.banner2.parent = this;
	this.banner2.depth = 0;
	this.banner2.isAttachedToCamera = 0
	this.banner2.isAttachedToMask = 0
	this.banner2.layerDepth = 0
	this.banner2.layerIndex = 3
	this.banner2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.banner2).wait(145));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 4
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(145));

	// t2_obj_
	this.t2 = new lib.Scene_1_t2();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.depth = 0;
	this.t2.isAttachedToCamera = 0
	this.t2.isAttachedToMask = 0
	this.t2.layerDepth = 0
	this.t2.layerIndex = 5
	this.t2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(145));

	// t1_obj_
	this.t1 = new lib.Scene_1_t1();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(160,120,1,1,0,0,0,160,120);
	this.t1.depth = 0;
	this.t1.isAttachedToCamera = 0
	this.t1.isAttachedToMask = 0
	this.t1.layerDepth = 0
	this.t1.layerIndex = 6
	this.t1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(145));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(160,25,1,1,0,0,0,160,25);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 7
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(145));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(160,25,1,1,0,0,0,160,25);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 8
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(145));

	// banner_obj_
	this.banner = new lib.Scene_1_banner();
	this.banner.name = "banner";
	this.banner.parent = this;
	this.banner.setTransform(161.4,185.8,1,1,0,0,0,161.4,185.8);
	this.banner.depth = 0;
	this.banner.isAttachedToCamera = 0
	this.banner.isAttachedToMask = 0
	this.banner.layerDepth = 0
	this.banner.layerIndex = 9
	this.banner.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.banner).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.6,-499.2,943.7,894.0999999999999);
// library properties:
lib.properties = {
	id: 'BB79B8EE1A18E5409469AB586EC115B0',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/as2.jpg", id:"as2"},
		{src:"images/banner.jpg", id:"banner"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/bukanmain.png", id:"bukanmain"},
		{src:"images/ghw.png", id:"ghw"},
		{src:"images/goahead.png", id:"goahead"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BB79B8EE1A18E5409469AB586EC115B0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;