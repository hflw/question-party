dojo.provide("dojoc.sandbox.rounded.Rounded");

dojo.require("dijit._Widget");
dojo.require("dijit._Templated");

dojo.declare("dojoc.sandbox.rounded.Rounded",
	[dijit._Widget, dijit._Templated], 
	{
	
	templatePath: dojo.moduleUrl("dojoc.sandbox.rounded","templates/Rounded.html"),
	
	bgImg: "",		// standard background image (png)
	bgImgAlt: "",	// background image for ie6
	
	postCreate: function() {
		dojo.style(this.contentNode, "height", dojo.style(this.outerNode, "height")-10+'px'); // TODO: Calculate correct height
		
		var alt = (this.bgImgAlt.length && dojo.isIE < 7);
		dojo.forEach(["roundedContent","roundedTop","roundedBottom","roundedBottomDiv"],
			function(elName){
				dojo.style(this[elName],"backgroundImage", "url(" + (alt ? this.bgImgAlt : this.bgImg)  + ")");
			},
		this);
	}
});