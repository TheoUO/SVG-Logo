class Shape{
    
        constructor(color, shape){
            this.color=''
            this.shape=''
        }
    }
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="150" height="100%" width="100%" fill="${this.color}">
            <circle cx="10" cy="90" r="80" fill="${this.shape}" />
            <polygon points="250,60 100,400 400,400"  fill="${this.color}" />`
        }
    }
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shape}">
            <polygon points="250,60 100,400 400,400"  fill="${this.color}" />`
        }
    }
    class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.shape}">
            <polygon points="250,60 100,400 400,400"  fill="${this.color}" />`
        }
    }


module.exports = {Circle, Square}

