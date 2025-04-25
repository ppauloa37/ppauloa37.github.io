//draw functions
console.log("Esta a usar Thousand.js em portugues")

/**
 * @type {{
*   canvas: HTMLCanvasElement | null,
*   painttype: any,
*   canvasdef: (canvastype: string) => void
* }}
*/

var th = {
    canvas: null,
    p: null,
    hour: null,
    color: null,
    
    canvasdef: function(canvastype) {
        if (canvastype) {
            this.canvas = document.getElementById(canvastype)
                if (!this.canvas) {
                    console.error("Objeto não encontrado");
                }
        } else {
            console.error("ID não fornecido");
        }
    },
    ctx: function(ctxtype) {
        if (this.canvas) {
            this.p = this.canvas.getContext(ctxtype);
        } 
        if (!this.p) {
            console.error("Contexto não encontrado");
        } 
    },
    rect: function(x,y,w,h) {
        this.p.fillStyle = this.color;
        this.p.fillRect(x,y,w,h);
    },
    getHour: function() {
        hour = new Date.getHour();
    },
    useThousandtype: function(vari,number) {
        vari = number + "thousandtext";
    },
    text: function(textcontent,x,y,font,px) {
        this.p.fillStyle = this.color;
        this.p.font = px + " " + font;
        this.p.fillText(textcontent,x,y);
        console.log("esta usando texto");
    },
    fill: function(r,g,b) {
    this.color = "rgb(" + r + "," + g + "," + b + ");";
    }
};
