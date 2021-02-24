(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.bgrumput320 = function() {
	this.initialize(img.bgrumput320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,491);


(lib.copy320 = function() {
	this.initialize(img.copy320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,48);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,46);


(lib.CURSOR = function() {
	this.initialize(img.CURSOR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,39);


(lib.FILTER = function() {
	this.initialize(img.FILTER);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,65);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,96);


(lib.LOGOMB = function() {
	this.initialize(img.LOGOMB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,241);


(lib.MBlight = function() {
	this.initialize(img.MBlight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,241);


(lib.mejatekomakanan320 = function() {
	this.initialize(img.mejatekomakanan320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,57);


(lib.model1320 = function() {
	this.initialize(img.model1320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,125);


(lib.model2320 = function() {
	this.initialize(img.model2320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,221);


(lib.partition728 = function() {
	this.initialize(img.partition728);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,95);


(lib.pohon = function() {
	this.initialize(img.pohon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,95);


(lib.rumah320 = function() {
	this.initialize(img.rumah320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,85);


(lib.SHADOWRED = function() {
	this.initialize(img.SHADOWRED);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,358);


(lib.tangangelas320 = function() {
	this.initialize(img.tangangelas320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,61);


(lib.YUDECIDE = function() {
	this.initialize(img.YUDECIDE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,150);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tangangelas320();
	this.instance.parent = this;
	this.instance.setTransform(-47.3,-31.5,1,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-31.5,97.3,63);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tangangelas320();
	this.instance.parent = this;
	this.instance.setTransform(-52,-22.8,1,1,-8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-37.4,104.2,74.9);


(lib.RUMAH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rumah320();
	this.instance.parent = this;
	this.instance.setTransform(-58.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-42.5,117,85);


(lib.pohin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pohon();
	this.instance.parent = this;
	this.instance.setTransform(-364,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-47.5,728,95);


(lib.PARTITION2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.partition728();
	this.instance.parent = this;
	this.instance.setTransform(-364,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-47.5,728,95);


(lib.ORG2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.model2320();
	this.instance.parent = this;
	this.instance.setTransform(-39,-110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-110.5,78,221);


(lib.ORG1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.model1320();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-62.5,101,125);


(lib.MEJAMAKAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mejatekomakanan320();
	this.instance.parent = this;
	this.instance.setTransform(-130.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.5,-28.5,261,57);


(lib.yudecide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.YUDECIDE();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-34,0.453,0.453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-34,77.1,68);


(lib.SHADOWRED_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SHADOWRED();
	this.instance.parent = this;
	this.instance.setTransform(-150,-179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-179,300,358);


(lib.MB2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LOGOMB();
	this.instance.parent = this;
	this.instance.setTransform(-65.7,-52.8,0.439,0.439);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-52.8,131.6,105.7);


(lib.LOGOMB_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LOGOMB();
	this.instance.parent = this;
	this.instance.setTransform(-150,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-120.5,300,241);


(lib.FILTER2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FILTER();
	this.instance.parent = this;
	this.instance.setTransform(-84,-18.2,0.56,0.56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-18.2,168,36.4);


(lib.FILTER_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FILTER();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-22.2,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-22.2,205,44.4);


(lib.CURSOR_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CURSOR();
	this.instance.parent = this;
	this.instance.setTransform(-26,-20.7,1.061,1.062);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-20.7,52,41.4);


(lib.CTA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(-79,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-23,158,46);


(lib.COPY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copy320();
	this.instance.parent = this;
	this.instance.setTransform(-60.6,-20.6,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-20.6,131.8,27.9);


(lib.BG2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG();
	this.instance.parent = this;
	this.instance.setTransform(-310.6,-300,1.942,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310.6,-300,621.3,600);


(lib.BG_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300,0.938,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.BEGRON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgrumput320();
	this.instance.parent = this;
	this.instance.setTransform(-203.3,-249.5,1.016,1.016);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.3,-249.5,406.6,499.1);


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAIIAAgGIgFAAIAAgDIAFAAIAAgGIADAAIAAAGIAGAAIAAADIgGAAIAAAGg");
	this.shape.setTransform(312.5,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAKQgCgCAAgDIABgEIADgBIgDgCIAAgDIABgEQACgBACAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIgBADIgCACIACABIABADQAAADgCACQgCACgDAAQgCAAgCgBgAgBACIgBACIABADIABABIACgBIABgDIgBgCIgCgBIgBABgAgBgGIgBACIABACIABAAIACAAIABgCIgBgCIgCgBIgBABg");
	this.shape_1.setTransform(310.8,33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABALIAAgOIgFADIAAgEIAEgDQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAEAAIAAAVg");
	this.shape_2.setTransform(309,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(121));

	// bulet
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AApAAQAAAOgJALQgBACgCABQgMAMgRAAQgQAAgMgMQgMgLAAgRQAAgQAMgLQAMgMAQAAQARAAAMAMQACABABACQAJAKAAAOg");
	this.shape_3.setTransform(311,33.8,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(121));

	// tulisan
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBAJIAAgCIABgDIAAgCIAAgCIAAgDIgBgFIABAAIABAEIABAEIgBAEIgBAFg");
	this.shape_4.setTransform(311.1,46.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAGQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIADAAIABABIAAABIABgBIABgCIgBgCIgBAAIgBABIgDgBIACgGIAGAAIAAADIgEAAIAAACIABAAIACABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAIgBADQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgCgBg");
	this.shape_5.setTransform(310.4,46.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAFIgBgFIABgEQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIADABIABADIgDAAIAAgBIgBgBIgBABIAAADQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABIgDABQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBgAgBAAIAAACIABACIAAABIABgBIABgCIgBgCIgBAAIgBAAg");
	this.shape_6.setTransform(309.3,46.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAGQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIACAAIABABIAAABIABgBIABgCIgBgCIgBAAIgBABIgCgBIABgGIAGAAIAAADIgEAAIAAACIAAAAIADABQAAAAABAAQAAAAAAAAQAAABAAAAQABABAAAAIgCADQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIgCgBg");
	this.shape_7.setTransform(308.3,46.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAFIAAgFIAAgEQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIADABIABADIgCAAIgBgBIgBgBIgBABIAAADQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAABIgDABQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAgBAAIAAACIABACIAAABIACgBIAAgCIAAgCIgCAAIgBAAg");
	this.shape_8.setTransform(307.3,46.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCABIAAgBIAFAAIAAABg");
	this.shape_9.setTransform(306.5,46.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAHQAAgDACgDIABgEIgEAAIAAgDIAHAAIAAACIgCADIgCAEIAAAEg");
	this.shape_10.setTransform(305.6,46.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAHQAAgDACgDIABgEIgEAAIAAgDIAHAAIAAACIgCADIgCAEIAAAEg");
	this.shape_11.setTransform(304.6,46.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAHIAAgJIgCACIAAgCIACgCIABgCIACAAIAAANg");
	this.shape_12.setTransform(303.5,46.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCABIAAgBIAFAAIAAABg");
	this.shape_13.setTransform(302.8,46.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAFIgBgFIABgEQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAEQAAAEgBACIgDABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBgAAAgDIAAABIgBACIAAADIABACIAAAAIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_14.setTransform(301.9,46.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCAFIgBgFIABgEQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAEQAAAEgBACIgDABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBgAAAgDIAAABIgBACIAAADIABACIAAAAIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_15.setTransform(300.9,46.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAGIgBgDIAAgCIACgBIgCgBIAAgBIABgDIACgBIADABIABADIgBABIgBABIACABIAAACIgBADIgDABIgCgBgAAAABIgBACIABABIAAABIABgBIABgBIgBgCIgBAAIAAAAgAAAgDIgBABIABABIAAAAIABAAIABgBIgBgBIgBgBIAAABg");
	this.shape_16.setTransform(299.8,46.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAFIgBgFIABgEQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAEQAAAEgBACIgDABQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBgAAAgDIAAABIgBACIAAADIABACIAAAAIABAAIAAgCIABgDIgBgCIAAgBIgBgBIAAABg");
	this.shape_17.setTransform(298.8,46.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AABAJIgCgFIAAgEIABgEIABgEIABAAIgBAFIgBADIABADIAAAEIABACg");
	this.shape_18.setTransform(298,46.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAHIgDgHIgDADIAAAEIgCAAIAAgNIACAAIAAAGIAFgGIAEAAIgFAFIAFAIg");
	this.shape_19.setTransform(296.6,46.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAFQgBgCAAgCIAAgDIABgCIACgBIACgBQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQABACAAADQAAACgBACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCgAgCgDIgBADIABADIACACQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIABgDIgBgDIgDgBIgCABg");
	this.shape_20.setTransform(295.1,46.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AADAHIgDgHIgDADIAAAEIgCAAIAAgNIACAAIAAAGIAFgGIAEAAIgGAFIAGAIg");
	this.shape_21.setTransform(293.8,46.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAFQgBgCAAgCIAAgDIABgCIACgBIACgBQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQABACAAADQAAACgBACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCgAgCgDIgBADIABADIACACQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIABgDIgBgDIgDgBIgCABg");
	this.shape_22.setTransform(292.3,46.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADAHIgCgDIgBgCIgBgBIgBAAIAAAAIAAAGIgDAAIAAgNIAFAAIADABIACABIAAACIgBACIgDABIACABIACACIABADgAgCAAIABAAIACAAIABgBIAAgBIAAgBIgCAAIgBAAIgBAAg");
	this.shape_23.setTransform(291,46.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgGAAIAAADIAGAAIAAABIgGAAIAAADIAGAAIAAADg");
	this.shape_24.setTransform(289.6,46.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAEAHIAAgKIgDAKIgBAAIgDgKIAAAKIgDAAIAAgNIAEAAIACAIIACgIIAEAAIAAANg");
	this.shape_25.setTransform(288.2,46.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAAHIAAgNIABAAIAAANg");
	this.shape_26.setTransform(286.6,46.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAAHIAAgKIgEAAIAAgDIAJAAIAAADIgEAAIAAAKg");
	this.shape_27.setTransform(285.8,46.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AADAHIgFgIIAAAIIgCAAIAAgNIACAAIAFAIIAAgIIACAAIAAANg");
	this.shape_28.setTransform(284.6,46.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgHAAIAAADIAHAAIAAABIgHAAIAAADIAHAAIAAADg");
	this.shape_29.setTransform(283.3,46.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AADAHIAAgGIgFAAIAAAGIgCAAIAAgNIACAAIAAAGIAFAAIAAgGIACAAIAAANg");
	this.shape_30.setTransform(282,46.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AADAHIgCgDIgBgCIgBgBIgBAAIAAAAIAAAGIgDAAIAAgNIAFAAIADABIACABIAAACIgBACIgCABIABABIACACIABADgAgCAAIABAAIACAAIABgBIAAgBIAAgBIgCAAIgBAAIgBAAg");
	this.shape_31.setTransform(280.7,46.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgHAAIAAADIAHAAIAAABIgHAAIAAADIAHAAIAAADg");
	this.shape_32.setTransform(279.4,46.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAHIgFAAIAAgNIAFAAIACAAIABABIABABIABACIgBABIgBABIACABIABACIAAACIgCABIgCABgAgCAEIACAAIABAAIABAAIABgBIgBgBIgBgBIgBAAIgCAAgAgCAAIACAAIABAAIABgBIAAgBIAAgBIgBAAIgBgBIgCAAg");
	this.shape_33.setTransform(278.1,46.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AADAHIgFgIIAAAIIgCAAIAAgNIACAAIAFAIIAAgIIACAAIAAANg");
	this.shape_34.setTransform(276.2,46.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_35.setTransform(274.8,46.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AADAHIgFgIIAAAIIgCAAIAAgNIACAAIAFAIIAAgIIACAAIAAANg");
	this.shape_36.setTransform(273.5,46.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_37.setTransform(272.1,46.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAAAHIAAgGIgFgHIADAAIACAGIADgGIADAAIgFAHIAAAGg");
	this.shape_38.setTransform(270.8,46.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_39.setTransform(269.5,46.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIADAAIAAAKIAGAAIAAADg");
	this.shape_40.setTransform(268.3,46.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_41.setTransform(301.3,44);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AADAHIgFgIIAAAIIgCAAIAAgNIACAAIAFAIIAAgIIACAAIAAANg");
	this.shape_42.setTransform(300.4,43.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_43.setTransform(299,43.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AACAHIgCgHIgDADIAAAEIgCAAIAAgNIACAAIAAAGIAFgGIAEAAIgFAFIAFAIg");
	this.shape_44.setTransform(297.8,43.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEAFQgBgCgBgCIABgDIABgCIACgBIACgBQABAAAAAAQABAAABAAQAAABABAAQAAABAAAAQACACAAADQAAACgCACQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCgAgCgDIgBADIABADIACACQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIABgDIgBgDIgCgBIgCABg");
	this.shape_45.setTransform(296.3,43.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AADAHIgCgDIgBgCIAAgBIgCAAIgBAAIAAAGIgCAAIAAgNIAFAAIADABIABABIABACIgBACIgCABIABABIABACIACADgAgDAAIADAAIABAAIABgBIAAgBIAAgBIgBAAIgBAAIgDAAg");
	this.shape_46.setTransform(295,43.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEAFQgCgCABgCIAAgDIABgCIACgBIACgBQABAAAAAAQABAAABAAQAAABABAAQAAABAAAAQACACAAADQAAACgCACQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgCgAgCgDIgBADIABADIACACQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIABgDIgBgDIgDgBIgCABg");
	this.shape_47.setTransform(293.5,43.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgCAGIgDgCIAAgEIABgDIACgCIACgBQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAIACADIgDAAIgBgBIgCgBIgBABQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIACgBIACgBIAAgBIgEAAIAAgCIAGAAIAAAFIgCABIgDABIgDgBg");
	this.shape_48.setTransform(292,43.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCAGIgDgCIAAgEIABgDIACgCIACgBQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAIACADIgDAAIgBgBIgCgBIgBABQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIACgBIACgBIAAgBIgEAAIAAgCIAGAAIAAAFIgCABIgDABIgDgBg");
	this.shape_49.setTransform(290.5,43.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AADAHIgFgIIAAAIIgCAAIAAgNIACAAIAFAIIAAgIIACAAIAAANg");
	this.shape_50.setTransform(289.1,43.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgGAAIAAADIAFAAIAAABIgFAAIAAADIAGAAIAAADg");
	this.shape_51.setTransform(287.9,43.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAAAHIAAgKIgEAAIAAgDIAJAAIAAADIgEAAIAAAKg");
	this.shape_52.setTransform(286.7,43.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AADAHIgCgDIgBgCIAAgBIgCAAIAAAAIAAAGIgDAAIAAgNIAFAAIADABIACABIAAACIgBACIgDABIACABIACACIABADgAgCAAIACAAIABAAIABgBIAAgBIAAgBIgCAAIAAAAIgCAAg");
	this.shape_53.setTransform(285,43.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgGAAIAAADIAGAAIAAABIgGAAIAAADIAGAAIAAADg");
	this.shape_54.setTransform(283.7,43.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AADAHIgDgHIgCADIAAAEIgDAAIAAgNIADAAIAAAGIAEgGIAEAAIgGAFIAGAIg");
	this.shape_55.setTransform(282.4,43.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AADAHIgFgIIAAAIIgCAAIAAgNIACAAIAFAIIAAgIIACAAIAAANg");
	this.shape_56.setTransform(281,43.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_57.setTransform(279.6,43.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AADAHIgDgHIgCADIAAAEIgDAAIAAgNIADAAIAAAGIAEgGIAEAAIgGAFIAGAIg");
	this.shape_58.setTransform(278.4,43.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_59.setTransform(305.9,40.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AADAHIgFgIIAAAIIgCAAIAAgNIACAAIAFAIIAAgIIACAAIAAANg");
	this.shape_60.setTransform(304.6,40.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgHAAIAAADIAGAAIAAABIgGAAIAAADIAHAAIAAADg");
	this.shape_61.setTransform(303.3,40.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AADAHIgDgHIgDADIAAAEIgCAAIAAgNIACAAIAAAGIAFgGIAEAAIgFAFIAFAIg");
	this.shape_62.setTransform(302.1,40.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AADAHIgCgDIgBgCIgBgBIgBAAIgBAAIAAAGIgCAAIAAgNIAFAAIADABIABABIABACIgBACIgCABIABABIABACIACADgAgDAAIACAAIACAAIABgBIAAgBIAAgBIgBAAIgCAAIgCAAg");
	this.shape_63.setTransform(300.7,40.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgHAAIAAADIAGAAIAAABIgGAAIAAADIAHAAIAAADg");
	this.shape_64.setTransform(299.4,40.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAAAHIAAgKIgEAAIAAgDIAJAAIAAADIgEAAIAAAKg");
	this.shape_65.setTransform(298.1,40.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_66.setTransform(296.4,40.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAAAHIAAgGIgFgHIADAAIACAGIADgGIADAAIgFAHIAAAGg");
	this.shape_67.setTransform(295.1,40.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_68.setTransform(293.8,40.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AABAHIgDgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBgBIAEAAIABADIABAAIABAAIABgCIgBgBIgBgBIgBAAIgCgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIABgCIACgCIABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIACADIgEAAIAAgCIgCAAIgBAAIAAABIAAABIACAAIACABIACABIABACIgBACIgCACIgCAAg");
	this.shape_69.setTransform(292.5,40.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAAACIAAgBIAAgBIAAAAIAAgCIABAAIAAACIAAABIgBABIAAABg");
	this.shape_70.setTransform(291.1,40.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AADAHIgDgHIgDADIAAAEIgCAAIAAgNIACAAIAAAGIAFgGIAEAAIgFAFIAFAIg");
	this.shape_71.setTransform(290.3,40.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgEAGQgBgDAAgDIAAgCIABgCIACgBIACgBQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQABACAAACQAAADgBADQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgBgAgCgCIgBACIABAEIACABQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAIABgEIgBgCIgDgBIgCABg");
	this.shape_72.setTransform(288.8,40.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AADAHIgDgHIgCADIAAAEIgDAAIAAgNIADAAIAAAGIAEgGIAEAAIgGAFIAGAIg");
	this.shape_73.setTransform(287.5,40.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgEAGQgBgDAAgDIAAgCIABgCIACgBIACgBQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQACACgBACQABADgCADQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgCgBgAgCgCIgBACIABAEIACABQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAIABgEIgBgCIgDgBIgCABg");
	this.shape_74.setTransform(286,40.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AADAHIgCgDIgBgCIgBgBIgBAAIAAAAIAAAGIgDAAIAAgNIAFAAIADABIACABIAAACIgBACIgDABIACABIACACIABADgAgCAAIABAAIACAAIABgBIAAgBIAAgBIgCAAIgBAAIgBAAg");
	this.shape_75.setTransform(284.7,40.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgHAAIAAADIAHAAIAAABIgHAAIAAADIAHAAIAAADg");
	this.shape_76.setTransform(283.3,40.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAEAHIAAgKIgDAKIgCAAIgCgKIAAAKIgDAAIAAgNIAFAAIABAIIACgIIAFAAIAAANg");
	this.shape_77.setTransform(281.9,40.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_78.setTransform(279.9,40.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AADAHIgFgIIAAAIIgCAAIAAgNIACAAIAFAIIAAgIIACAAIAAANg");
	this.shape_79.setTransform(278.5,40.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgEAHIAAgNIAJAAIAAADIgGAAIAAADIAGAAIAAABIgGAAIAAADIAGAAIAAADg");
	this.shape_80.setTransform(277.3,40.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AADAHIgCgDIgBgCIAAgBIgCAAIAAAAIAAAGIgDAAIAAgNIAFAAIADABIACABIAAACIgBACIgDABIACABIACACIABADgAgCAAIACAAIABAAIABgBIAAgBIAAgBIgCAAIAAAAIgCAAg");
	this.shape_81.setTransform(276,40.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAEAHIgBgDIgFAAIgBADIgDAAIAGgNIABAAIAGANgAACABIgCgEIgBAEIADAAg");
	this.shape_82.setTransform(274.6,40.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AACAHIgCgHIgCADIAAAEIgDAAIAAgNIADAAIAAAGIAEgGIAEAAIgGAFIAGAIg");
	this.shape_83.setTransform(273.3,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(121));

	// peringatan
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgCAMIAAgHIAFAAIAAAHgAgCgFIAAgGIAFAAIAAAGg");
	this.shape_84.setTransform(305.4,32.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAGAQIgMgUIAAAUIgGAAIAAgfIAGAAIAMAUIAAgUIAHAAIAAAfg");
	this.shape_85.setTransform(303.1,32.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAJAQIgCgHIgNAAIgDAHIgHAAIANgfIAGAAIAOAfgAAEADIgEgLIgEALIAIAAg");
	this.shape_86.setTransform(299.8,32.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgCAQIAAgaIgKAAIAAgFIAZAAIAAAFIgJAAIAAAag");
	this.shape_87.setTransform(296.7,32.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAJAQIgCgHIgNAAIgCAHIgIAAIANgfIAGAAIAOAfgAAEADIgEgLIgEALIAIAAg");
	this.shape_88.setTransform(293.7,32.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgGAPQgEgCgCgEQgCgEAAgFQAAgEACgEQACgEAEgCQADgCAEAAQAGAAAEADQADACABAFIgGABQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgDAAgDACQgCADAAAFQAAAFACADQADADADAAIAEgBIAEgCIAAgEIgIAAIAAgEIAOAAIAAAMIgGADQgDACgEAAQgFAAgDgCg");
	this.shape_89.setTransform(290.2,32.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAGAQIgMgUIAAAUIgGAAIAAgfIAGAAIAMAUIAAgUIAHAAIAAAfg");
	this.shape_90.setTransform(286.9,32.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgCAQIAAgfIAFAAIAAAfg");
	this.shape_91.setTransform(284.6,32.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAHAQIgFgHIgCgFIgDgBIgDAAIgBAAIAAANIgHAAIAAgfIAOAAIAHAAIAEAEQABACAAADQAAADgCADQgDABgEABIAEADIAEAFIADAGgAgHgCIAFAAIAEAAIACgBIABgDIgBgCQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgEAAIgFAAg");
	this.shape_92.setTransform(282.5,32.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLAQIAAgfIAXAAIAAAFIgRAAIAAAHIAQAAIAAAFIgQAAIAAAJIARAAIAAAFg");
	this.shape_93.setTransform(279.2,32.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgMAQIAAgfIALAAIAHAAQACABADACQACADAAAEIgBAFIgEACQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgGABIgEAAIAAAMgAgFgBIADAAIAFAAIACgCIABgCIgBgDIgDgCIgEAAIgDAAg");
	this.shape_94.setTransform(276.2,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]}).wait(121));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkYCLIAAkWIIxAAIAAEWg");
	mask.setTransform(291.1,15);

	// foto
	this.instance = new lib.ghw();
	this.instance.parent = this;
	this.instance.setTransform(263,1,0.36,0.36);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121));

	// BG
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(3,1,1).p("AZHEMMgyNAAAIAAoX");
	this.shape_95.setTransform(291.1,25.9,0.186,1.265);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(0.5,1,1).p("A5GkLMAyNAAAIAAIX");
	this.shape_96.setTransform(291.1,25.9,0.186,1.265);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("A5GEMIAAoXMAyNAAAIAAIXg");
	this.shape_97.setTransform(291.1,25.9,0.186,1.265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]}).wait(121));

	// CURSOR
	this.instance_1 = new lib.CURSOR_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(279.2,92.2,0.775,0.775,0,0,0,0.2,0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({regX:0.4,regY:0.3,x:241.3,y:34.6},9).wait(12).to({startPosition:0},0).wait(3).to({regX:0.5,regY:0.4,scaleX:0.64,scaleY:0.64},0).wait(4).to({regX:0.4,regY:0.3,scaleX:0.78,scaleY:0.78},0).wait(3).to({regX:0.5,regY:0.4,scaleX:0.67,scaleY:0.67},0).wait(3).to({regX:0.4,regY:0.3,scaleX:0.78,scaleY:0.78},0).wait(13));

	// CTA
	this.instance_2 = new lib.CTA_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(191.4,23.7,0.83,0.83,0,0,0,0.4,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({alpha:1},7).wait(14).to({startPosition:0},0).wait(3).to({regX:0.5,scaleX:0.78,scaleY:0.78,y:23.6},0).wait(4).to({regX:0.4,scaleX:0.83,scaleY:0.83,y:23.7},0).wait(3).to({regX:0.5,scaleX:0.8,scaleY:0.8,y:23.6},0).wait(3).to({regX:0.4,scaleX:0.83,scaleY:0.83,y:23.7},0).wait(13));

	// FILTER
	this.instance_3 = new lib.FILTER2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.1,25.6,0.51,0.51,0,0,0,0,0.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({regY:0.2,scaleX:0.75,scaleY:0.75,alpha:1},6).wait(41));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_74 = new cjs.Graphics().p("Ah8CsIAAjqIEuAAIAADqg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_1_graphics_74,x:17.8,y:17.2}).wait(47));

	// Layer 5
	this.instance_4 = new lib.MB2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(20,28.3,0.353,0.353,0,0,0,0.6,0.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({alpha:1},6).wait(41));

	// BG2
	this.instance_5 = new lib.BG2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(169.7,117);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({alpha:1},6).wait(41));

	// yudecide
	this.instance_6 = new lib.yudecide("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(235.5,23.6,0.325,0.325,0,0,0,0.5,0);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.86,scaleY:0.86,y:23.7,alpha:1},7).wait(1).to({regX:0.2,regY:0,scaleX:0.69,scaleY:0.69,y:23.6},0).wait(69));

	// COPY
	this.instance_7 = new lib.COPY("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(104.9,31.6,0.886,0.886,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).to({alpha:1},8).wait(91));

	// FILTERBIG
	this.instance_8 = new lib.FILTER_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(167.4,30.4,1.231,1.231);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:0.47,scaleY:0.47,x:83.6,y:18.5,alpha:0},12).wait(99));

	// Layer 1
	this.instance_9 = new lib.MBlight();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-11,-12,0.243,0.243);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).wait(99));

	// Layer 3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AlGBrIAAjVIKNAAIAADVg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AlGBrIAAjVIKNAAIAADVg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AlGBrIAAjVIKNAAIAADVg");
	var mask_2_graphics_11 = new cjs.Graphics().p("Ak/BpIAAjRIJ/AAIAADRg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Ak4BnIAAjNIJxAAIAADNg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AkxBlIAAjJIJjAAIAADJg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AkqBjIAAjFIJVAAIAADFg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AkjBgIAAi/IJHAAIAAC/g");
	var mask_2_graphics_16 = new cjs.Graphics().p("AkcBeIAAi7II5AAIAAC7g");
	var mask_2_graphics_17 = new cjs.Graphics().p("AkVBcIAAi3IIrAAIAAC3g");
	var mask_2_graphics_18 = new cjs.Graphics().p("AkOBaIAAizIIdAAIAACzg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AkHBYIAAivIIPAAIAACvg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AkABWIAAirIIBAAIAACrg");
	var mask_2_graphics_21 = new cjs.Graphics().p("Aj5BUIAAinIHzAAIAACng");
	var mask_2_graphics_22 = new cjs.Graphics().p("AjzBRIAAihIHnAAIAAChg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:35.7,y:58.8}).wait(9).to({graphics:mask_2_graphics_9,x:35.7,y:58.8}).wait(1).to({graphics:mask_2_graphics_10,x:35.7,y:58.8}).wait(1).to({graphics:mask_2_graphics_11,x:34.8,y:57.4}).wait(1).to({graphics:mask_2_graphics_12,x:33.9,y:56.1}).wait(1).to({graphics:mask_2_graphics_13,x:33,y:54.7}).wait(1).to({graphics:mask_2_graphics_14,x:32.1,y:53.3}).wait(1).to({graphics:mask_2_graphics_15,x:31.2,y:51.9}).wait(1).to({graphics:mask_2_graphics_16,x:30.3,y:50.5}).wait(1).to({graphics:mask_2_graphics_17,x:29.4,y:49.1}).wait(1).to({graphics:mask_2_graphics_18,x:28.5,y:47.7}).wait(1).to({graphics:mask_2_graphics_19,x:27.7,y:46.4}).wait(1).to({graphics:mask_2_graphics_20,x:26.8,y:45}).wait(1).to({graphics:mask_2_graphics_21,x:25.9,y:43.6}).wait(1).to({graphics:mask_2_graphics_22,x:24.9,y:42.2}).wait(99));

	// LOGOMB copy
	this.instance_10 = new lib.LOGOMB_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(34.7,35.7,0.32,0.32,0,0,0,1.7,1.2);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({regX:2.5,regY:1.4,scaleX:0.24,scaleY:0.24,x:25.8,y:25.5},12).wait(99));

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AldD0IAAncIK7AAIAAHcg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AldD0IAAncIK7AAIAAHcg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AldDuIAAnbIK7AAIAAHbg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AldDmIAAnLIK7AAIAAHLg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AldDdIAAm5IK7AAIAAG5g");
	var mask_3_graphics_13 = new cjs.Graphics().p("AldDUIAAmnIK7AAIAAGng");
	var mask_3_graphics_14 = new cjs.Graphics().p("AldDLIAAmVIK7AAIAAGVg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AldDQIAAmfIK7AAIAAGfg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AldDUIAAmnIK7AAIAAGng");
	var mask_3_graphics_17 = new cjs.Graphics().p("AldDYIAAmvIK7AAIAAGvg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AldDdIAAm5IK7AAIAAG5g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AldDhIAAnBIK7AAIAAHBg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AldDmIAAnLIK7AAIAAHLg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AldDqIAAnTIK7AAIAAHTg");
	var mask_3_graphics_22 = new cjs.Graphics().p("Aj3CmIAAlLIHvAAIAAFLg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:34.3,y:24.5}).wait(9).to({graphics:mask_3_graphics_9,x:34.3,y:24.5}).wait(1).to({graphics:mask_3_graphics_10,x:34.2,y:25}).wait(1).to({graphics:mask_3_graphics_11,x:31.8,y:24.2}).wait(1).to({graphics:mask_3_graphics_12,x:29.4,y:23.5}).wait(1).to({graphics:mask_3_graphics_13,x:27,y:22.8}).wait(1).to({graphics:mask_3_graphics_14,x:24.6,y:22}).wait(1).to({graphics:mask_3_graphics_15,x:24.5,y:20.2}).wait(1).to({graphics:mask_3_graphics_16,x:24.4,y:18.5}).wait(1).to({graphics:mask_3_graphics_17,x:24.4,y:16.8}).wait(1).to({graphics:mask_3_graphics_18,x:22,y:15.4}).wait(1).to({graphics:mask_3_graphics_19,x:19.7,y:14.1}).wait(1).to({graphics:mask_3_graphics_20,x:16.7,y:13.3}).wait(1).to({graphics:mask_3_graphics_21,x:16.3,y:11.8}).wait(1).to({graphics:mask_3_graphics_22,x:24.9,y:17.5}).wait(99));

	// LOGOMB
	this.instance_11 = new lib.LOGOMB_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(35.2,35.7,0.32,0.32,0,0,0,1.7,1.2);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({regX:2.5,regY:1.4,scaleX:0.24,scaleY:0.24,x:25.8,y:26},12).wait(99));

	// SHADOWred
	this.instance_12 = new lib.SHADOWRED_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(33.2,25.3,0.258,0.258,0,0,0,0.4,0.6);
	this.instance_12.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},2).to({alpha:0.352},4).to({startPosition:0},3).to({startPosition:0},1).to({regX:-0.2,regY:0.8,scaleX:0.18,scaleY:0.18,x:-64,y:29.2,alpha:0},12).wait(99));

	// BG
	this.instance_13 = new lib.BG_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,291.3,1.539,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({startPosition:0},0).to({alpha:0},15).wait(97));

	// ORG2
	this.instance_14 = new lib.ORG2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(207.5,28.8,0.214,0.214,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:0.5,x:205.7,y:28.9},120).wait(1));

	// TANGAN
	this.instance_15 = new lib.Tween1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(197.3,23.5,0.176,0.176,0,0,0,0.3,0.6);

	this.instance_16 = new lib.Tween2("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(195.4,22.2,0.176,0.176,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},120).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true,regX:0.6,x:195.4,y:22.2},120).wait(1));

	// MEJAMAKAN
	this.instance_17 = new lib.MEJAMAKAN("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(190.5,36.2,0.279,0.279,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:195.6,y:36.4},120).wait(1));

	// Layer 5
	this.instance_18 = new lib.pohin("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(143.7,31.9,0.539,0.539,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:149.2},120).wait(1));

	// PARTITION2
	this.instance_19 = new lib.PARTITION2("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(131.9,27,0.539,0.539,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:0.2,x:137.6},120).wait(1));

	// TALENT1
	this.instance_20 = new lib.ORG1("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(165.7,34.3,0.279,0.279,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:170.6},120).wait(1));

	// RUMAH copy
	this.instance_21 = new lib.RUMAH("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(243.3,15.5,0.492,0.492,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regX:0.2,x:247.2},120).wait(1));

	// BEGRON copy
	this.instance_22 = new lib.BEGRON("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(180.2,2.3,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({x:194.9},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.2,-203.1,485.3,819.5);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/bgrumput320.jpg", id:"bgrumput320"},
		{src:"images/copy320.png", id:"copy320"},
		{src:"images/CTA.png", id:"CTA"},
		{src:"images/CURSOR.png", id:"CURSOR"},
		{src:"images/FILTER.png", id:"FILTER"},
		{src:"images/ghw.jpg", id:"ghw"},
		{src:"images/LOGOMB.png", id:"LOGOMB"},
		{src:"images/MBlight.png", id:"MBlight"},
		{src:"images/mejatekomakanan320.png", id:"mejatekomakanan320"},
		{src:"images/model1320.png", id:"model1320"},
		{src:"images/model2320.png", id:"model2320"},
		{src:"images/partition728.png", id:"partition728"},
		{src:"images/pohon.png", id:"pohon"},
		{src:"images/rumah320.png", id:"rumah320"},
		{src:"images/SHADOWRED.png", id:"SHADOWRED"},
		{src:"images/tangangelas320.png", id:"tangangelas320"},
		{src:"images/YUDECIDE.png", id:"YUDECIDE"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;